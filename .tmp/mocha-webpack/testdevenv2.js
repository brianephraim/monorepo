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

        var promises = [_fsExtra2.default.removeSync(testProjectPath), _fsExtra2.default.ensureDirSync(testProjectPath), _fsExtra2.default.ensureDirSync(nodeModulesCopyPath), _fsExtra2.default.ensureDirSync(devEnvCopyPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './package.json'), devEnvCopyPackageDotJsonPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './bin'), _path2.default.resolve(devEnvCopyPath, './bin')), _fsExtra2.default.copySync(binOriginalPath, binCopyPath), _fsExtra2.default.writeFile(pathToMain, 'document.body.append(\'' + contentToBundle + '\');'), _fsExtra2.default.writeFileSync(_path2.default.resolve(testProjectPath, './package.json'), '{\n            "name": "test-project-for-dev-env",\n            "version": "0.0.2",\n            "publishConfig": {\n              "access": "public"\n            },\n            "scripts": {\n              "dev": "devenv",\n              "devx": "devenv --demo-entry=\'' + pathToMain + '\'",\n              "start": "devenv",\n              "thing": "devenv --env=build --dirroot=$(pwd)"\n            },\n            "devDependencies": {\n              "@defualt/dev_env": "^0.0.14"\n            },\n            "repository": {\n              "type": "git",\n              "url": "https://github.com/defualt/test-project-for-dev-env.git"\n            }\n          }')];

        _fsExtra2.default.readdirSync(nodeModulesOriginalPath).forEach(function (file, i) {
          if (i < 20) {
            console.log('symlinking node_modules content', file);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RkNWIwOTRmOWNhMGMyNGVkYTciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy8uLi9jb3JlL2ZhbmN5TG9nLmpzIiwid2VicGFjazovLy8uLi9jb3JlL2dldERldkVudlJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZ2V0Tm9kZVBhdGhTaFZhci5qcyIsIndlYnBhY2s6Ly8vLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2NoYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIiIsIndlYnBhY2s6Ly8vLi90ZXN0ZGV2ZW52Mi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yLXBhaXJzLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbmQtbm9kZS1tb2R1bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGFzLWFuc2lcIiJdLCJuYW1lcyI6WyJjaGFsa0xpYiIsInJlcXVpcmUiLCJjb2xvclBhaXJzUGlja2VyIiwiaGFzQW5zaSIsImNoYWxrIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsImZvcm1hdExvZyIsImNvbG9yIiwiaGVhZGluZyIsImJnIiwiY29udHJhc3QiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJmZyIsImNvbnNvbGUiLCJsb2ciLCJyZ2IiLCJiZ1JnYiIsImFyZ3MiLCJmaW5kIiwia2V5d29yZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnN1cmVUcmFpbGluZ1NsYXNoIiwic3RyIiwicmVwbGFjZSIsImRldkVudlJvb3QiLCJfX2Rpcm5hbWUiLCJsZW5ndGgiLCJqb2luIiwiZmluZE5vZGVNb2R1bGVzIiwibm9kZVBhdGhTZXBhcmF0b3IiLCJ0ZXN0IiwicHJvY2VzcyIsInBsYXRmb3JtIiwiYmVmb3JlIiwiYWZ0ZXIiLCJjd2QiLCJub2RlUGF0aHMiLCJjb25jYXQiLCJyZWxhdGl2ZSIsImNvbW1hbmRUb1J1biIsIm9wdGlvbnMiLCJzdGRpbyIsImtpbGxQYXJlbnRPbkV4aXQiLCJjb21tYW5kIiwiY2hpbGRQcm9jZXNzIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwia2lsbCIsInBpZCIsImV4aXQiLCJkdXJpbmdQcm9jZXNzIiwib25EYXRhIiwib25TdGRlcnIiLCJtYWtlU2hlbGxDbWRTdHJYIiwibWFrZVNoZWxsQ21kU3RyIiwiY2xlYW51cCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZWFybHkiLCJhc3NldHNUb0dlbmVyYXRlIiwiZHVyaW5nUHJvY2Vzc0JlZm9yZSIsImRvbmUiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInRoZW4iLCJwYXRoVG9EZW1vRW50cnkiLCJmb3JFYWNoIiwiYXNzZXRJbmZvIiwicGF0aCIsImRpciIsImRpcm5hbWUiLCJlbnN1cmVEaXJTeW5jIiwid3JpdGVGaWxlU3luYyIsInRleHQiLCJpc0RlbW9FbnRyeSIsImNtZCIsImRldkVudlByb2Nlc3MiLCJmaW5pc2hlZCIsImZpbmlzaCIsInJlbW92ZVN5bmMiLCJzdGRvdXQiLCJkYXRhIiwiZGF0YVN0cmluZyIsInRvU3RyaW5nIiwic3RkZXJyIiwiZHVyaW5nU2VydmVyIiwidXNlRGlzdCIsIm9uQXNzZXQiLCJub2RlUGF0aCIsInNjcmFwZURpciIsIm9uY2UiLCJub2RlUGF0aFNoVmFyIiwicHJlcHVibGlzaCIsImluZGV4T2YiLCJ1cmxzIiwiZGlyZWN0b3J5IiwicmVzb3VyY2VTYXZlciIsInJlc291cmNlIiwiZXJyIiwicmVqZWN0IiwiZHVyaW5nVGVzdCIsInRlc3RQYXRoUGF0dGVybiIsIm1vbm9yZXBvRGlyIiwiY29udGVudFRvQnVuZGxlIiwiYnVuZGxlSGFzQ29udGVudCIsImVxdWFsIiwib25seSIsInRlc3RQcm9qZWN0UGF0aCIsImRldkVudk9yaWdpbmFsUGF0aCIsIm5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoIiwibm9kZU1vZHVsZXNDb3B5UGF0aCIsImRldkVudkNvcHlQYXRoIiwiYmluT3JpZ2luYWxQYXRoIiwiYmluQ29weVBhdGgiLCJkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoIiwicGF0aFRvTWFpbiIsImRldkVudkNvcHlEaXN0UGF0aCIsInByb21pc2VzIiwiY29weVN5bmMiLCJ3cml0ZUZpbGUiLCJyZWFkZGlyU3luYyIsImZpbGUiLCJpIiwicHVzaCIsInN5bWxpbmtTeW5jIiwiZGV2RW52Q29weVBhY2thZ2VEb3RKc29uIiwicmVhZEpzb25TeW5jIiwiZGV2RW52QmluRGljdCIsImJpbiIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJ2YWwiLCJhbGwiLCJjbWRYIiwiY21kWSIsImNtZFoiLCJlYXJseXgiLCJhUHJvY2VzcyIsInVuZGVmaW5lZCIsIm5vdEZvdW5kRXJyb3IiLCJpbXBvcnRUb0F0dGVtcHQiLCJ0ZXN0c1Bhc3NlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFl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UCxDQUFhcUMsV0FBYixFQUEwQixJQUExQjtBQUNELEtBRkQ7QUFHRCxHQTVCRDtBQTZCRCxDQTNaRCxFOzs7Ozs7O0FDck1BLGtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InRlc3RkZXZlbnYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2RkNWIwOTRmOWNhMGMyNGVkYTciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmNvbnN0IGNoYWxrTGliID0gcmVxdWlyZSgnY2hhbGsnKTtcbmNvbnN0IGNvbG9yUGFpcnNQaWNrZXIgPSByZXF1aXJlKCdjb2xvci1wYWlycy1waWNrZXInKTtcbmNvbnN0IGhhc0Fuc2kgPSByZXF1aXJlKCdoYXMtYW5zaScpO1xuXG5cbmNvbnN0IGNoYWxrID0gbmV3IGNoYWxrTGliLmNvbnN0cnVjdG9yKHsgbGV2ZWw6IDMgfSk7XG5mdW5jdGlvbiBmb3JtYXRMb2coY29sb3IsIGhlYWRpbmcsIC4uLmFyZ3MpIHtcbiAgY29uc3QgYmcgPSBjb2xvclBhaXJzUGlja2VyKGNvbG9yLCB7IGNvbnRyYXN0OiA4IH0pLmJnLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAraXRlbTtcbiAgfSk7XG4gIGNvbnN0IGZnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5mZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhjaGFsay5yZ2IoLi4uZmcpLmJnUmdiKC4uLmJnKShoZWFkaW5nKSk7XG5cbiAgaWYgKHR5cGVvZiBhcmdzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuIGhhc0Fuc2koaXRlbSk7IH0pID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKGNoYWxrLmtleXdvcmQoY29sb3IpKC4uLmFyZ3MpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXRMb2c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9mYW5jeUxvZy5qcyIsImZ1bmN0aW9uIGVuc3VyZVRyYWlsaW5nU2xhc2goc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xufVxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGxldCBkZXZFbnZSb290ID0gZW5zdXJlVHJhaWxpbmdTbGFzaChfX2Rpcm5hbWUpLnNwbGl0KCcvZGV2X2Vudi8nKTtcbiAgZGV2RW52Um9vdFtkZXZFbnZSb290Lmxlbmd0aCAtIDFdID0gJyc7XG4gIGRldkVudlJvb3QgPSBkZXZFbnZSb290LmpvaW4oJy9kZXZfZW52LycpO1xuICByZXR1cm4gZGV2RW52Um9vdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9nZXREZXZFbnZSb290LmpzIiwiY29uc3QgZmluZE5vZGVNb2R1bGVzID0gcmVxdWlyZSgnZmluZC1ub2RlLW1vZHVsZXMnKTtcbi8vIGZvciBOT0RFX1BBVEgsIG9uIHdpbmRvd3MsIHNlcGVyYXRvciBpcyA7IGluc3RlYWQgb2YgOi4gIFdoYXQgZnVuLlxuLy8gc2VwZXJhdG9yIGlzIGJhc2ggYXJyYXkgYXJndW1lbnQgc2VwZXJhdG9yIHN5bnRheC5cbmNvbnN0IG5vZGVQYXRoU2VwYXJhdG9yID0gL153aW4vLnRlc3QocHJvY2Vzcy5wbGF0Zm9ybSkgPyAnOycgOiAnOic7XG4vLyBGaW5kIGFsbCBkaXJlY3RvcmllcyBvZiBub2RlX21vZHVsZXMgdGhhdCBhcHBseSB0byB0aGUgZmlsZSB3ZSBhcmUgY29tcGlsaW5nLlxubW9kdWxlLmV4cG9ydHMgPSAoeyBiZWZvcmUgPSBbXSwgYWZ0ZXIgPSBbXSwgY3dkIH0pID0+IHtcbiAgY29uc3Qgbm9kZVBhdGhzID0gYmVmb3JlXG4gIC5jb25jYXQoZmluZE5vZGVNb2R1bGVzKHsgcmVsYXRpdmU6IGZhbHNlLCBjd2QgfSkpXG4gIC5jb25jYXQoYWZ0ZXIpXG4gIC5qb2luKG5vZGVQYXRoU2VwYXJhdG9yKTtcbiAgcmV0dXJuIGBOT0RFX1BBVEg9JyR7bm9kZVBhdGhzfSdgO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvZ2V0Tm9kZVBhdGhTaFZhci5qcyIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5tb2R1bGUuZXhwb3J0cyA9IChjb21tYW5kVG9SdW4sIG9wdGlvbnMgPSB7IHN0ZGlvOiAnaW5oZXJpdCcgfSwga2lsbFBhcmVudE9uRXhpdCA9IHRydWUpID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kVG9SdW4sXG4gIF07XG4gIC8vXG4gIC8vIGtleGVjIGRvZXNuJ3Qgd29yayBpbiB3aW5kb3dzLCBzbyBmYWxsYmFjayB0byBjaGlsZF9wcm9jZXNzLnNwYXduXG4gIC8vIHRoaXMgbG9naWMgY29waWVkIGZyb20gYmFiZWwtY2xpL2xpYi9iYWJlbC1ub2RlLmpzXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3Qga2V4ZWMgPSByZXF1aXJlKCdrZXhlYycpO1xuICAvLyAgIGtleGVjKGNvbW1hbmQsIGFyZ3MpO1xuICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyO1xuXG4gIGNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zIHx8IHt9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBpZiAoa2lsbFBhcmVudE9uRXhpdCkge1xuICAgICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9jO1xuICAvLyB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvc2hlbGxDb21tYW5kLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXNzZXJ0XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1leHRyYVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vY2hhXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9jaGFcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXV1aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXV1aWRcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRlcm1pbmF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRlcm1pbmF0ZVwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJzaXRlLXNjcmFwZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IHRlcm1pbmF0ZSBmcm9tICd0ZXJtaW5hdGUnO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHNjcmFwZSBmcm9tICd3ZWJzaXRlLXNjcmFwZXInO1xuaW1wb3J0IHsgdjQgYXMgbWFrZVV1aWQgfSBmcm9tICdub2RlLXV1aWQnO1xuaW1wb3J0IHsgaXQsIGRlc2NyaWJlLCBiZWZvcmUgfSBmcm9tICdtb2NoYSc7XG5pbXBvcnQgc2hlbGxDb21tYW5kIGZyb20gJy4uL2NvcmUvc2hlbGxDb21tYW5kJztcbmltcG9ydCBmYW5jeUxvZyBmcm9tICcuLi9jb3JlL2ZhbmN5TG9nJztcbmltcG9ydCBnZXREZXZFbnZSb290IGZyb20gJy4uL2NvcmUvZ2V0RGV2RW52Um9vdCc7XG5pbXBvcnQgZ2V0Tm9kZVBhdGhTaFZhciBmcm9tICcuLi9jb3JlL2dldE5vZGVQYXRoU2hWYXInO1xuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cblxuXG4vLyBmYW5jeUxvZygnb3JhbmdlJywgJ3N0YXJ0IHRlcm1pbmF0ZScsICdhc2RmJyk7XG5jb25zdCBkZXZFbnZSb290ID0gZ2V0RGV2RW52Um9vdChfX2Rpcm5hbWUpO1xuXG5mdW5jdGlvbiBkdXJpbmdQcm9jZXNzKHtcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIG1ha2VTaGVsbENtZFN0clggPSAoKSA9PiB7IHJldHVybiAncHdkJzsgfSxcbiAgbWFrZVNoZWxsQ21kU3RyID0gKCkgPT4ge30sXG4gIGNsZWFudXAgPSAoKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSxcbiAgZWFybHkgPSAoKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSxcbiAgYXNzZXRzVG9HZW5lcmF0ZSxcbn0pIHtcbiAgYmVmb3JlKGZ1bmN0aW9uIGR1cmluZ1Byb2Nlc3NCZWZvcmUoZG9uZSkge1xuICAgIHRoaXMudGltZW91dCg2MDAwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlYXJseSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBsZXQgcGF0aFRvRGVtb0VudHJ5O1xuICAgICAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgICBmYW5jeUxvZygnZ3JlZW4nLCAnR0VORVJBVElORycsIGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKGRpcik7XG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGFzc2V0SW5mby5wYXRoLCBhc3NldEluZm8udGV4dCk7XG4gICAgICAgICAgICBpZiAoYXNzZXRJbmZvLmlzRGVtb0VudHJ5KSB7XG4gICAgICAgICAgICAgIHBhdGhUb0RlbW9FbnRyeSA9IGFzc2V0SW5mby5wYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3QgY21kID0gbWFrZVNoZWxsQ21kU3RyWChwYXRoVG9EZW1vRW50cnkpO1xuICAgICAgICAgICAgY29uc3QgY21kID0gbWFrZVNoZWxsQ21kU3RyKHBhdGhUb0RlbW9FbnRyeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hlbGwgY29tbWFuZCcsY21kKTtcbiAgICAgICAgICAgIGNvbnN0IGRldkVudlByb2Nlc3MgPSBzaGVsbENvbW1hbmQoY21kLCBudWxsLCBmYWxzZSk7XG4gICAgICAgICAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZJTklTSEVEPz8/JyxmaW5pc2hlZCk7XG4gICAgICAgICAgICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmYW5jeUxvZygnZ3JlZW4nLCAnRklOSVNIRUQnLCAnY29kZScpO1xuICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhc2RmIGR1cmluZ1Byb2Nlc3MgY2xlYW51cCcpO1xuICAgICAgICAgICAgICBjbGVhbnVwKGRldkVudlByb2Nlc3MpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAncmVtb3ZlIGFzc2V0cycsICcnKTtcbiAgICAgICAgICAgICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgICAgICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ2JlZm9yZVxcJ3MgZG9uZSgpIGNhbGxlZCcsICcnKTtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGV2RW52UHJvY2Vzcy5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkYXRhU3RyaW5nID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICAgICAgICBmYW5jeUxvZygnYmx1ZScsICdkZXZFbnZQcm9jZXNzLnN0ZG91dDonLCBkYXRhU3RyaW5nKTtcbiAgICAgICAgICAgICAgb25EYXRhKGRhdGFTdHJpbmcsIGZpbmlzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRldkVudlByb2Nlc3Muc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZykge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgb25TdGRlcnIoZGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmFuY3lMb2coJ2N5YW4nLCAnZGV2RW52UHJvY2Vzcy5zdGRlcnI6JywgZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRldkVudlByb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgICAgICAgICBmYW5jeUxvZygneWVsbG93JywgJ2NoaWxkIHByb2Nlc3MgZXhpdGVkIHdpdGggY29kZTonLCBjb2RlKTtcbiAgICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1NlcnZlcih7XG4gIHVzZURpc3QsXG4gIG9uQXNzZXQgPSAoKSA9PiB7fSxcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIGNsZWFudXAgPSAoKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSxcbiAgbWFrZVNoZWxsQ21kU3RyLFxuICBhc3NldHNUb0dlbmVyYXRlLFxuICBub2RlUGF0aCxcbiAgbWFrZVNoZWxsQ21kU3RyWCxcbiAgZWFybHksXG59KSB7XG4gIGNvbnN0IHNjcmFwZURpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NjcmFwZScpO1xuICBsZXQgb25jZSA9IGZhbHNlO1xuICBkdXJpbmdQcm9jZXNzKHtcbiAgICBlYXJseSxcbiAgICBtYWtlU2hlbGxDbWRTdHJYLFxuICAgIG1ha2VTaGVsbENtZFN0cjogKHBhdGhUb0RlbW9FbnRyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZVBhdGhTaFZhciA9IG5vZGVQYXRoID8gYCR7bm9kZVBhdGh9IGAgOiAnJztcbiAgICAgIGNvbnNvbGUubG9nKCdub2RlUGF0aCcsIG5vZGVQYXRoU2hWYXIpO1xuICAgICAgaWYgKG1ha2VTaGVsbENtZFN0cikge1xuICAgICAgICByZXR1cm4gbWFrZVNoZWxsQ21kU3RyKHBhdGhUb0RlbW9FbnRyeSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmVwdWJsaXNoID0gdXNlRGlzdCA/IGAoY2QgJHtkZXZFbnZSb290fSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIGAgOiAnJztcbiAgICAgIGNvbnNvbGUubG9nKCdYWFhYWCcpO1xuICAgICAgY29uc29sZS5sb2coJ1hYWFhYJyk7XG4gICAgICBjb25zb2xlLmxvZygnWFhYWFgnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdYWFhYWCcpO1xuICAgICAgY29uc29sZS5sb2coJ1hYWFhYJyk7XG4gICAgICBjb25zb2xlLmxvZygnWFhYWFgnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdYWFhYWCcpO1xuICAgICAgY29uc29sZS5sb2coJ1hYWFhYJyk7XG4gICAgICByZXR1cm4gYChcbiAgICAgICAgJHtwcmVwdWJsaXNofW5wbSBydW4gZGV2IC0tIC0tZGVtby1lbnRyeT0nJHtwYXRoVG9EZW1vRW50cnl9JyR7dXNlRGlzdCA/ICcgLS11c2UtZGlzdCcgOiAnJ30gXG4gICAgICApYDtcbiAgICB9LFxuICAgIG9uRGF0YTogKGRhdGFTdHJpbmcsIGZpbmlzaCkgPT4ge1xuICAgICAgb25EYXRhKGRhdGFTdHJpbmcsIGZpbmlzaCk7XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBGYWlsZWQgdG8gY29tcGlsZS4nKSAhPT0gLTEgJiYgIW9uY2UpIHtcbiAgICAgICAgb25jZSA9IHRydWU7XG4gICAgICAgIGZpbmlzaCgpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZignd2VicGFjazogQ29tcGlsZWQgc3VjY2Vzc2Z1bGx5LicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2NyYXBlKHtcbiAgICAgICAgICAgIHVybHM6IFsnaHR0cDovL2xvY2FsaG9zdDozMDAwLyddLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiBzY3JhcGVEaXIsXG4gICAgICAgICAgICByZXNvdXJjZVNhdmVyOiBjbGFzcyBNeVJlc291cmNlU2F2ZXIge1xuICAgICAgICAgICAgICBzYXZlUmVzb3VyY2UocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBvbkFzc2V0KHJlc291cmNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlcnJvckNsZWFudXAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFuY3lMb2coJ3BpbmsnLCAnc2NyYXBlIHJlc291cmNlIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIC8vIGZpbmlzaCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TdGRlcnIsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBjbGVhbnVwOiAoZGV2RW52UHJvY2VzcykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICd0ZXJtaW5hdGUgc3RhcnQnLCAnJyk7XG4gICAgICAgIHRlcm1pbmF0ZShkZXZFbnZQcm9jZXNzLnBpZCwgKGVycikgPT4ge1xuICAgICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAndGVybWluYXRlIGVuZCcsICcnKTtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBmYW5jeUxvZygncmVkJywgJ09vcHN5IGR1cmluZyB0ZXJtaW5hdGU6JywgZXJyKTtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmYW5jeUxvZygnZ3JlZW4nLCAnZG9uZSBmb3IgdGVybWluYXRlJywgJycpO1xuICAgICAgICAgICAgY2xlYW51cChkZXZFbnZQcm9jZXNzKTtcbiAgICAgICAgICAgIGZzLnJlbW92ZVN5bmMoc2NyYXBlRGlyKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1Rlc3Qoe1xuICB0ZXN0UGF0aFBhdHRlcm4sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBjbGVhbnVwID0gKCkgPT4ge30sXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG59KSB7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIG9uU3RkZXJyLFxuICAgIG9uRGF0YSxcbiAgICBhc3NldHNUb0dlbmVyYXRlLFxuICAgIGNsZWFudXAsXG4gICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7XG4gICAgICByZXR1cm4gYChcbiAgICAgICAgbnBtIHJ1biB0ZXN0cGFja2FnZXMgLS0gLS13YXRjaD1mYWxzZSAtLXRlc3RQYXRoUGF0dGVybj0nJHt0ZXN0UGF0aFBhdHRlcm59J1xuICAgICAgKWA7XG4gICAgfSxcbiAgfSk7XG59XG5cbmNvbnN0IG1vbm9yZXBvRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uLycpO1xuZGVzY3JpYmUoJ3Rlc3RkZXZlbnYnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IHZpYSBvbiBkZW1hbmQgY29tcGlsZWQgc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcblxuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IHZpYSBwcmUtY29tcGlsZWQgc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgdXNlRGlzdDogdHJ1ZSxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUub25seSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCB2aWEgcHJlLWNvbXBpbGVkIHNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGNvbnN0IHRlc3RQcm9qZWN0UGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4uL3Rlc3RkZXZlbnYtbWFpbi9hc2RmJyk7XG4gICAgY29uc3QgZGV2RW52T3JpZ2luYWxQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy9kZXZfZW52Jyk7XG4gICAgY29uc3Qgbm9kZU1vZHVsZXNPcmlnaW5hbFBhdGggPSBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL25vZGVfbW9kdWxlcycpO1xuICAgIGNvbnN0IG5vZGVNb2R1bGVzQ29weVBhdGggPSBwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9ub2RlX21vZHVsZXMnKTtcbiAgICBjb25zdCBkZXZFbnZDb3B5UGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCAnLi9kZXZfZW52Jyk7XG4gICAgY29uc3QgYmluT3JpZ2luYWxQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoLCAnLi8uYmluJyk7XG4gICAgY29uc3QgYmluQ29weVBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgJy4vLmJpbicpO1xuICAgIGNvbnN0IGRldkVudkNvcHlQYWNrYWdlRG90SnNvblBhdGggPSBwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsICcuL3BhY2thZ2UuanNvbicpO1xuICAgIGNvbnN0IHBhdGhUb01haW4gPSBwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi90ZXN0ZGV2ZW52LW1haW4uZGVtby5qcycpO1xuICAgIGNvbnN0IGRldkVudkNvcHlEaXN0UGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vZGlzdCcpO1xuXG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgZWFybHk6ICgpID0+IHtcbiAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICdFQVJMWScsICcnKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICBmcy5yZW1vdmVTeW5jKHRlc3RQcm9qZWN0UGF0aCksXG4gICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyh0ZXN0UHJvamVjdFBhdGgpLFxuICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMobm9kZU1vZHVsZXNDb3B5UGF0aCksXG4gICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyhkZXZFbnZDb3B5UGF0aCksXG4gICAgICAgICAgZnMuY29weVN5bmMocGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL3BhY2thZ2UuanNvbicpLCBkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoKSxcbiAgICAgICAgICBmcy5jb3B5U3luYyhwYXRoLnJlc29sdmUoZGV2RW52Um9vdCwgJy4vYmluJyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vYmluJykpLFxuICAgICAgICAgIGZzLmNvcHlTeW5jKGJpbk9yaWdpbmFsUGF0aCwgYmluQ29weVBhdGgpLFxuICAgICAgICAgIGZzLndyaXRlRmlsZShwYXRoVG9NYWluLCBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2ApLFxuICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyksIGB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0LXByb2plY3QtZm9yLWRldi1lbnZcIixcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuMC4yXCIsXG4gICAgICAgICAgICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgICAgICAgICAgICBcImFjY2Vzc1wiOiBcInB1YmxpY1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY3JpcHRzXCI6IHtcbiAgICAgICAgICAgICAgXCJkZXZcIjogXCJkZXZlbnZcIixcbiAgICAgICAgICAgICAgXCJkZXZ4XCI6IFwiZGV2ZW52IC0tZGVtby1lbnRyeT0nJHtwYXRoVG9NYWlufSdcIixcbiAgICAgICAgICAgICAgXCJzdGFydFwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICBcInRoaW5nXCI6IFwiZGV2ZW52IC0tZW52PWJ1aWxkIC0tZGlycm9vdD0kKHB3ZClcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgICAgICAgXCJAZGVmdWFsdC9kZXZfZW52XCI6IFwiXjAuMC4xNFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RlZnVhbHQvdGVzdC1wcm9qZWN0LWZvci1kZXYtZW52LmdpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWApLFxuICAgICAgICBdO1xuXG4gICAgICAgIGZzLnJlYWRkaXJTeW5jKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoKS5mb3JFYWNoKChmaWxlLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPCAyMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N5bWxpbmtpbmcgbm9kZV9tb2R1bGVzIGNvbnRlbnQnLCBmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpbGUgIT09ICcuYmluJykge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgICAgZnMuc3ltbGlua1N5bmMoXG4gICAgICAgICAgICAgICAgcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoLCBmaWxlKSxcbiAgICAgICAgICAgICAgICBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgZmlsZSkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbiA9IGZzLnJlYWRKc29uU3luYyhkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoKTtcbiAgICAgICAgY29uc3QgZGV2RW52QmluRGljdCA9IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbi5iaW47XG4gICAgICAgIE9iamVjdC5rZXlzKGRldkVudkJpbkRpY3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbCA9IGRldkVudkJpbkRpY3Rba2V5XTtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgZnMuc3ltbGlua1N5bmMocGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCB2YWwpLCBwYXRoLnJlc29sdmUoYmluQ29weVBhdGgsIGAuLyR7a2V5fWApKSxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgIH0sXG4gICAgICAvLyB1c2VEaXN0OiB0cnVlLFxuICAgICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgKGNkICR7ZGV2RW52T3JpZ2luYWxQYXRofSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIGNwIC1yZiAke3BhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9kaXN0Jyl9ICR7ZGV2RW52Q29weURpc3RQYXRofSAmJiAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIG5wbSBydW4gZGV2KWA7XG4gICAgICAgIC8vIHJldHVybiBgKGNkICR7ZGV2RW52T3JpZ2luYWxQYXRofSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gJiYgbm9kZSAke3BhdGgucmVzb2x2ZShkZXZFbnZPcmlnaW5hbFBhdGgsICcuL2Rpc3QvZGV2X2Vudi5qcycpfSAtLWRlbW8tZW50cnk9JyR7cGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vdGVzdGRldmVudi1tYWluLmRlbW8uanMnKX0nIC0tdXNlLWRpc3QpYDtcbiAgICAgICAgLy8gcmV0dXJuIGAoY2QgL1VzZXJzL2JyaWFuZXBocmFpbS9TaXRlcy9tb25vcmVwby9wYWNrYWdlcy9kZXZfZW52LyAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIG5wbSBydW4gZGV2IC0tIC0tZGVtby1lbnRyeT0nL1VzZXJzL2JyaWFuZXBocmFpbS9TaXRlcy9tb25vcmVwby90ZXN0ZGV2ZW52LW1haW4vYXNkZi90ZXN0ZGV2ZW52LW1haW4uZGVtby5qcycgLS11c2UtZGlzdGA7XG4gICAgICB9LFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi90ZXN0ZGV2ZW52LW1haW4vYXNkZi90ZXN0ZGV2ZW52LW1haW4uZGVtby5qcycpLFxuICAgICAgICAvLyAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgLy8gICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vdGVzdGRldmVudi1tYWluL2FzZGYvcGFja2FnZS5qc29uJyksXG4gICAgICAgIC8vICAgdGV4dDogYHtcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAvLyAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgICAgICAgLy8gICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAvLyAgICAgICBcImRldlwiOiBcImRldmVudlwiXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAvLyAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICAvLyAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgLy8gICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGVmdWFsdC90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYuZ2l0XCJcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9YCxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cblxuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBzaW1pbGFyIHRvIG5wbSB1c2FnZScsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgdGVzdFByb2plY3RQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYnKTtcbiAgICBcbiAgICBjb25zdCBub2RlTW9kdWxlc09yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gICAgY29uc3Qgbm9kZU1vZHVsZXNDb3B5UGF0aCA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL25vZGVfbW9kdWxlcycpO1xuICAgIGNvbnN0IGRldkVudkNvcHlQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsICcuL2Rldl9lbnYnKTtcbiAgICBjb25zdCBiaW5PcmlnaW5hbFBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsICcuLy5iaW4nKTtcbiAgICBjb25zdCBiaW5Db3B5UGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCAnLi8uYmluJyk7XG4gICAgY29uc3QgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyk7XG4gICAgXG4gICAgICAgIFxuXG4gICAgY29uc3QgcGF0aFRvTWFpbiA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyk7XG4gICAgLy8gY29uc3QgY21keCA9IGAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIG5vZGUgLi9ub2RlX21vZHVsZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59JylgO1xuICAgIGNvbnN0IGNtZFggPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBscylgO1xuICAgIGNvbnN0IGNtZFkgPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJiBucG0gcnVuIGRldilgO1xuICAgIGNvbnN0IGNtZFogPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJiBub2RlIC4vbm9kZV9tb2R1bGVzL2Rldl9lbnYvZGlzdC9kZXZfZW52KWA7XG4gICAgY29uc3QgY21kID0gYFxuICAgICAgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKSAmJiBcbiAgICAgIHJtIC1yZiAke3Rlc3RQcm9qZWN0UGF0aH0gJiZcbiAgICAgIG1rZGlyICR7dGVzdFByb2plY3RQYXRofSAmJlxuICAgICAgbWtkaXIgJHtub2RlTW9kdWxlc0NvcHlQYXRofSAmJlxuICAgICAgbWtkaXIgJHtkZXZFbnZDb3B5UGF0aH0gJiZcbiAgICAgIGNwICR7cGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL3BhY2thZ2UuanNvbicpfSAke3BhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyl9ICYmXG4gICAgICBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJlxuICAgICAgZWNobyAne1wibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFwic2NyaXB0c1wiOiB7XCJkZXZcIjogXCJkZXZlbnZcIn19JyA+ICR7cGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyl9ICYmXG4gICAgICAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICAmJiBub2RlIC4uL3BhY2thZ2VzL2Rldl9lbnYvZGlzdC9kZXZfZW52KVxuICAgIGA7XG4gICAgLy8gY29uc3QgY21kID0gYChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gICYmIG5vZGUgLi4vcGFja2FnZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYpYDtcbiAgICAvLyBjb25zdCBjbWQgPSBgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKWA7XG4gICAgY29uc29sZS5sb2coJ2NtZCcsIGNtZCk7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIC8vIHVzZURpc3QsXG4gICAgICBlYXJseXg6ICgpID0+IHtcblxuICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ0VBUkxZJywgJycpO1xuICAgICAgICAvLyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIGNvbnN0IHByZXB1Ymxpc2ggPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcbiAgICAgICAgICBjb25zdCBhUHJvY2VzcyA9IHNoZWxsQ29tbWFuZChgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKWAsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgIGFQcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JiYicpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJlcHVibGlzaC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICAgIGZzLnJlbW92ZVN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMobm9kZU1vZHVsZXNDb3B5UGF0aCksXG4gICAgICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKGRldkVudkNvcHlQYXRoKSxcbiAgICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9kaXN0JyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vZGlzdCcpKSxcbiAgICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9wYWNrYWdlLmpzb24nKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSksXG4gICAgICAgICAgICBmcy5jb3B5U3luYyhwYXRoLnJlc29sdmUoZGV2RW52Um9vdCwgJy4vYmluJyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vYmluJykpLFxuICAgICAgICAgICAgZnMuY29weVN5bmMoYmluT3JpZ2luYWxQYXRoLCBiaW5Db3B5UGF0aCksXG4gICAgICAgICAgICBmcy53cml0ZUZpbGUocGF0aFRvTWFpbiwgYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgKSxcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyksIGB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICAgICAgICAgICAgICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJzY3JpcHRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImRldlwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICAgIFwiZGV2eFwiOiBcImRldmVudiAtLWRlbW8tZW50cnk9JyR7cGF0aFRvTWFpbn0nXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICAgIFwidGhpbmdcIjogXCJkZXZlbnYgLS1lbnY9YnVpbGQgLS1kaXJyb290PSQocHdkKVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1YWx0L3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudi5naXRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9YCksXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAvLyBmcy5yZWFkZGlyU3luYyhub2RlTW9kdWxlc09yaWdpbmFsUGF0aCkuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgIC8vICAgaWYgKGkrKyA8IDIwKSB7XG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdFQVJMWTMnKVxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGlmIChmaWxlICE9PSAnLmJpbicpIHtcbiAgICAgICAgICAvLyAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAvLyAgICAgICBmcy5zeW1saW5rU3luYyhwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsIGZpbGUpLCBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgZmlsZSkpXG4gICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAvLyBjb25zdCBkZXZFbnZDb3B5UGFja2FnZURvdEpzb24gPSBmcy5yZWFkSnNvblN5bmMoZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCk7XG4gICAgICAgICAgLy8gY29uc3QgZGV2RW52QmluRGljdCA9IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbi5iaW47XG4gICAgICAgICAgLy8gT2JqZWN0LmtleXMoZGV2RW52QmluRGljdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgLy8gICBjb25zdCB2YWwgPSBkZXZFbnZCaW5EaWN0W2tleV07XG4gICAgICAgICAgLy8gICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgIC8vICAgICBmcy5zeW1saW5rU3luYyhwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsIHZhbCksIHBhdGgucmVzb2x2ZShiaW5Db3B5UGF0aCwgYC4vJHtrZXl9YCkpXG4gICAgICAgICAgLy8gICApO1xuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9LFxuICAgICAgLy8gbm9kZVBhdGg6IG5vZGVQYXRoVmFyLFxuICAgICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7Y29uc29sZS5sb2coJ0ZJTkQgTUUgRE8gU1RVRkYnKTsgcmV0dXJuIGNtZDsgfSxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHBhdGg6IHBhdGhUb01haW4sXG4gICAgICAgIC8vICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAvLyAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGF0aDogcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyksXG4gICAgICAgIC8vICAgdGV4dDogYHtcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAvLyAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgICAgICAgLy8gICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAvLyAgICAgICBcImRldlwiOiBcImRldmVudlwiLFxuICAgICAgICAvLyAgICAgICBcImRldnhcIjogXCJkZXZlbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59J1wiLFxuICAgICAgICAvLyAgICAgICBcInN0YXJ0XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgIC8vICAgICAgIFwidGhpbmdcIjogXCJkZXZlbnYgLS1lbnY9YnVpbGQgLS1kaXJyb290PSQocHdkKVwiXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAvLyAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICAvLyAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgLy8gICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGVmdWFsdC90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYuZ2l0XCJcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9YCxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICAgIGNsZWFudXA6ICgvKiBkZXZFbnZQcm9jZXNzICovKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAncmVtb3ZlIHRlc3RQcm9qZWN0UGF0aCcsICcnKTtcbiAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ25vbi1leGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGxldCBub3RGb3VuZEVycm9yID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXBNQVlCRS1BLVRZUE8nO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6ICdleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKFwidGVzdGRldmVudi1zb21lLWRlcFwiKTsgfTsnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uU3RkZXJyOiAoZGF0YSkgPT4ge1xuICAgICAgICBub3RGb3VuZEVycm9yID0gbm90Rm91bmRFcnJvciB8fCBkYXRhLmluZGV4T2YoYE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICcke2ltcG9ydFRvQXR0ZW1wdH0nYCkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnd2VicGFjayBidW5kbGluZyB0aHJvd3MgZXJyb3IgZm9yIG5vbi1leGlzdGVudCBpbXBvcnRzIHdpdGhpbiBhc3NldHMnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwobm90Rm91bmRFcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBpbXBvcnQgYnVuZGxpbmcnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzIHdpdGggbnBtLXNjb3BpbmcnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJ0Bzb21lLW5wbS1zY29wZS8ke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBucG0tc2NvcGVkIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Rlc3QnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgdGVzdHNQYXNzZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nVGVzdCh7XG4gICAgICB0ZXN0UGF0aFBhdHRlcm46ICcuKi90ZXN0ZGV2ZW52LXNvbWUtZGVwLy4qJyxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC50ZXN0LmpzJyksXG4gICAgICAgICAgdGV4dDogJ3Rlc3QoXCJhZGRzIDEgKyAyIHRvIGVxdWFsIDNcIiwgKCkgPT4geyBleHBlY3QoMSArIDIpLnRvQmUoMyk7IH0pOycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIHRlc3RzUGFzc2VkID0gdGVzdHNQYXNzZWQgfHwgZGF0YS5pbmRleE9mKCcxIHBhc3NlZCwgMSB0b3RhbCcpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ3Rlc3R0ZXN0dGVzdCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbCh0ZXN0c1Bhc3NlZCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0ZGV2ZW52Mi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhbGtcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3ItcGFpcnMtcGlja2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpbmQtbm9kZS1tb2R1bGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmluZC1ub2RlLW1vZHVsZXNcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGFzLWFuc2lcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJoYXMtYW5zaVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9