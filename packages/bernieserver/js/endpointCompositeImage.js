var aws = require('aws-sdk');
var generateUrlRegexNamespace = require('./generateUrlRegexNamespace');
var getAllS3Objects = require('./getAllS3Objects');
var getS3ObjectData = require('./getS3ObjectData')();
var createCompositeBuffer = require('./createCompositeBuffer');
var parseUrl = require('url').parse;

var parseClientCompositeImageUrl = function(url){
  var pathnameSplit = parseUrl(url).pathname.split('/').splice(2,2);
  var compositeS3Key = 'consolidated/' + pathnameSplit.join('/');
  var templateFilename = pathnameSplit[0];
  var userImageAndScalePos = pathnameSplit[1];
  userImageAndScalePos = userImageAndScalePos.split('_');
  var userImageFilename = userImageAndScalePos;
  var scalePos = userImageFilename.splice(-4,4);
  scalePos[3] = scalePos[3].split('.');
  scalePos[3].pop();
  scalePos[3] = scalePos[3].join('.');
  var overlaySettings = {
    width: +scalePos[0] == scalePos[0] ? +scalePos[0] : 100,
    height: +scalePos[1] == scalePos[1] ? +scalePos[1] : 100,
    left: +scalePos[2] == scalePos[2]? +scalePos[2] : 0,
    top: +scalePos[3] == scalePos[3]? +scalePos[3] : 0,
  };
  userImageFilename = userImageFilename.join('_');
  return {
    userImageFilename: userImageFilename,
    templateFilename: templateFilename,
    overlaySettings: overlaySettings,
    compositeS3Key:compositeS3Key
  };
};
module.exports = function(c){
  c.app.get(generateUrlRegexNamespace('image\/'), function(req, res) {
    var compositeImageInstructions = parseClientCompositeImageUrl(req.url);
    var s = compositeImageInstructions;
    getS3ObjectData({
      Key:s.compositeS3Key,
      resolveNullOn404:true,
      accessKeyId:c.accessKeyId,
      secretAccessKey:c.secretAccessKey,
      Bucket: c.Bucket
    }).then(function(data){
      if(!data){
        console.log('COMPOSITE IMAGE DOES NOT EXIST');
        
        getAllS3Objects({
          dict:{
            template:{
              Key:'decorations/' + s.templateFilename + '.png'
            },
            userPhoto:{
              Key:'selfies/' + s.userImageFilename + '.png',
              retrySearchCriteria:{
                Prefix:'res/dthvwwocq/image/upload/bernie/'+s.userImageFilename,
                Bucket: 'cloudinary-bernie-backup'
              }
            }
          },
          Bucket:c.Bucket,
          accessKeyId: c.accessKeyId,
          secretAccessKey: c.secretAccessKey
        })
        .then(createCompositeBuffer.bind(null,s.overlaySettings))
        .then(function(bufferData){
          res.setHeader('content-type', 'image/jpeg');
          res.write(bufferData.Body,'binary');
          res.end(null, 'binary');

          aws.config.update({accessKeyId: c.accessKeyId , secretAccessKey: c.secretAccessKey });
          var s3 = new aws.S3(); 
          s3.putObject(
            {
                Bucket: c.Bucket,
                Key: s.compositeS3Key,
                Body: bufferData.Body,
                ContentType: 'image/jpeg',
                ACL: 'public-read'
            },
            function(err, data) {
                if (err) {
                    // Failed saving to S3
                    log.error('Failed saving to S3', err);
                }
            }
          );
        });
      } else {
        console.log('COMPOSITE IMAGE DOES IN FACT EXIST !!!!');
        res.setHeader('content-type', data.ContentType);
        res.write(data.Body,'binary');
        res.end(null, 'binary');
      }
    });
  });
};