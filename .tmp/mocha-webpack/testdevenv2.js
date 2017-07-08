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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-console */
var chalkLib = __webpack_require__(13);
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
/* 2 */
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
/* 3 */
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
/* 4 */
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

  var childProcess = __webpack_require__(0);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mocha");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("terminate");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("website-scraper");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _terminate = __webpack_require__(10);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(5);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(6);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _websiteScraper = __webpack_require__(11);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _nodeUuid = __webpack_require__(8);

var _mocha = __webpack_require__(7);

var _shellCommand = __webpack_require__(4);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _fancyLog = __webpack_require__(1);

var _fancyLog2 = _interopRequireDefault(_fancyLog);

var _getDevEnvRoot = __webpack_require__(2);

var _getDevEnvRoot2 = _interopRequireDefault(_getDevEnvRoot);

var _getNodePathShVar = __webpack_require__(3);

var _getNodePathShVar2 = _interopRequireDefault(_getNodePathShVar);

var _child_process = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// fancyLog('orange', 'start terminate', 'asdf');
var devEnvRoot = (0, _getDevEnvRoot2.default)(__dirname);

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
        setTimeout(function () {
          (0, _websiteScraper2.default)({
            urls: ['http://localhost:3000/'],
            directory: scrapeDir,
            resourceSaver: function () {
              function MyResourceSaver() {
                _classCallCheck(this, MyResourceSaver);
              }

              _createClass(MyResourceSaver, [{
                key: 'saveResource',
                value: function saveResource(resource) {
                  onAsset(resource);
                }
              }, {
                key: 'errorCleanup',
                value: function errorCleanup(err) {
                  (0, _fancyLog2.default)('pink', 'scrape resource error:', err);
                }
              }]);

              return MyResourceSaver;
            }()
          }).then(function () {
            finish();
          });
        }, 0);
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

  _mocha.describe.only('localhost dev environment via pre-compiled script', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var testProjectPath = _path2.default.resolve(monorepoDir, '../testdevenv-main/asdf');
    var devEnvOriginalPath = _path2.default.resolve(monorepoDir, './packages/dev_env');
    var nodeModulesOriginalPath = _path2.default.resolve(monorepoDir, './node_modules');
    var nodeModulesCopyPath = _path2.default.resolve(testProjectPath, './node_modules');
    var devEnvCopyPath = _path2.default.resolve(nodeModulesCopyPath, './dev_env');
    var binOriginalPath = _path2.default.resolve(nodeModulesOriginalPath, './.bin');
    var binCopyPath = _path2.default.resolve(nodeModulesCopyPath, './.bin');
    var devEnvCopyPackageDotJsonPath = _path2.default.resolve(devEnvCopyPath, './package.json');
    var pathToMain = _path2.default.resolve(testProjectPath, './testdevenv-main.demo.js');
    var devEnvCopyDistPath = _path2.default.resolve(devEnvCopyPath, './dist');

    var bundleHasContent = false;
    duringServer({
      early: function early() {

        (0, _fancyLog2.default)('orange', 'EARLY', '');

        var promises = [_fsExtra2.default.removeSync(testProjectPath), _fsExtra2.default.ensureDirSync(testProjectPath), _fsExtra2.default.ensureDirSync(nodeModulesCopyPath), _fsExtra2.default.ensureDirSync(devEnvCopyPath),
        // fs.copySync(path.resolve(devEnvRoot, './dist'), path.resolve(devEnvCopyPath, './dist')),
        _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './package.json'), _path2.default.resolve(devEnvCopyPath, './package.json')), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './bin'), _path2.default.resolve(devEnvCopyPath, './bin')), _fsExtra2.default.copySync(binOriginalPath, binCopyPath), _fsExtra2.default.writeFile(pathToMain, 'document.body.append(\'' + contentToBundle + '\');'), _fsExtra2.default.writeFileSync(_path2.default.resolve(testProjectPath, './package.json'), '{\n            "name": "test-project-for-dev-env",\n            "version": "0.0.2",\n            "publishConfig": {\n              "access": "public"\n            },\n            "scripts": {\n              "dev": "devenv",\n              "devx": "devenv --demo-entry=\'' + pathToMain + '\'",\n              "start": "devenv",\n              "thing": "devenv --env=build --dirroot=$(pwd)"\n            },\n            "devDependencies": {\n              "@defualt/dev_env": "^0.0.14"\n            },\n            "repository": {\n              "type": "git",\n              "url": "https://github.com/defualt/test-project-for-dev-env.git"\n            }\n          }')];

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

        var devEnvCopyPackageDotJson = _fsExtra2.default.readJsonSync(devEnvCopyPackageDotJsonPath);
        var devEnvBinDict = devEnvCopyPackageDotJson.bin;
        Object.keys(devEnvBinDict).forEach(function (key) {
          var val = devEnvBinDict[key];
          promises.push(_fsExtra2.default.symlinkSync(_path2.default.resolve(devEnvCopyPath, val), _path2.default.resolve(binCopyPath, './' + key)));
        });
        return Promise.all(promises);
      },
      // useDist: true,
      makeShellCmdStr: function makeShellCmdStr() {
        return '(cd ' + devEnvOriginalPath + ' && npm run prepublish) && cp -rf ' + _path2.default.resolve(devEnvRoot, './dist') + ' ' + devEnvCopyDistPath + ' && (cd ' + testProjectPath + ' && npm run dev)';
        // return `(cd ${devEnvOriginalPath} && npm run prepublish) && (cd ${testProjectPath} && node ${path.resolve(devEnvOriginalPath, './dist/dev_env.js')} --demo-entry='${path.resolve(testProjectPath, './testdevenv-main.demo.js')}' --use-dist)`;
        // return `(cd /Users/brianephraim/Sites/monorepo/packages/dev_env/ && npm run prepublish) && npm run dev -- --demo-entry='/Users/brianephraim/Sites/monorepo/testdevenv-main/asdf/testdevenv-main.demo.js' --use-dist`;
      },
      assetsToGenerate: [
        // {
        //   path: path.resolve(monorepoDir, './testdevenv-main/asdf/testdevenv-main.demo.js'),
        //   text: `document.body.append('${contentToBundle}');`,
        //   isDemoEntry: true,
        // },
        // {
        //   path: path.resolve(monorepoDir, './testdevenv-main/asdf/package.json'),
        //   text: `{
        //     "name": "test-project-for-dev-env",
        //     "version": "0.0.2",
        //     "publishConfig": {
        //       "access": "public"
        //     },
        //     "scripts": {
        //       "dev": "devenv"
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
      }
    });
    (0, _mocha.it)('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  (0, _mocha.describe)('localhost dev environment similar to npm usage', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var bundleHasContent = false;
    var testProjectPath = _path2.default.resolve(monorepoDir, './test-project-for-dev-env');

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
    var cmd = '\n      (cd ' + devEnvRoot + ' && npm run prepublish) && \n      rm -rf ' + testProjectPath + ' &&\n      mkdir ' + testProjectPath + ' &&\n      mkdir ' + nodeModulesCopyPath + ' &&\n      mkdir ' + devEnvCopyPath + ' &&\n      cp ' + _path2.default.resolve(devEnvRoot, './package.json') + ' ' + _path2.default.resolve(devEnvCopyPath, './package.json') + ' &&\n      echo "document.body.append(\'' + contentToBundle + '\');" > ' + pathToMain + ' &&\n      echo \'{"name": "test-project-for-dev-env","scripts": {"dev": "devenv"}}\' > ' + _path2.default.resolve(testProjectPath, './package.json') + ' &&\n      (cd ' + testProjectPath + '  && node ../packages/dev_env/dist/dev_env)\n    ';
    // const cmd = `(cd ${testProjectPath}  && node ../packages/dev_env/dist/dev_env)`;
    // const cmd = `(cd ${devEnvRoot} && npm run prepublish)`;
    console.log('cmd', cmd);
    duringServer({
      // useDist,
      earlyx: function earlyx() {

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
          // fs.readdirSync(nodeModulesOriginalPath).forEach((file) => {
          //   if (i++ < 20) {
          //     console.log('EARLY3')
          //     console.log(file);
          //   }
          //   if (file !== '.bin') {
          //     promises.push(
          //       fs.symlinkSync(path.resolve(nodeModulesOriginalPath, file), path.resolve(nodeModulesCopyPath, file))
          //     );
          //   }
          // });

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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("chalk");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGU2NjhlZTU2ODJiMjE0ZDU3N2QiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy8uLi9jb3JlL2ZhbmN5TG9nLmpzIiwid2VicGFjazovLy8uLi9jb3JlL2dldERldkVudlJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZ2V0Tm9kZVBhdGhTaFZhci5qcyIsIndlYnBhY2s6Ly8vLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2NoYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIiIsIndlYnBhY2s6Ly8vLi90ZXN0ZGV2ZW52Mi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yLXBhaXJzLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbmQtbm9kZS1tb2R1bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGFzLWFuc2lcIiJdLCJuYW1lcyI6WyJjaGFsa0xpYiIsInJlcXVpcmUiLCJjb2xvclBhaXJzUGlja2VyIiwiaGFzQW5zaSIsImNoYWxrIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsImZvcm1hdExvZyIsImNvbG9yIiwiaGVhZGluZyIsImJnIiwiY29udHJhc3QiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJmZyIsImNvbnNvbGUiLCJsb2ciLCJyZ2IiLCJiZ1JnYiIsImFyZ3MiLCJmaW5kIiwia2V5d29yZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnN1cmVUcmFpbGluZ1NsYXNoIiwic3RyIiwicmVwbGFjZSIsImRldkVudlJvb3QiLCJfX2Rpcm5hbWUiLCJsZW5ndGgiLCJqb2luIiwiZmluZE5vZGVNb2R1bGVzIiwibm9kZVBhdGhTZXBhcmF0b3IiLCJ0ZXN0IiwicHJvY2VzcyIsInBsYXRmb3JtIiwiYmVmb3JlIiwiYWZ0ZXIiLCJjd2QiLCJub2RlUGF0aHMiLCJjb25jYXQiLCJyZWxhdGl2ZSIsImNvbW1hbmRUb1J1biIsIm9wdGlvbnMiLCJzdGRpbyIsImtpbGxQYXJlbnRPbkV4aXQiLCJjb21tYW5kIiwiY2hpbGRQcm9jZXNzIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwia2lsbCIsInBpZCIsImV4aXQiLCJkdXJpbmdQcm9jZXNzIiwib25EYXRhIiwib25TdGRlcnIiLCJtYWtlU2hlbGxDbWRTdHJYIiwibWFrZVNoZWxsQ21kU3RyIiwiY2xlYW51cCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZWFybHkiLCJhc3NldHNUb0dlbmVyYXRlIiwiZHVyaW5nUHJvY2Vzc0JlZm9yZSIsImRvbmUiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInRoZW4iLCJwYXRoVG9EZW1vRW50cnkiLCJmb3JFYWNoIiwiYXNzZXRJbmZvIiwicGF0aCIsImRpciIsImRpcm5hbWUiLCJlbnN1cmVEaXJTeW5jIiwid3JpdGVGaWxlU3luYyIsInRleHQiLCJpc0RlbW9FbnRyeSIsImNtZCIsImRldkVudlByb2Nlc3MiLCJmaW5pc2hlZCIsImZpbmlzaCIsInJlbW92ZVN5bmMiLCJzdGRvdXQiLCJkYXRhIiwiZGF0YVN0cmluZyIsInRvU3RyaW5nIiwic3RkZXJyIiwiZHVyaW5nU2VydmVyIiwidXNlRGlzdCIsIm9uQXNzZXQiLCJub2RlUGF0aCIsInNjcmFwZURpciIsIm9uY2UiLCJub2RlUGF0aFNoVmFyIiwicHJlcHVibGlzaCIsImluZGV4T2YiLCJ1cmxzIiwiZGlyZWN0b3J5IiwicmVzb3VyY2VTYXZlciIsInJlc291cmNlIiwiZXJyIiwicmVqZWN0IiwiZHVyaW5nVGVzdCIsInRlc3RQYXRoUGF0dGVybiIsIm1vbm9yZXBvRGlyIiwiY29udGVudFRvQnVuZGxlIiwiYnVuZGxlSGFzQ29udGVudCIsImVxdWFsIiwib25seSIsInRlc3RQcm9qZWN0UGF0aCIsImRldkVudk9yaWdpbmFsUGF0aCIsIm5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoIiwibm9kZU1vZHVsZXNDb3B5UGF0aCIsImRldkVudkNvcHlQYXRoIiwiYmluT3JpZ2luYWxQYXRoIiwiYmluQ29weVBhdGgiLCJkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoIiwicGF0aFRvTWFpbiIsImRldkVudkNvcHlEaXN0UGF0aCIsInByb21pc2VzIiwiY29weVN5bmMiLCJ3cml0ZUZpbGUiLCJpIiwicmVhZGRpclN5bmMiLCJmaWxlIiwicHVzaCIsInN5bWxpbmtTeW5jIiwiZGV2RW52Q29weVBhY2thZ2VEb3RKc29uIiwicmVhZEpzb25TeW5jIiwiZGV2RW52QmluRGljdCIsImJpbiIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJ2YWwiLCJhbGwiLCJjbWRYIiwiY21kWSIsImNtZFoiLCJlYXJseXgiLCJhUHJvY2VzcyIsInVuZGVmaW5lZCIsIm5vdEZvdW5kRXJyb3IiLCJpbXBvcnRUb0F0dGVtcHQiLCJ0ZXN0c1Bhc3NlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFl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LENBQXBFO0FBQ0Q7QUFuQlEsS0FBWDtBQXFCQSxtQkFBRyxjQUFILEVBQW1CLFlBQU07QUFDdkIsdUJBQU9ZLEtBQVAsQ0FBYXFDLFdBQWIsRUFBMEIsSUFBMUI7QUFDRCxLQUZEO0FBR0QsR0E1QkQ7QUE2QkQsQ0E3WkQsRTs7Ozs7OztBQ3JNQSxrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSxxQyIsImZpbGUiOiJ0ZXN0ZGV2ZW52Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBlNjY4ZWU1NjgyYjIxNGQ1NzdkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5jb25zdCBjaGFsa0xpYiA9IHJlcXVpcmUoJ2NoYWxrJyk7XG5jb25zdCBjb2xvclBhaXJzUGlja2VyID0gcmVxdWlyZSgnY29sb3ItcGFpcnMtcGlja2VyJyk7XG5jb25zdCBoYXNBbnNpID0gcmVxdWlyZSgnaGFzLWFuc2knKTtcblxuXG5jb25zdCBjaGFsayA9IG5ldyBjaGFsa0xpYi5jb25zdHJ1Y3Rvcih7IGxldmVsOiAzIH0pO1xuZnVuY3Rpb24gZm9ybWF0TG9nKGNvbG9yLCBoZWFkaW5nLCAuLi5hcmdzKSB7XG4gIGNvbnN0IGJnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5iZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zdCBmZyA9IGNvbG9yUGFpcnNQaWNrZXIoY29sb3IsIHsgY29udHJhc3Q6IDggfSkuZmcuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuICtpdGVtO1xuICB9KTtcbiAgY29uc29sZS5sb2coY2hhbGsucmdiKC4uLmZnKS5iZ1JnYiguLi5iZykoaGVhZGluZykpO1xuXG4gIGlmICh0eXBlb2YgYXJncy5maW5kKChpdGVtKSA9PiB7IHJldHVybiBoYXNBbnNpKGl0ZW0pOyB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmxvZyhjaGFsay5rZXl3b3JkKGNvbG9yKSguLi5hcmdzKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0TG9nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvZmFuY3lMb2cuanMiLCJmdW5jdGlvbiBlbnN1cmVUcmFpbGluZ1NsYXNoKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuICBsZXQgZGV2RW52Um9vdCA9IGVuc3VyZVRyYWlsaW5nU2xhc2goX19kaXJuYW1lKS5zcGxpdCgnL2Rldl9lbnYvJyk7XG4gIGRldkVudlJvb3RbZGV2RW52Um9vdC5sZW5ndGggLSAxXSA9ICcnO1xuICBkZXZFbnZSb290ID0gZGV2RW52Um9vdC5qb2luKCcvZGV2X2Vudi8nKTtcbiAgcmV0dXJuIGRldkVudlJvb3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsImNvbnN0IGZpbmROb2RlTW9kdWxlcyA9IHJlcXVpcmUoJ2ZpbmQtbm9kZS1tb2R1bGVzJyk7XG4vLyBmb3IgTk9ERV9QQVRILCBvbiB3aW5kb3dzLCBzZXBlcmF0b3IgaXMgOyBpbnN0ZWFkIG9mIDouICBXaGF0IGZ1bi5cbi8vIHNlcGVyYXRvciBpcyBiYXNoIGFycmF5IGFyZ3VtZW50IHNlcGVyYXRvciBzeW50YXguXG5jb25zdCBub2RlUGF0aFNlcGFyYXRvciA9IC9ed2luLy50ZXN0KHByb2Nlc3MucGxhdGZvcm0pID8gJzsnIDogJzonO1xuLy8gRmluZCBhbGwgZGlyZWN0b3JpZXMgb2Ygbm9kZV9tb2R1bGVzIHRoYXQgYXBwbHkgdG8gdGhlIGZpbGUgd2UgYXJlIGNvbXBpbGluZy5cbm1vZHVsZS5leHBvcnRzID0gKHsgYmVmb3JlID0gW10sIGFmdGVyID0gW10sIGN3ZCB9KSA9PiB7XG4gIGNvbnN0IG5vZGVQYXRocyA9IGJlZm9yZVxuICAuY29uY2F0KGZpbmROb2RlTW9kdWxlcyh7IHJlbGF0aXZlOiBmYWxzZSwgY3dkIH0pKVxuICAuY29uY2F0KGFmdGVyKVxuICAuam9pbihub2RlUGF0aFNlcGFyYXRvcik7XG4gIHJldHVybiBgTk9ERV9QQVRIPScke25vZGVQYXRoc30nYDtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL2dldE5vZGVQYXRoU2hWYXIuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xubW9kdWxlLmV4cG9ydHMgPSAoY29tbWFuZFRvUnVuLCBvcHRpb25zID0geyBzdGRpbzogJ2luaGVyaXQnIH0sIGtpbGxQYXJlbnRPbkV4aXQgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICBjb25zdCBhcmdzID0gW1xuICAgICctYycsXG4gICAgY29tbWFuZFRvUnVuLFxuICBdO1xuICAvL1xuICAvLyBrZXhlYyBkb2Vzbid0IHdvcmsgaW4gd2luZG93cywgc28gZmFsbGJhY2sgdG8gY2hpbGRfcHJvY2Vzcy5zcGF3blxuICAvLyB0aGlzIGxvZ2ljIGNvcGllZCBmcm9tIGJhYmVsLWNsaS9saWIvYmFiZWwtbm9kZS5qc1xuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IGtleGVjID0gcmVxdWlyZSgna2V4ZWMnKTtcbiAgLy8gICBrZXhlYyhjb21tYW5kLCBhcmdzKTtcbiAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gaWYgKGVyci5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHRocm93IGVycjtcblxuICBjb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG4gIGNvbnN0IHByb2MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgb3B0aW9ucyB8fCB7fSk7XG4gIHByb2Mub24oJ2V4aXQnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgaWYgKGtpbGxQYXJlbnRPbkV4aXQpIHtcbiAgICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICBwcm9jZXNzLmtpbGwocHJvY2Vzcy5waWQsIHNpZ25hbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvYztcbiAgLy8gfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzc2VydFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLWV4dHJhXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtZXh0cmFcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2NoYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vY2hhXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS11dWlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS11dWlkXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0ZXJtaW5hdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vic2l0ZS1zY3JhcGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2Vic2l0ZS1zY3JhcGVyXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCB0ZXJtaW5hdGUgZnJvbSAndGVybWluYXRlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBzY3JhcGUgZnJvbSAnd2Vic2l0ZS1zY3JhcGVyJztcbmltcG9ydCB7IHY0IGFzIG1ha2VVdWlkIH0gZnJvbSAnbm9kZS11dWlkJztcbmltcG9ydCB7IGl0LCBkZXNjcmliZSwgYmVmb3JlIH0gZnJvbSAnbW9jaGEnO1xuaW1wb3J0IHNoZWxsQ29tbWFuZCBmcm9tICcuLi9jb3JlL3NoZWxsQ29tbWFuZCc7XG5pbXBvcnQgZmFuY3lMb2cgZnJvbSAnLi4vY29yZS9mYW5jeUxvZyc7XG5pbXBvcnQgZ2V0RGV2RW52Um9vdCBmcm9tICcuLi9jb3JlL2dldERldkVudlJvb3QnO1xuaW1wb3J0IGdldE5vZGVQYXRoU2hWYXIgZnJvbSAnLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyJztcblxuaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5cblxuLy8gZmFuY3lMb2coJ29yYW5nZScsICdzdGFydCB0ZXJtaW5hdGUnLCAnYXNkZicpO1xuY29uc3QgZGV2RW52Um9vdCA9IGdldERldkVudlJvb3QoX19kaXJuYW1lKTtcblxuZnVuY3Rpb24gZHVyaW5nUHJvY2Vzcyh7XG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBvblN0ZGVyciA9ICgpID0+IHt9LFxuICBtYWtlU2hlbGxDbWRTdHJYID0gKCkgPT4geyByZXR1cm4gJ3B3ZCc7IH0sXG4gIG1ha2VTaGVsbENtZFN0ciA9ICgpID0+IHt9LFxuICBjbGVhbnVwID0gKCkgPT4geyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH0sXG4gIGVhcmx5ID0gKCkgPT4geyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH0sXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG59KSB7XG4gIGJlZm9yZShmdW5jdGlvbiBkdXJpbmdQcm9jZXNzQmVmb3JlKGRvbmUpIHtcbiAgICB0aGlzLnRpbWVvdXQoNjAwMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZWFybHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IHBhdGhUb0RlbW9FbnRyeTtcbiAgICAgICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ0dFTkVSQVRJTkcnLCBhc3NldEluZm8ucGF0aCk7XG4gICAgICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyhkaXIpO1xuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhhc3NldEluZm8ucGF0aCwgYXNzZXRJbmZvLnRleHQpO1xuICAgICAgICAgICAgaWYgKGFzc2V0SW5mby5pc0RlbW9FbnRyeSkge1xuICAgICAgICAgICAgICBwYXRoVG9EZW1vRW50cnkgPSBhc3NldEluZm8ucGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGNtZCA9IG1ha2VTaGVsbENtZFN0clgocGF0aFRvRGVtb0VudHJ5KTtcbiAgICAgICAgICAgIGNvbnN0IGNtZCA9IG1ha2VTaGVsbENtZFN0cihwYXRoVG9EZW1vRW50cnkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NoZWxsIGNvbW1hbmQnLGNtZCk7XG4gICAgICAgICAgICBjb25zdCBkZXZFbnZQcm9jZXNzID0gc2hlbGxDb21tYW5kKGNtZCwgbnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGSU5JU0hFRD8/PycsZmluaXNoZWQpO1xuICAgICAgICAgICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ0ZJTklTSEVEJywgJ2NvZGUnKTtcbiAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXNkZiBkdXJpbmdQcm9jZXNzIGNsZWFudXAnKTtcbiAgICAgICAgICAgICAgY2xlYW51cChkZXZFbnZQcm9jZXNzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ3JlbW92ZSBhc3NldHMnLCAnJyk7XG4gICAgICAgICAgICAgICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICAgICAgICAgICAgICBmcy5yZW1vdmVTeW5jKGRpcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICdiZWZvcmVcXCdzIGRvbmUoKSBjYWxsZWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRldkVudlByb2Nlc3Muc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YVN0cmluZyA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgZmFuY3lMb2coJ2JsdWUnLCAnZGV2RW52UHJvY2Vzcy5zdGRvdXQ6JywgZGF0YVN0cmluZyk7XG4gICAgICAgICAgICAgIG9uRGF0YShkYXRhU3RyaW5nLCBmaW5pc2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZXZFbnZQcm9jZXNzLnN0ZGVyci5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIG9uU3RkZXJyKGRhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZhbmN5TG9nKCdjeWFuJywgJ2RldkVudlByb2Nlc3Muc3RkZXJyOicsIGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZXZFbnZQcm9jZXNzLm9uKCdleGl0JywgKGNvZGUpID0+IHtcbiAgICAgICAgICAgICAgZmFuY3lMb2coJ3llbGxvdycsICdjaGlsZCBwcm9jZXNzIGV4aXRlZCB3aXRoIGNvZGU6JywgY29kZSk7XG4gICAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkdXJpbmdTZXJ2ZXIoe1xuICB1c2VEaXN0LFxuICBvbkFzc2V0ID0gKCkgPT4ge30sXG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBvblN0ZGVyciA9ICgpID0+IHt9LFxuICBjbGVhbnVwID0gKCkgPT4geyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH0sXG4gIG1ha2VTaGVsbENtZFN0cixcbiAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgbm9kZVBhdGgsXG4gIG1ha2VTaGVsbENtZFN0clgsXG4gIGVhcmx5LFxufSkge1xuICBjb25zdCBzY3JhcGVEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zY3JhcGUnKTtcbiAgbGV0IG9uY2UgPSBmYWxzZTtcbiAgZHVyaW5nUHJvY2Vzcyh7XG4gICAgZWFybHksXG4gICAgbWFrZVNoZWxsQ21kU3RyWCxcbiAgICBtYWtlU2hlbGxDbWRTdHI6IChwYXRoVG9EZW1vRW50cnkpID0+IHtcbiAgICAgIGNvbnN0IG5vZGVQYXRoU2hWYXIgPSBub2RlUGF0aCA/IGAke25vZGVQYXRofSBgIDogJyc7XG4gICAgICBjb25zb2xlLmxvZygnbm9kZVBhdGgnLCBub2RlUGF0aFNoVmFyKTtcbiAgICAgIGlmIChtYWtlU2hlbGxDbWRTdHIpIHtcbiAgICAgICAgcmV0dXJuIG1ha2VTaGVsbENtZFN0cihwYXRoVG9EZW1vRW50cnkpO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJlcHVibGlzaCA9IHVzZURpc3QgPyBgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKSAmJiBgIDogJyc7XG4gICAgICBjb25zb2xlLmxvZygnWFhYWFgnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdYWFhYWCcpO1xuICAgICAgY29uc29sZS5sb2coJ1hYWFhYJyk7XG4gICAgICBjb25zb2xlLmxvZygnWFhYWFgnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdYWFhYWCcpO1xuICAgICAgY29uc29sZS5sb2coJ1hYWFhYJyk7XG4gICAgICBjb25zb2xlLmxvZygnWFhYWFgnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdYWFhYWCcpO1xuICAgICAgcmV0dXJuIGAoXG4gICAgICAgICR7cHJlcHVibGlzaH1ucG0gcnVuIGRldiAtLSAtLWRlbW8tZW50cnk9JyR7cGF0aFRvRGVtb0VudHJ5fScke3VzZURpc3QgPyAnIC0tdXNlLWRpc3QnIDogJyd9IFxuICAgICAgKWA7XG4gICAgfSxcbiAgICBvbkRhdGE6IChkYXRhU3RyaW5nLCBmaW5pc2gpID0+IHtcbiAgICAgIG9uRGF0YShkYXRhU3RyaW5nLCBmaW5pc2gpO1xuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZignd2VicGFjazogRmFpbGVkIHRvIGNvbXBpbGUuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IENvbXBpbGVkIHN1Y2Nlc3NmdWxseS4nKSAhPT0gLTEgJiYgIW9uY2UpIHtcbiAgICAgICAgb25jZSA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNjcmFwZSh7XG4gICAgICAgICAgICB1cmxzOiBbJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nXSxcbiAgICAgICAgICAgIGRpcmVjdG9yeTogc2NyYXBlRGlyLFxuICAgICAgICAgICAgcmVzb3VyY2VTYXZlcjogY2xhc3MgTXlSZXNvdXJjZVNhdmVyIHtcbiAgICAgICAgICAgICAgc2F2ZVJlc291cmNlKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgb25Bc3NldChyZXNvdXJjZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZXJyb3JDbGVhbnVwKGVycikge1xuICAgICAgICAgICAgICAgIGZhbmN5TG9nKCdwaW5rJywgJ3NjcmFwZSByZXNvdXJjZSBlcnJvcjonLCBlcnIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgICAvLyBmaW5pc2goKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uU3RkZXJyLFxuICAgIGFzc2V0c1RvR2VuZXJhdGUsXG4gICAgY2xlYW51cDogKGRldkVudlByb2Nlc3MpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAndGVybWluYXRlIHN0YXJ0JywgJycpO1xuICAgICAgICB0ZXJtaW5hdGUoZGV2RW52UHJvY2Vzcy5waWQsIChlcnIpID0+IHtcbiAgICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ3Rlcm1pbmF0ZSBlbmQnLCAnJyk7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgZmFuY3lMb2coJ3JlZCcsICdPb3BzeSBkdXJpbmcgdGVybWluYXRlOicsIGVycik7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ2RvbmUgZm9yIHRlcm1pbmF0ZScsICcnKTtcbiAgICAgICAgICAgIGNsZWFudXAoZGV2RW52UHJvY2Vzcyk7XG4gICAgICAgICAgICBmcy5yZW1vdmVTeW5jKHNjcmFwZURpcik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkdXJpbmdUZXN0KHtcbiAgdGVzdFBhdGhQYXR0ZXJuLFxuICBvblN0ZGVyciA9ICgpID0+IHt9LFxuICBvbkRhdGEgPSAoKSA9PiB7fSxcbiAgY2xlYW51cCA9ICgpID0+IHt9LFxuICBhc3NldHNUb0dlbmVyYXRlLFxufSkge1xuICBkdXJpbmdQcm9jZXNzKHtcbiAgICBvblN0ZGVycixcbiAgICBvbkRhdGEsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBjbGVhbnVwLFxuICAgIG1ha2VTaGVsbENtZFN0cjogKCkgPT4ge1xuICAgICAgcmV0dXJuIGAoXG4gICAgICAgIG5wbSBydW4gdGVzdHBhY2thZ2VzIC0tIC0td2F0Y2g9ZmFsc2UgLS10ZXN0UGF0aFBhdHRlcm49JyR7dGVzdFBhdGhQYXR0ZXJufSdcbiAgICAgIClgO1xuICAgIH0sXG4gIH0pO1xufVxuXG5jb25zdCBtb25vcmVwb0RpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi8nKTtcbmRlc2NyaWJlKCd0ZXN0ZGV2ZW52JywgKCkgPT4ge1xuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCB2aWEgb24gZGVtYW5kIGNvbXBpbGVkIHNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG5cbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCB2aWEgcHJlLWNvbXBpbGVkIHNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIHVzZURpc3Q6IHRydWUsXG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlLm9ubHkoJ2xvY2FsaG9zdCBkZXYgZW52aXJvbm1lbnQgdmlhIHByZS1jb21waWxlZCBzY3JpcHQnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBjb25zdCB0ZXN0UHJvamVjdFBhdGggPSBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuLi90ZXN0ZGV2ZW52LW1haW4vYXNkZicpO1xuICAgIGNvbnN0IGRldkVudk9yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvZGV2X2VudicpO1xuICAgIGNvbnN0IG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9ub2RlX21vZHVsZXMnKTtcbiAgICBjb25zdCBub2RlTW9kdWxlc0NvcHlQYXRoID0gcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gICAgY29uc3QgZGV2RW52Q29weVBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgJy4vZGV2X2VudicpO1xuICAgIGNvbnN0IGJpbk9yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc09yaWdpbmFsUGF0aCwgJy4vLmJpbicpO1xuICAgIGNvbnN0IGJpbkNvcHlQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsICcuLy5iaW4nKTtcbiAgICBjb25zdCBkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoID0gcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9wYWNrYWdlLmpzb24nKTtcbiAgICBjb25zdCBwYXRoVG9NYWluID0gcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vdGVzdGRldmVudi1tYWluLmRlbW8uanMnKTtcbiAgICBjb25zdCBkZXZFbnZDb3B5RGlzdFBhdGggPSBwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsICcuL2Rpc3QnKTtcbiAgICBcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBlYXJseTogKCkgPT4ge1xuXG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAnRUFSTFknLCAnJyk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXG4gICAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpLFxuICAgICAgICAgIGZzLmVuc3VyZURpclN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKG5vZGVNb2R1bGVzQ29weVBhdGgpLFxuICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMoZGV2RW52Q29weVBhdGgpLFxuICAgICAgICAgIC8vIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9kaXN0JyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vZGlzdCcpKSxcbiAgICAgICAgICBmcy5jb3B5U3luYyhwYXRoLnJlc29sdmUoZGV2RW52Um9vdCwgJy4vcGFja2FnZS5qc29uJyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJykpLFxuICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9iaW4nKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9iaW4nKSksXG4gICAgICAgICAgZnMuY29weVN5bmMoYmluT3JpZ2luYWxQYXRoLCBiaW5Db3B5UGF0aCksXG4gICAgICAgICAgZnMud3JpdGVGaWxlKHBhdGhUb01haW4sIGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCksXG4gICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSwgYHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgICAgICAgICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAgICAgICBcImRldlwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICBcImRldnhcIjogXCJkZXZlbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59J1wiLFxuICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgICAgICAgIFwidGhpbmdcIjogXCJkZXZlbnYgLS1lbnY9YnVpbGQgLS1kaXJyb290PSQocHdkKVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGVmdWFsdC90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYuZ2l0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9YCksXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBmcy5yZWFkZGlyU3luYyhub2RlTW9kdWxlc09yaWdpbmFsUGF0aCkuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgIGlmIChpKysgPCAyMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VBUkxZMycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpbGUgIT09ICcuYmluJykge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgICAgZnMuc3ltbGlua1N5bmMocGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoLCBmaWxlKSwgcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsIGZpbGUpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbiA9IGZzLnJlYWRKc29uU3luYyhkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoKTtcbiAgICAgICAgY29uc3QgZGV2RW52QmluRGljdCA9IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbi5iaW47XG4gICAgICAgIE9iamVjdC5rZXlzKGRldkVudkJpbkRpY3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbCA9IGRldkVudkJpbkRpY3Rba2V5XTtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgZnMuc3ltbGlua1N5bmMocGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCB2YWwpLCBwYXRoLnJlc29sdmUoYmluQ29weVBhdGgsIGAuLyR7a2V5fWApKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgfSxcbiAgICAgIC8vIHVzZURpc3Q6IHRydWUsXG4gICAgICBtYWtlU2hlbGxDbWRTdHI6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGAoY2QgJHtkZXZFbnZPcmlnaW5hbFBhdGh9ICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgY3AgLXJmICR7cGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL2Rpc3QnKX0gJHtkZXZFbnZDb3B5RGlzdFBhdGh9ICYmIChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gJiYgbnBtIHJ1biBkZXYpYDtcbiAgICAgICAgLy8gcmV0dXJuIGAoY2QgJHtkZXZFbnZPcmlnaW5hbFBhdGh9ICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBub2RlICR7cGF0aC5yZXNvbHZlKGRldkVudk9yaWdpbmFsUGF0aCwgJy4vZGlzdC9kZXZfZW52LmpzJyl9IC0tZGVtby1lbnRyeT0nJHtwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi90ZXN0ZGV2ZW52LW1haW4uZGVtby5qcycpfScgLS11c2UtZGlzdClgO1xuICAgICAgICAvLyByZXR1cm4gYChjZCAvVXNlcnMvYnJpYW5lcGhyYWltL1NpdGVzL21vbm9yZXBvL3BhY2thZ2VzL2Rldl9lbnYvICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgbnBtIHJ1biBkZXYgLS0gLS1kZW1vLWVudHJ5PScvVXNlcnMvYnJpYW5lcGhyYWltL1NpdGVzL21vbm9yZXBvL3Rlc3RkZXZlbnYtbWFpbi9hc2RmL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyAtLXVzZS1kaXN0YDtcbiAgICAgIH0sXG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3Rlc3RkZXZlbnYtbWFpbi9hc2RmL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyksXG4gICAgICAgIC8vICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAvLyAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi90ZXN0ZGV2ZW52LW1haW4vYXNkZi9wYWNrYWdlLmpzb24nKSxcbiAgICAgICAgLy8gICB0ZXh0OiBge1xuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwidGVzdC1wcm9qZWN0LWZvci1kZXYtZW52XCIsXG4gICAgICAgIC8vICAgICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICAgICAgICAvLyAgICAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICAgICAgLy8gICAgICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIFwic2NyaXB0c1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiZGV2XCI6IFwiZGV2ZW52XCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiQGRlZnVhbHQvZGV2X2VudlwiOiBcIl4wLjAuMTRcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgICAgIC8vICAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgICAvLyAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1YWx0L3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudi5naXRcIlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1gLFxuICAgICAgICAvLyB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuXG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IHNpbWlsYXIgdG8gbnBtIHVzYWdlJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCB0ZXN0UHJvamVjdFBhdGggPSBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudicpO1xuICAgIFxuICAgIGNvbnN0IG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9ub2RlX21vZHVsZXMnKTtcbiAgICBjb25zdCBub2RlTW9kdWxlc0NvcHlQYXRoID0gcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gICAgY29uc3QgZGV2RW52Q29weVBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgJy4vZGV2X2VudicpO1xuICAgIGNvbnN0IGJpbk9yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc09yaWdpbmFsUGF0aCwgJy4vLmJpbicpO1xuICAgIGNvbnN0IGJpbkNvcHlQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsICcuLy5iaW4nKTtcbiAgICBjb25zdCBkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoID0gcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9wYWNrYWdlLmpzb24nKTtcbiAgICBcbiAgICAgICAgXG5cbiAgICBjb25zdCBwYXRoVG9NYWluID0gcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vdGVzdGRldmVudi1tYWluLmRlbW8uanMnKTtcbiAgICAvLyBjb25zdCBjbWR4ID0gYChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gJiYgbm9kZSAuL25vZGVfbW9kdWxlcy9kZXZfZW52L2Rpc3QvZGV2X2VudiAtLWRlbW8tZW50cnk9JyR7cGF0aFRvTWFpbn0nKWA7XG4gICAgY29uc3QgY21kWCA9IGAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIGxzKWA7XG4gICAgY29uc3QgY21kWSA9IGAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIGVjaG8gXCJkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7XCIgPiAke3BhdGhUb01haW59ICYmIG5wbSBydW4gZGV2KWA7XG4gICAgY29uc3QgY21kWiA9IGAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIGVjaG8gXCJkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7XCIgPiAke3BhdGhUb01haW59ICYmIG5vZGUgLi9ub2RlX21vZHVsZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYpYDtcbiAgICBjb25zdCBjbWQgPSBgXG4gICAgICAoY2QgJHtkZXZFbnZSb290fSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIFxuICAgICAgcm0gLXJmICR7dGVzdFByb2plY3RQYXRofSAmJlxuICAgICAgbWtkaXIgJHt0ZXN0UHJvamVjdFBhdGh9ICYmXG4gICAgICBta2RpciAke25vZGVNb2R1bGVzQ29weVBhdGh9ICYmXG4gICAgICBta2RpciAke2RldkVudkNvcHlQYXRofSAmJlxuICAgICAgY3AgJHtwYXRoLnJlc29sdmUoZGV2RW52Um9vdCwgJy4vcGFja2FnZS5qc29uJyl9ICR7cGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9wYWNrYWdlLmpzb24nKX0gJiZcbiAgICAgIGVjaG8gXCJkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7XCIgPiAke3BhdGhUb01haW59ICYmXG4gICAgICBlY2hvICd7XCJuYW1lXCI6IFwidGVzdC1wcm9qZWN0LWZvci1kZXYtZW52XCIsXCJzY3JpcHRzXCI6IHtcImRldlwiOiBcImRldmVudlwifX0nID4gJHtwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9wYWNrYWdlLmpzb24nKX0gJiZcbiAgICAgIChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gICYmIG5vZGUgLi4vcGFja2FnZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYpXG4gICAgYDtcbiAgICAvLyBjb25zdCBjbWQgPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAgJiYgbm9kZSAuLi9wYWNrYWdlcy9kZXZfZW52L2Rpc3QvZGV2X2VudilgO1xuICAgIC8vIGNvbnN0IGNtZCA9IGAoY2QgJHtkZXZFbnZSb290fSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpYDtcbiAgICBjb25zb2xlLmxvZygnY21kJywgY21kKTtcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgLy8gdXNlRGlzdCxcbiAgICAgIGVhcmx5eDogKCkgPT4ge1xuXG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAnRUFSTFknLCAnJyk7XG4gICAgICAgIC8vIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgY29uc3QgcHJlcHVibGlzaCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2FhYScpO1xuICAgICAgICAgIGNvbnN0IGFQcm9jZXNzID0gc2hlbGxDb21tYW5kKGAoY2QgJHtkZXZFbnZSb290fSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpYCwgdW5kZWZpbmVkLCBmYWxzZSk7XG4gICAgICAgICAgYVByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmJiJyk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcmVwdWJsaXNoLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xuICAgICAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpLFxuICAgICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyh0ZXN0UHJvamVjdFBhdGgpLFxuICAgICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyhub2RlTW9kdWxlc0NvcHlQYXRoKSxcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMoZGV2RW52Q29weVBhdGgpLFxuICAgICAgICAgICAgZnMuY29weVN5bmMocGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL2Rpc3QnKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9kaXN0JykpLFxuICAgICAgICAgICAgZnMuY29weVN5bmMocGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL3BhY2thZ2UuanNvbicpLCBwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsICcuL3BhY2thZ2UuanNvbicpKSxcbiAgICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9iaW4nKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9iaW4nKSksXG4gICAgICAgICAgICBmcy5jb3B5U3luYyhiaW5PcmlnaW5hbFBhdGgsIGJpbkNvcHlQYXRoKSxcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZShwYXRoVG9NYWluLCBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2ApLFxuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSwgYHtcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdC1wcm9qZWN0LWZvci1kZXYtZW52XCIsXG4gICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuMC4yXCIsXG4gICAgICAgICAgICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAgICAgICAgIFwiZGV2XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgICAgICAgICAgXCJkZXZ4XCI6IFwiZGV2ZW52IC0tZGVtby1lbnRyeT0nJHtwYXRoVG9NYWlufSdcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgICAgICAgICAgXCJ0aGluZ1wiOiBcImRldmVudiAtLWVudj1idWlsZCAtLWRpcnJvb3Q9JChwd2QpXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiQGRlZnVhbHQvZGV2X2VudlwiOiBcIl4wLjAuMTRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RlZnVhbHQvdGVzdC1wcm9qZWN0LWZvci1kZXYtZW52LmdpdFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1gKSxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgIC8vIGZzLnJlYWRkaXJTeW5jKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgICAgLy8gICBpZiAoaSsrIDwgMjApIHtcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0VBUkxZMycpXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vICAgaWYgKGZpbGUgIT09ICcuYmluJykge1xuICAgICAgICAgIC8vICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgIC8vICAgICAgIGZzLnN5bWxpbmtTeW5jKHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc09yaWdpbmFsUGF0aCwgZmlsZSksIHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCBmaWxlKSlcbiAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgIC8vIGNvbnN0IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbiA9IGZzLnJlYWRKc29uU3luYyhkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoKTtcbiAgICAgICAgICAvLyBjb25zdCBkZXZFbnZCaW5EaWN0ID0gZGV2RW52Q29weVBhY2thZ2VEb3RKc29uLmJpbjtcbiAgICAgICAgICAvLyBPYmplY3Qua2V5cyhkZXZFbnZCaW5EaWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAvLyAgIGNvbnN0IHZhbCA9IGRldkVudkJpbkRpY3Rba2V5XTtcbiAgICAgICAgICAvLyAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgLy8gICAgIGZzLnN5bWxpbmtTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgdmFsKSwgcGF0aC5yZXNvbHZlKGJpbkNvcHlQYXRoLCBgLi8ke2tleX1gKSlcbiAgICAgICAgICAvLyAgICk7XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICAgIH0sXG4gICAgICAvLyBub2RlUGF0aDogbm9kZVBhdGhWYXIsXG4gICAgICBtYWtlU2hlbGxDbWRTdHI6ICgpID0+IHtjb25zb2xlLmxvZygnRklORCBNRSBETyBTVFVGRicpOyByZXR1cm4gY21kOyB9LFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGF0aDogcGF0aFRvTWFpbixcbiAgICAgICAgLy8gICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgIC8vICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBwYXRoOiBwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSxcbiAgICAgICAgLy8gICB0ZXh0OiBge1xuICAgICAgICAvLyAgICAgXCJuYW1lXCI6IFwidGVzdC1wcm9qZWN0LWZvci1kZXYtZW52XCIsXG4gICAgICAgIC8vICAgICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICAgICAgICAvLyAgICAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICAgICAgLy8gICAgICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIFwic2NyaXB0c1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiZGV2XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgIC8vICAgICAgIFwiZGV2eFwiOiBcImRldmVudiAtLWRlbW8tZW50cnk9JyR7cGF0aFRvTWFpbn0nXCIsXG4gICAgICAgIC8vICAgICAgIFwic3RhcnRcIjogXCJkZXZlbnZcIixcbiAgICAgICAgLy8gICAgICAgXCJ0aGluZ1wiOiBcImRldmVudiAtLWVudj1idWlsZCAtLWRpcnJvb3Q9JChwd2QpXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiQGRlZnVhbHQvZGV2X2VudlwiOiBcIl4wLjAuMTRcIlxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgICAgIC8vICAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgICAvLyAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1YWx0L3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudi5naXRcIlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1gLFxuICAgICAgICAvLyB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgICAgY2xlYW51cDogKC8qIGRldkVudlByb2Nlc3MgKi8pID0+IHtcbiAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICdyZW1vdmUgdGVzdFByb2plY3RQYXRoJywgJycpO1xuICAgICAgICBmcy5yZW1vdmVTeW5jKHRlc3RQcm9qZWN0UGF0aCk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnbm9uLWV4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgbGV0IG5vdEZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcE1BWUJFLUEtVFlQTyc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogJ2V4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJ0ZXN0ZGV2ZW52LXNvbWUtZGVwXCIpOyB9OycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIG5vdEZvdW5kRXJyb3IgPSBub3RGb3VuZEVycm9yIHx8IGRhdGEuaW5kZXhPZihgTW9kdWxlIG5vdCBmb3VuZDogRXJyb3I6IENhbid0IHJlc29sdmUgJyR7aW1wb3J0VG9BdHRlbXB0fSdgKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCd3ZWJwYWNrIGJ1bmRsaW5nIHRocm93cyBlcnJvciBmb3Igbm9uLWV4aXN0ZW50IGltcG9ydHMgd2l0aGluIGFzc2V0cycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChub3RGb3VuZEVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMgd2l0aCBucG0tc2NvcGluZycsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXAnO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnQHNvbWUtbnBtLXNjb3BlLyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIG5wbS1zY29wZWQgaW1wb3J0IGJ1bmRsaW5nJywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGVzdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCB0ZXN0c1Bhc3NlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdUZXN0KHtcbiAgICAgIHRlc3RQYXRoUGF0dGVybjogJy4qL3Rlc3RkZXZlbnYtc29tZS1kZXAvLionLFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLnRlc3QuanMnKSxcbiAgICAgICAgICB0ZXh0OiAndGVzdChcImFkZHMgMSArIDIgdG8gZXF1YWwgM1wiLCAoKSA9PiB7IGV4cGVjdCgxICsgMikudG9CZSgzKTsgfSk7JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvblN0ZGVycjogKGRhdGEpID0+IHtcbiAgICAgICAgdGVzdHNQYXNzZWQgPSB0ZXN0c1Bhc3NlZCB8fCBkYXRhLmluZGV4T2YoJzEgcGFzc2VkLCAxIHRvdGFsJykgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgndGVzdHRlc3R0ZXN0JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKHRlc3RzUGFzc2VkLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3RkZXZlbnYyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhbGtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFsa1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvci1wYWlycy1waWNrZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvci1wYWlycy1waWNrZXJcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmluZC1ub2RlLW1vZHVsZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmaW5kLW5vZGUtbW9kdWxlc1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoYXMtYW5zaVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhhcy1hbnNpXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=