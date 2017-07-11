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
var hasAnsi = __webpack_require__(15);

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

  if (args && args.length) {
    if (typeof args.find(function (item) {
      return hasAnsi(item);
    }) === 'undefined') {
      console.log(chalk.keyword(color).apply(undefined, args));
    } else {
      var _console;

      (_console = console).log.apply(_console, args);
    }
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mocha");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("single-line-log");

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _terminate = __webpack_require__(9);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(3);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(4);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _websiteScraper = __webpack_require__(10);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _nodeUuid = __webpack_require__(6);

var _singleLineLog = __webpack_require__(8);

var _mocha = __webpack_require__(5);

var _shellCommand = __webpack_require__(2);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _fancyLog = __webpack_require__(0);

var _fancyLog2 = _interopRequireDefault(_fancyLog);

var _getDevEnvRoot = __webpack_require__(1);

var _getDevEnvRoot2 = _interopRequireDefault(_getDevEnvRoot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var devEnvRoot = (0, _getDevEnvRoot2.default)(__dirname);
var monorepoDir = _path2.default.resolve(__dirname, '../../../');

var symlinkNodeModulesContents = function symlinkNodeModulesContents(nodeModulesOriginalPath, nodeModulesCopyPath) {
  var promises = [];
  _fsExtra2.default.readdirSync(nodeModulesOriginalPath).forEach(function (file) {
    if (file !== '.bin') {
      (0, _singleLineLog.stdout)('symlinking node_modules content: ' + file + '\n');
      promises.push(_fsExtra2.default.symlinkSync(_path2.default.resolve(nodeModulesOriginalPath, file), _path2.default.resolve(nodeModulesCopyPath, file)));
    }
  });
  return Promise.all(promises);
};

var binPromises = function binPromises(devEnvCopyPackageDotJsonPath, devEnvCopyPath, binCopyPath) {
  var promises = [];
  var devEnvCopyPackageDotJson = _fsExtra2.default.readJsonSync(devEnvCopyPackageDotJsonPath);
  var devEnvBinDict = devEnvCopyPackageDotJson.bin;
  Object.keys(devEnvBinDict).forEach(function (key) {
    var val = devEnvBinDict[key];
    (0, _singleLineLog.stdout)('symlinking devEnv bin content: ' + key + '\n');
    promises.push(_fsExtra2.default.symlinkSync(_path2.default.resolve(devEnvCopyPath, val), _path2.default.resolve(binCopyPath, './' + key)));
  });
  return Promise.all(promises);
};

function createScatteredPackageProject(testProjectPath, contentToBundle) {
  var devEnvOriginalPath = _path2.default.resolve(monorepoDir, './packages/dev_env');
  var nodeModulesOriginalPath = _path2.default.resolve(monorepoDir, './node_modules');
  var nodeModulesCopyPath = _path2.default.resolve(testProjectPath, './node_modules');
  var pathToMain = _path2.default.resolve(testProjectPath, './testdevenv-main.demo.js');
  var devEnvCopyPath = _path2.default.resolve(nodeModulesCopyPath, './dev_env');
  var devEnvCopyPackageDotJsonPath = _path2.default.resolve(devEnvCopyPath, './package.json');
  var devEnvCopyDistPath = _path2.default.resolve(devEnvCopyPath, './dist');
  var binCopyPath = _path2.default.resolve(nodeModulesCopyPath, './.bin');
  var binOriginalPath = _path2.default.resolve(nodeModulesOriginalPath, './.bin');

  var promises = [_fsExtra2.default.removeSync(testProjectPath), _fsExtra2.default.ensureDirSync(testProjectPath), _fsExtra2.default.ensureDirSync(nodeModulesCopyPath), _fsExtra2.default.ensureDirSync(devEnvCopyPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './package.json'), devEnvCopyPackageDotJsonPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './bin'), _path2.default.resolve(devEnvCopyPath, './bin')), _fsExtra2.default.copySync(binOriginalPath, binCopyPath), _fsExtra2.default.writeFile(pathToMain, 'document.body.append(\'' + contentToBundle + '\');'), _fsExtra2.default.writeFileSync(_path2.default.resolve(testProjectPath, './package.json'), '{\n      "name": "test-project-for-dev-env",\n      "version": "0.0.2",\n      "publishConfig": {\n        "access": "public"\n      },\n      "scripts": {\n        "dev": "devenv"\n      },\n      "devDependencies": {\n        "@defualt/dev_env": "^0.0.14"\n      },\n      "repository": {\n        "type": "git",\n        "url": "https://github.com/defualt/test-project-for-dev-env.git"\n      }\n    }')];

  promises.push(symlinkNodeModulesContents(nodeModulesOriginalPath, nodeModulesCopyPath));

  promises.push(binPromises(devEnvCopyPackageDotJsonPath, devEnvCopyPath, binCopyPath));

  return Promise.all(promises).then(function () {
    var cmd = '(cd ' + devEnvOriginalPath + ' && npm run prepublish) && cp -rf ' + _path2.default.resolve(devEnvRoot, './dist') + ' ' + devEnvCopyDistPath + ' && (cd ' + testProjectPath + ' && npm run dev)';
    return cmd;
  });
}

function duringProcess(_ref) {
  var _ref$onData = _ref.onData,
      onData = _ref$onData === undefined ? function () {} : _ref$onData,
      _ref$onStderr = _ref.onStderr,
      onStderr = _ref$onStderr === undefined ? function () {} : _ref$onStderr,
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
      _ref$assetsToGenerate = _ref.assetsToGenerate,
      assetsToGenerate = _ref$assetsToGenerate === undefined ? [] : _ref$assetsToGenerate;

  (0, _mocha.before)(function duringProcessBefore(done) {
    this.timeout(60000);
    early().then(function (forceCommand) {
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
      var cmd = forceCommand || makeShellCmdStr(pathToDemoEntry);
      console.log('COOOOOOOMAND', cmd);
      var devEnvProcess = (0, _shellCommand2.default)(cmd, null, false);
      var finished = false;
      function finish() {
        if (finished) {
          return;
        }
        (0, _fancyLog2.default)('green', 'FINISHED');
        finished = true;
        cleanup(devEnvProcess).then(function () {
          (0, _fancyLog2.default)('orange', 'remove assets');
          assetsToGenerate.forEach(function (assetInfo) {
            var dir = _path2.default.dirname(assetInfo.path);
            _fsExtra2.default.removeSync(dir);
          });
          (0, _fancyLog2.default)('orange', 'before\'s done() called');
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
    });
  });
}

function duringServer(_ref2) {
  var useDist = _ref2.useDist,
      _ref2$onAsset = _ref2.onAsset,
      onAsset = _ref2$onAsset === undefined ? function () {} : _ref2$onAsset,
      _ref2$onData = _ref2.onData,
      _onData = _ref2$onData === undefined ? function () {} : _ref2$onData,
      _ref2$cleanup = _ref2.cleanup,
      _cleanup = _ref2$cleanup === undefined ? function () {
    return Promise.resolve();
  } : _ref2$cleanup,
      _makeShellCmdStr = _ref2.makeShellCmdStr,
      assetsToGenerate = _ref2.assetsToGenerate,
      early = _ref2.early,
      onStderr = _ref2.onStderr;

  var scrapeDir = _path2.default.resolve(__dirname, './scrape');
  var once = false;
  duringProcess({
    onStderr: onStderr,
    assetsToGenerate: assetsToGenerate,
    early: early,
    makeShellCmdStr: function makeShellCmdStr(pathToDemoEntry) {
      if (_makeShellCmdStr) {
        return _makeShellCmdStr(pathToDemoEntry);
      }
      var prepublish = useDist ? '(cd ' + devEnvRoot + ' && npm run prepublish) && ' : '';
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
      }
    },
    cleanup: function cleanup(devEnvProcess) {
      return new Promise(function (resolve, reject) {
        (0, _fancyLog2.default)('orange', 'terminate start');
        (0, _terminate2.default)(devEnvProcess.pid, function (err) {
          (0, _fancyLog2.default)('orange', 'terminate end');
          if (err) {
            (0, _fancyLog2.default)('red', 'Oopsy during terminate:', err);
            reject();
          } else {
            (0, _fancyLog2.default)('green', 'done for terminate');
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
      onStderr = _ref3.onStderr,
      onData = _ref3.onData,
      cleanup = _ref3.cleanup,
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

(0, _mocha.describe)('testdevenv', function () {
  (0, _mocha.describe)('localhost dev environment of monorepo via on demand compiled script', function () {
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

  (0, _mocha.describe)('localhost dev environment of monorepo via pre-compiled script', function () {
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

  _mocha.describe.only('localhost dev environment of scattered package repo via pre-compiled script, similar to npm usage', function () {
    var contentToBundle = (0, _nodeUuid.v4)();
    var testProjectPath = _path2.default.resolve(monorepoDir, '../testdevenv-main/asdf');

    var bundleHasContent = false;
    duringServer({
      cleanup: function cleanup() {
        (0, _fancyLog2.default)('orange', 'remove testProjectPath');
        _fsExtra2.default.removeSync(testProjectPath);
      },
      early: function early() {
        (0, _fancyLog2.default)('orange', 'EARLY');
        return createScatteredPackageProject(testProjectPath, contentToBundle);
      },

      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
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

module.exports = require("has-ansi");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzMzMTAzNDEwYmU3Y2UzOGViNzUiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZmFuY3lMb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2NoYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaW5nbGUtbGluZS1sb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIiIsIndlYnBhY2s6Ly8vLi90ZXN0ZGV2ZW52Mi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvci1wYWlycy1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYXMtYW5zaVwiIl0sIm5hbWVzIjpbImNoYWxrTGliIiwicmVxdWlyZSIsImNvbG9yUGFpcnNQaWNrZXIiLCJoYXNBbnNpIiwiY2hhbGsiLCJjb25zdHJ1Y3RvciIsImxldmVsIiwiZm9ybWF0TG9nIiwiY29sb3IiLCJoZWFkaW5nIiwiYmciLCJjb250cmFzdCIsInNwbGl0IiwibWFwIiwiaXRlbSIsImZnIiwiY29uc29sZSIsImxvZyIsInJnYiIsImJnUmdiIiwiYXJncyIsImxlbmd0aCIsImZpbmQiLCJrZXl3b3JkIiwibW9kdWxlIiwiZXhwb3J0cyIsImVuc3VyZVRyYWlsaW5nU2xhc2giLCJzdHIiLCJyZXBsYWNlIiwiZGV2RW52Um9vdCIsIl9fZGlybmFtZSIsImpvaW4iLCJjb21tYW5kVG9SdW4iLCJvcHRpb25zIiwic3RkaW8iLCJraWxsUGFyZW50T25FeGl0IiwiY29tbWFuZCIsImNoaWxkUHJvY2VzcyIsInByb2MiLCJzcGF3biIsIm9uIiwiY29kZSIsInNpZ25hbCIsInByb2Nlc3MiLCJraWxsIiwicGlkIiwiZXhpdCIsIm1vbm9yZXBvRGlyIiwicmVzb2x2ZSIsInN5bWxpbmtOb2RlTW9kdWxlc0NvbnRlbnRzIiwibm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgiLCJub2RlTW9kdWxlc0NvcHlQYXRoIiwicHJvbWlzZXMiLCJyZWFkZGlyU3luYyIsImZvckVhY2giLCJmaWxlIiwicHVzaCIsInN5bWxpbmtTeW5jIiwiUHJvbWlzZSIsImFsbCIsImJpblByb21pc2VzIiwiZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCIsImRldkVudkNvcHlQYXRoIiwiYmluQ29weVBhdGgiLCJkZXZFbnZDb3B5UGFja2FnZURvdEpzb24iLCJyZWFkSnNvblN5bmMiLCJkZXZFbnZCaW5EaWN0IiwiYmluIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInZhbCIsImNyZWF0ZVNjYXR0ZXJlZFBhY2thZ2VQcm9qZWN0IiwidGVzdFByb2plY3RQYXRoIiwiY29udGVudFRvQnVuZGxlIiwiZGV2RW52T3JpZ2luYWxQYXRoIiwicGF0aFRvTWFpbiIsImRldkVudkNvcHlEaXN0UGF0aCIsImJpbk9yaWdpbmFsUGF0aCIsInJlbW92ZVN5bmMiLCJlbnN1cmVEaXJTeW5jIiwiY29weVN5bmMiLCJ3cml0ZUZpbGUiLCJ3cml0ZUZpbGVTeW5jIiwidGhlbiIsImNtZCIsImR1cmluZ1Byb2Nlc3MiLCJvbkRhdGEiLCJvblN0ZGVyciIsIm1ha2VTaGVsbENtZFN0ciIsImNsZWFudXAiLCJlYXJseSIsImFzc2V0c1RvR2VuZXJhdGUiLCJkdXJpbmdQcm9jZXNzQmVmb3JlIiwiZG9uZSIsInRpbWVvdXQiLCJmb3JjZUNvbW1hbmQiLCJwYXRoVG9EZW1vRW50cnkiLCJhc3NldEluZm8iLCJwYXRoIiwiZGlyIiwiZGlybmFtZSIsInRleHQiLCJpc0RlbW9FbnRyeSIsImRldkVudlByb2Nlc3MiLCJmaW5pc2hlZCIsImZpbmlzaCIsInN0ZG91dCIsImRhdGEiLCJkYXRhU3RyaW5nIiwidG9TdHJpbmciLCJzdGRlcnIiLCJkdXJpbmdTZXJ2ZXIiLCJ1c2VEaXN0Iiwib25Bc3NldCIsInNjcmFwZURpciIsIm9uY2UiLCJwcmVwdWJsaXNoIiwiaW5kZXhPZiIsInVybHMiLCJkaXJlY3RvcnkiLCJyZXNvdXJjZVNhdmVyIiwicmVzb3VyY2UiLCJlcnIiLCJyZWplY3QiLCJkdXJpbmdUZXN0IiwidGVzdFBhdGhQYXR0ZXJuIiwiYnVuZGxlSGFzQ29udGVudCIsImVxdWFsIiwib25seSIsIm5vdEZvdW5kRXJyb3IiLCJpbXBvcnRUb0F0dGVtcHQiLCJ0ZXN0c1Bhc3NlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0EsSUFBTUEsV0FBVyxtQkFBQUMsQ0FBUSxFQUFSLENBQWpCO0FBQ0EsSUFBTUMsbUJBQW1CLG1CQUFBRCxDQUFRLEVBQVIsQ0FBekI7QUFDQSxJQUFNRSxVQUFVLG1C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Q0EsUUFBTUQsa0JBQWtCLHFCQUF4QjtBQUNBTixlQUFXO0FBQ1RDLHVCQUFpQiwyQkFEUjtBQUVUbEMsd0JBQWtCLENBQ2hCO0FBQ0VPLGNBQU0sZUFBS25ELE9BQUwsQ0FBYUQsV0FBYixFQUEwQiwrQ0FBMUIsQ0FEUjtBQUVFdUQseUNBQThCNkIsZUFBOUIscUJBRkY7QUFHRTVCLHFCQUFhO0FBSGYsT0FEZ0IsRUFNaEI7QUFDRUosY0FBTSxlQUFLbkQsT0FBTCxDQUFhRCxXQUFiLEVBQTBCLHVEQUExQixDQURSO0FBRUV1RCxpRUFBc0Q1QixlQUF0RDtBQUZGLE9BTmdCLEVBVWhCO0FBQ0V5QixjQUFNLGVBQUtuRCxPQUFMLENBQWFELFdBQWIsRUFBMEIsNERBQTFCLENBRFI7QUFFRXVELGNBQU07QUFGUixPQVZnQixDQUZUO0FBaUJUZCxnQkFBVSxrQkFBQ29CLElBQUQsRUFBVTtBQUNsQndCLHNCQUFjQSxlQUFleEIsS0FBS1UsT0FBTCxDQUFhLG1CQUFiLE1BQXNDLENBQUMsQ0FBcEU7QUFDRDtBQW5CUSxLQUFYO0FBcUJBLG1CQUFHLGNBQUgsRUFBbUIsWUFBTTtBQUN2Qix1QkFBT1UsS0FBUCxDQUFhSSxXQUFiLEVBQTBCLElBQTFCO0FBQ0QsS0FGRDtBQUdELEdBNUJEO0FBNkJELENBMUtELEU7Ozs7Ozs7QUMvUEEsa0M7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEscUMiLCJmaWxlIjoidGVzdGRldmVudjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMzMxMDM0MTBiZTdjZTM4ZWI3NSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmNvbnN0IGNoYWxrTGliID0gcmVxdWlyZSgnY2hhbGsnKTtcbmNvbnN0IGNvbG9yUGFpcnNQaWNrZXIgPSByZXF1aXJlKCdjb2xvci1wYWlycy1waWNrZXInKTtcbmNvbnN0IGhhc0Fuc2kgPSByZXF1aXJlKCdoYXMtYW5zaScpO1xuXG5cbmNvbnN0IGNoYWxrID0gbmV3IGNoYWxrTGliLmNvbnN0cnVjdG9yKHsgbGV2ZWw6IDMgfSk7XG5mdW5jdGlvbiBmb3JtYXRMb2coY29sb3IsIGhlYWRpbmcsIC4uLmFyZ3MpIHtcbiAgY29uc3QgYmcgPSBjb2xvclBhaXJzUGlja2VyKGNvbG9yLCB7IGNvbnRyYXN0OiA4IH0pLmJnLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAraXRlbTtcbiAgfSk7XG4gIGNvbnN0IGZnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5mZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhjaGFsay5yZ2IoLi4uZmcpLmJnUmdiKC4uLmJnKShoZWFkaW5nKSk7XG4gIGlmIChhcmdzICYmIGFyZ3MubGVuZ3RoKSB7XG4gICAgaWYgKHR5cGVvZiBhcmdzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuIGhhc0Fuc2koaXRlbSk7IH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5sb2coY2hhbGsua2V5d29yZChjb2xvcikoLi4uYXJncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0TG9nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvZmFuY3lMb2cuanMiLCJmdW5jdGlvbiBlbnN1cmVUcmFpbGluZ1NsYXNoKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLz8kLywgJy8nKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuICBsZXQgZGV2RW52Um9vdCA9IGVuc3VyZVRyYWlsaW5nU2xhc2goX19kaXJuYW1lKS5zcGxpdCgnL2Rldl9lbnYvJyk7XG4gIGRldkVudlJvb3RbZGV2RW52Um9vdC5sZW5ndGggLSAxXSA9ICcnO1xuICBkZXZFbnZSb290ID0gZGV2RW52Um9vdC5qb2luKCcvZGV2X2Vudi8nKTtcbiAgcmV0dXJuIGRldkVudlJvb3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5tb2R1bGUuZXhwb3J0cyA9IChjb21tYW5kVG9SdW4sIG9wdGlvbnMgPSB7IHN0ZGlvOiAnaW5oZXJpdCcgfSwga2lsbFBhcmVudE9uRXhpdCA9IHRydWUpID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kVG9SdW4sXG4gIF07XG4gIC8vXG4gIC8vIGtleGVjIGRvZXNuJ3Qgd29yayBpbiB3aW5kb3dzLCBzbyBmYWxsYmFjayB0byBjaGlsZF9wcm9jZXNzLnNwYXduXG4gIC8vIHRoaXMgbG9naWMgY29waWVkIGZyb20gYmFiZWwtY2xpL2xpYi9iYWJlbC1ub2RlLmpzXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3Qga2V4ZWMgPSByZXF1aXJlKCdrZXhlYycpO1xuICAvLyAgIGtleGVjKGNvbW1hbmQsIGFyZ3MpO1xuICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyO1xuXG4gIGNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zIHx8IHt9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBpZiAoa2lsbFBhcmVudE9uRXhpdCkge1xuICAgICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9jO1xuICAvLyB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvc2hlbGxDb21tYW5kLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXNzZXJ0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1leHRyYVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vY2hhXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9jaGFcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXV1aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXV1aWRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbmdsZS1saW5lLWxvZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNpbmdsZS1saW5lLWxvZ1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRlcm1pbmF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRlcm1pbmF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnNpdGUtc2NyYXBlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgdGVybWluYXRlIGZyb20gJ3Rlcm1pbmF0ZSc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgc2NyYXBlIGZyb20gJ3dlYnNpdGUtc2NyYXBlcic7XG5pbXBvcnQgeyB2NCBhcyBtYWtlVXVpZCB9IGZyb20gJ25vZGUtdXVpZCc7XG5pbXBvcnQgeyBzdGRvdXQgYXMgc2luZ2xlTGluZUxvZyB9IGZyb20gJ3NpbmdsZS1saW5lLWxvZyc7XG5pbXBvcnQgeyBpdCwgZGVzY3JpYmUsIGJlZm9yZSB9IGZyb20gJ21vY2hhJztcbmltcG9ydCBzaGVsbENvbW1hbmQgZnJvbSAnLi4vY29yZS9zaGVsbENvbW1hbmQnO1xuaW1wb3J0IGZhbmN5TG9nIGZyb20gJy4uL2NvcmUvZmFuY3lMb2cnO1xuaW1wb3J0IGdldERldkVudlJvb3QgZnJvbSAnLi4vY29yZS9nZXREZXZFbnZSb290JztcblxuXG5cbmNvbnN0IGRldkVudlJvb3QgPSBnZXREZXZFbnZSb290KF9fZGlybmFtZSk7XG5jb25zdCBtb25vcmVwb0RpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi8nKTtcblxuY29uc3Qgc3ltbGlua05vZGVNb2R1bGVzQ29udGVudHMgPSAobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsIG5vZGVNb2R1bGVzQ29weVBhdGgpID0+IHtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgZnMucmVhZGRpclN5bmMobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgpLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICBpZiAoZmlsZSAhPT0gJy5iaW4nKSB7XG4gICAgICBzaW5nbGVMaW5lTG9nKGBzeW1saW5raW5nIG5vZGVfbW9kdWxlcyBjb250ZW50OiAke2ZpbGV9XFxuYCk7XG4gICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICBmcy5zeW1saW5rU3luYyhcbiAgICAgICAgICBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsIGZpbGUpLFxuICAgICAgICAgIHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCBmaWxlKSksXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5jb25zdCBiaW5Qcm9taXNlcyA9IChkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoLCBkZXZFbnZDb3B5UGF0aCwgYmluQ29weVBhdGgpID0+IHtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgY29uc3QgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uID0gZnMucmVhZEpzb25TeW5jKGRldkVudkNvcHlQYWNrYWdlRG90SnNvblBhdGgpO1xuICBjb25zdCBkZXZFbnZCaW5EaWN0ID0gZGV2RW52Q29weVBhY2thZ2VEb3RKc29uLmJpbjtcbiAgT2JqZWN0LmtleXMoZGV2RW52QmluRGljdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsID0gZGV2RW52QmluRGljdFtrZXldO1xuICAgIHNpbmdsZUxpbmVMb2coYHN5bWxpbmtpbmcgZGV2RW52IGJpbiBjb250ZW50OiAke2tleX1cXG5gKTtcbiAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgZnMuc3ltbGlua1N5bmMocGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCB2YWwpLCBwYXRoLnJlc29sdmUoYmluQ29weVBhdGgsIGAuLyR7a2V5fWApKSxcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjYXR0ZXJlZFBhY2thZ2VQcm9qZWN0KHRlc3RQcm9qZWN0UGF0aCwgY29udGVudFRvQnVuZGxlKSB7XG4gIGNvbnN0IGRldkVudk9yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvZGV2X2VudicpO1xuICBjb25zdCBub2RlTW9kdWxlc09yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gIGNvbnN0IG5vZGVNb2R1bGVzQ29weVBhdGggPSBwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9ub2RlX21vZHVsZXMnKTtcbiAgY29uc3QgcGF0aFRvTWFpbiA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyk7XG4gIGNvbnN0IGRldkVudkNvcHlQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsICcuL2Rldl9lbnYnKTtcbiAgY29uc3QgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyk7XG4gIGNvbnN0IGRldkVudkNvcHlEaXN0UGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vZGlzdCcpO1xuICBjb25zdCBiaW5Db3B5UGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCAnLi8uYmluJyk7XG4gIGNvbnN0IGJpbk9yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc09yaWdpbmFsUGF0aCwgJy4vLmJpbicpO1xuXG4gIGNvbnN0IHByb21pc2VzID0gW1xuICAgIGZzLnJlbW92ZVN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICBmcy5lbnN1cmVEaXJTeW5jKHRlc3RQcm9qZWN0UGF0aCksXG4gICAgZnMuZW5zdXJlRGlyU3luYyhub2RlTW9kdWxlc0NvcHlQYXRoKSxcbiAgICBmcy5lbnN1cmVEaXJTeW5jKGRldkVudkNvcHlQYXRoKSxcbiAgICBmcy5jb3B5U3luYyhwYXRoLnJlc29sdmUoZGV2RW52Um9vdCwgJy4vcGFja2FnZS5qc29uJyksIGRldkVudkNvcHlQYWNrYWdlRG90SnNvblBhdGgpLFxuICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9iaW4nKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9iaW4nKSksXG4gICAgZnMuY29weVN5bmMoYmluT3JpZ2luYWxQYXRoLCBiaW5Db3B5UGF0aCksXG4gICAgZnMud3JpdGVGaWxlKHBhdGhUb01haW4sIGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCksXG4gICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSwgYHtcbiAgICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgIH0sXG4gICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICBcImRldlwiOiBcImRldmVudlwiXG4gICAgICB9LFxuICAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgIH0sXG4gICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGVmdWFsdC90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYuZ2l0XCJcbiAgICAgIH1cbiAgICB9YCksXG4gIF07XG5cblxuICBwcm9taXNlcy5wdXNoKHN5bWxpbmtOb2RlTW9kdWxlc0NvbnRlbnRzKFxuICAgIG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoLFxuICAgIG5vZGVNb2R1bGVzQ29weVBhdGgsXG4gICkpO1xuXG4gIHByb21pc2VzLnB1c2goYmluUHJvbWlzZXMoXG4gICAgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCxcbiAgICBkZXZFbnZDb3B5UGF0aCxcbiAgICBiaW5Db3B5UGF0aCxcbiAgKSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBjb25zdCBjbWQgPSBgKGNkICR7ZGV2RW52T3JpZ2luYWxQYXRofSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIGNwIC1yZiAke3BhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9kaXN0Jyl9ICR7ZGV2RW52Q29weURpc3RQYXRofSAmJiAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIG5wbSBydW4gZGV2KWA7XG4gICAgcmV0dXJuIGNtZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1Byb2Nlc3Moe1xuICBvbkRhdGEgPSAoKSA9PiB7fSxcbiAgb25TdGRlcnIgPSAoKSA9PiB7fSxcbiAgbWFrZVNoZWxsQ21kU3RyID0gKCkgPT4ge30sXG4gIGNsZWFudXAgPSAoKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSxcbiAgZWFybHkgPSAoKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSxcbiAgYXNzZXRzVG9HZW5lcmF0ZSA9IFtdLFxufSkge1xuICBiZWZvcmUoZnVuY3Rpb24gZHVyaW5nUHJvY2Vzc0JlZm9yZShkb25lKSB7XG4gICAgdGhpcy50aW1lb3V0KDYwMDAwKTtcbiAgICBlYXJseSgpLnRoZW4oKGZvcmNlQ29tbWFuZCkgPT4ge1xuICAgICAgbGV0IHBhdGhUb0RlbW9FbnRyeTtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdncmVlbicsICdHRU5FUkFUSU5HJywgYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKGRpcik7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXNzZXRJbmZvLnBhdGgsIGFzc2V0SW5mby50ZXh0KTtcbiAgICAgICAgaWYgKGFzc2V0SW5mby5pc0RlbW9FbnRyeSkge1xuICAgICAgICAgIHBhdGhUb0RlbW9FbnRyeSA9IGFzc2V0SW5mby5wYXRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNtZCA9IGZvcmNlQ29tbWFuZCB8fCBtYWtlU2hlbGxDbWRTdHIocGF0aFRvRGVtb0VudHJ5KTtcbiAgICAgIGNvbnNvbGUubG9nKCdDT09PT09PT01BTkQnLCBjbWQpO1xuICAgICAgY29uc3QgZGV2RW52UHJvY2VzcyA9IHNoZWxsQ29tbWFuZChjbWQsIG51bGwsIGZhbHNlKTtcbiAgICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ0ZJTklTSEVEJyk7XG4gICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgY2xlYW51cChkZXZFbnZQcm9jZXNzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ3JlbW92ZSBhc3NldHMnKTtcbiAgICAgICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ2JlZm9yZVxcJ3MgZG9uZSgpIGNhbGxlZCcpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkZXZFbnZQcm9jZXNzLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgIGZhbmN5TG9nKCdibHVlJywgJ2RldkVudlByb2Nlc3Muc3Rkb3V0OicsIGRhdGFTdHJpbmcpO1xuICAgICAgICBvbkRhdGEoZGF0YVN0cmluZywgZmluaXNoKTtcbiAgICAgIH0pO1xuICAgICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKSB7XG4gICAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICBvblN0ZGVycihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBmYW5jeUxvZygnY3lhbicsICdkZXZFbnZQcm9jZXNzLnN0ZGVycjonLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgZGV2RW52UHJvY2Vzcy5vbignZXhpdCcsIChjb2RlKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCd5ZWxsb3cnLCAnY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlOicsIGNvZGUpO1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHVyaW5nU2VydmVyKHtcbiAgdXNlRGlzdCxcbiAgb25Bc3NldCA9ICgpID0+IHt9LFxuICBvbkRhdGEgPSAoKSA9PiB7fSxcbiAgY2xlYW51cCA9ICgpID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9LFxuICBtYWtlU2hlbGxDbWRTdHIsXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG4gIGVhcmx5LFxuICBvblN0ZGVycixcbn0pIHtcbiAgY29uc3Qgc2NyYXBlRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc2NyYXBlJyk7XG4gIGxldCBvbmNlID0gZmFsc2U7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIG9uU3RkZXJyLFxuICAgIGFzc2V0c1RvR2VuZXJhdGUsXG4gICAgZWFybHksXG4gICAgbWFrZVNoZWxsQ21kU3RyOiAocGF0aFRvRGVtb0VudHJ5KSA9PiB7XG4gICAgICBpZiAobWFrZVNoZWxsQ21kU3RyKSB7XG4gICAgICAgIHJldHVybiBtYWtlU2hlbGxDbWRTdHIocGF0aFRvRGVtb0VudHJ5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXB1Ymxpc2ggPSB1c2VEaXN0ID8gYChjZCAke2RldkVudlJvb3R9ICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgYCA6ICcnO1xuICAgICAgcmV0dXJuIGAoXG4gICAgICAgICR7cHJlcHVibGlzaH1ucG0gcnVuIGRldiAtLSAtLWRlbW8tZW50cnk9JyR7cGF0aFRvRGVtb0VudHJ5fScke3VzZURpc3QgPyAnIC0tdXNlLWRpc3QnIDogJyd9IFxuICAgICAgKWA7XG4gICAgfSxcbiAgICBvbkRhdGE6IChkYXRhU3RyaW5nLCBmaW5pc2gpID0+IHtcbiAgICAgIG9uRGF0YShkYXRhU3RyaW5nLCBmaW5pc2gpO1xuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZignd2VicGFjazogRmFpbGVkIHRvIGNvbXBpbGUuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IENvbXBpbGVkIHN1Y2Nlc3NmdWxseS4nKSAhPT0gLTEgJiYgIW9uY2UpIHtcbiAgICAgICAgb25jZSA9IHRydWU7XG4gICAgICAgIHNjcmFwZSh7XG4gICAgICAgICAgdXJsczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAvJ10sXG4gICAgICAgICAgZGlyZWN0b3J5OiBzY3JhcGVEaXIsXG4gICAgICAgICAgcmVzb3VyY2VTYXZlcjogY2xhc3MgTXlSZXNvdXJjZVNhdmVyIHtcbiAgICAgICAgICAgIHNhdmVSZXNvdXJjZShyZXNvdXJjZSkge1xuICAgICAgICAgICAgICBvbkFzc2V0KHJlc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2xlYW51cChlcnIpIHtcbiAgICAgICAgICAgICAgZmFuY3lMb2coJ3BpbmsnLCAnc2NyYXBlIHJlc291cmNlIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xlYW51cDogKGRldkVudlByb2Nlc3MpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAndGVybWluYXRlIHN0YXJ0Jyk7XG4gICAgICAgIHRlcm1pbmF0ZShkZXZFbnZQcm9jZXNzLnBpZCwgKGVycikgPT4ge1xuICAgICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAndGVybWluYXRlIGVuZCcpO1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGZhbmN5TG9nKCdyZWQnLCAnT29wc3kgZHVyaW5nIHRlcm1pbmF0ZTonLCBlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZhbmN5TG9nKCdncmVlbicsICdkb25lIGZvciB0ZXJtaW5hdGUnKTtcbiAgICAgICAgICAgIGNsZWFudXAoZGV2RW52UHJvY2Vzcyk7XG4gICAgICAgICAgICBmcy5yZW1vdmVTeW5jKHNjcmFwZURpcik7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkdXJpbmdUZXN0KHtcbiAgdGVzdFBhdGhQYXR0ZXJuLFxuICBvblN0ZGVycixcbiAgb25EYXRhLFxuICBjbGVhbnVwLFxuICBhc3NldHNUb0dlbmVyYXRlLFxufSkge1xuICBkdXJpbmdQcm9jZXNzKHtcbiAgICBvblN0ZGVycixcbiAgICBvbkRhdGEsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBjbGVhbnVwLFxuICAgIG1ha2VTaGVsbENtZFN0cjogKCkgPT4ge1xuICAgICAgcmV0dXJuIGAoXG4gICAgICAgIG5wbSBydW4gdGVzdHBhY2thZ2VzIC0tIC0td2F0Y2g9ZmFsc2UgLS10ZXN0UGF0aFBhdHRlcm49JyR7dGVzdFBhdGhQYXR0ZXJufSdcbiAgICAgIClgO1xuICAgIH0sXG4gIH0pO1xufVxuXG5cbmRlc2NyaWJlKCd0ZXN0ZGV2ZW52JywgKCkgPT4ge1xuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBvZiBtb25vcmVwbyB2aWEgb24gZGVtYW5kIGNvbXBpbGVkIHNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG5cbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBvZiBtb25vcmVwbyB2aWEgcHJlLWNvbXBpbGVkIHNjcmlwdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIHVzZURpc3Q6IHRydWUsXG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlLm9ubHkoJ2xvY2FsaG9zdCBkZXYgZW52aXJvbm1lbnQgb2Ygc2NhdHRlcmVkIHBhY2thZ2UgcmVwbyB2aWEgcHJlLWNvbXBpbGVkIHNjcmlwdCwgc2ltaWxhciB0byBucG0gdXNhZ2UnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBjb25zdCB0ZXN0UHJvamVjdFBhdGggPSBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuLi90ZXN0ZGV2ZW52LW1haW4vYXNkZicpO1xuXG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgY2xlYW51cDogKCkgPT4ge1xuICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ3JlbW92ZSB0ZXN0UHJvamVjdFBhdGgnKTtcbiAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpO1xuICAgICAgfSxcbiAgICAgIGVhcmx5OiAoKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAnRUFSTFknKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVNjYXR0ZXJlZFBhY2thZ2VQcm9qZWN0KHRlc3RQcm9qZWN0UGF0aCwgY29udGVudFRvQnVuZGxlKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnbm9uLWV4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgbGV0IG5vdEZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcE1BWUJFLUEtVFlQTyc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogJ2V4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJ0ZXN0ZGV2ZW52LXNvbWUtZGVwXCIpOyB9OycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIG5vdEZvdW5kRXJyb3IgPSBub3RGb3VuZEVycm9yIHx8IGRhdGEuaW5kZXhPZihgTW9kdWxlIG5vdCBmb3VuZDogRXJyb3I6IENhbid0IHJlc29sdmUgJyR7aW1wb3J0VG9BdHRlbXB0fSdgKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCd3ZWJwYWNrIGJ1bmRsaW5nIHRocm93cyBlcnJvciBmb3Igbm9uLWV4aXN0ZW50IGltcG9ydHMgd2l0aGluIGFzc2V0cycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChub3RGb3VuZEVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMgd2l0aCBucG0tc2NvcGluZycsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXAnO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnQHNvbWUtbnBtLXNjb3BlLyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIG5wbS1zY29wZWQgaW1wb3J0IGJ1bmRsaW5nJywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGVzdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCB0ZXN0c1Bhc3NlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdUZXN0KHtcbiAgICAgIHRlc3RQYXRoUGF0dGVybjogJy4qL3Rlc3RkZXZlbnYtc29tZS1kZXAvLionLFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLnRlc3QuanMnKSxcbiAgICAgICAgICB0ZXh0OiAndGVzdChcImFkZHMgMSArIDIgdG8gZXF1YWwgM1wiLCAoKSA9PiB7IGV4cGVjdCgxICsgMikudG9CZSgzKTsgfSk7JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvblN0ZGVycjogKGRhdGEpID0+IHtcbiAgICAgICAgdGVzdHNQYXNzZWQgPSB0ZXN0c1Bhc3NlZCB8fCBkYXRhLmluZGV4T2YoJzEgcGFzc2VkLCAxIHRvdGFsJykgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgndGVzdHRlc3R0ZXN0JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKHRlc3RzUGFzc2VkLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3RkZXZlbnYyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhbGtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFsa1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvci1wYWlycy1waWNrZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvci1wYWlycy1waWNrZXJcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGFzLWFuc2lcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJoYXMtYW5zaVwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9