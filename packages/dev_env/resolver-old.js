const resolve = require('resolve');

const browserResolve = require('browser-resolve');


function defaultResolver(path, options) {
  const originalPath = path;
  var attempts = [
    (path) => {
      return path;
    },
    (path) => {
      path = path.replace('@defualt/','');
      // path = 'aaa8/aaa8';
      return path; 
    },
    (path) => {
      path = path.replace('@defualt/','');
      return path + '/' + path; 
    },
    (path) => {
      path = path.replace('@defualt/','');
      var split = path.split('/');
      var last = split[split.length - 1];
      path = path + '/' + last;
      return path; 
    },
  ];
  if (originalPath.indexOf('aaa8') !== -1){
    console.log('\n-------');
  }
  
  var i = 0;
  let toReturn;
  var recurse = () => {
    try {
      path = originalPath;
      const attempt = attempts[i] || (() => {return originalPath});
      path = attempts[i](originalPath);

      if (originalPath.indexOf('aaa8') !== -1){
        console.log('originalPath',originalPath);
        console.log('path',path);
        console.log(options);
        options.basedir = '/Users/brianephraim/Sites/monorepo/packages/aaa8';
        options.paths = null;
      }

      const resv = options.browser ? browserResolve : resolve;
      
      



      toReturn = resv.sync(path, options);
    } catch (e) {
      if (i++ < 10) {
        if (originalPath.indexOf('aaa8') !== -1){
          console.log('NOA AAA8',i)
        }
        recurse();
      } else {
        if (originalPath.indexOf('aaa8') !== -1){
          console.log('NOB AAA8',i)
        }
        // throw e;
      }
    }
    return toReturn;
  };
  return recurse();
  
      
  
  // if (path.indexOf('aaa8') !== -1){
  //   console.log('RESSSOLVE',path,options);
  //   console.log('toReturn',toReturn);
  // }
  
  return toReturn;

}

module.exports = defaultResolver;