require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-console */
var chalkLib = __webpack_require__(12);
var colorPairsPicker = __webpack_require__(14);
var hasAnsi = __webpack_require__(16);

var chalk = new chalkLib.constructor({ level: 3 });
function formatLog(color, heading) {
  var _chalk$rgb;

  var bg = colorPairsPicker(color, { contrast: 8 }).bg.split('(')[1].split(')')[0].split(',').map(function (item) {
    return +item;
  });
  var fg = colorPairsPicker(color, { contrast: 8 }).fg.split('(')[1].split(')')[0].split(',').map(function (item) {
    return +item;
  });
  console.log((_chalk$rgb = chalk.rgb.apply(chalk, _toConsumableArray(fg))).bgRgb.apply(_chalk$rgb, _toConsumableArray(bg))(heading));

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (typeof args.find(function (item) {
    return hasAnsi(item);
  }) === 'undefined') {
    console.log(chalk.keyword(color).apply(undefined, args));
  } else {
    var _console;

    (_console = console).log.apply(_console, args);
  }
}
module.exports = formatLog;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

function ensureTrailingSlash(str) {
  return str.replace(/\/?$/, '/');
}
module.exports = function () {
  var devEnvRoot = ensureTrailingSlash(__dirname).split('/dev_env/');
  devEnvRoot[devEnvRoot.length - 1] = '';
  devEnvRoot = devEnvRoot.join('/dev_env/');
  return devEnvRoot;
};
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/core"))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var findNodeModules = __webpack_require__(15);
// for NODE_PATH, on windows, seperator is ; instead of :.  What fun.
// seperator is bash array argument seperator syntax.
var nodePathSeparator = /^win/.test(process.platform) ? ';' : ':';
// Find all directories of node_modules that apply to the file we are compiling.
module.exports = function (_ref) {
  var _ref$before = _ref.before,
      before = _ref$before === undefined ? [] : _ref$before,
      _ref$after = _ref.after,
      after = _ref$after === undefined ? [] : _ref$after,
      cwd = _ref.cwd;

  var nodePaths = before.concat(findNodeModules({ relative: false, cwd: cwd })).concat(after).join(nodePathSeparator);
  return 'NODE_PATH=\'' + nodePaths + '\'';
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */
module.exports = function (commandToRun) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { stdio: 'inherit' };
  var killParentOnExit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var command = 'sh';
  var args = ['-c', commandToRun];
  //
  // kexec doesn't work in windows, so fallback to child_process.spawn
  // this logic copied from babel-cli/lib/babel-node.js
  // try {
  //   const kexec = require('kexec');
  //   kexec(command, args);
  // } catch (err) {
  // if (err.code !== 'MODULE_NOT_FOUND') throw err;

  var childProcess = __webpack_require__(13);
  var proc = childProcess.spawn(command, args, options || {});
  proc.on('exit', function (code, signal) {
    if (killParentOnExit) {
      process.on('exit', function () {
        if (signal) {
          process.kill(process.pid, signal);
        } else {
          process.exit(code);
        }
      });
    }
  });
  return proc;
  // }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("mocha");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("terminate");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("website-scraper");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _terminate = __webpack_require__(9);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(4);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(5);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _websiteScraper = __webpack_require__(10);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _nodeUuid = __webpack_require__(7);

var _mocha = __webpack_require__(6);

var _shellCommand = __webpack_require__(3);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _fancyLog = __webpack_require__(0);

var _fancyLog2 = _interopRequireDefault(_fancyLog);

var _getDevEnvRoot = __webpack_require__(1);

var _getDevEnvRoot2 = _interopRequireDefault(_getDevEnvRoot);

var _getNodePathShVar = __webpack_require__(2);

var _getNodePathShVar2 = _interopRequireDefault(_getNodePathShVar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fancyLog('orange', 'start terminate', 'asdf');
var devEnvRoot = (0, _getDevEnvRoot2.default)(__dirname); /* eslint-disable class-methods-use-this */


function duringProcess(_ref) {
  var _ref$onData = _ref.onData,
      onData = _ref$onData === undefined ? function () {} : _ref$onData,
      _ref$onStderr = _ref.onStderr,
      onStderr = _ref$onStderr === undefined ? function () {} : _ref$onStderr,
      _ref$makeShellCmdStrX = _ref.makeShellCmdStrX,
      makeShellCmdStrX = _ref$makeShellCmdStrX === undefined ? function () {
    return 'pwd';
  } : _ref$makeShellCmdStrX,
      _ref$makeShellCmdStr = _ref.makeShellCmdStr,
      makeShellCmdStr = _ref$makeShellCmdStr === undefined ? function () {} : _ref$makeShellCmdStr,
      _ref$cleanup = _ref.cleanup,
      cleanup = _ref$cleanup === undefined ? function () {
    return Promise.resolve();
  } : _ref$cleanup,
      _ref$early = _ref.early,
      early = _ref$early === undefined ? function () {
    return Promise.resolve();
  } : _ref$early,
      assetsToGenerate = _ref.assetsToGenerate;

  (0, _mocha.before)(function duringProcessBefore(done) {
    this.timeout(60000);
    setTimeout(function () {
      early().then(function () {
        setTimeout(function () {
          var pathToDemoEntry = void 0;
          assetsToGenerate.forEach(function (assetInfo) {
            (0, _fancyLog2.default)('green', 'GENERATING', assetInfo.path);
            var dir = _path2.default.dirname(assetInfo.path);
            _fsExtra2.default.ensureDirSync(dir);
            _fsExtra2.default.writeFileSync(assetInfo.path, assetInfo.text);
            if (assetInfo.isDemoEntry) {
              pathToDemoEntry = assetInfo.path;
            }
          });
          setTimeout(function () {
            // const cmd = makeShellCmdStrX(pathToDemoEntry);
            var cmd = makeShellCmdStr(pathToDemoEntry);
            console.log('shell command', cmd);
            var devEnvProcess = (0, _shellCommand2.default)(cmd, null, false);
            var finished = false;
            function finish() {
              console.log('FINISHED???', finished);
              if (finished) {
                return;
              }
              (0, _fancyLog2.default)('green', 'FINISHED', 'code');
              finished = true;
              console.log('asdf duringProcess cleanup');
              cleanup(devEnvProcess).then(function () {
                (0, _fancyLog2.default)('orange', 'remove assets', '');
                assetsToGenerate.forEach(function (assetInfo) {
                  var dir = _path2.default.dirname(assetInfo.path);
                  _fsExtra2.default.removeSync(dir);
                });
                (0, _fancyLog2.default)('orange', 'before\'s done() called', '');
                done();
              });
            }
            devEnvProcess.stdout.on('data', function (data) {
              var dataString = data.toString();
              (0, _fancyLog2.default)('blue', 'devEnvProcess.stdout:', dataString);
              onData(dataString, finish);
            });
            devEnvProcess.stderr.on('data', function (data) {
              if (data && data.toString) {
                data = data.toString();
                onStderr(data);
              }
              (0, _fancyLog2.default)('cyan', 'devEnvProcess.stderr:', data);
            });
            devEnvProcess.on('exit', function (code) {
              (0, _fancyLog2.default)('yellow', 'child process exited with code:', code);
              finish();
            });
          }, 0);
        }, 0);
      });
    }, 0);
  });
}

function duringServer(_ref2) {
  var useDist = _ref2.useDist,
      _ref2$onAsset = _ref2.onAsset,
      onAsset = _ref2$onAsset === undefined ? function () {} : _ref2$onAsset,
      _ref2$onData = _ref2.onData,
      _onData = _ref2$onData === undefined ? function () {} : _ref2$onData,
      _ref2$onStderr = _ref2.onStderr,
      onStderr = _ref2$onStderr === undefined ? function () {} : _ref2$onStderr,
      _ref2$cleanup = _ref2.cleanup,
      _cleanup = _ref2$cleanup === undefined ? function () {
    return Promise.resolve();
  } : _ref2$cleanup,
      _makeShellCmdStr = _ref2.makeShellCmdStr,
      assetsToGenerate = _ref2.assetsToGenerate,
      nodePath = _ref2.nodePath,
      makeShellCmdStrX = _ref2.makeShellCmdStrX,
      early = _ref2.early;

  var scrapeDir = _path2.default.resolve(__dirname, './scrape');
  var once = false;
  duringProcess({
    early: early,
    makeShellCmdStrX: makeShellCmdStrX,
    makeShellCmdStr: function makeShellCmdStr(pathToDemoEntry) {
      var nodePathShVar = nodePath ? nodePath + ' ' : '';
      console.log('nodePath', nodePathShVar);
      if (_makeShellCmdStr) {
        return _makeShellCmdStr(pathToDemoEntry);
      }
      var prepublish = useDist ? '(cd ' + devEnvRoot + ' && npm run prepublish) && ' : '';
      console.log('XXXXX');
      console.log('XXXXX');
      console.log('XXXXX');
      console.log('XXXXX');
      console.log('XXXXX');
      console.log('XXXXX');
      console.log('XXXXX');
      console.log('XXXXX');
      return '(\n        ' + prepublish + 'npm run dev -- --demo-entry=\'' + pathToDemoEntry + '\'' + (useDist ? ' --use-dist' : '') + ' \n      )';
    },
    onData: function onData(dataString, finish) {
      _onData(dataString, finish);
      if (dataString.indexOf('webpack: Failed to compile.') !== -1 && !once) {
        once = true;
        finish();
      }
      if (dataString.indexOf('webpack: Compiled successfully.') !== -1 && !once) {
        once = true;
        // setTimeout(() => {
        // scrape({
        //   urls: ['http://localhost:3000/'],
        //   directory: scrapeDir,
        //   resourceSaver: class MyResourceSaver {
        //     saveResource(resource) {
        //       onAsset(resource);
        //     }
        //     errorCleanup(err) {
        //       fancyLog('pink', 'scrape resource error:', err);
        //     }
        //   },
        // }).then(() => {
        //   finish();
        // });
        // }, 1000);
        // finish();
      }
    },
    onStderr: onStderr,
    assetsToGenerate: assetsToGenerate,
    cleanup: function cleanup(devEnvProcess) {
      return new Promise(function (resolve, reject) {
        (0, _fancyLog2.default)('orange', 'terminate start', '');
        (0, _terminate2.default)(devEnvProcess.pid, function (err) {
          (0, _fancyLog2.default)('orange', 'terminate end', '');
          if (err) {
            (0, _fancyLog2.default)('red', 'Oopsy during terminate:', err);
            reject();
          } else {
            (0, _fancyLog2.default)('green', 'done for terminate', '');
            _cleanup(devEnvProcess);
            _fsExtra2.default.removeSync(scrapeDir);
            resolve();
          }
        });
      });
    }
  });
}

function duringTest(_ref3) {
  var testPathPattern = _ref3.testPathPattern,
      _ref3$onStderr = _ref3.onStderr,
      onStderr = _ref3$onStderr === undefined ? function () {} : _ref3$onStderr,
      _ref3$onData = _ref3.onData,
      onData = _ref3$onData === undefined ? function () {} : _ref3$onData,
      _ref3$cleanup = _ref3.cleanup,
      cleanup = _ref3$cleanup === undefined ? function () {} : _ref3$cleanup,
      assetsToGenerate = _ref3.assetsToGenerate;

  duringProcess({
    onStderr: onStderr,
    onData: onData,
    assetsToGenerate: assetsToGenerate,
    cleanup: cleanup,
    makeShellCmdStr: function makeShellCmdStr() {
      return '(\n        npm run testpackages -- --watch=false --testPathPattern=\'' + testPathPattern + '\'\n      )';
    }
  });
}

var monorepoDir = _path2.default.resolve(__dirname, '../../../');
(0, _mocha.describe)('testdevenv', function () {
  (0, _mocha.describe)('localhost dev environment via on demand compiled script', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;

    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'document.body.append(\'' + contentToBundle + '\');',
        isDemoEntry: true
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    (0, _mocha.it)('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('localhost dev environment via pre-compiled script', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    duringServer({
      useDist: true,
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'document.body.append(\'' + contentToBundle + '\');',
        isDemoEntry: true
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    (0, _mocha.it)('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  _mocha.describe.only('localhost dev environment similar to npm usage', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    var testProjectPath = _path2.default.resolve(monorepoDir, '../test-project-for-dev-env');

    var nodeModulesOriginalPath = _path2.default.resolve(monorepoDir, './node_modules');
    var nodeModulesCopyPath = _path2.default.resolve(testProjectPath, './node_modules');
    var devEnvCopyPath = _path2.default.resolve(nodeModulesCopyPath, './dev_env');
    var binOriginalPath = _path2.default.resolve(nodeModulesOriginalPath, './.bin');
    var binCopyPath = _path2.default.resolve(nodeModulesCopyPath, './.bin');
    var devEnvCopyPackageDotJsonPath = _path2.default.resolve(devEnvCopyPath, './package.json');

    var pathToMain = _path2.default.resolve(testProjectPath, './testdevenv-main.demo.js');
    // const cmdx = `(cd ${testProjectPath} && node ./node_modules/dev_env/dist/dev_env --demo-entry='${pathToMain}')`;
    var cmdX = '(cd ' + testProjectPath + ' && ls)';
    var cmdY = '(cd ' + testProjectPath + ' && echo "document.body.append(\'' + contentToBundle + '\');" > ' + pathToMain + ' && npm run dev)';
    var cmdZ = '(cd ' + testProjectPath + ' && echo "document.body.append(\'' + contentToBundle + '\');" > ' + pathToMain + ' && node ./node_modules/dev_env/dist/dev_env)';
    var cmd = '(cd ' + testProjectPath + '  && node ./node_modules/dev_env/dist/dev_env)';
    // const cmd = `(cd ${devEnvRoot} && npm run prepublish)`;
    console.log('cmd', cmd);
    duringServer({
      // useDist,
      early: function early() {

        (0, _fancyLog2.default)('orange', 'EARLY', '');
        // return Promise.resolve();
        var prepublish = new Promise(function (resolve) {
          console.log('aaa');
          var aProcess = (0, _shellCommand2.default)('(cd ' + devEnvRoot + ' && npm run prepublish)', undefined, false);
          aProcess.on('exit', function () {
            console.log('bbb');
            resolve();
          });
        });

        return prepublish.then(function () {
          var promises = [_fsExtra2.default.removeSync(testProjectPath), _fsExtra2.default.ensureDirSync(testProjectPath), _fsExtra2.default.ensureDirSync(nodeModulesCopyPath), _fsExtra2.default.ensureDirSync(devEnvCopyPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './dist'), _path2.default.resolve(devEnvCopyPath, './dist')), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './package.json'), _path2.default.resolve(devEnvCopyPath, './package.json')), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './bin'), _path2.default.resolve(devEnvCopyPath, './bin')), _fsExtra2.default.copySync(binOriginalPath, binCopyPath), _fsExtra2.default.writeFile(pathToMain, 'document.body.append(\'' + contentToBundle + '\');'), _fsExtra2.default.writeFileSync(_path2.default.resolve(testProjectPath, './package.json'), '{\n              "name": "test-project-for-dev-env",\n              "version": "0.0.2",\n              "publishConfig": {\n                "access": "public"\n              },\n              "scripts": {\n                "dev": "devenv",\n                "devx": "devenv --demo-entry=\'' + pathToMain + '\'",\n                "start": "devenv",\n                "thing": "devenv --env=build --dirroot=$(pwd)"\n              },\n              "devDependencies": {\n                "@defualt/dev_env": "^0.0.14"\n              },\n              "repository": {\n                "type": "git",\n                "url": "https://github.com/defualt/test-project-for-dev-env.git"\n              }\n            }')];

          var i = 0;
          _fsExtra2.default.readdirSync(nodeModulesOriginalPath).forEach(function (file) {
            if (i++ < 20) {
              console.log('EARLY3');
              console.log(file);
            }
            if (file !== '.bin') {
              promises.push(_fsExtra2.default.symlinkSync(_path2.default.resolve(nodeModulesOriginalPath, file), _path2.default.resolve(nodeModulesCopyPath, file)));
            }
          });

          // const devEnvCopyPackageDotJson = fs.readJsonSync(devEnvCopyPackageDotJsonPath);
          // const devEnvBinDict = devEnvCopyPackageDotJson.bin;
          // Object.keys(devEnvBinDict).forEach((key) => {
          //   const val = devEnvBinDict[key];
          //   promises.push(
          //     fs.symlinkSync(path.resolve(devEnvCopyPath, val), path.resolve(binCopyPath, `./${key}`))
          //   );
          // });
          return Promise.all(promises);
        });
      },
      // nodePath: nodePathVar,
      makeShellCmdStrX: function makeShellCmdStrX() {
        console.log('FIND ME DO STUFF');return cmdX;
      },
      makeShellCmdStr: function makeShellCmdStr() {
        console.log('FIND ME DO STUFF');return cmd;
      },
      assetsToGenerate: [
        // {
        //   path: pathToMain,
        //   text: `document.body.append('${contentToBundle}');`,
        //   isDemoEntry: true,
        // },
        // {
        //   path: path.resolve(testProjectPath, './package.json'),
        //   text: `{
        //     "name": "test-project-for-dev-env",
        //     "version": "0.0.2",
        //     "publishConfig": {
        //       "access": "public"
        //     },
        //     "scripts": {
        //       "dev": "devenv",
        //       "devx": "devenv --demo-entry='${pathToMain}'",
        //       "start": "devenv",
        //       "thing": "devenv --env=build --dirroot=$(pwd)"
        //     },
        //     "devDependencies": {
        //       "@defualt/dev_env": "^0.0.14"
        //     },
        //     "repository": {
        //       "type": "git",
        //       "url": "https://github.com/defualt/test-project-for-dev-env.git"
        //     }
        //   }`,
        // },
      ],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
      cleanup: function cleanup() /* devEnvProcess */{
        (0, _fancyLog2.default)('orange', 'remove testProjectPath', '');
        _fsExtra2.default.removeSync(testProjectPath);
      }
    });
    (0, _mocha.it)('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('non-existent imports', function () {
    var notFoundError = false;
    var importToAttempt = 'testdevenv-some-depMAYBE-A-TYPO';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append("testdevenv-some-dep"); };'
      }],
      onStderr: function onStderr(data) {
        notFoundError = notFoundError || data.indexOf('Module not found: Error: Can\'t resolve \'' + importToAttempt + '\'') !== -1;
      }
    });
    (0, _mocha.it)('webpack bundling throws error for non-existent imports within assets', function () {
      _assert2.default.equal(notFoundError, true);
    });
  });

  (0, _mocha.describe)('existent imports', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    var importToAttempt = 'testdevenv-some-dep';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'' + contentToBundle + '\'); };'
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    (0, _mocha.it)('bundleHasContent proving import bundling', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('existent imports with npm-scoping', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    var importToAttempt = 'testdevenv-some-dep';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'@some-npm-scope/' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'' + contentToBundle + '\'); };'
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    (0, _mocha.it)('bundleHasContent proving npm-scoped import bundling', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('test', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var testsPassed = false;
    var importToAttempt = 'testdevenv-some-dep';
    duringTest({
      testPathPattern: '.*/testdevenv-some-dep/.*',
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'' + contentToBundle + '\'); };'
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.test.js'),
        text: 'test("adds 1 + 2 to equal 3", () => { expect(1 + 2).toBe(3); });'
      }],
      onStderr: function onStderr(data) {
        testsPassed = testsPassed || data.indexOf('1 passed, 1 total') !== -1;
      }
    });
    (0, _mocha.it)('testtesttest', function () {
      _assert2.default.equal(testsPassed, true);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/jest"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("color-pairs-picker");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("find-node-modules");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("has-ansi");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTBiMWEwYjVkZWI5NmY1N2FiZWUiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZmFuY3lMb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyLmpzIiwid2VicGFjazovLy8uLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vY2hhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS11dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRlcm1pbmF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiIiwid2VicGFjazovLy8uL3Rlc3RkZXZlbnYyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yLXBhaXJzLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbmQtbm9kZS1tb2R1bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGFzLWFuc2lcIiJdLCJuYW1lcyI6WyJjaGFsa0xpYiIsInJlcXVpcmUiLCJjb2xvclBhaXJzUGlja2VyIiwiaGFzQW5zaSIsImNoYWxrIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsImZvcm1hdExvZyIsImNvbG9yIiwiaGVhZGluZyIsImJnIiwiY29udHJhc3QiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJmZyIsImNvbnNvbGUiLCJsb2ciLCJyZ2IiLCJiZ1JnYiIsImFyZ3MiLCJmaW5kIiwia2V5d29yZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnN1cmVUcmFpbGluZ1NsYXNoIiwic3RyIiwicmVwbGFjZSIsImRldkVudlJvb3QiLCJfX2Rpcm5hbWUiLCJsZW5ndGgiLCJqb2luIiwiZmluZE5vZGVNb2R1bGVzIiwibm9kZVBhdGhTZXBhcmF0b3IiLCJ0ZXN0IiwicHJvY2VzcyIsInBsYXRmb3JtIiwiYmVmb3JlIiwiYWZ0ZXIiLCJjd2QiLCJub2RlUGF0aHMiLCJjb25jYXQiLCJyZWxhdGl2ZSIsImNvbW1hbmRUb1J1biIsIm9wdGlvbnMiLCJzdGRpbyIsImtpbGxQYXJlbnRPbkV4aXQiLCJjb21tYW5kIiwiY2hpbGRQcm9jZXNzIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwia2lsbCIsInBpZCIsImV4aXQiLCJkdXJpbmdQcm9jZXNzIiwib25EYXRhIiwib25TdGRlcnIiLCJtYWtlU2hlbGxDbWRTdHJYIiwibWFrZVNoZWxsQ21kU3RyIiwiY2xlYW51cCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZWFybHkiLCJhc3NldHNUb0dlbmVyYXRlIiwiZHVyaW5nUHJvY2Vzc0JlZm9yZSIsImRvbmUiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInRoZW4iLCJwYXRoVG9EZW1vRW50cnkiLCJmb3JFYWNoIiwiYXNzZXRJbmZvIiwicGF0aCIsImRpciIsImRpcm5hbWUiLCJlbnN1cmVEaXJTeW5jIiwid3JpdGVGaWxlU3luYyIsInRleHQiLCJpc0RlbW9FbnRyeSIsImNtZCIsImRldkVudlByb2Nlc3MiLCJmaW5pc2hlZCIsImZpbmlzaCIsInJlbW92ZVN5bmMiLCJzdGRvdXQiLCJkYXRhIiwiZGF0YVN0cmluZyIsInRvU3RyaW5nIiwic3RkZXJyIiwiZHVyaW5nU2VydmVyIiwidXNlRGlzdCIsIm9uQXNzZXQiLCJub2RlUGF0aCIsInNjcmFwZURpciIsIm9uY2UiLCJub2RlUGF0aFNoVmFyIiwicHJlcHVibGlzaCIsImluZGV4T2YiLCJyZWplY3QiLCJlcnIiLCJkdXJpbmdUZXN0IiwidGVzdFBhdGhQYXR0ZXJuIiwibW9ub3JlcG9EaXIiLCJjb250ZW50VG9CdW5kbGUiLCJidW5kbGVIYXNDb250ZW50IiwicmVzb3VyY2UiLCJlcXVhbCIsIm9ubHkiLCJ0ZXN0UHJvamVjdFBhdGgiLCJub2RlTW9kdWxlc09yaWdpbmFsUGF0aCIsIm5vZGVNb2R1bGVzQ29weVBhdGgiLCJkZXZFbnZDb3B5UGF0aCIsImJpbk9yaWdpbmFsUGF0aCIsImJpbkNvcHlQYXRoIiwiZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCIsInBhdGhUb01haW4iLCJjbWRYIiwiY21kWSIsImNtZFoiLCJhUHJvY2VzcyIsInVuZGVmaW5lZCIsInByb21pc2VzIiwiY29weVN5bmMiLCJ3cml0ZUZpbGUiLCJpIiwicmVhZGRpclN5bmMiLCJmaWxlIiwicHVzaCIsInN5bWxpbmtTeW5jIiwiYWxsIiwibm90Rm91bmRFcnJvciIsImltcG9ydFRvQXR0ZW1wdCIsInRlc3RzUGFzc2VkIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQSxJQUFNQSxXQUFXLG1CQUFBQyxDQUFRLEVBQVIsQ0FBakI7QUFDQSxJQUFNQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF6QjtBQUNBLElBQU1FLFVBQVUsbUJBQUFGLENBQVEsRUFBUixDQUFoQjs7QUFHQSxJQUFNRyxRQUFRLElBQUlKLFNBQVNLLFdBQWIsQ0FBeUIsRUFBRUMsT0FBTyxDQUFULEVBQXpCLENBQWQ7QUFDQSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsT0FBMUIsRUFBNEM7QUFBQTs7QUFDMUMsTUFBTUMsS0FBS1IsaUJBQWlCTSxLQUFqQixFQUF3QixFQUFFRyxVQUFVLENBQVosRUFBeEIsRUFBeUNELEVBQXpDLENBQTRDRSxLQUE1QyxDQUFrRCxHQUFsRCxFQUF1RCxDQUF2RCxFQUEwREEsS0FBMUQsQ0FBZ0UsR0FBaEUsRUFBcUUsQ0FBckUsRUFBd0VBLEtBQXhFLENBQThFLEdBQTlFLEVBQW1GQyxHQUFuRixDQUF1RixVQUFDQyxJQUFELEVBQVU7QUFDMUcsV0FBTyxDQUFDQSxJQUFSO0FBQ0QsR0FGVSxDQUFYO0FBR0EsTUFBTUMsS0FBS2IsaUJBQWlCTSxLQUFqQixFQUF3QixFQUFFRyxVQUFVLENBQVosRUFBeEIsRUFBeUNJLEVBQXpDLENBQTRDSCxLQUE1QyxDQUFrRCxHQUFsRCxFQUF1RCxDQUF2RCxFQUEwREEsS0FBMUQsQ0FBZ0UsR0FBaEUsRUFBcUUsQ0FBckUsRUFBd0VBLEtBQXhFLENBQThFLEdBQTlFLEVBQW1GQyxHQUFuRixDQUF1RixVQUFDQyxJQUFELEVBQVU7QUFDMUcsV0FBTyxDQUFDQSxJQUFSO0FBQ0QsR0FGVSxDQUFYO0FBR0FFLFVBQVFDLEdBQVIsQ0FBWSxvQkFBTUMsR0FBTixpQ0FBYUgsRUFBYixJQUFpQkksS0FBakIsc0NBQTBCVCxFQUExQixHQUE4QkQsT0FBOUIsQ0FBWjs7QUFQMEMsb0NBQU5XLElBQU07QUFBTkEsUUFBTTtBQUFBOztBQVMxQyxNQUFJLE9BQU9BLEtBQUtDLElBQUwsQ0FBVSxVQUFDUCxJQUFELEVBQVU7QUFBRSxXQUFPWCxRQUFRVyxJQUFSLENBQVA7QUFBdUIsR0FBN0MsQ0FBUCxLQUEwRCxXQUE5RCxFQUEyRTtBQUN6RUUsWUFBUUMsR0FBUixDQUFZYixNQUFNa0IsT0FBTixDQUFjZCxLQUFkLG1CQUF3QlksSUFBeEIsQ0FBWjtBQUNELEdBRkQsTUFFTztBQUFBOztBQUNMLHlCQUFRSCxHQUFSLGlCQUFlRyxJQUFmO0FBQ0Q7QUFDRjtBQUNERyxPQUFPQyxPQUFQLEdBQWlCakIsU0FBakIsQzs7Ozs7Ozs7O0FDdEJBLFNBQVNrQixtQkFBVCxDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsU0FBT0EsSUFBSUMsT0FBSixDQUFZLE1BQVosRUFBb0IsR0FBcEIsQ0FBUDtBQUNEO0FBQ0RKLE9BQU9DLE9BQVAsR0FBaUIsWUFBTTtBQUNyQixNQUFJSSxhQUFhSCxvQkFBb0JJLFNBQXBCLEVBQStCakIsS0FBL0IsQ0FBcUMsV0FBckMsQ0FBakI7QUFDQWdCLGFBQVdBLFdBQVdFLE1BQVgsR0FBb0IsQ0FBL0IsSUFBb0MsRUFBcEM7QUFDQUYsZUFBYUEsV0FBV0csSUFBWCxDQUFnQixXQUFoQixDQUFiO0FBQ0EsU0FBT0gsVUFBUDtBQUNELENBTEQsQzs7Ozs7Ozs7OztBQ0hBLElBQU1JLGtCQUFrQixtQkFBQS9CLENBQVEsRUFBUixDQUF4QjtBQUNBO0FBQ0E7QUFDQSxJQUFNZ0Msb0JBQW9CLE9BQU9DLElBQVAsQ0FBWUMsUUFBUUMsUUFBcEIsSUFBZ0MsR0FBaEMsR0FBc0MsR0FBaEU7QUFDQTtBQUNBYixPQUFPQyxPQUFQLEdBQWlCLGdCQUFzQztBQUFBLHlCQUFuQ2EsTUFBbUM7QUFBQSxNQUFuQ0EsTUFBbUMsK0JBQTFCLEVBQTBCO0FBQUEsd0JBQXRCQyxLQUFzQjtBQUFBLE1BQXRCQSxLQUFzQiw4QkFBZCxFQUFjO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVOztBQUNyRCxNQUFNQyxZQUFZSCxPQUNqQkksTUFEaUIsQ0FDVlQsZ0JBQWdCLEVBQUVVLFVBQVUsS0FBWixFQUFtQkgsUUFBbkIsRUFBaEIsQ0FEVSxFQUVqQkUsTUFGaUIsQ0FFVkgsS0FGVSxFQUdqQlAsSUFIaUIsQ0FHWkUsaUJBSFksQ0FBbEI7QUFJQSwwQkFBcUJPLFNBQXJCO0FBQ0QsQ0FORCxDOzs7Ozs7Ozs7QUNMQTtBQUNBakIsT0FBT0MsT0FBUCxHQUFpQixVQUFDbUIsWUFBRCxFQUEyRTtBQUFBLE1BQTVEQyxPQUE0RCx1RUFBbEQsRUFBRUMsT0FBTyxTQUFULEVBQWtEO0FBQUEsTUFBNUJDLGdCQUE0Qix1RUFBVCxJQUFTOztBQUMxRixNQUFNQyxVQUFVLElBQWhCO0FBQ0EsTUFBTTNCLE9BQU8sQ0FDWCxJQURXLEVBRVh1QixZQUZXLENBQWI7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFOztBQUVGLE1BQU1LLGVBQWUsbUJBQUEvQyxDQUFRLEVBQVIsQ0FBckI7QUFDQSxNQUFNZ0QsT0FBT0QsYUFBYUUsS0FBYixDQUFtQkgsT0FBbkIsRUFBNEIzQixJQUE1QixFQUFrQ3dCLFdBQVcsRUFBN0MsQ0FBYjtBQUNBSyxPQUFLRSxFQUFMLENBQVEsTUFBUixFQUFnQixVQUFDQyxJQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDaEMsUUFBSVAsZ0JBQUosRUFBc0I7QUFDcEJYLGNBQVFnQixFQUFSLENBQVcsTUFBWCxFQUFtQixZQUFNO0FBQ3ZCLFlBQUlFLE1BQUosRUFBWTtBQUNWbEIsa0JBQVFtQixJQUFSLENBQWFuQixRQUFRb0IsR0FBckIsRUFBMEJGLE1BQTFCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xsQixrQkFBUXFCLElBQVIsQ0FBYUosSUFBYjtBQUNEO0FBQ0YsT0FORDtBQU9EO0FBQ0YsR0FWRDtBQVdBLFNBQU9ILElBQVA7QUFDQTtBQUNELENBOUJELEM7Ozs7OztBQ0RBLG1DOzs7Ozs7QUNBQSxxQzs7Ozs7O0FDQUEsa0M7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7QUNDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUlBO0FBQ0EsSUFBTXJCLGFBQWEsNkJBQWNDLFNBQWQsQ0FBbkIsQyxDQWhCQTs7O0FBa0JBLFNBQVM0QixhQUFULE9BUUc7QUFBQSx5QkFQREMsTUFPQztBQUFBLE1BUERBLE1BT0MsK0JBUFEsWUFBTSxDQUFFLENBT2hCO0FBQUEsMkJBTkRDLFFBTUM7QUFBQSxNQU5EQSxRQU1DLGlDQU5VLFlBQU0sQ0FBRSxDQU1sQjtBQUFBLG1DQUxEQyxnQkFLQztBQUFBLE1BTERBLGdCQUtDLHlDQUxrQixZQUFNO0FBQUUsV0FBTyxLQUFQO0FBQWUsR0FLekM7QUFBQSxrQ0FKREMsZUFJQztBQUFBLE1BSkRBLGVBSUMsd0NBSmlCLFlBQU0sQ0FBRSxDQUl6QjtBQUFBLDBCQUhEQyxPQUdDO0FBQUEsTUFIREEsT0FHQyxnQ0FIUyxZQUFNO0FBQUUsV0FBT0MsUUFBUUMsT0FBUixFQUFQO0FBQTJCLEdBRzVDO0FBQUEsd0JBRkRDLEtBRUM7QUFBQSxNQUZEQSxLQUVDLDhCQUZPLFlBQU07QUFBRSxXQUFPRixRQUFRQyxPQUFSLEVBQVA7QUFBMkIsR0FFMUM7QUFBQSxNQURERSxnQkFDQyxRQUREQSxnQkFDQzs7QUFDRCxxQkFBTyxTQUFTQyxtQkFBVCxDQUE2QkMsSUFBN0IsRUFBbUM7QUFDeEMsU0FBS0MsT0FBTCxDQUFhLEtBQWI7QUFDQUMsZUFBVyxZQUFNO0FBQ2ZMLGNBQVFNLElBQVIsQ0FBYSxZQUFNO0FBQ2pCRCxtQkFBVyxZQUFNO0FBQ2YsY0FBSUUsd0JBQUo7QUFDQU4sMkJBQWlCTyxPQUFqQixDQUF5QixVQUFDQyxTQUFELEVBQWU7QUFDdEMsb0NBQVMsT0FBVCxFQUFrQixZQUFsQixFQUFnQ0EsVUFBVUMsSUFBMUM7QUFDQSxnQkFBTUMsTUFBTSxlQUFLQyxPQUFMLENBQWFILFVBQVVDLElBQXZCLENBQVo7QUFDQSw4QkFBR0csYUFBSCxDQUFpQkYsR0FBakI7QUFDQSw4QkFBR0csYUFBSCxDQUFpQkwsVUFBVUMsSUFBM0IsRUFBaUNELFVBQVVNLElBQTNDO0FBQ0EsZ0JBQUlOLFVBQVVPLFdBQWQsRUFBMkI7QUFDekJULGdDQUFrQkUsVUFBVUMsSUFBNUI7QUFDRDtBQUNGLFdBUkQ7QUFTQUwscUJBQVcsWUFBTTtBQUNmO0FBQ0EsZ0JBQU1ZLE1BQU1yQixnQkFBZ0JXLGVBQWhCLENBQVo7QUFDQXhELG9CQUFRQyxHQUFSLENBQVksZUFBWixFQUE0QmlFLEdBQTVCO0FBQ0EsZ0JBQU1DLGdCQUFnQiw0QkFBYUQsR0FBYixFQUFrQixJQUFsQixFQUF3QixLQUF4QixDQUF0QjtBQUNBLGdCQUFJRSxXQUFXLEtBQWY7QUFDQSxxQkFBU0MsTUFBVCxHQUFrQjtBQUNoQnJFLHNCQUFRQyxHQUFSLENBQVksYUFBWixFQUEwQm1FLFFBQTFCO0FBQ0Esa0JBQUlBLFFBQUosRUFBYztBQUNaO0FBQ0Q7QUFDRCxzQ0FBUyxPQUFULEVBQWtCLFVBQWxCLEVBQThCLE1BQTlCO0FBQ0FBLHlCQUFXLElBQVg7QUFDQXBFLHNCQUFRQyxHQUFSLENBQVksNEJBQVo7QUFDQTZDLHNCQUFRcUIsYUFBUixFQUF1QlosSUFBdkIsQ0FBNEIsWUFBTTtBQUNoQyx3Q0FBUyxRQUFULEVBQW1CLGVBQW5CLEVBQW9DLEVBQXBDO0FBQ0FMLGlDQUFpQk8sT0FBakIsQ0FBeUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ3RDLHNCQUFNRSxNQUFNLGVBQUtDLE9BQUwsQ0FBYUgsVUFBVUMsSUFBdkIsQ0FBWjtBQUNBLG9DQUFHVyxVQUFILENBQWNWLEdBQWQ7QUFDRCxpQkFIRDtBQUlBLHdDQUFTLFFBQVQsRUFBbUIseUJBQW5CLEVBQThDLEVBQTlDO0FBQ0FSO0FBQ0QsZUFSRDtBQVNEO0FBQ0RlLDBCQUFjSSxNQUFkLENBQXFCcEMsRUFBckIsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBQ3FDLElBQUQsRUFBVTtBQUN4QyxrQkFBTUMsYUFBYUQsS0FBS0UsUUFBTCxFQUFuQjtBQUNBLHNDQUFTLE1BQVQsRUFBaUIsdUJBQWpCLEVBQTBDRCxVQUExQztBQUNBL0IscUJBQU8rQixVQUFQLEVBQW1CSixNQUFuQjtBQUNELGFBSkQ7QUFLQUYsMEJBQWNRLE1BQWQsQ0FBcUJ4QyxFQUFyQixDQUF3QixNQUF4QixFQUFnQyxVQUFDcUMsSUFBRCxFQUFVO0FBQ3hDLGtCQUFJQSxRQUFRQSxLQUFLRSxRQUFqQixFQUEyQjtBQUN6QkYsdUJBQU9BLEtBQUtFLFFBQUwsRUFBUDtBQUNBL0IseUJBQVM2QixJQUFUO0FBQ0Q7QUFDRCxzQ0FBUyxNQUFULEVBQWlCLHVCQUFqQixFQUEwQ0EsSUFBMUM7QUFDRCxhQU5EO0FBT0FMLDBCQUFjaEMsRUFBZCxDQUFpQixNQUFqQixFQUF5QixVQUFDQyxJQUFELEVBQVU7QUFDakMsc0NBQVMsUUFBVCxFQUFtQixpQ0FBbkIsRUFBc0RBLElBQXREO0FBQ0FpQztBQUNELGFBSEQ7QUFJRCxXQXhDRCxFQXdDRyxDQXhDSDtBQXlDRCxTQXBERCxFQW9ERyxDQXBESDtBQXFERCxPQXRERDtBQXVERCxLQXhERCxFQXdERyxDQXhESDtBQXlERCxHQTNERDtBQTRERDs7QUFFRCxTQUFTTyxZQUFULFFBV0c7QUFBQSxNQVZEQyxPQVVDLFNBVkRBLE9BVUM7QUFBQSw0QkFUREMsT0FTQztBQUFBLE1BVERBLE9BU0MsaUNBVFMsWUFBTSxDQUFFLENBU2pCO0FBQUEsMkJBUkRwQyxNQVFDO0FBQUEsTUFSREEsT0FRQyxnQ0FSUSxZQUFNLENBQUUsQ0FRaEI7QUFBQSw2QkFQREMsUUFPQztBQUFBLE1BUERBLFFBT0Msa0NBUFUsWUFBTSxDQUFFLENBT2xCO0FBQUEsNEJBTkRHLE9BTUM7QUFBQSxNQU5EQSxRQU1DLGlDQU5TLFlBQU07QUFBRSxXQUFPQyxRQUFRQyxPQUFSLEVBQVA7QUFBMkIsR0FNNUM7QUFBQSxNQUxESCxnQkFLQyxTQUxEQSxlQUtDO0FBQUEsTUFKREssZ0JBSUMsU0FKREEsZ0JBSUM7QUFBQSxNQUhENkIsUUFHQyxTQUhEQSxRQUdDO0FBQUEsTUFGRG5DLGdCQUVDLFNBRkRBLGdCQUVDO0FBQUEsTUFEREssS0FDQyxTQUREQSxLQUNDOztBQUNELE1BQU0rQixZQUFZLGVBQUtoQyxPQUFMLENBQWFuQyxTQUFiLEVBQXdCLFVBQXhCLENBQWxCO0FBQ0EsTUFBSW9FLE9BQU8sS0FBWDtBQUNBeEMsZ0JBQWM7QUFDWlEsZ0JBRFk7QUFFWkwsc0NBRlk7QUFHWkMscUJBQWlCLHlCQUFDVyxlQUFELEVBQXFCO0FBQ3BDLFVBQU0wQixnQkFBZ0JILFdBQWNBLFFBQWQsU0FBNEIsRUFBbEQ7QUFDQS9FLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCaUYsYUFBeEI7QUFDQSxVQUFJckMsZ0JBQUosRUFBcUI7QUFDbkIsZUFBT0EsaUJBQWdCVyxlQUFoQixDQUFQO0FBQ0Q7QUFDRCxVQUFNMkIsYUFBYU4sbUJBQWlCakUsVUFBakIsbUNBQTJELEVBQTlFO0FBQ0FaLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsNkJBQ0lrRixVQURKLHNDQUM4QzNCLGVBRDlDLFdBQ2lFcUIsVUFBVSxhQUFWLEdBQTBCLEVBRDNGO0FBR0QsS0FyQlc7QUFzQlpuQyxZQUFRLGdCQUFDK0IsVUFBRCxFQUFhSixNQUFiLEVBQXdCO0FBQzlCM0IsY0FBTytCLFVBQVAsRUFBbUJKLE1BQW5CO0FBQ0EsVUFBSUksV0FBV1csT0FBWCxDQUFtQiw2QkFBbkIsTUFBc0QsQ0FBQyxDQUF2RCxJQUE0RCxDQUFDSCxJQUFqRSxFQUF1RTtBQUNyRUEsZUFBTyxJQUFQO0FBQ0FaO0FBQ0Q7QUFDRCxVQUFJSSxXQUFXVyxPQUFYLENBQW1CLGlDQUFuQixNQUEwRCxDQUFDLENBQTNELElBQWdFLENBQUNILElBQXJFLEVBQTJFO0FBQ3pFQSxlQUFPLElBQVA7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNBO0FBQ0Q7QUFDRixLQWhEVztBQWlEWnRDLHNCQWpEWTtBQWtEWk8sc0NBbERZO0FBbURaSixhQUFTLGlCQUFDcUIsYUFBRCxFQUFtQjtBQUMxQixhQUFPLElBQUlwQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVcUMsTUFBVixFQUFxQjtBQUN0QyxnQ0FBUyxRQUFULEVBQW1CLGlCQUFuQixFQUFzQyxFQUF0QztBQUNBLGlDQUFVbEIsY0FBYzVCLEdBQXhCLEVBQTZCLFVBQUMrQyxHQUFELEVBQVM7QUFDcEMsa0NBQVMsUUFBVCxFQUFtQixlQUFuQixFQUFvQyxFQUFwQztBQUNBLGNBQUlBLEdBQUosRUFBUztBQUNQLG9DQUFTLEtBQVQsRUFBZ0IseUJBQWhCLEVBQTJDQSxHQUEzQztBQUNBRDtBQUNELFdBSEQsTUFHTztBQUNMLG9DQUFTLE9BQVQsRUFBa0Isb0JBQWxCLEVBQXdDLEVBQXhDO0FBQ0F2QyxxQkFBUXFCLGFBQVI7QUFDQSw4QkFBR0csVUFBSCxDQUFjVSxTQUFkO0FBQ0FoQztBQUNEO0FBQ0YsU0FYRDtBQVlELE9BZE0sQ0FBUDtBQWVEO0FBbkVXLEdBQWQ7QUFxRUQ7O0FBRUQsU0FBU3VDLFVBQVQsUUFNRztBQUFBLE1BTERDLGVBS0MsU0FMREEsZUFLQztBQUFBLDZCQUpEN0MsUUFJQztBQUFBLE1BSkRBLFFBSUMsa0NBSlUsWUFBTSxDQUFFLENBSWxCO0FBQUEsMkJBSERELE1BR0M7QUFBQSxNQUhEQSxNQUdDLGdDQUhRLFlBQU0sQ0FBRSxDQUdoQjtBQUFBLDRCQUZESSxPQUVDO0FBQUEsTUFGREEsT0FFQyxpQ0FGUyxZQUFNLENBQUUsQ0FFakI7QUFBQSxNQURESSxnQkFDQyxTQUREQSxnQkFDQzs7QUFDRFQsZ0JBQWM7QUFDWkUsc0JBRFk7QUFFWkQsa0JBRlk7QUFHWlEsc0NBSFk7QUFJWkosb0JBSlk7QUFLWkQscUJBQWlCLDJCQUFNO0FBQ3JCLHVGQUM2RDJDLGVBRDdEO0FBR0Q7QUFUVyxHQUFkO0FBV0Q7O0FBRUQsSUFBTUMsY0FBYyxlQUFLekMsT0FBTCxDQUFhbkMsU0FBYixFQUF3QixXQUF4QixDQUFwQjtBQUNBLHFCQUFTLFlBQVQsRUFBdUIsWUFBTTtBQUMzQix1QkFBUyx5REFBVCxFQUFvRSxZQUFNO0FBQ3hFLFFBQU02RSxrQkFBa0IsbUJBQXhCO0FBQ0EsUUFBSUMsbUJBQW1CLEtBQXZCOztBQUVBZixpQkFBYTtBQUNYMUIsd0JBQWtCLENBQ2hCO0FBQ0VTLGNBQU0sZUFBS1gsT0FBTCxDQUFheUMsV0FBYixFQUEwQiwrQ0FBMUIsQ0FEUjtBQUVFekIsMENBQStCMEIsZUFBL0IsU0FGRjtBQUdFekIscUJBQWE7QUFIZixPQURnQixDQURQO0FBUVhhLGVBQVMsaUJBQUNjLFFBQUQsRUFBYztBQUNyQkQsMkJBQW1CQSxvQkFBb0JDLFNBQVM1QixJQUFULENBQWNvQixPQUFkLENBQXNCTSxlQUF0QixNQUEyQyxDQUFDLENBQW5GO0FBQ0Q7QUFWVSxLQUFiO0FBWUEsbUJBQUcsd0JBQUgsRUFBNkIsWUFBTTtBQUNqQyx1QkFBT0csS0FBUCxDQUFhRixnQkFBYixFQUErQixJQUEvQjtBQUNELEtBRkQ7QUFHRCxHQW5CRDs7QUFxQkEsdUJBQVMsbURBQVQsRUFBOEQsWUFBTTtBQUNsRSxRQUFNRCxrQkFBa0IsbUJBQXhCO0FBQ0EsUUFBSUMsbUJBQW1CLEtBQXZCO0FBQ0FmLGlCQUFhO0FBQ1hDLGVBQVMsSUFERTtBQUVYM0Isd0JBQWtCLENBQ2hCO0FBQ0VTLGNBQU0sZUFBS1gsT0FBTCxDQUFheUMsV0FBYixFQUEwQiwrQ0FBMUIsQ0FEUjtBQUVFekIsMENBQStCMEIsZUFBL0IsU0FGRjtBQUdFekIscUJBQWE7QUFIZixPQURnQixDQUZQO0FBU1hhLGVBQVMsaUJBQUNjLFFBQUQsRUFBYztBQUNyQkQsMkJBQW1CQSxvQkFBb0JDLFNBQVM1QixJQUFULENBQWNvQixPQUFkLENBQXNCTSxlQUF0QixNQUEyQyxDQUFDLENBQW5GO0FBQ0Q7QUFYVSxLQUFiO0FBYUEsbUJBQUcsd0JBQUgsRUFBNkIsWUFBTTtBQUNqQyx1QkFBT0csS0FBUCxDQUFhRixnQkFBYixFQUErQixJQUEvQjtBQUNELEtBRkQ7QUFHRCxHQW5CRDs7QUFxQkEsa0JBQVNHLElBQVQsQ0FBYyxnREFBZCxFQUFnRSxZQUFNO0FBQ3BFLFFBQU1KLGtCQUFrQixtQkFBeEI7QUFDQSxRQUFJQyxtQkFBbUIsS0FBdkI7QUFDQSxRQUFNSSxrQkFBa0IsZUFBSy9DLE9BQUwsQ0FBYXlDLFdBQWIsRUFBMEIsNkJBQTFCLENBQXhCOztBQUVBLFFBQU1PLDBCQUEwQixlQUFLaEQsT0FBTCxDQUFheUMsV0FBYixFQUEwQixnQkFBMUIsQ0FBaEM7QUFDQSxRQUFNUSxzQkFBc0IsZUFBS2pELE9BQUwsQ0FBYStDLGVBQWIsRUFBOEIsZ0JBQTlCLENBQTVCO0FBQ0EsUUFBTUcsaUJBQWlCLGVBQUtsRCxPQUFMLENBQWFpRCxtQkFBYixFQUFrQyxXQUFsQyxDQUF2QjtBQUNBLFFBQU1FLGtCQUFrQixlQUFLbkQsT0FBTCxDQUFhZ0QsdUJBQWIsRUFBc0MsUUFBdEMsQ0FBeEI7QUFDQSxRQUFNSSxjQUFjLGVBQUtwRCxPQUFMLENBQWFpRCxtQkFBYixFQUFrQyxRQUFsQyxDQUFwQjtBQUNBLFFBQU1JLCtCQUErQixlQUFLckQsT0FBTCxDQUFha0QsY0FBYixFQUE2QixnQkFBN0IsQ0FBckM7O0FBSUEsUUFBTUksYUFBYSxlQUFLdEQsT0FBTCxDQUFhK0MsZUFBYixFQUE4QiwyQkFBOUIsQ0FBbkI7QUFDQTtBQUNBLFFBQU1RLGdCQUFjUixlQUFkLFlBQU47QUFDQSxRQUFNUyxnQkFBY1QsZUFBZCx5Q0FBZ0VMLGVBQWhFLGdCQUF5RlksVUFBekYscUJBQU47QUFDQSxRQUFNRyxnQkFBY1YsZUFBZCx5Q0FBZ0VMLGVBQWhFLGdCQUF5RlksVUFBekYsa0RBQU47QUFDQSxRQUFNcEMsZUFBYTZCLGVBQWIsbURBQU47QUFDQTtBQUNBL0YsWUFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJpRSxHQUFuQjtBQUNBVSxpQkFBYTtBQUNYO0FBQ0EzQixhQUFPLGlCQUFNOztBQUVYLGdDQUFTLFFBQVQsRUFBbUIsT0FBbkIsRUFBNEIsRUFBNUI7QUFDQTtBQUNBLFlBQU1rQyxhQUFhLElBQUlwQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzFDaEQsa0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsY0FBTXlHLFdBQVcscUNBQW9COUYsVUFBcEIsOEJBQXlEK0YsU0FBekQsRUFBb0UsS0FBcEUsQ0FBakI7QUFDQUQsbUJBQVN2RSxFQUFULENBQVksTUFBWixFQUFvQixZQUFNO0FBQ3hCbkMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0ErQztBQUNELFdBSEQ7QUFJRCxTQVBrQixDQUFuQjs7QUFTQSxlQUFPbUMsV0FBVzVCLElBQVgsQ0FBZ0IsWUFBTTtBQUMzQixjQUFNcUQsV0FBVyxDQUNmLGtCQUFHdEMsVUFBSCxDQUFjeUIsZUFBZCxDQURlLEVBRWYsa0JBQUdqQyxhQUFILENBQWlCaUMsZUFBakIsQ0FGZSxFQUdmLGtCQUFHakMsYUFBSCxDQUFpQm1DLG1CQUFqQixDQUhlLEVBSWYsa0JBQUduQyxhQUFILENBQWlCb0MsY0FBakIsQ0FKZSxFQUtmLGtCQUFHVyxRQUFILENBQVksZUFBSzdELE9BQUwsQ0FBYXBDLFVBQWIsRUFBeUIsUUFBekIsQ0FBWixFQUFnRCxlQUFLb0MsT0FBTCxDQUFha0QsY0FBYixFQUE2QixRQUE3QixDQUFoRCxDQUxlLEVBTWYsa0JBQUdXLFFBQUgsQ0FBWSxlQUFLN0QsT0FBTCxDQUFhcEMsVUFBYixFQUF5QixnQkFBekIsQ0FBWixFQUF3RCxlQUFLb0MsT0FBTCxDQUFha0QsY0FBYixFQUE2QixnQkFBN0IsQ0FBeEQsQ0FOZSxFQU9mLGtCQUFHVyxRQUFILENBQVksZUFBSzdELE9BQUwsQ0FBYXBDLFVBQWIsRUFBeUIsT0FBekIsQ0FBWixFQUErQyxlQUFLb0MsT0FBTCxDQUFha0QsY0FBYixFQUE2QixPQUE3QixDQUEvQyxDQVBlLEVBUWYsa0JBQUdXLFFBQUgsQ0FBWVYsZUFBWixFQUE2QkMsV0FBN0IsQ0FSZSxFQVNmLGtCQUFHVSxTQUFILENBQWFSLFVBQWIsOEJBQWtEWixlQUFsRCxVQVRlLEVBVWYsa0JBQUczQixhQUFILENBQWlCLGVBQUtmLE9BQUwsQ0FBYStDLGVBQWIsRUFBOEIsZ0JBQTlCLENBQWpCLHFTQVFvQ08sVUFScEMsc1pBVmUsQ0FBakI7O0FBZ0NBLGNBQUlTLElBQUksQ0FBUjtBQUNBLDRCQUFHQyxXQUFILENBQWVoQix1QkFBZixFQUF3Q3ZDLE9BQXhDLENBQWdELFVBQUN3RCxJQUFELEVBQVU7QUFDeEQsZ0JBQUlGLE1BQU0sRUFBVixFQUFjO0FBQ1ovRyxzQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQUQsc0JBQVFDLEdBQVIsQ0FBWWdILElBQVo7QUFDRDtBQUNELGdCQUFJQSxTQUFTLE1BQWIsRUFBcUI7QUFDbkJMLHVCQUFTTSxJQUFULENBQ0Usa0JBQUdDLFdBQUgsQ0FBZSxlQUFLbkUsT0FBTCxDQUFhZ0QsdUJBQWIsRUFBc0NpQixJQUF0QyxDQUFmLEVBQTRELGVBQUtqRSxPQUFMLENBQWFpRCxtQkFBYixFQUFrQ2dCLElBQWxDLENBQTVELENBREY7QUFHRDtBQUNGLFdBVkQ7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFPbEUsUUFBUXFFLEdBQVIsQ0FBWVIsUUFBWixDQUFQO0FBQ0QsU0F2RE0sQ0FBUDtBQXdERCxPQXZFVTtBQXdFWDtBQUNBaEUsd0JBQWtCLDRCQUFNO0FBQUM1QyxnQkFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWlDLE9BQU9zRyxJQUFQO0FBQWMsT0F6RTdEO0FBMEVYMUQsdUJBQWlCLDJCQUFNO0FBQUM3QyxnQkFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWlDLE9BQU9pRSxHQUFQO0FBQWEsT0ExRTNEO0FBMkVYaEIsd0JBQWtCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUJnQixPQTNFUDtBQXlHWDRCLGVBQVMsaUJBQUNjLFFBQUQsRUFBYztBQUNyQkQsMkJBQW1CQSxvQkFBb0JDLFNBQVM1QixJQUFULENBQWNvQixPQUFkLENBQXNCTSxlQUF0QixNQUEyQyxDQUFDLENBQW5GO0FBQ0QsT0EzR1U7QUE0R1g1QyxlQUFTLG1CQUFDLG1CQUF3QjtBQUNoQyxnQ0FBUyxRQUFULEVBQW1CLHdCQUFuQixFQUE2QyxFQUE3QztBQUNBLDBCQUFHd0IsVUFBSCxDQUFjeUIsZUFBZDtBQUNEO0FBL0dVLEtBQWI7QUFpSEEsbUJBQUcsd0JBQUgsRUFBNkIsWUFBTTtBQUNqQyx1QkFBT0YsS0FBUCxDQUFhRixnQkFBYixFQUErQixJQUEvQjtBQUNELEtBRkQ7QUFHRCxHQTFJRDs7QUE0SUEsdUJBQVMsc0JBQVQsRUFBaUMsWUFBTTtBQUNyQyxRQUFJMEIsZ0JBQWdCLEtBQXBCO0FBQ0EsUUFBTUMsa0JBQWtCLGlDQUF4QjtBQUNBMUMsaUJBQWE7QUFDWDFCLHdCQUFrQixDQUNoQjtBQUNFUyxjQUFNLGVBQUtYLE9BQUwsQ0FBYXlDLFdBQWIsRUFBMEIsK0NBQTFCLENBRFI7QUFFRXpCLHlDQUE4QnNELGVBQTlCLHFCQUZGO0FBR0VyRCxxQkFBYTtBQUhmLE9BRGdCLEVBTWhCO0FBQ0VOLGNBQU0sZUFBS1gsT0FBTCxDQUFheUMsV0FBYixFQUEwQix1REFBMUIsQ0FEUjtBQUVFekIsY0FBTTtBQUZSLE9BTmdCLENBRFA7QUFZWHJCLGdCQUFVLGtCQUFDNkIsSUFBRCxFQUFVO0FBQ2xCNkMsd0JBQWdCQSxpQkFBaUI3QyxLQUFLWSxPQUFMLGdEQUF3RGtDLGVBQXhELGFBQWdGLENBQUMsQ0FBbEg7QUFDRDtBQWRVLEtBQWI7QUFnQkEsbUJBQUcsc0VBQUgsRUFBMkUsWUFBTTtBQUMvRSx1QkFBT3pCLEtBQVAsQ0FBYXdCLGFBQWIsRUFBNEIsSUFBNUI7QUFDRCxLQUZEO0FBR0QsR0F0QkQ7O0FBd0JBLHVCQUFTLGtCQUFULEVBQTZCLFlBQU07QUFDakMsUUFBTTNCLGtCQUFrQixtQkFBeEI7QUFDQSxRQUFJQyxtQkFBbUIsS0FBdkI7QUFDQSxRQUFNMkIsa0JBQWtCLHFCQUF4QjtBQUNBMUMsaUJBQWE7QUFDWDFCLHdCQUFrQixDQUNoQjtBQUNFUyxjQUFNLGVBQUtYLE9BQUwsQ0FBYXlDLFdBQWIsRUFBMEIsK0NBQTFCLENBRFI7QUFFRXpCLHlDQUE4QnNELGVBQTlCLHFCQUZGO0FBR0VyRCxxQkFBYTtBQUhmLE9BRGdCLEVBTWhCO0FBQ0VOLGNBQU0sZUFBS1gsT0FBTCxDQUFheUMsV0FBYixFQUEwQix1REFBMUIsQ0FEUjtBQUVFekIsaUVBQXNEMEIsZUFBdEQ7QUFGRixPQU5nQixDQURQO0FBWVhaLGVBQVMsaUJBQUNjLFFBQUQsRUFBYztBQUNyQkQsMkJBQW1CQSxvQkFBb0JDLFNBQVM1QixJQUFULENBQWNvQixPQUFkLENBQXNCTSxlQUF0QixNQUEyQyxDQUFDLENBQW5GO0FBQ0Q7QUFkVSxLQUFiO0FBZ0JBLG1CQUFHLDBDQUFILEVBQStDLFlBQU07QUFDbkQsdUJBQU9HLEtBQVAsQ0FBYUYsZ0JBQWIsRUFBK0IsSUFBL0I7QUFDRCxLQUZEO0FBR0QsR0F2QkQ7O0FBeUJBLHVCQUFTLG1DQUFULEVBQThDLFlBQU07QUFDbEQsUUFBTUQsa0JBQWtCLG1CQUF4QjtBQUNBLFFBQUlDLG1CQUFtQixLQUF2QjtBQUNBLFFBQU0yQixrQkFBa0IscUJBQXhCO0FBQ0ExQyxpQkFBYTtBQUNYMUIsd0JBQWtCLENBQ2hCO0FBQ0VTLGNBQU0sZUFBS1gsT0FBTCxDQUFheUMsV0FBYixFQUEwQiwrQ0FBMUIsQ0FEUjtBQUVFekIseURBQThDc0QsZUFBOUMscUJBRkY7QUFHRXJELHFCQUFhO0FBSGYsT0FEZ0IsRUFNaEI7QUFDRU4sY0FBTSxlQUFLWCxPQUFMLENBQWF5QyxXQUFiLEVBQTBCLHVEQUExQixDQURSO0FBRUV6QixpRUFBc0QwQixlQUF0RDtBQUZGLE9BTmdCLENBRFA7QUFZWFosZUFBUyxpQkFBQ2MsUUFBRCxFQUFjO0FBQ3JCRCwyQkFBbUJBLG9CQUFvQkMsU0FBUzVCLElBQVQsQ0FBY29CLE9BQWQsQ0FBc0JNLGVBQXRCLE1BQTJDLENBQUMsQ0FBbkY7QUFDRDtBQWRVLEtBQWI7QUFnQkEsbUJBQUcscURBQUgsRUFBMEQsWUFBTTtBQUM5RCx1QkFBT0csS0FBUCxDQUFhRixnQkFBYixFQUErQixJQUEvQjtBQUNELEtBRkQ7QUFHRCxHQXZCRDs7QUF5QkEsdUJBQVMsTUFBVCxFQUFpQixZQUFNO0FBQ3JCLFFBQU1ELGtCQUFrQixtQkFBeEI7QUFDQSxRQUFJNkIsY0FBYyxLQUFsQjtBQUNBLFFBQU1ELGtCQUFrQixxQkFBeEI7QUFDQS9CLGVBQVc7QUFDVEMsdUJBQWlCLDJCQURSO0FBRVR0Qyx3QkFBa0IsQ0FDaEI7QUFDRVMsY0FBTSxlQUFLWCxPQUFMLENBQWF5QyxXQUFiLEVBQTBCLCtDQUExQixDQURSO0FBRUV6Qix5Q0FBOEJzRCxlQUE5QixxQkFGRjtBQUdFckQscUJBQWE7QUFIZixPQURnQixFQU1oQjtBQUNFTixjQUFNLGVBQUtYLE9BQUwsQ0FBYXlDLFdBQWIsRUFBMEIsdURBQTFCLENBRFI7QUFFRXpCLGlFQUFzRDBCLGVBQXREO0FBRkYsT0FOZ0IsRUFVaEI7QUFDRS9CLGNBQU0sZUFBS1gsT0FBTCxDQUFheUMsV0FBYixFQUEwQiw0REFBMUIsQ0FEUjtBQUVFekIsY0FBTTtBQUZSLE9BVmdCLENBRlQ7QUFpQlRyQixnQkFBVSxrQkFBQzZCLElBQUQsRUFBVTtBQUNsQitDLHNCQUFjQSxlQUFlL0MsS0FBS1ksT0FBTCxDQUFhLG1CQUFiLE1BQXNDLENBQUMsQ0FBcEU7QUFDRDtBQW5CUSxLQUFYO0FBcUJBLG1CQUFHLGNBQUgsRUFBbUIsWUFBTTtBQUN2Qix1QkFBT1MsS0FBUCxDQUFhMEIsV0FBYixFQUEwQixJQUExQjtBQUNELEtBRkQ7QUFHRCxHQTVCRDtBQTZCRCxDQTlSRCxFOzs7Ozs7O0FDbk1BLGtDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSxxQyIsImZpbGUiOiJ0ZXN0ZGV2ZW52Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwYjFhMGI1ZGViOTZmNTdhYmVlIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuY29uc3QgY2hhbGtMaWIgPSByZXF1aXJlKCdjaGFsaycpO1xuY29uc3QgY29sb3JQYWlyc1BpY2tlciA9IHJlcXVpcmUoJ2NvbG9yLXBhaXJzLXBpY2tlcicpO1xuY29uc3QgaGFzQW5zaSA9IHJlcXVpcmUoJ2hhcy1hbnNpJyk7XG5cblxuY29uc3QgY2hhbGsgPSBuZXcgY2hhbGtMaWIuY29uc3RydWN0b3IoeyBsZXZlbDogMyB9KTtcbmZ1bmN0aW9uIGZvcm1hdExvZyhjb2xvciwgaGVhZGluZywgLi4uYXJncykge1xuICBjb25zdCBiZyA9IGNvbG9yUGFpcnNQaWNrZXIoY29sb3IsIHsgY29udHJhc3Q6IDggfSkuYmcuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuICtpdGVtO1xuICB9KTtcbiAgY29uc3QgZmcgPSBjb2xvclBhaXJzUGlja2VyKGNvbG9yLCB7IGNvbnRyYXN0OiA4IH0pLmZnLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAraXRlbTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGNoYWxrLnJnYiguLi5mZykuYmdSZ2IoLi4uYmcpKGhlYWRpbmcpKTtcblxuICBpZiAodHlwZW9mIGFyZ3MuZmluZCgoaXRlbSkgPT4geyByZXR1cm4gaGFzQW5zaShpdGVtKTsgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5sb2coY2hhbGsua2V5d29yZChjb2xvcikoLi4uYXJncykpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdExvZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL2ZhbmN5TG9nLmpzIiwiZnVuY3Rpb24gZW5zdXJlVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcbiAgbGV0IGRldkVudlJvb3QgPSBlbnN1cmVUcmFpbGluZ1NsYXNoKF9fZGlybmFtZSkuc3BsaXQoJy9kZXZfZW52LycpO1xuICBkZXZFbnZSb290W2RldkVudlJvb3QubGVuZ3RoIC0gMV0gPSAnJztcbiAgZGV2RW52Um9vdCA9IGRldkVudlJvb3Quam9pbignL2Rldl9lbnYvJyk7XG4gIHJldHVybiBkZXZFbnZSb290O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL2dldERldkVudlJvb3QuanMiLCJjb25zdCBmaW5kTm9kZU1vZHVsZXMgPSByZXF1aXJlKCdmaW5kLW5vZGUtbW9kdWxlcycpO1xuLy8gZm9yIE5PREVfUEFUSCwgb24gd2luZG93cywgc2VwZXJhdG9yIGlzIDsgaW5zdGVhZCBvZiA6LiAgV2hhdCBmdW4uXG4vLyBzZXBlcmF0b3IgaXMgYmFzaCBhcnJheSBhcmd1bWVudCBzZXBlcmF0b3Igc3ludGF4LlxuY29uc3Qgbm9kZVBhdGhTZXBhcmF0b3IgPSAvXndpbi8udGVzdChwcm9jZXNzLnBsYXRmb3JtKSA/ICc7JyA6ICc6Jztcbi8vIEZpbmQgYWxsIGRpcmVjdG9yaWVzIG9mIG5vZGVfbW9kdWxlcyB0aGF0IGFwcGx5IHRvIHRoZSBmaWxlIHdlIGFyZSBjb21waWxpbmcuXG5tb2R1bGUuZXhwb3J0cyA9ICh7IGJlZm9yZSA9IFtdLCBhZnRlciA9IFtdLCBjd2QgfSkgPT4ge1xuICBjb25zdCBub2RlUGF0aHMgPSBiZWZvcmVcbiAgLmNvbmNhdChmaW5kTm9kZU1vZHVsZXMoeyByZWxhdGl2ZTogZmFsc2UsIGN3ZCB9KSlcbiAgLmNvbmNhdChhZnRlcilcbiAgLmpvaW4obm9kZVBhdGhTZXBhcmF0b3IpO1xuICByZXR1cm4gYE5PREVfUEFUSD0nJHtub2RlUGF0aHN9J2A7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbm1vZHVsZS5leHBvcnRzID0gKGNvbW1hbmRUb1J1biwgb3B0aW9ucyA9IHsgc3RkaW86ICdpbmhlcml0JyB9LCBraWxsUGFyZW50T25FeGl0ID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBjb21tYW5kID0gJ3NoJztcbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWMnLFxuICAgIGNvbW1hbmRUb1J1bixcbiAgXTtcbiAgLy9cbiAgLy8ga2V4ZWMgZG9lc24ndCB3b3JrIGluIHdpbmRvd3MsIHNvIGZhbGxiYWNrIHRvIGNoaWxkX3Byb2Nlc3Muc3Bhd25cbiAgLy8gdGhpcyBsb2dpYyBjb3BpZWQgZnJvbSBiYWJlbC1jbGkvbGliL2JhYmVsLW5vZGUuanNcbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCBrZXhlYyA9IHJlcXVpcmUoJ2tleGVjJyk7XG4gIC8vICAga2V4ZWMoY29tbWFuZCwgYXJncyk7XG4gIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGlmIChlcnIuY29kZSAhPT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB0aHJvdyBlcnI7XG5cbiAgY29uc3QgY2hpbGRQcm9jZXNzID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuICBjb25zdCBwcm9jID0gY2hpbGRQcm9jZXNzLnNwYXduKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMgfHwge30pO1xuICBwcm9jLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgIGlmIChraWxsUGFyZW50T25FeGl0KSB7XG4gICAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWduYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2M7XG4gIC8vIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWV4dHJhXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9jaGFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb2NoYVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdXVpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtdXVpZFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGVybWluYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidGVybWluYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vic2l0ZS1zY3JhcGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2Vic2l0ZS1zY3JhcGVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCB0ZXJtaW5hdGUgZnJvbSAndGVybWluYXRlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBzY3JhcGUgZnJvbSAnd2Vic2l0ZS1zY3JhcGVyJztcbmltcG9ydCB7IHY0IGFzIG1ha2VVdWlkIH0gZnJvbSAnbm9kZS11dWlkJztcbmltcG9ydCB7IGl0LCBkZXNjcmliZSwgYmVmb3JlIH0gZnJvbSAnbW9jaGEnO1xuaW1wb3J0IHNoZWxsQ29tbWFuZCBmcm9tICcuLi9jb3JlL3NoZWxsQ29tbWFuZCc7XG5pbXBvcnQgZmFuY3lMb2cgZnJvbSAnLi4vY29yZS9mYW5jeUxvZyc7XG5pbXBvcnQgZ2V0RGV2RW52Um9vdCBmcm9tICcuLi9jb3JlL2dldERldkVudlJvb3QnO1xuaW1wb3J0IGdldE5vZGVQYXRoU2hWYXIgZnJvbSAnLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyJztcblxuXG5cbi8vIGZhbmN5TG9nKCdvcmFuZ2UnLCAnc3RhcnQgdGVybWluYXRlJywgJ2FzZGYnKTtcbmNvbnN0IGRldkVudlJvb3QgPSBnZXREZXZFbnZSb290KF9fZGlybmFtZSk7XG5cbmZ1bmN0aW9uIGR1cmluZ1Byb2Nlc3Moe1xuICBvbkRhdGEgPSAoKSA9PiB7fSxcbiAgb25TdGRlcnIgPSAoKSA9PiB7fSxcbiAgbWFrZVNoZWxsQ21kU3RyWCA9ICgpID0+IHsgcmV0dXJuICdwd2QnOyB9LFxuICBtYWtlU2hlbGxDbWRTdHIgPSAoKSA9PiB7fSxcbiAgY2xlYW51cCA9ICgpID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9LFxuICBlYXJseSA9ICgpID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9LFxuICBhc3NldHNUb0dlbmVyYXRlLFxufSkge1xuICBiZWZvcmUoZnVuY3Rpb24gZHVyaW5nUHJvY2Vzc0JlZm9yZShkb25lKSB7XG4gICAgdGhpcy50aW1lb3V0KDYwMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVhcmx5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxldCBwYXRoVG9EZW1vRW50cnk7XG4gICAgICAgICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICAgIGZhbmN5TG9nKCdncmVlbicsICdHRU5FUkFUSU5HJywgYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMoZGlyKTtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXNzZXRJbmZvLnBhdGgsIGFzc2V0SW5mby50ZXh0KTtcbiAgICAgICAgICAgIGlmIChhc3NldEluZm8uaXNEZW1vRW50cnkpIHtcbiAgICAgICAgICAgICAgcGF0aFRvRGVtb0VudHJ5ID0gYXNzZXRJbmZvLnBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCBjbWQgPSBtYWtlU2hlbGxDbWRTdHJYKHBhdGhUb0RlbW9FbnRyeSk7XG4gICAgICAgICAgICBjb25zdCBjbWQgPSBtYWtlU2hlbGxDbWRTdHIocGF0aFRvRGVtb0VudHJ5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGVsbCBjb21tYW5kJyxjbWQpO1xuICAgICAgICAgICAgY29uc3QgZGV2RW52UHJvY2VzcyA9IHNoZWxsQ29tbWFuZChjbWQsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRklOSVNIRUQ/Pz8nLGZpbmlzaGVkKTtcbiAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZhbmN5TG9nKCdncmVlbicsICdGSU5JU0hFRCcsICdjb2RlJyk7XG4gICAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FzZGYgZHVyaW5nUHJvY2VzcyBjbGVhbnVwJyk7XG4gICAgICAgICAgICAgIGNsZWFudXAoZGV2RW52UHJvY2VzcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICdyZW1vdmUgYXNzZXRzJywgJycpO1xuICAgICAgICAgICAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgZnMucmVtb3ZlU3luYyhkaXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAnYmVmb3JlXFwncyBkb25lKCkgY2FsbGVkJywgJycpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXZFbnZQcm9jZXNzLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgIGZhbmN5TG9nKCdibHVlJywgJ2RldkVudlByb2Nlc3Muc3Rkb3V0OicsIGRhdGFTdHJpbmcpO1xuICAgICAgICAgICAgICBvbkRhdGEoZGF0YVN0cmluZywgZmluaXNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBvblN0ZGVycihkYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmYW5jeUxvZygnY3lhbicsICdkZXZFbnZQcm9jZXNzLnN0ZGVycjonLCBkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGV2RW52UHJvY2Vzcy5vbignZXhpdCcsIChjb2RlKSA9PiB7XG4gICAgICAgICAgICAgIGZhbmN5TG9nKCd5ZWxsb3cnLCAnY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlOicsIGNvZGUpO1xuICAgICAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHVyaW5nU2VydmVyKHtcbiAgdXNlRGlzdCxcbiAgb25Bc3NldCA9ICgpID0+IHt9LFxuICBvbkRhdGEgPSAoKSA9PiB7fSxcbiAgb25TdGRlcnIgPSAoKSA9PiB7fSxcbiAgY2xlYW51cCA9ICgpID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9LFxuICBtYWtlU2hlbGxDbWRTdHIsXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG4gIG5vZGVQYXRoLFxuICBtYWtlU2hlbGxDbWRTdHJYLFxuICBlYXJseSxcbn0pIHtcbiAgY29uc3Qgc2NyYXBlRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc2NyYXBlJyk7XG4gIGxldCBvbmNlID0gZmFsc2U7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIGVhcmx5LFxuICAgIG1ha2VTaGVsbENtZFN0clgsXG4gICAgbWFrZVNoZWxsQ21kU3RyOiAocGF0aFRvRGVtb0VudHJ5KSA9PiB7XG4gICAgICBjb25zdCBub2RlUGF0aFNoVmFyID0gbm9kZVBhdGggPyBgJHtub2RlUGF0aH0gYCA6ICcnO1xuICAgICAgY29uc29sZS5sb2coJ25vZGVQYXRoJywgbm9kZVBhdGhTaFZhcik7XG4gICAgICBpZiAobWFrZVNoZWxsQ21kU3RyKSB7XG4gICAgICAgIHJldHVybiBtYWtlU2hlbGxDbWRTdHIocGF0aFRvRGVtb0VudHJ5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXB1Ymxpc2ggPSB1c2VEaXN0ID8gYChjZCAke2RldkVudlJvb3R9ICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgYCA6ICcnO1xuICAgICAgY29uc29sZS5sb2coJ1hYWFhYJyk7XG4gICAgICBjb25zb2xlLmxvZygnWFhYWFgnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdYWFhYWCcpO1xuICAgICAgY29uc29sZS5sb2coJ1hYWFhYJyk7XG4gICAgICBjb25zb2xlLmxvZygnWFhYWFgnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdYWFhYWCcpO1xuICAgICAgY29uc29sZS5sb2coJ1hYWFhYJyk7XG4gICAgICBjb25zb2xlLmxvZygnWFhYWFgnKTtcbiAgICAgIHJldHVybiBgKFxuICAgICAgICAke3ByZXB1Ymxpc2h9bnBtIHJ1biBkZXYgLS0gLS1kZW1vLWVudHJ5PScke3BhdGhUb0RlbW9FbnRyeX0nJHt1c2VEaXN0ID8gJyAtLXVzZS1kaXN0JyA6ICcnfSBcbiAgICAgIClgO1xuICAgIH0sXG4gICAgb25EYXRhOiAoZGF0YVN0cmluZywgZmluaXNoKSA9PiB7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZywgZmluaXNoKTtcbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IEZhaWxlZCB0byBjb21waWxlLicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgZmluaXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBDb21waWxlZCBzdWNjZXNzZnVsbHkuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBzY3JhcGUoe1xuICAgICAgICAgIC8vICAgdXJsczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAvJ10sXG4gICAgICAgICAgLy8gICBkaXJlY3Rvcnk6IHNjcmFwZURpcixcbiAgICAgICAgICAvLyAgIHJlc291cmNlU2F2ZXI6IGNsYXNzIE15UmVzb3VyY2VTYXZlciB7XG4gICAgICAgICAgLy8gICAgIHNhdmVSZXNvdXJjZShyZXNvdXJjZSkge1xuICAgICAgICAgIC8vICAgICAgIG9uQXNzZXQocmVzb3VyY2UpO1xuICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgLy8gICAgIGVycm9yQ2xlYW51cChlcnIpIHtcbiAgICAgICAgICAvLyAgICAgICBmYW5jeUxvZygncGluaycsICdzY3JhcGUgcmVzb3VyY2UgZXJyb3I6JywgZXJyKTtcbiAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyAgIGZpbmlzaCgpO1xuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgICAgLy8gZmluaXNoKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblN0ZGVycixcbiAgICBhc3NldHNUb0dlbmVyYXRlLFxuICAgIGNsZWFudXA6IChkZXZFbnZQcm9jZXNzKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ3Rlcm1pbmF0ZSBzdGFydCcsICcnKTtcbiAgICAgICAgdGVybWluYXRlKGRldkVudlByb2Nlc3MucGlkLCAoZXJyKSA9PiB7XG4gICAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICd0ZXJtaW5hdGUgZW5kJywgJycpO1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGZhbmN5TG9nKCdyZWQnLCAnT29wc3kgZHVyaW5nIHRlcm1pbmF0ZTonLCBlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZhbmN5TG9nKCdncmVlbicsICdkb25lIGZvciB0ZXJtaW5hdGUnLCAnJyk7XG4gICAgICAgICAgICBjbGVhbnVwKGRldkVudlByb2Nlc3MpO1xuICAgICAgICAgICAgZnMucmVtb3ZlU3luYyhzY3JhcGVEaXIpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHVyaW5nVGVzdCh7XG4gIHRlc3RQYXRoUGF0dGVybixcbiAgb25TdGRlcnIgPSAoKSA9PiB7fSxcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIGNsZWFudXAgPSAoKSA9PiB7fSxcbiAgYXNzZXRzVG9HZW5lcmF0ZSxcbn0pIHtcbiAgZHVyaW5nUHJvY2Vzcyh7XG4gICAgb25TdGRlcnIsXG4gICAgb25EYXRhLFxuICAgIGFzc2V0c1RvR2VuZXJhdGUsXG4gICAgY2xlYW51cCxcbiAgICBtYWtlU2hlbGxDbWRTdHI6ICgpID0+IHtcbiAgICAgIHJldHVybiBgKFxuICAgICAgICBucG0gcnVuIHRlc3RwYWNrYWdlcyAtLSAtLXdhdGNoPWZhbHNlIC0tdGVzdFBhdGhQYXR0ZXJuPScke3Rlc3RQYXRoUGF0dGVybn0nXG4gICAgICApYDtcbiAgICB9LFxuICB9KTtcbn1cblxuY29uc3QgbW9ub3JlcG9EaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vJyk7XG5kZXNjcmliZSgndGVzdGRldmVudicsICgpID0+IHtcbiAgZGVzY3JpYmUoJ2xvY2FsaG9zdCBkZXYgZW52aXJvbm1lbnQgdmlhIG9uIGRlbWFuZCBjb21waWxlZCBzY3JpcHQnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuXG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2xvY2FsaG9zdCBkZXYgZW52aXJvbm1lbnQgdmlhIHByZS1jb21waWxlZCBzY3JpcHQnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICB1c2VEaXN0OiB0cnVlLFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZS5vbmx5KCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IHNpbWlsYXIgdG8gbnBtIHVzYWdlJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCB0ZXN0UHJvamVjdFBhdGggPSBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuLi90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYnKTtcbiAgICBcbiAgICBjb25zdCBub2RlTW9kdWxlc09yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gICAgY29uc3Qgbm9kZU1vZHVsZXNDb3B5UGF0aCA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL25vZGVfbW9kdWxlcycpO1xuICAgIGNvbnN0IGRldkVudkNvcHlQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsICcuL2Rldl9lbnYnKTtcbiAgICBjb25zdCBiaW5PcmlnaW5hbFBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsICcuLy5iaW4nKTtcbiAgICBjb25zdCBiaW5Db3B5UGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCAnLi8uYmluJyk7XG4gICAgY29uc3QgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyk7XG4gICAgXG4gICAgICAgIFxuXG4gICAgY29uc3QgcGF0aFRvTWFpbiA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyk7XG4gICAgLy8gY29uc3QgY21keCA9IGAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIG5vZGUgLi9ub2RlX21vZHVsZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59JylgO1xuICAgIGNvbnN0IGNtZFggPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBscylgO1xuICAgIGNvbnN0IGNtZFkgPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJiBucG0gcnVuIGRldilgO1xuICAgIGNvbnN0IGNtZFogPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJiBub2RlIC4vbm9kZV9tb2R1bGVzL2Rldl9lbnYvZGlzdC9kZXZfZW52KWA7XG4gICAgY29uc3QgY21kID0gYChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gICYmIG5vZGUgLi9ub2RlX21vZHVsZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYpYDtcbiAgICAvLyBjb25zdCBjbWQgPSBgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKWA7XG4gICAgY29uc29sZS5sb2coJ2NtZCcsIGNtZCk7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIC8vIHVzZURpc3QsXG4gICAgICBlYXJseTogKCkgPT4ge1xuXG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAnRUFSTFknLCAnJyk7XG4gICAgICAgIC8vIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgY29uc3QgcHJlcHVibGlzaCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FhYScpO1xuICAgICAgICAgIGNvbnN0IGFQcm9jZXNzID0gc2hlbGxDb21tYW5kKGAoY2QgJHtkZXZFbnZSb290fSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpYCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgYVByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmJiJyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcmVwdWJsaXNoLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xuICAgICAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpLFxuICAgICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyh0ZXN0UHJvamVjdFBhdGgpLFxuICAgICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyhub2RlTW9kdWxlc0NvcHlQYXRoKSxcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMoZGV2RW52Q29weVBhdGgpLFxuICAgICAgICAgICAgZnMuY29weVN5bmMocGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL2Rpc3QnKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9kaXN0JykpLFxuICAgICAgICAgICAgZnMuY29weVN5bmMocGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL3BhY2thZ2UuanNvbicpLCBwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsICcuL3BhY2thZ2UuanNvbicpKSxcbiAgICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9iaW4nKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9iaW4nKSksXG4gICAgICAgICAgICBmcy5jb3B5U3luYyhiaW5PcmlnaW5hbFBhdGgsIGJpbkNvcHlQYXRoKSxcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZShwYXRoVG9NYWluLCBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2ApLFxuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSwgYHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdC1wcm9qZWN0LWZvci1kZXYtZW52XCIsXG4gICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuMC4yXCIsXG4gICAgICAgICAgICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAgICAgICAgIFwiZGV2XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgICAgICAgICAgXCJkZXZ4XCI6IFwiZGV2ZW52IC0tZGVtby1lbnRyeT0nJHtwYXRoVG9NYWlufSdcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgICAgICAgICAgXCJ0aGluZ1wiOiBcImRldmVudiAtLWVudj1idWlsZCAtLWRpcnJvb3Q9JChwd2QpXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiQGRlZnVhbHQvZGV2X2VudlwiOiBcIl4wLjAuMTRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RlZnVhbHQvdGVzdC1wcm9qZWN0LWZvci1kZXYtZW52LmdpdFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gKSxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgIGZzLnJlYWRkaXJTeW5jKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSsrIDwgMjApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VBUkxZMycpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbGUgIT09ICcuYmluJykge1xuICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgICAgIGZzLnN5bWxpbmtTeW5jKHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc09yaWdpbmFsUGF0aCwgZmlsZSksIHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCBmaWxlKSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGNvbnN0IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbiA9IGZzLnJlYWRKc29uU3luYyhkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoKTtcbiAgICAgICAgICAvLyBjb25zdCBkZXZFbnZCaW5EaWN0ID0gZGV2RW52Q29weVBhY2thZ2VEb3RKc29uLmJpbjtcbiAgICAgICAgICAvLyBPYmplY3Qua2V5cyhkZXZFbnZCaW5EaWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAvLyAgIGNvbnN0IHZhbCA9IGRldkVudkJpbkRpY3Rba2V5XTtcbiAgICAgICAgICAvLyAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgLy8gICAgIGZzLnN5bWxpbmtTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgdmFsKSwgcGF0aC5yZXNvbHZlKGJpbkNvcHlQYXRoLCBgLi8ke2tleX1gKSlcbiAgICAgICAgICAvLyAgICk7XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH0sXG4gICAgICAvLyBub2RlUGF0aDogbm9kZVBhdGhWYXIsXG4gICAgICBtYWtlU2hlbGxDbWRTdHJYOiAoKSA9PiB7Y29uc29sZS5sb2coJ0ZJTkQgTUUgRE8gU1RVRkYnKTsgcmV0dXJuIGNtZFg7IH0sXG4gICAgICBtYWtlU2hlbGxDbWRTdHI6ICgpID0+IHtjb25zb2xlLmxvZygnRklORCBNRSBETyBTVFVGRicpOyByZXR1cm4gY21kOyB9LFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGF0aDogcGF0aFRvTWFpbixcbiAgICAgICAgLy8gICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgIC8vICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBwYXRoOiBwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSxcbiAgICAgICAgLy8gICB0ZXh0OiBge1xuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwidGVzdC1wcm9qZWN0LWZvci1kZXYtZW52XCIsXG4gICAgICAgIC8vICAgICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICAgICAgICAvLyAgICAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICAgICAgLy8gICAgICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIFwic2NyaXB0c1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiZGV2XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgIC8vICAgICAgIFwiZGV2eFwiOiBcImRldmVudiAtLWRlbW8tZW50cnk9JyR7cGF0aFRvTWFpbn0nXCIsXG4gICAgICAgIC8vICAgICAgIFwic3RhcnRcIjogXCJkZXZlbnZcIixcbiAgICAgICAgLy8gICAgICAgXCJ0aGluZ1wiOiBcImRldmVudiAtLWVudj1idWlsZCAtLWRpcnJvb3Q9JChwd2QpXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiQGRlZnVhbHQvZGV2X2VudlwiOiBcIl4wLjAuMTRcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgICAgIC8vICAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgICAvLyAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1YWx0L3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudi5naXRcIlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1gLFxuICAgICAgICAvLyB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgICAgY2xlYW51cDogKC8qIGRldkVudlByb2Nlc3MgKi8pID0+IHtcbiAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICdyZW1vdmUgdGVzdFByb2plY3RQYXRoJywgJycpO1xuICAgICAgICBmcy5yZW1vdmVTeW5jKHRlc3RQcm9qZWN0UGF0aCk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnbm9uLWV4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgbGV0IG5vdEZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcE1BWUJFLUEtVFlQTyc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogJ2V4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJ0ZXN0ZGV2ZW52LXNvbWUtZGVwXCIpOyB9OycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIG5vdEZvdW5kRXJyb3IgPSBub3RGb3VuZEVycm9yIHx8IGRhdGEuaW5kZXhPZihgTW9kdWxlIG5vdCBmb3VuZDogRXJyb3I6IENhbid0IHJlc29sdmUgJyR7aW1wb3J0VG9BdHRlbXB0fSdgKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCd3ZWJwYWNrIGJ1bmRsaW5nIHRocm93cyBlcnJvciBmb3Igbm9uLWV4aXN0ZW50IGltcG9ydHMgd2l0aGluIGFzc2V0cycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChub3RGb3VuZEVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMgd2l0aCBucG0tc2NvcGluZycsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXAnO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnQHNvbWUtbnBtLXNjb3BlLyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIG5wbS1zY29wZWQgaW1wb3J0IGJ1bmRsaW5nJywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGVzdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCB0ZXN0c1Bhc3NlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdUZXN0KHtcbiAgICAgIHRlc3RQYXRoUGF0dGVybjogJy4qL3Rlc3RkZXZlbnYtc29tZS1kZXAvLionLFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLnRlc3QuanMnKSxcbiAgICAgICAgICB0ZXh0OiAndGVzdChcImFkZHMgMSArIDIgdG8gZXF1YWwgM1wiLCAoKSA9PiB7IGV4cGVjdCgxICsgMikudG9CZSgzKTsgfSk7JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvblN0ZGVycjogKGRhdGEpID0+IHtcbiAgICAgICAgdGVzdHNQYXNzZWQgPSB0ZXN0c1Bhc3NlZCB8fCBkYXRhLmluZGV4T2YoJzEgcGFzc2VkLCAxIHRvdGFsJykgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgndGVzdHRlc3R0ZXN0JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKHRlc3RzUGFzc2VkLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3RkZXZlbnYyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhbGtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFsa1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvci1wYWlycy1waWNrZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvci1wYWlycy1waWNrZXJcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmluZC1ub2RlLW1vZHVsZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmaW5kLW5vZGUtbW9kdWxlc1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoYXMtYW5zaVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhhcy1hbnNpXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=