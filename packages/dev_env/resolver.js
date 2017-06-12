'use strict';











const resolve = require('resolve'); /**
                                     * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                     *
                                     * This source code is licensed under the BSD-style license found in the
                                     * LICENSE file in the root directory of this source tree. An additional grant
                                     * of patent rights can be found in the PATENTS file in the same directory.
                                     *
                                     * 
                                     */const browserResolve = require('browser-resolve');


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
      if (path.indexOf('aaa8') !== -1){
        console.log('YES',i,toReturn);
      }
      if (originalPath.indexOf('aaa8') !== -1){
        console.log('toReturn',toReturn);
      }
      // if(i === 0){
      //   if (moduleName.indexOf('@defualt/') !== -1) {
      //     // console.log(moduleName, moduleName, options);
      //     moduleName = moduleName.replace('@defualt/','');
      //   }
      // } else {
      //   moduleName = moduleName + '/' + moduleName;
      // }

      // console.log('moduleName', i, moduleName);
      // // console.log('PROCESS',arguments);
      // // console.log(')))))))))(((((((((');
      // // console.log(arguments);
      // // console.log('src',src);
      // // console.log('filename',filename);
      // // console.log('config',config);
      // // console.log('transformOptions',transformOptions);
      // const toReturn = oldMethod.apply(this, [path, options);
      // // console.log(toReturn);
      // console.log('GOOD',toReturn);
    } catch (e) {
      // console.log('eeeee',e);
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