var jD = require('jquery-deferred');
var aws = require('aws-sdk');
var prepareModuleWithDefaults = require('./prepareModuleWithDefaults');



module.exports = prepareModuleWithDefaults(function(s){
  var dfd = jD.Deferred();
  s = Object.assign({},s);
  aws.config.update({accessKeyId: s.accessKeyId , secretAccessKey: s.secretAccessKey });
  var s3 = new aws.S3();
  
  //toPass.uploadRequestSettings.originalFilename
  if(s.Key){
    s3.deleteObjects(
      {
        Bucket: s.Bucket,
        Delete: {
            Objects: [
                 { Key: s.Key }
            ]
        }
      }, function(err, data) {
          if (err){
            dfd.reject(err);
          } else {
            dfd.resolve(data);
          }
      }
    );
  } else {
    console.log('NOTHING TO DELETE');
    dfd.resolve({msg:'Missing key, nothing deleted.'});
  }
  return dfd.promise();
});

