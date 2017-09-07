/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */

/*
  MONKEY PATCHING Cropper.js v0.8.1 - https://github.com/fengyuanchen/cropperjs
  Cropper.js is a dependency of react-cropper.
  Out of the box, it does not allow crop region outside of canvas.
  So I fix that by copy/pasting some prototype methods of the library
  and tweaking them below.
  See "//TWEAK" comments below to see what was changed.

*/

import cropperLib from 'cropperjs/dist/cropper';

function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
}

function typeOf(obj) {
  return toString.call(obj).slice(8, -1).toLowerCase();
}

function isArray(arr) {
  return Array.isArray ? Array.isArray(arr) : typeOf(arr) === 'array';
}

function isFunction(fn) {
  return typeOf(fn) === 'function';
}

const _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? obj => {
        return typeof obj;
      }
    : obj => {
        return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };

function isObject(obj) {
  return (
    (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' &&
    obj !== null
  );
}

function each(obj, callback) {
  if (obj && isFunction(callback)) {
    let i;

    if (isArray(obj) || isNumber(obj.length) /* array-like */) {
      const length = obj.length;

      for (i = 0; i < length; i++) {
        if (callback.call(obj, obj[i], i, obj) === false) {
          break;
        }
      }
    } else if (isObject(obj)) {
      Object.keys(obj).forEach(key => {
        callback.call(obj, obj[key], key, obj);
      });
    }
  }

  return obj;
}

function removeClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    each(element, elem => {
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
const $ = {
  getOffset: element => {
    const doc = document.documentElement;
    const box = element.getBoundingClientRect();

    return {
      left:
        box.left +
        ((window.scrollX || (doc && doc.scrollLeft) || 0) -
          ((doc && doc.clientLeft) || 0)),
      top:
        box.top +
        ((window.scrollY || (doc && doc.scrollTop) || 0) -
          ((doc && doc.clientTop) || 0)),
    };
  },
  removeClass: (element, value) => {
    if (isNumber(element.length)) {
      each(element, elem => {
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
  },
};

const ACTION_EAST = 'e';
const ACTION_WEST = 'w';
const ACTION_SOUTH = 's';
const ACTION_NORTH = 'n';
const ACTION_SOUTH_EAST = 'se';
const ACTION_SOUTH_WEST = 'sw';
const ACTION_NORTH_EAST = 'ne';
const ACTION_NORTH_WEST = 'nw';
cropperLib.prototype.change = function change(shiftKey, originalEvent) {
  const self = this;
  const options = self.options;
  const cropBoxData = self.cropBoxData;
  let aspectRatio = options.aspectRatio;
  let action = self.action;
  let width = cropBoxData.width;
  let height = cropBoxData.height;
  let left = cropBoxData.left;
  let top = cropBoxData.top;
  const right = left + width;
  const bottom = top + height;
  // TWEAK
  // var minLeft = 0;
  // var minTop = 0;
  // var maxWidth = containerData.width;
  // var maxHeight = containerData.height;
  let minLeft = -9999999999999999;
  let minTop = -99999999999999999;
  let maxWidth = 9999999999999999;
  let maxHeight = 9999999999999999;
  // TWEAK
  let renderable = true;
  let offset;

  // Locking aspect ratio in "free mode" by holding shift key
  if (!aspectRatio && shiftKey) {
    aspectRatio = width && height ? width / height : 1;
  }

  if (self.limited) {
    minLeft = cropBoxData.minLeft;
    minTop = cropBoxData.minTop;
    // TWEAK
    // maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
    // maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    maxWidth = 9999999999999999;
    maxHeight = 9999999999999999;
    // TWEAK
  }

  const range = {
    x: self.endX - self.startX,
    y: self.endY - self.startY,
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
      if (
        range.x >= 0 &&
        (right >= maxWidth ||
          (aspectRatio && (top <= minTop || bottom >= maxHeight)))
      ) {
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
      if (
        range.y <= 0 &&
        (top <= minTop ||
          (aspectRatio && (left <= minLeft || right >= maxWidth)))
      ) {
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
      if (
        range.x <= 0 &&
        (left <= minLeft ||
          (aspectRatio && (top <= minTop || bottom >= maxHeight)))
      ) {
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
      if (
        range.y >= 0 &&
        (bottom >= maxHeight ||
          (aspectRatio && (left <= minLeft || right >= maxWidth)))
      ) {
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
      self.zoom(
        (function zoomVariableHelper(x1, y1, x2, y2) {
          const z1 = Math.sqrt(x1 * x1 + y1 * y1);
          const z2 = Math.sqrt(x2 * x2 + y2 * y2);

          return (z2 - z1) / z1;
        })(
          Math.abs(self.startX - self.startX2),
          Math.abs(self.startY - self.startY2),
          Math.abs(self.endX - self.endX2),
          Math.abs(self.endY - self.endY2)
        ),
        originalEvent
      );
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

cropperLib.prototype.limitCropBox = function limitCropBox(
  sizeLimited,
  positionLimited
) {
  const self = this;
  const options = self.options;
  const aspectRatio = options.aspectRatio;
  const containerData = self.containerData;
  const canvasData = self.canvasData;
  const cropBoxData = self.cropBoxData;
  const limited = self.limited;
  let minCropBoxWidth;
  let minCropBoxHeight;
  let maxCropBoxWidth;
  let maxCropBoxHeight;

  if (sizeLimited) {
    minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
    minCropBoxHeight = Number(options.minCropBoxHeight) || 0;

    // The min/maxCropBoxWidth/Height must be less than containerWidth/Height
    minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
    minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
    // TWEAK maxCropBoxWidth = Math.min(containerData.width, limited ? canvasData.width : containerData.width);
    maxCropBoxWidth = 9999999999999999; // TWEAK
    // TWEAK maxCropBoxHeight = Math.min(containerData.height, limited ? canvasData.height : containerData.height);
    maxCropBoxHeight = 9999999999999999; // TWEAK

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
    // TWEAK
    // cropBoxData.maxWidth = maxCropBoxWidth;
    // cropBoxData.maxHeight = maxCropBoxHeight;
    cropBoxData.maxWidth = 9999999999999999;
    cropBoxData.maxHeight = 9999999999999999;
    // TWEAK
  }

  if (positionLimited) {
    if (limited) {
      cropBoxData.minLeft = Math.max(0, canvasData.left);
      cropBoxData.minTop = Math.max(0, canvasData.top);
      cropBoxData.maxLeft =
        Math.min(containerData.width, canvasData.left + canvasData.width) -
        cropBoxData.width;
      cropBoxData.maxTop =
        Math.min(containerData.height, canvasData.top + canvasData.height) -
        cropBoxData.height;
    } else {
      // TWEAK
      // cropBoxData.minLeft = 0;
      // cropBoxData.minTop = 0;
      // cropBoxData.maxLeft = containerData.width - cropBoxData.width;
      // cropBoxData.maxTop = containerData.height - cropBoxData.height;
      cropBoxData.minLeft = -cropBoxData.width;
      cropBoxData.minTop = -cropBoxData.height;
      cropBoxData.maxLeft = containerData.width;
      cropBoxData.maxTop = containerData.height;
      // TWEAK
    }
  }
};
