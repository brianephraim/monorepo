/*
  MONKEY PATCHING Cropper.js v0.8.1 - https://github.com/fengyuanchen/cropperjs
  Cropper.js is a dependency of react-cropper.
  Out of the box, it does not allow crop region outside of canvas.
  So I fix that by copy/pasting some prototype methods of the library
  and tweaking them below.
  See "//TWEAK" comments below to see what was changed.

*/
var $ = {
  getOffset: (element) => {
    var doc = document.documentElement;
    var box = element.getBoundingClientRect();
  
    return {
      left: box.left + ((window.scrollX || doc && doc.scrollLeft || 0) - (doc && doc.clientLeft || 0)),
      top: box.top + ((window.scrollY || doc && doc.scrollTop || 0) - (doc && doc.clientTop || 0))
    };
  },
  removeClass: (element, value) => {
    if (isNumber(element.length)) {
      each(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }
  
    if (element.classList) {
      element.classList.remove(value);
      return;
    }
  
    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
};


import cropperLib from 'cropperjs/dist/cropper';
console.log('cropperLib',{x:cropperLib});


var ACTION_EAST = 'e';
var ACTION_WEST = 'w';
var ACTION_SOUTH = 's';
var ACTION_NORTH = 'n';
var ACTION_SOUTH_EAST = 'se';
var ACTION_SOUTH_WEST = 'sw';
var ACTION_NORTH_EAST = 'ne';
var ACTION_NORTH_WEST = 'nw';
cropperLib.prototype.change = function change(shiftKey, originalEvent) {
  var self = this;
  var options = self.options;
  var containerData = self.containerData;
  var canvasData = self.canvasData;
  var cropBoxData = self.cropBoxData;
  var aspectRatio = options.aspectRatio;
  var action = self.action;
  var width = cropBoxData.width;
  var height = cropBoxData.height;
  var left = cropBoxData.left;
  var top = cropBoxData.top;
  var right = left + width;
  var bottom = top + height;
  //TWEAK
  // var minLeft = 0;
  // var minTop = 0;
  // var maxWidth = containerData.width;
  // var maxHeight = containerData.height;
  var minLeft = -9999999999999999;
  var minTop = -99999999999999999;
  var maxWidth = 9999999999999999;
  var maxHeight = 9999999999999999;
  //TWEAK
  var renderable = true;
  var offset = void 0;

  // Locking aspect ratio in "free mode" by holding shift key
  if (!aspectRatio && shiftKey) {
    aspectRatio = width && height ? width / height : 1;
  }

  if (self.limited) {
    minLeft = cropBoxData.minLeft;
    minTop = cropBoxData.minTop;
    //TWEAK
    // maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
    // maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    maxWidth = 9999999999999999;
    maxHeight = 9999999999999999;
    //TWEAK
  }

  var range = {
    x: self.endX - self.startX,
    y: self.endY - self.startY
  };

  if (aspectRatio) {
    range.X = range.y * aspectRatio;
    range.Y = range.x / aspectRatio;
  }

  switch (action) {
    // Move crop box
    case 'all':
      left += range.x;
      top += range.y;
      break;

    // Resize crop box
    case ACTION_EAST:
      if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
        renderable = false;
        break;
      }

      width += range.x;

      if (aspectRatio) {
        height = width / aspectRatio;
        top -= range.Y / 2;
      }

      if (width < 0) {
        action = ACTION_WEST;
        width = 0;
      }

      break;

    case ACTION_NORTH:
      if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
        renderable = false;
        break;
      }

      height -= range.y;
      top += range.y;

      if (aspectRatio) {
        width = height * aspectRatio;
        left += range.X / 2;
      }

      if (height < 0) {
        action = ACTION_SOUTH;
        height = 0;
      }

      break;

    case ACTION_WEST:
      if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
        renderable = false;
        break;
      }

      width -= range.x;
      left += range.x;

      if (aspectRatio) {
        height = width / aspectRatio;
        top += range.Y / 2;
      }

      if (width < 0) {
        action = ACTION_EAST;
        width = 0;
      }

      break;

    case ACTION_SOUTH:
      if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
        renderable = false;
        break;
      }

      height += range.y;

      if (aspectRatio) {
        width = height * aspectRatio;
        left -= range.X / 2;
      }

      if (height < 0) {
        action = ACTION_NORTH;
        height = 0;
      }

      break;

    case ACTION_NORTH_EAST:
      if (aspectRatio) {
        if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
          renderable = false;
          break;
        }

        height -= range.y;
        top += range.y;
        width = height * aspectRatio;
      } else {
        if (range.x >= 0) {
          if (right < maxWidth) {
            width += range.x;
          } else if (range.y <= 0 && top <= minTop) {
            renderable = false;
          }
        } else {
          width += range.x;
        }

        if (range.y <= 0) {
          if (top > minTop) {
            height -= range.y;
            top += range.y;
          }
        } else {
          height -= range.y;
          top += range.y;
        }
      }

      if (width < 0 && height < 0) {
        action = ACTION_SOUTH_WEST;
        height = 0;
        width = 0;
      } else if (width < 0) {
        action = ACTION_NORTH_WEST;
        width = 0;
      } else if (height < 0) {
        action = ACTION_SOUTH_EAST;
        height = 0;
      }

      break;

    case ACTION_NORTH_WEST:
      if (aspectRatio) {
        if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
          renderable = false;
          break;
        }

        height -= range.y;
        top += range.y;
        width = height * aspectRatio;
        left += range.X;
      } else {
        if (range.x <= 0) {
          if (left > minLeft) {
            width -= range.x;
            left += range.x;
          } else if (range.y <= 0 && top <= minTop) {
            renderable = false;
          }
        } else {
          width -= range.x;
          left += range.x;
        }

        if (range.y <= 0) {
          if (top > minTop) {
            height -= range.y;
            top += range.y;
          }
        } else {
          height -= range.y;
          top += range.y;
        }
      }

      if (width < 0 && height < 0) {
        action = ACTION_SOUTH_EAST;
        height = 0;
        width = 0;
      } else if (width < 0) {
        action = ACTION_NORTH_EAST;
        width = 0;
      } else if (height < 0) {
        action = ACTION_SOUTH_WEST;
        height = 0;
      }

      break;

    case ACTION_SOUTH_WEST:
      if (aspectRatio) {
        if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
          renderable = false;
          break;
        }

        width -= range.x;
        left += range.x;
        height = width / aspectRatio;
      } else {
        if (range.x <= 0) {
          if (left > minLeft) {
            width -= range.x;
            left += range.x;
          } else if (range.y >= 0 && bottom >= maxHeight) {
            renderable = false;
          }
        } else {
          width -= range.x;
          left += range.x;
        }

        if (range.y >= 0) {
          if (bottom < maxHeight) {
            height += range.y;
          }
        } else {
          height += range.y;
        }
      }

      if (width < 0 && height < 0) {
        action = ACTION_NORTH_EAST;
        height = 0;
        width = 0;
      } else if (width < 0) {
        action = ACTION_SOUTH_EAST;
        width = 0;
      } else if (height < 0) {
        action = ACTION_NORTH_WEST;
        height = 0;
      }

      break;

    case ACTION_SOUTH_EAST:
      if (aspectRatio) {
        if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
          renderable = false;
          break;
        }

        width += range.x;
        height = width / aspectRatio;
      } else {
        if (range.x >= 0) {
          if (right < maxWidth) {
            width += range.x;
          } else if (range.y >= 0 && bottom >= maxHeight) {
            renderable = false;
          }
        } else {
          width += range.x;
        }

        if (range.y >= 0) {
          if (bottom < maxHeight) {
            height += range.y;
          }
        } else {
          height += range.y;
        }
      }

      if (width < 0 && height < 0) {
        action = ACTION_NORTH_WEST;
        height = 0;
        width = 0;
      } else if (width < 0) {
        action = ACTION_SOUTH_WEST;
        width = 0;
      } else if (height < 0) {
        action = ACTION_NORTH_EAST;
        height = 0;
      }

      break;

    // Move canvas
    case 'move':
      self.move(range.x, range.y);
      renderable = false;
      break;

    // Zoom canvas
    case 'zoom':
      self.zoom(function (x1, y1, x2, y2) {
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);

        return (z2 - z1) / z1;
      }(Math.abs(self.startX - self.startX2), Math.abs(self.startY - self.startY2), Math.abs(self.endX - self.endX2), Math.abs(self.endY - self.endY2)), originalEvent);
      self.startX2 = self.endX2;
      self.startY2 = self.endY2;
      renderable = false;
      break;

    // Create crop box
    case 'crop':
      if (!range.x || !range.y) {
        renderable = false;
        break;
      }

      offset = $.getOffset(self.cropper);
      left = self.startX - offset.left;
      top = self.startY - offset.top;
      width = cropBoxData.minWidth;
      height = cropBoxData.minHeight;

      if (range.x > 0) {
        action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
      } else if (range.x < 0) {
        left -= width;
        action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
      }

      if (range.y < 0) {
        top -= height;
      }

      // Show the crop box if is hidden
      if (!self.cropped) {
        $.removeClass(self.cropBox, 'cropper-hidden');
        self.cropped = true;

        if (self.limited) {
          self.limitCropBox(true, true);
        }
      }

      break;

    // No default
  }

  if (renderable) {
    cropBoxData.width = width;
    cropBoxData.height = height;
    cropBoxData.left = left;
    cropBoxData.top = top;
    self.action = action;

    self.renderCropBox();
  }

  // Override
  self.startX = self.endX;
  self.startY = self.endY;
};

cropperLib.prototype.limitCropBox = function limitCropBox(sizeLimited, positionLimited) {
  var self = this;
  var options = self.options;
  var aspectRatio = options.aspectRatio;
  var containerData = self.containerData;
  var canvasData = self.canvasData;
  var cropBoxData = self.cropBoxData;
  var limited = self.limited;
  var minCropBoxWidth = void 0;
  var minCropBoxHeight = void 0;
  var maxCropBoxWidth = void 0;
  var maxCropBoxHeight = void 0;

  if (sizeLimited) {
    minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
    minCropBoxHeight = Number(options.minCropBoxHeight) || 0;

    // The min/maxCropBoxWidth/Height must be less than containerWidth/Height
    minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
    minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
    //TWEAK maxCropBoxWidth = Math.min(containerData.width, limited ? canvasData.width : containerData.width);
    maxCropBoxWidth = 9999999999999999; //TWEAK
    //TWEAK maxCropBoxHeight = Math.min(containerData.height, limited ? canvasData.height : containerData.height);
    maxCropBoxHeight = 9999999999999999; //TWEAK

    if (aspectRatio) {
      if (minCropBoxWidth && minCropBoxHeight) {
        if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }
      } else if (minCropBoxWidth) {
        minCropBoxHeight = minCropBoxWidth / aspectRatio;
      } else if (minCropBoxHeight) {
        minCropBoxWidth = minCropBoxHeight * aspectRatio;
      }

      if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
        maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
      } else {
        maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
      }
    }

    // The minWidth/Height must be less than maxWidth/Height
    cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
    cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
    //TWEAK
    // cropBoxData.maxWidth = maxCropBoxWidth;
    // cropBoxData.maxHeight = maxCropBoxHeight;
    cropBoxData.maxWidth = 9999999999999999;
    cropBoxData.maxHeight = 9999999999999999;
    //TWEAK 
  }

  if (positionLimited) {
    if (limited) {
      cropBoxData.minLeft = Math.max(0, canvasData.left);
      cropBoxData.minTop = Math.max(0, canvasData.top);
      cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
      cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
    } else {
      //TWEAK
      // cropBoxData.minLeft = 0;
      // cropBoxData.minTop = 0;
      // cropBoxData.maxLeft = containerData.width - cropBoxData.width;
      // cropBoxData.maxTop = containerData.height - cropBoxData.height;
      cropBoxData.minLeft = -cropBoxData.width;
      cropBoxData.minTop = -cropBoxData.height;
      cropBoxData.maxLeft = containerData.width;
      cropBoxData.maxTop = containerData.height;
      //TWEAK

    }
  }
};