// Takes a square element and determines the size it would
// need to stretch downward to reach the bottom of the page.
// It returns an object like this:
/*
    
  {
    style: { // optional
      width: '100px', // optional
      height: '100px', // optional
    },
    classes: { // optional
      'windowVerticalTooSmall': true // optional
    },
  }
*/

import vanilla from 'vanilla';
import windowSizer, { heightTweak } from '@defualt/window-sizer';

const { docEl, docBody, getWinWidth, getWinHeight, getDocumentHeight, getOffset, domEfficiencyCache } = vanilla;

const generateGiantSquareDetails = function($el,bottomGap = 0){
  
  var getDims = function($el){
    return{
      windowHeight: windowSizer.dimensions.height - heightTweak,
      documentHeight: getDocumentHeight(),
      top: getOffset($el).top
    }
  };
  var dims = getDims($el);

  var heightVal = (dims.windowHeight - dims.top);
  
  var windowWidth = getWinWidth();
  var measurement = windowWidth < heightVal ? windowWidth : heightVal;

  if(measurement <= windowWidth){
    var gap = dims.windowHeight - (dims.top + measurement);
    if(gap < bottomGap){
      measurement -= (bottomGap - gap);
    }
  }
  var min = 250;
  var toReturn = {};
  if(measurement < min){
    if(windowWidth >= min){
      measurement = min;
    } else {
      measurement = windowWidth;
    }
  }
  if(dims.top + measurement + bottomGap > dims.windowHeight){
    toReturn.classes = {'windowVerticalTooSmall': true};
  }
  toReturn.data = {
    measurement,
  };
  toReturn.style= {
    height: measurement + 'px',
    width: measurement + 'px',
  }

  return toReturn;
};

export default generateGiantSquareDetails;
