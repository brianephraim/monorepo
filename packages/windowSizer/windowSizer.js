import debounce from 'debounce';
import vanilla from 'vanilla';
const { docEl, docBody, getWinWidth, getWinHeight, getDocumentHeight, getOffset, domEfficiencyCache } = vanilla;

const dimensions = {
  height: getWinHeight(),
  width: getWinWidth(),
};

// const isTouchDevice = 'ontouchstart' in document.documentElement;
// const danger_of_url_bar_disappearing_and_thus_window_height_will_change = isTouchDevice;
const heightTweak = 'ontouchstart' in document.documentElement ? 75  : 0;
export { heightTweak };

var resizeDeb = debounce(300,null);
let cbs = [];
let dims = {};
function removeCb(fun) {
  cbs = cbs.filter((cb) => {
    return cb !== fun;
  });
}
function addCb(fun) {
  cbs.push(fun);
  return () => {
    removeCb(fun);
  }
}
window.addEventListener('resize', () => {
  const lastDimensions = {
    ...dimensions,
  };
  Object.assign(dimensions, {
    height: getWinHeight(),
    width: getWinWidth(),
  });
  //scrolling triggers resize on some mobile browsers (minimizing url when not scrolled to top)
  //don't refresh under these conditions
  var newWindowHeight = dimensions.height - heightTweak;
  var newWindowWidth = dimensions;
  var threshTest = Math.abs((lastDimensions.height - heightTweak) - newWindowHeight) > 70;
  if(threshTest || lastDimensions.width !== newWindowWidth){
    resizeDeb().then(function(){
      cbs.forEach((cb) => {
        cb();
      });
    })
  }
}, false);

export default {
  cbs,
  addCb,
  removeCb,
  dimensions,
};