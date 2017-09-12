/* eslint-disable */
import aws from 'aws-sdk';
import path from 'path';
import {parse as parseUrl} from 'url';
import ensureLeadingSlash from '@defualt/ensure-leading-slash';
import getAllS3Objects from './getAllS3Objects';
import getS3ObjectData from './getS3ObjectData';
import createCompositeBuffer from './createCompositeBuffer';
import respondWithJson from './respondWithJson';

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
  console.log('overlaySettings',overlaySettings);
  userImageFilename = userImageFilename.join('_');
  return {
    userImageFilename: userImageFilename,
    templateFilename: templateFilename,
    overlaySettings: overlaySettings,
    compositeS3Key:compositeS3Key
  };
};
export default ({app,accessKeyId,secretAccessKey,Bucket,urlPattern}) => {
  app.get(urlPattern, function(req, res) {
    console.log('EXTNSSION', )
    var extension = path.extname(req.url);
    var fileTypes = {
      '.json': 'png',
      '.png': 'png',
      '.jpg': 'jpeg',
      '.jpeg': 'jpeg'
    };
    var fileType = fileTypes[extension] ? fileTypes[extension] : 'jpeg';
    console.log('fileType',fileType);
    var compositeImageInstructions = parseClientCompositeImageUrl(req.url);
    var s = compositeImageInstructions;
    console.log('s.compositeS3Key',s.compositeS3Key);
    getS3ObjectData({
      Key:s.compositeS3Key,
      resolveNullOn404:true,
      accessKeyId:accessKeyId,
      secretAccessKey:secretAccessKey,
      Bucket: Bucket
    }).then(function(data){
      if(!data){
        console.log('COMPOSITE IMAGE DOES NOT EXIST!');

        var templateCreateMode = !s.templateFilename || s.templateFilename === 'undefined';

        const getAllS3ObjectsSettingsDict = {
          userPhoto:{
              Key:'selfies/' + s.userImageFilename + '.png',
              retrySearchCriteria:{
                Prefix:'res/dthvwwocq/image/upload/bernie/'+s.userImageFilename,
                Bucket: 'cloudinary-bernie-backup'
              }
            }
        };
        if (!templateCreateMode) {
          getAllS3ObjectsSettingsDict.template = {
            Key:'decorations/' + s.templateFilename + '.png'
          };
        }
        
        getAllS3Objects({
          dict:getAllS3ObjectsSettingsDict,
          Bucket:Bucket,
          accessKeyId: accessKeyId,
          secretAccessKey: secretAccessKey
        })
        .then(createCompositeBuffer.bind(null,s.overlaySettings))
        .then(function(bufferData){
          if (templateCreateMode) {

          } else {
            res.setHeader('content-type', 'image/'+fileType);
            res.write(bufferData.Body,'binary');
            res.end(null, 'binary');
          }

          aws.config.update({accessKeyId: accessKeyId , secretAccessKey: secretAccessKey });
          var s3 = new aws.S3(); 
          console.log('s.compositeS3Key',s.compositeS3Key);
          console.log('fileType2',fileType);
          var Key = s.compositeS3Key;
          if (templateCreateMode) {
            Key = 'decorations/' + s.userImageFilename + '.png'
          }
          console.log('Key',Key);
          
          s3.putObject(
            {
                Bucket: Bucket,
                Key: Key,
                Body: bufferData.Body,
                ContentType: 'image/'+fileType,
                ACL: 'public-read'
            },
            function(err, data) {
                if (err) {
                    // Failed saving to S3
                    log.error('Failed saving to S3', err);
                } else {
                  if (templateCreateMode) {
                    console.log('RESPONDING TO JSON MAYBE')
                    respondWithJson({
                      Key:Key,
                      res:res,
                      isSuccess:true
                    });
                  }
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