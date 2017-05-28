var jD = require('jquery-deferred');
var aws = require('aws-sdk');
module.exports = function(c){
  return function(s){
    s = Object.assign({},c,s);
    var dfd = jD.Deferred();
    aws.config.update({accessKeyId: s.accessKeyId , secretAccessKey: s.secretAccessKey });
    var s3 = new aws.S3(); 
    s3.getObject(
      {
          Bucket: s.Bucket,
          Key: s.Key
      },
      function(err, data) {
        var output;
        if(err && err.statusCode === 404 && s.resolveNullOn404){
          output = s.outputParser ? s.outputParser(null) : null;
          dfd.resolve(output);
        } else if (err){
          dfd.reject(err);
        } else {
          output = s.outputParser ? s.outputParser(data) : data;
          dfd.resolve(output);
        }
      }
    );
    return dfd.promise();
  };
};