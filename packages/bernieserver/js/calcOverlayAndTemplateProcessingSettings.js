module.exports = function(cropSettings,userPhotoWidthHeight){
  var limit = 1200;
  // var scale = overlaySettings.scale;
  var cropWidth = cropSettings.width;
  var cropHeight = cropSettings.height;
  var cropTop = cropSettings.top;
  var cropLeft = cropSettings.left;
  var cropRight = cropLeft + cropWidth;
  var cropBottom = cropTop + cropHeight;
  var rawWidth = userPhotoWidthHeight.width;
  var rawHeight = userPhotoWidthHeight.height;
  var rawRight = rawWidth;
  var rawBottom = rawHeight;
  var rawTop = 0;
  var rawLeft = 0;

  var s = {};

  
  s.extract = {
    left: cropLeft > 0 ? cropLeft : 0,
    top: cropTop > 0 ? cropTop : 0,
  };
  s.extract.width = cropRight < rawRight ? cropRight : rawRight;
  s.extract.width =  s.extract.width - s.extract.left;
  s.extract.width = s.extract.width > 0 ? s.extract.width : 0;
  s.extract.height = cropBottom < rawBottom ? cropBottom : rawBottom;
  s.extract.height =  s.extract.height - s.extract.top;
  s.extract.height = s.extract.height > 0 ? s.extract.height : 0;



  s.extend = {
    left: cropLeft < 0 ? -cropLeft : 0,
    top: cropTop < 0 ? -cropTop : 0,
    right: cropRight > rawRight ? cropRight - rawRight : 0,
    bottom: cropBottom > rawBottom ? cropBottom - rawBottom : 0
  };
  
  s.resize = {
    width:1200,
    height:1200
  }

  s.completelyOutOfBound = false;
  if(
    (
      s.extract.left >= rawRight ||
      s.extract.top >= rawBottom ||
      s.extend.left >= cropWidth ||
      s.extend.top >= cropHeight
    )
  ){
    s.completelyOutOfBound = true;
  }
  s.extract = s.extract.width && s.extract.height ? s.extract : null;
  s.extend = s.extend.left || s.extend.top || s.extend.bottom || s.extend.right ? s.extend : null;
  s.limit = limit;
  return s;
};