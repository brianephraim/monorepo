function debounce(wait, immediate, cb) {
  cb = !!cb ? cb : function(){};
  var timeout;
  return function() {
    return new Promise(function(resolve, reject) {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) resolve.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      cb(timeout)
      if (callNow) resolve.apply(context, args);
    });
  };
};

export default debounce;