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

import vanilla from '@defualt/vanilla';
import windowSizer, { heightTweak } from '@defualt/window-sizer';

const { docEl, docBody, getWinWidth, getWinHeight, getDocumentHeight, getOffset, domEfficiencyCache } = vanilla;

const generateGiantSquareDetails = function($el,bottomGap = 0){
  
  const getDims = function($el){
    return{
      windowHeight: windowSizer.dimensions.height - heightTweak,
      documentHeight: getDocumentHeight(),
      top: getOffset($el).top
    }
  };
  const dims = getDims($el);

  const heightVal = (dims.windowHeight - dims.top);
  
  const windowWidth = getWinWidth();
  let measurement = windowWidth < heightVal ? windowWidth : heightVal;

  if(measurement <= windowWidth){
    const gap = dims.windowHeight - (dims.top + measurement);
    if(gap < bottomGap){
      measurement -= (bottomGap - gap);
    }
  }
  const min = 250;
  const toReturn = {};
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
    height: `${measurement  }px`,
    width: `${measurement  }px`,
  }

  return toReturn;
};

export default generateGiantSquareDetails;
