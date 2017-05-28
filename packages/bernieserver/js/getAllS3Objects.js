var aws = require('aws-sdk');
var jD = require('jquery-deferred');
var getS3ObjectData = require('./getS3ObjectData')();
module.exports = function(s){
  var dfdMain = jD.Deferred();
  var promises = [];
  aws.config.update({accessKeyId: s.accessKeyId , secretAccessKey: s.secretAccessKey });
  var s3 = new aws.S3();
  for(var entryName in s.dict){
    var entry = s.dict[entryName];
    var filename = entry.Key;
    (function(entryName,filename,entry){
      var entryDfd = jD.Deferred();
      getS3ObjectData({
        Key:filename,
        outputParser:function(data){
          return {
            entryName:entryName,
            filename:filename,
            data:data,
          };
        },
        accessKeyId:s.accessKeyId,
        secretAccessKey:s.secretAccessKey,
        Bucket: s.Bucket
      })
      .then(entryDfd.resolve)
      .fail(function(originalErr){
        if(entry.retrySearchCriteria){
          var retryBucket = entry.retrySearchCriteria.Bucket ? entry.retrySearchCriteria.Bucket : s.Bucket
          var aws = require('aws-sdk');
          aws.config.update({accessKeyId: s.accessKeyId , secretAccessKey: s.secretAccessKey });
          var s3 = new aws.S3(); 
          var params = {
            Bucket: retryBucket,
            Prefix: entry.retrySearchCriteria.Prefix
          };
          s3.listObjectsV2(params, function(err, data) {
            if(err){
              entryDfd.reject(err);
            } else {
              if(data.Contents && data.Contents[0]){
                getS3ObjectData({
                  Key:data.Contents[0].Key,
                  outputParser:function(data){
                    return {
                      entryName:entryName,
                      filename:filename,
                      data:data,
                    };
                  },
                  accessKeyId:s.accessKeyId,
                  secretAccessKey:s.secretAccessKey,
                  Bucket:retryBucket
                })
                .then(function(){
                  var args = arguments;
                  var normalizeImageFileData = require('./normalizeImageFileData')({
                    prepareModuleWithDefaults: true,
                    filename: filename,
                    parseSettings: function(s){
                      s.Body = s.data.Body;
                      return s;
                    }
                  });
                  var uploadToS3 = require('./uploadToS3')({
                    prepareModuleWithDefaults: true,
                    accessKeyId:s.accessKeyId,
                    secretAccessKey:s.secretAccessKey,
                    Bucket:s.Bucket,
                  });
                  this.then(normalizeImageFileData).then(uploadToS3).always(function(){
                    entryDfd.resolve.apply(null,args);
                  });
                  return this;
                })
                .fail(entryDfd.reject);
              } else {
                entryDfd.reject(originalErr);
              }
            }
          });
        } else {
          entryDfd.reject(originalErr);
        }
      });
      promises.push(entryDfd.promise());
    })(entryName,filename,entry);
  }

  jD.when.apply(null,promises).done(function ( templateFetchResponse, userPhotoFetchResponse) {
    var args = Array.prototype.slice.call(arguments);
    var output = {};
    for(var i=0,l=args.length;i<l;i++){
      var entryName = args[i].entryName;
      delete args[i].Key;
      output[entryName] = args[i];
    }
    dfdMain.resolve(output);
  }).then(null,function(err){
    dfdMain.reject(err);
  });
  return dfdMain.promise();
};