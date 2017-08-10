var indexOf = (haystack, needle) => {
  var i = 0;
  let foundIndex = -1;
  let needleProgress = 0;
  let done = false;
  while(i <= haystack.length - 1 && !done){
    if (needleProgress === 0 && haystack[i] === needle[0]) {
      foundIndex = i;
      needleProgress++;
    } else if (needleProgress && needle[needleProgress] === haystack[i]) {

      needleProgress++;
      if (needleProgress === needle.length) {
        done = true;
      }
    } else {
      needleProgress = 0;
      foundIndex = -1;
    }
    i++;
  }
  console.log(foundIndex);
};


indexOf('xxxxneedxxxneedlex','needle', 11);
indexOf('xxxxneedlexxxneedlex','needle',4);
indexOf('yyyyy','needle',4);