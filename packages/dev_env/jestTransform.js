// Copyright 2004-present Facebook. All Rights Reserved.
const babelJest = require('babel-jest');
const processCache = babelJest.process;
console.log('AAAAAAA')

//anytime later
var oldProcess = babelJest.process;
var process = function(src,filename,config,transformOptions) {
  // console.log('PROCESS',arguments);
  console.log(')))))))))(((((((((');
  // console.log('src',src);
  // console.log('filename',filename);
  // console.log('config',config);
  // console.log('transformOptions',transformOptions);
  const toReturn = oldProcess.apply(this, arguments);
  console.log(toReturn);
  return toReturn;
};

module.exports = {process:process};
// module.exports = {
//   process(src, path) {
//     console.log('pathpathpathpathpath',path)
//     // if (path.endsWith('.ts') || path.endsWith('.tsx')) {
//     //   return tsc.transpile(src, tsConfig.compilerOptions, path, []);
//     // }
//     return src;
//   },
// };