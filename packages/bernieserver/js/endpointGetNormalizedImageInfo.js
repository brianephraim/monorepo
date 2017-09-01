/*
 * Respond to GET requests to /get_normalized_image_info.
 * changes size of image if it is too big
 * also rotates exif
 * responds with a new image url
*/
import aws from 'aws-sdk';
import jD from 'jquery-deferred';
import { x as mongooseStuff } from './mongooseStuff';

export default ({accessKeyId,secretAccessKey,Bucket,app,userTemplates, urlPattern}) => {
  var urlToFileData = require('./urlToFileData');
  var uploadToS3 = require('./uploadToS3')({
    prepareModuleWithDefaults: true,
    accessKeyId:accessKeyId,
    secretAccessKey:secretAccessKey,
    Bucket:Bucket
  });

  var parseUrl = require('url').parse;

  var normalizeImageFileData = require('./normalizeImageFileData')({
    prepareModuleWithDefaults: true,
    parseSettings: function(s){
      var filename;
      var originalFilename;
      var url;
      if(s.originalUrl.indexOf('amazonaws.com/') !== -1){
        var host = s.originalUrl.split('amazonaws.com/');
        host = host[0] + 'amazonaws.com/';
        filename = s.originalUrl.split('amazonaws.com/');
        originalFilename = filename[filename.length - 1];
        filename = originalFilename.replace('_temp','');
        filename = filename.split('.');
        filename = filename[filename.length - 2];
        filename = filename + '.png';
        url = host + filename;
      } else {
        filename = parseUrl(s.originalUrl).pathname.split('/');
        filename = filename[filename.length - 1];
        filename = filename.split('.');
        filename.pop();
        filename = filename.join('.');
        filename = filename + Date.now() + '.png';
        filename = 'selfies/' + filename;
        originalFilename = null;
        url = '//s3-us-west-1.amazonaws.com/bernieapp/' + filename;
      }
      s.filename = filename;
      s.url = url;
      s.originalFilename = originalFilename;
      return s;
    }
  });
  var deep = require('deep-get-set');
  var deleteS3Object = require('./deleteS3Object')({
    prepareModuleWithDefaults: true,
    parseSettings: function(s){
      s.Key = deep(s,'originalFilename');
      return s;
    },
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    Bucket: Bucket
  });

  app.get(urlPattern, function(req, res){  
    var originalUrl = decodeURIComponent(req.query.image_url);
    var mustBeSquare = req.query.must_be_square === 'true';

    var respondWithJsonSuccess = require('./respondWithJson')({
      prepareModuleWithDefaults: true,
      res:res,
      isSuccess:true
    });
    var respondWithJsonFail = require('./respondWithJson')({
      prepareModuleWithDefaults: true,
      res:res,
      isSuccess:false
    });
    console.log('originalUrl',originalUrl);
    var promise = urlToFileData(originalUrl).then(normalizeImageFileData);
    var promises = [
      promise,
      promise.then(deleteS3Object),
      promise.then(function(fileData){
        if(mustBeSquare && (Math.abs(fileData.width - fileData.height) > 1)){
          var dfd = jD.Deferred();
          dfd.resolve({
            failingSquare:true
          });
          return dfd.promise();
        } else {          
          var uploadToS3Promise = this.then(uploadToS3);
          console.log('uploadToS3');
          uploadToS3Promise.then(function(){
            if(mustBeSquare){
              var userTemplateModel = {
                created: new Date(),
                customTemplate: fileData.Key.replace('selfies/','').replace('.png',''),
                templateHeight: fileData.height,
                templateWidth: fileData.width
              };
              userTemplates.push(userTemplateModel);
              mongooseStuff.MakeUserTemplate(userTemplateModel);
            }
          });
          return uploadToS3Promise;
        }
      }).then(respondWithJsonSuccess)

    ];
    jD.when.apply(null,promises).then(null,function(err){
      respondWithJsonFail({error:err})
    });
  });
};