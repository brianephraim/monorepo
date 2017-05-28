var jD = require('jquery-deferred');
var aws = require('aws-sdk');
var prepareModuleWithDefaults = require('./prepareModuleWithDefaults');
module.exports = prepareModuleWithDefaults(function(s){
  s = Object.assign({},s);
  if(!s.ContentType){
    var mime = require('mime-types');
    var extension = s.Key.split('.').pop();
    s.ContentType = mime.lookup(extension);
  }
  var dfd = jD.Deferred();

  aws.config.update({accessKeyId: s.accessKeyId , secretAccessKey: s.secretAccessKey });
  var s3 = new aws.S3(); 
  var s3Params = {
      Bucket: s.Bucket,
      Key: s.Key,
      Body: s.Body,
      ContentType: s.ContentType,
      ACL: 'public-read'
  };

  s3.putObject(
    s3Params,
    function(err, data) {
        if (err) {
          dfd.reject(err);
        } else {
          s.uploadResponse = data;
          dfd.resolve(s);
        }
    }
  );
  return dfd.promise();
});