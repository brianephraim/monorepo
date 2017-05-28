/*
 * Respond to GET requests to /get_normalized_image_info.
 * changes size of image if it is too big
 * also rotates exif
 * responds with a new image url
*/
var aws = require('aws-sdk');
var respondWithJson = require('./respondWithJson');
module.exports = function(c){
  // Generates a unique aws url that the client uploads an image to.  Neat.
  c.app.get('/get_s3_signed_upload_url', function(req, res){
    aws.config.update({accessKeyId: c.accessKeyId , secretAccessKey: c.secretAccessKey });
    var s3 = new aws.S3(); 
    var filename = req.query.file_name;
    filename = filename.split('.');
    var secondToLast = filename[filename.length - 2];
    filename[filename.length - 2] = secondToLast + Date.now()+'_temp';
    filename = filename.join('.');
    var s3_params = { 
        Bucket: c.Bucket, 
        Key: filename, 
        Expires: 60, 
        ContentType: req.query.file_type, 
        ACL: 'public-read'
    }; 

    s3.getSignedUrl('putObject', s3_params, function(err, data){ 
      respondWithJson({
        res:res,
        signed_request: err || data,
        url: 'https://'+c.Bucket+'.s3.amazonaws.com/'+filename 
      });
    });
  });
};