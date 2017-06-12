/* eslint-disable */
// var resolve = require('jest-resolve');

// const method = 'findNodeModule';
// var oldMethod = resolve.prototype[method];
// resolve.prototype[method] = function(path, options) {
//   var attempts = [];
//   var i = 0;
//   var recurse = () => {
//     try {
//       console.log('path', i, path);
//       console.log('options', i, options);
//       // if(i === 0){
//       //   if (moduleName.indexOf('@defualt/') !== -1) {
//       //     // console.log(moduleName, moduleName, options);
//       //     moduleName = moduleName.replace('@defualt/','');
//       //   }
//       // } else {
//       //   moduleName = moduleName + '/' + moduleName;
//       // }

//       // console.log('moduleName', i, moduleName);
//       // // console.log('PROCESS',arguments);
//       // // console.log(')))))))))(((((((((');
//       // // console.log(arguments);
//       // // console.log('src',src);
//       // // console.log('filename',filename);
//       // // console.log('config',config);
//       // // console.log('transformOptions',transformOptions);
//       // const toReturn = oldMethod.apply(this, [path, options);
//       // // console.log(toReturn);
//       // console.log('GOOD',toReturn);
//       return toReturn;
//     } catch (e) {
//       // console.log('eeeee',e);
//       if (i++ < 10) {
//         console.log('LOSER',i,fromFile,moduleName)
//         recurse();
//       } else {
//          console.log('LOSERB',i,fromFile,moduleName)
//         throw e;
//       }
//     }
//   };
//   return recurse();
// };


var reg = /(.*)\/([^/]+$)/igm; //get hashtags
var string = './two';

var matches = string.match(reg).map(e => e.replace(reg, '$1/$2/$2.js'));
console.log('matches',matches);
const rootDir = process.cwd();
console.log('__dirname',__dirname);
console.log('CONFIG mfer',rootDir);
module.exports = {
  verbose: true,
  testMatch: ['**/?(*.)(test).js?(x)'],
  rootDir: rootDir,
  moduleDirectories: ["node_modules", "packages"], // /Users/brianephraim/Sites/monorepo/packages
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${__dirname}/__mocks__/fileMock.js`,
    '\\.(css|less)$': "identity-obj-proxy",
    // simulate behavior of directory-named-webpack-plugin in webpack config
    // '^\@[^/]+\/([a-zA-Z0-9][^/]*)\/([^/]+$)': '$1/$2.js',// matches '@defualt/one/two' into 'one/two.js'
    // '^\@[^/]+\/([a-zA-Z][^/]*)\/([^/]+$)': '$1/$2/$2',// matches '@defualt/one/two' into 'one/two/two.js'
    // '^\@[^/]+\/([a-zA-Z][^/]*$)': '$1/$1.js', // matches '@defualt/one' into 'one/one.js'
    // '(.*)\/([^/]+$)': '$1/$2/$2.js', // matches './two' into './two/two.js' 

    // '(^[a-zA-Z][^/]*$)': '$1/$1.js', // matches 'one' into 'one/one.js' 
    
  },
  resolver: `${__dirname}/jest-webpack-resolver.js`,
  // transform: {
  //   // "^.+\\.jsx?$": "babel-jest"
  //   "^.+\\.jsx?$": `${__dirname}/jestTransform.js`
  // //   '.*': `${__dirname}/jestTransform.js`,// matches '@defualt/one/two' into 'one/two/two.js'    
  // },
  moduleFileExtensions: ["js", "jsx"],
  "modulePathIgnorePatterns": [
    '<rootDir>.*\/node_modules\/.*'
    // "<rootDir>[/\\\\](node_modules|tempRepos)[/\\\\]"
  ],
};
