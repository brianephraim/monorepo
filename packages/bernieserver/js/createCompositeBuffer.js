var sharp = require('sharp');
var jD = require('jquery-deferred');
var calcOverlayAndTemplateProcessingSettings = require('./calcOverlayAndTemplateProcessingSettings');
module.exports = function(overlaySettings,responses){
  var dfd = jD.Deferred();
  var templateFetchResponse = responses.template;
  var userPhotoFetchResponse = responses.userPhoto;
  var args = Array.prototype.slice.call(arguments);  
  var userPhoto = sharp(userPhotoFetchResponse.data.Body);
  userPhoto.metadata().then(function(metadata) {
    var imageProcessingSettings = calcOverlayAndTemplateProcessingSettings(overlaySettings,metadata);
    var s = imageProcessingSettings;
    if(s.completelyOutOfBound){
      var template = sharp(templateFetchResponse.data.Body);
      template.resize(s.limit, s.limit).min().max();
      template.background('white').flatten().jpeg().toBuffer().then(function(templateBuffer){
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

      userPhoto.background('white').flatten().toBuffer().then(function(userPhotoBuffer){
        var userPhoto = sharp(userPhotoBuffer);
        userPhoto.resize(1200,1200);
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
      })       
    }    
    return userPhoto
  });
  return dfd.promise();
};