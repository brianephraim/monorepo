/* eslint-disable */
var sharp = require('sharp');
var jD = require('jquery-deferred');
var calcOverlayAndTemplateProcessingSettings = require('./calcOverlayAndTemplateProcessingSettings');

// Normally, this will meld a foreground and a background image together,
// and crop them to a square, as a new image jpeg.
// But when templateCroppingMode is true,
// only the foreground image is used,
// and it alone gets cropped as a new image png.
module.exports = function(overlaySettings,responses){
  var dfd = jD.Deferred();
  var templateFetchResponse = responses.template;
  var templateCroppingMode = !templateFetchResponse;
  var userPhotoFetchResponse = responses.userPhoto;
  var args = Array.prototype.slice.call(arguments);  
  var userPhoto = sharp(userPhotoFetchResponse.data.Body);
  var bgColor = templateCroppingMode ? {r: 0, g: 0, b: 0, alpha: 0} : 'white';
  var fileType = templateCroppingMode ? 'png' : 'jpeg';
  userPhoto.metadata().then(function(metadata) {
    var imageProcessingSettings = calcOverlayAndTemplateProcessingSettings(overlaySettings,metadata);
    var s = imageProcessingSettings;
    if(s.completelyOutOfBound){
      var responseToProcess = templateCroppingMode ? userPhotoFetchResponse : templateFetchResponse;
      var template = sharp(responseToProcess.data.Body);
      template.resize(s.limit, s.limit).min().max();
      template = template.background(bgColor);
      if (!templateCroppingMode) {
        template = template.flatten()
      }
      template[fileType]().toBuffer().then(function(templateBuffer){
        dfd.resolve({
          Body: templateBuffer,
        });
      });
    } else {
      if(s.extract){
        userPhoto.extract(s.extract);
      }
      if(s.extend){
        userPhoto.extend(s.extend);
      }
      userPhoto = userPhoto.background(bgColor);
      if (!templateCroppingMode) {
        userPhoto = userPhoto.flatten();
      }
      userPhoto.toBuffer().then(function(userPhotoBuffer){
        var userPhoto = sharp(userPhotoBuffer);
        userPhoto.resize(1200,1200);
        if  (templateCroppingMode) {
          userPhoto.png().toBuffer().then(function(userPhotoBuffer){
            dfd.resolve({
              Body: userPhotoBuffer,
            });
          });
        } else {
          var template = sharp(templateFetchResponse.data.Body);
          template.resize(1200, 1200).min().max();
          template.toBuffer().then(function(templateBuffer){
            userPhoto.overlayWith(templateBuffer, {
              top: 0,
              left: 0
            });
            userPhoto.jpeg().toBuffer().then(function(userPhotoBuffer){
              dfd.resolve({
                Body: userPhotoBuffer,
              });
            });
          });
        }
      })       
    }    
    return userPhoto
  });
  return dfd.promise();
};