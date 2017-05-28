var jD = require('jquery-deferred');
var sharp = require('sharp');
var prepareModuleWithDefaults = require('./prepareModuleWithDefaults');
var parseUrl = require('url').parse;
module.exports = prepareModuleWithDefaults(function(s){
  var dfd = jD.Deferred();
  var buffer = s.Body;
  var sharp = require('sharp');
  var image = sharp(buffer);
  image.metadata(function(err, meta){
      if(err){
        dfd.reject(err);
      } else {
        var smallestDim = Math.min(meta.width, meta.height);
        var largestDim = Math.max(meta.width, meta.height);
        var limit = 1200;

        var multiplier = limit/smallestDim;
        multiplier = multiplier < 1 ? multiplier : 1;
        if(multiplier !== 1){
          limit = Math.floor(largestDim * multiplier);
          image.resize(limit,limit).max().withoutEnlargement()
        }
        image.rotate().toBuffer(function(err, outputBuffer, info) {
          if(err){
            dfd.reject(err);
          } else {
            var manipulatedImageFileData = {
              Key: s.filename,
              ContentType: 'image/png',
              Body: outputBuffer,
              width: info.width,
              height: info.height,
              url: s.url,
              originalFilename: s.originalFilename
            };
          }
          dfd.resolve(manipulatedImageFileData);
        });
      }
  });
  return dfd.promise();
});
