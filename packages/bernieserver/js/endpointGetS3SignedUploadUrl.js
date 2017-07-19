/*
 * Respond to GET requests to /get_normalized_image_info.
 * changes size of image if it is too big
 * also rotates exif
 * responds with a new image url
*/
import aws from 'aws-sdk';
import ensureLeadingSlash from '@defualt/ensure-leading-slash';
import respondWithJson from './respondWithJson';

export default ({
  app,
  accessKeyId,
  secretAccessKey,
  Bucket,
  urlPattern
}) => {
  // Generates a unique aws url that the client uploads an image to.  Neat.
  app.get(urlPattern, function(req, res){
    aws.config.update({accessKeyId: accessKeyId , secretAccessKey: secretAccessKey });
    var s3 = new aws.S3(); 
    var filename = req.query.file_name;
    filename = filename.split('.');
    var secondToLast = filename[filename.length - 2];
    filename[filename.length - 2] = secondToLast + Date.now()+'_temp';
    filename = filename.join('.');
    var s3_params = { 
        Bucket: Bucket, 
        Key: filename, 
        Expires: 60, 
        ContentType: req.query.file_type, 
        ACL: 'public-read'
    }; 

    s3.getSignedUrl('putObject', s3_params, function(err, data){ 
      respondWithJson({
        res:res,
        signed_request: err || data,
        url: 'https://'+Bucket+'.s3.amazonaws.com/'+filename 
      });
    });
  });
};