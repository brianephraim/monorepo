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
    console.log(chalk[color].apply(chalk, args));
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var devEnvRoot = (0, _getDevEnvRoot2.default)(__dirname);

function duringProcess(_ref) {
  var _ref$onData = _ref.onData,
      onData = _ref$onData === undefined ? function () {} : _ref$onData,
      _ref$onStderr = _ref.onStderr,
      onStderr = _ref$onStderr === undefined ? function () {} : _ref$onStderr,
      _ref$makeShellCmdStr = _ref.makeShellCmdStr,
      makeShellCmdStr = _ref$makeShellCmdStr === undefined ? function () {} : _ref$makeShellCmdStr,
      _ref$cleanup = _ref.cleanup,
      cleanup = _ref$cleanup === undefined ? function () {} : _ref$cleanup,
      assetsToGenerate = _ref.assetsToGenerate;

  (0, _mocha.before)(function duringServerBefore(done) {
    this.timeout(60000);
    var pathToDemoEntry = void 0;
    assetsToGenerate.forEach(function (assetInfo) {
      var dir = _path2.default.dirname(assetInfo.path);
      _fsExtra2.default.ensureDirSync(dir);
      _fsExtra2.default.writeFileSync(assetInfo.path, assetInfo.text);
      if (assetInfo.isDemoEntry) {
        pathToDemoEntry = assetInfo.path;
      }
    });
    var cmd = makeShellCmdStr(pathToDemoEntry);
    var devEnvProcess = (0, _shellCommand2.default)(cmd, null, false);
    var finished = false;
    function finish() {
      if (finished) {
        return;
      }
      (0, _fancyLog2.default)('green', 'FINISHED', 'code');
      finished = true;

      assetsToGenerate.forEach(function (assetInfo) {
        var dir = _path2.default.dirname(assetInfo.path);
        _fsExtra2.default.removeSync(dir);
      });
      cleanup(devEnvProcess);
      done();
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
      _cleanup = _ref2$cleanup === undefined ? function () {} : _ref2$cleanup,
      _makeShellCmdStr = _ref2.makeShellCmdStr,
      assetsToGenerate = _ref2.assetsToGenerate,
      nodePath = _ref2.nodePath;

  var scrapeDir = _path2.default.resolve(__dirname, './scrape');
  var once = false;
  duringProcess({
    makeShellCmdStr: function makeShellCmdStr(pathToDemoEntry) {
      var nodePathShVar = nodePath ? nodePath + ' ' : '';
      console.log('nodePath', nodePathShVar);
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
    onStderr: onStderr,
    assetsToGenerate: assetsToGenerate,
    cleanup: function cleanup(devEnvProcess) {
      _cleanup(devEnvProcess);
      _fsExtra2.default.removeSync(scrapeDir);
      (0, _terminate2.default)(devEnvProcess.pid, function (err) {
        if (err) {
          (0, _fancyLog2.default)('red', 'Oopsy during terminate:', err);
        } else {
          (0, _fancyLog2.default)('green', 'done for terminate', '');
        }
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
    duringServer({
      nodePath: (0, _getNodePathShVar2.default)({ cwd: devEnvRoot, before: ['asdfasdf'] }),
      makeShellCmdStr: function makeShellCmdStr() {
        return 'pwd';
      },
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, '../test-project-for-dev-env/testdevenv-main.js'),
        text: 'document.body.append(\'' + contentToBundle + '\');',
        isDemoEntry: true
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
      cleanup: function cleanup() /* devEnvProcess */{
        _fsExtra2.default.removeSync(_path2.default.resolve(monorepoDir, '../test-project-for-dev-env'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2ZiNzFlY2ZhZDJhMTY2NDc1YzkiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZmFuY3lMb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyLmpzIiwid2VicGFjazovLy8uLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vY2hhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS11dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRlcm1pbmF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiIiwid2VicGFjazovLy8uL3Rlc3RkZXZlbnYyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yLXBhaXJzLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbmQtbm9kZS1tb2R1bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGFzLWFuc2lcIiJdLCJuYW1lcyI6WyJjaGFsa0xpYiIsInJlcXVpcmUiLCJjb2xvclBhaXJzUGlja2VyIiwiaGFzQW5zaSIsImNoYWxrIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsImZvcm1hdExvZyIsImNvbG9yIiwiaGVhZGluZyIsImJnIiwiY29udHJhc3QiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJmZyIsImNvbnNvbGUiLCJsb2ciLCJyZ2IiLCJiZ1JnYiIsImFyZ3MiLCJmaW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsImVuc3VyZVRyYWlsaW5nU2xhc2giLCJzdHIiLCJyZXBsYWNlIiwiZGV2RW52Um9vdCIsIl9fZGlybmFtZSIsImxlbmd0aCIsImpvaW4iLCJmaW5kTm9kZU1vZHVsZXMiLCJub2RlUGF0aFNlcGFyYXRvciIsInRlc3QiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJiZWZvcmUiLCJhZnRlciIsImN3ZCIsIm5vZGVQYXRocyIsImNvbmNhdCIsInJlbGF0aXZlIiwiY29tbWFuZFRvUnVuIiwib3B0aW9ucyIsInN0ZGlvIiwia2lsbFBhcmVudE9uRXhpdCIsImNvbW1hbmQiLCJjaGlsZFByb2Nlc3MiLCJwcm9jIiwic3Bhd24iLCJvbiIsImNvZGUiLCJzaWduYWwiLCJraWxsIiwicGlkIiwiZXhpdCIsImR1cmluZ1Byb2Nlc3MiLCJvbkRhdGEiLCJvblN0ZGVyciIsIm1ha2VTaGVsbENtZFN0ciIsImNsZWFudXAiLCJhc3NldHNUb0dlbmVyYXRlIiwiZHVyaW5nU2VydmVyQmVmb3JlIiwiZG9uZSIsInRpbWVvdXQiLCJwYXRoVG9EZW1vRW50cnkiLCJmb3JFYWNoIiwiYXNzZXRJbmZvIiwiZGlyIiwiZGlybmFtZSIsInBhdGgiLCJlbnN1cmVEaXJTeW5jIiwid3JpdGVGaWxlU3luYyIsInRleHQiLCJpc0RlbW9FbnRyeSIsImNtZCIsImRldkVudlByb2Nlc3MiLCJmaW5pc2hlZCIsImZpbmlzaCIsInJlbW92ZVN5bmMiLCJzdGRvdXQiLCJkYXRhIiwiZGF0YVN0cmluZyIsInRvU3RyaW5nIiwic3RkZXJyIiwiZHVyaW5nU2VydmVyIiwidXNlRGlzdCIsIm9uQXNzZXQiLCJub2RlUGF0aCIsInNjcmFwZURpciIsInJlc29sdmUiLCJvbmNlIiwibm9kZVBhdGhTaFZhciIsInByZXB1Ymxpc2giLCJpbmRleE9mIiwidXJscyIsImRpcmVjdG9yeSIsInJlc291cmNlU2F2ZXIiLCJyZXNvdXJjZSIsImVyciIsInRoZW4iLCJkdXJpbmdUZXN0IiwidGVzdFBhdGhQYXR0ZXJuIiwibW9ub3JlcG9EaXIiLCJjb250ZW50VG9CdW5kbGUiLCJidW5kbGVIYXNDb250ZW50IiwiZXF1YWwiLCJvbmx5Iiwibm90Rm91bmRFcnJvciIsImltcG9ydFRvQXR0ZW1wdCIsInRlc3RzUGFzc2VkIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQSxJQUFNQSxXQUFXLG1CQUFBQyxDQUFRLEVBQVIsQ0FBakI7QUFDQSxJQUFNQyxtQkFBbUIsbUJBQUFELENBQVEsRUFBUixDQUF6QjtBQUNBLElBQU1FLFVBQVUsbUJBQUFGLENBQVEsRUFBUixDQUFoQjs7QUFHQSxJQUFNRyxRQUFRLElBQUlKLFNBQVNLLFdBQWIsQ0FBeUIsRUFBRUMsT0FBTyxDQUFULEVBQXpCLENBQWQ7QUFDQSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsT0FBMUIsRUFBNEM7QUFBQTs7QUFDMUMsTUFBTUMsS0FBS1IsaUJBQWlCTSxLQUFqQixFQUF3QixFQUFFRyxVQUFVLENBQVosRUFBeEIsRUFBeUNELEVBQXpDLENBQTRDRSxLQUE1QyxDQUFrRCxHQUFsRCxFQUF1RCxDQUF2RCxFQUEwREEsS0FBMUQsQ0FBZ0UsR0FBaEUsRUFBcUUsQ0FBckUsRUFBd0VBLEtBQXhFLENBQThFLEdBQTlFLEVBQW1GQyxH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IFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2ZiNzFlY2ZhZDJhMTY2NDc1YzkiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5jb25zdCBjaGFsa0xpYiA9IHJlcXVpcmUoJ2NoYWxrJyk7XG5jb25zdCBjb2xvclBhaXJzUGlja2VyID0gcmVxdWlyZSgnY29sb3ItcGFpcnMtcGlja2VyJyk7XG5jb25zdCBoYXNBbnNpID0gcmVxdWlyZSgnaGFzLWFuc2knKTtcblxuXG5jb25zdCBjaGFsayA9IG5ldyBjaGFsa0xpYi5jb25zdHJ1Y3Rvcih7IGxldmVsOiAzIH0pO1xuZnVuY3Rpb24gZm9ybWF0TG9nKGNvbG9yLCBoZWFkaW5nLCAuLi5hcmdzKSB7XG4gIGNvbnN0IGJnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5iZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zdCBmZyA9IGNvbG9yUGFpcnNQaWNrZXIoY29sb3IsIHsgY29udHJhc3Q6IDggfSkuZmcuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuICtpdGVtO1xuICB9KTtcbiAgY29uc29sZS5sb2coY2hhbGsucmdiKC4uLmZnKS5iZ1JnYiguLi5iZykoaGVhZGluZykpO1xuXG4gIGlmICh0eXBlb2YgYXJncy5maW5kKChpdGVtKSA9PiB7IHJldHVybiBoYXNBbnNpKGl0ZW0pOyB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmxvZyhjaGFsa1tjb2xvcl0oLi4uYXJncykpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdExvZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL2ZhbmN5TG9nLmpzIiwiZnVuY3Rpb24gZW5zdXJlVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcbiAgbGV0IGRldkVudlJvb3QgPSBlbnN1cmVUcmFpbGluZ1NsYXNoKF9fZGlybmFtZSkuc3BsaXQoJy9kZXZfZW52LycpO1xuICBkZXZFbnZSb290W2RldkVudlJvb3QubGVuZ3RoIC0gMV0gPSAnJztcbiAgZGV2RW52Um9vdCA9IGRldkVudlJvb3Quam9pbignL2Rldl9lbnYvJyk7XG4gIHJldHVybiBkZXZFbnZSb290O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL2dldERldkVudlJvb3QuanMiLCJjb25zdCBmaW5kTm9kZU1vZHVsZXMgPSByZXF1aXJlKCdmaW5kLW5vZGUtbW9kdWxlcycpO1xuLy8gZm9yIE5PREVfUEFUSCwgb24gd2luZG93cywgc2VwZXJhdG9yIGlzIDsgaW5zdGVhZCBvZiA6LiAgV2hhdCBmdW4uXG4vLyBzZXBlcmF0b3IgaXMgYmFzaCBhcnJheSBhcmd1bWVudCBzZXBlcmF0b3Igc3ludGF4LlxuY29uc3Qgbm9kZVBhdGhTZXBhcmF0b3IgPSAvXndpbi8udGVzdChwcm9jZXNzLnBsYXRmb3JtKSA/ICc7JyA6ICc6Jztcbi8vIEZpbmQgYWxsIGRpcmVjdG9yaWVzIG9mIG5vZGVfbW9kdWxlcyB0aGF0IGFwcGx5IHRvIHRoZSBmaWxlIHdlIGFyZSBjb21waWxpbmcuXG5tb2R1bGUuZXhwb3J0cyA9ICh7IGJlZm9yZSA9IFtdLCBhZnRlciA9IFtdLCBjd2QgfSkgPT4ge1xuICBjb25zdCBub2RlUGF0aHMgPSBiZWZvcmVcbiAgLmNvbmNhdChmaW5kTm9kZU1vZHVsZXMoeyByZWxhdGl2ZTogZmFsc2UsIGN3ZCB9KSlcbiAgLmNvbmNhdChhZnRlcilcbiAgLmpvaW4obm9kZVBhdGhTZXBhcmF0b3IpO1xuICByZXR1cm4gYE5PREVfUEFUSD0nJHtub2RlUGF0aHN9J2A7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbm1vZHVsZS5leHBvcnRzID0gKGNvbW1hbmRUb1J1biwgb3B0aW9ucyA9IHsgc3RkaW86ICdpbmhlcml0JyB9LCBraWxsUGFyZW50T25FeGl0ID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBjb21tYW5kID0gJ3NoJztcbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWMnLFxuICAgIGNvbW1hbmRUb1J1bixcbiAgXTtcbiAgLy9cbiAgLy8ga2V4ZWMgZG9lc24ndCB3b3JrIGluIHdpbmRvd3MsIHNvIGZhbGxiYWNrIHRvIGNoaWxkX3Byb2Nlc3Muc3Bhd25cbiAgLy8gdGhpcyBsb2dpYyBjb3BpZWQgZnJvbSBiYWJlbC1jbGkvbGliL2JhYmVsLW5vZGUuanNcbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCBrZXhlYyA9IHJlcXVpcmUoJ2tleGVjJyk7XG4gIC8vICAga2V4ZWMoY29tbWFuZCwgYXJncyk7XG4gIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGlmIChlcnIuY29kZSAhPT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB0aHJvdyBlcnI7XG5cbiAgY29uc3QgY2hpbGRQcm9jZXNzID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuICBjb25zdCBwcm9jID0gY2hpbGRQcm9jZXNzLnNwYXduKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMgfHwge30pO1xuICBwcm9jLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgIGlmIChraWxsUGFyZW50T25FeGl0KSB7XG4gICAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWduYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2M7XG4gIC8vIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWV4dHJhXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9jaGFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb2NoYVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdXVpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtdXVpZFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGVybWluYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidGVybWluYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vic2l0ZS1zY3JhcGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2Vic2l0ZS1zY3JhcGVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCB0ZXJtaW5hdGUgZnJvbSAndGVybWluYXRlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBzY3JhcGUgZnJvbSAnd2Vic2l0ZS1zY3JhcGVyJztcbmltcG9ydCB7IHY0IGFzIG1ha2VVdWlkIH0gZnJvbSAnbm9kZS11dWlkJztcbmltcG9ydCB7IGl0LCBkZXNjcmliZSwgYmVmb3JlIH0gZnJvbSAnbW9jaGEnO1xuaW1wb3J0IHNoZWxsQ29tbWFuZCBmcm9tICcuLi9jb3JlL3NoZWxsQ29tbWFuZCc7XG5pbXBvcnQgZmFuY3lMb2cgZnJvbSAnLi4vY29yZS9mYW5jeUxvZyc7XG5pbXBvcnQgZ2V0RGV2RW52Um9vdCBmcm9tICcuLi9jb3JlL2dldERldkVudlJvb3QnO1xuaW1wb3J0IGdldE5vZGVQYXRoU2hWYXIgZnJvbSAnLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyJztcblxuY29uc3QgZGV2RW52Um9vdCA9IGdldERldkVudlJvb3QoX19kaXJuYW1lKTtcblxuZnVuY3Rpb24gZHVyaW5nUHJvY2Vzcyh7XG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBvblN0ZGVyciA9ICgpID0+IHt9LFxuICBtYWtlU2hlbGxDbWRTdHIgPSAoKSA9PiB7fSxcbiAgY2xlYW51cCA9ICgpID0+IHt9LFxuICBhc3NldHNUb0dlbmVyYXRlLFxufSkge1xuICBiZWZvcmUoZnVuY3Rpb24gZHVyaW5nU2VydmVyQmVmb3JlKGRvbmUpIHtcbiAgICB0aGlzLnRpbWVvdXQoNjAwMDApO1xuICAgIGxldCBwYXRoVG9EZW1vRW50cnk7XG4gICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICBmcy5lbnN1cmVEaXJTeW5jKGRpcik7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKGFzc2V0SW5mby5wYXRoLCBhc3NldEluZm8udGV4dCk7XG4gICAgICBpZiAoYXNzZXRJbmZvLmlzRGVtb0VudHJ5KSB7XG4gICAgICAgIHBhdGhUb0RlbW9FbnRyeSA9IGFzc2V0SW5mby5wYXRoO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNtZCA9IG1ha2VTaGVsbENtZFN0cihwYXRoVG9EZW1vRW50cnkpO1xuICAgIGNvbnN0IGRldkVudlByb2Nlc3MgPSBzaGVsbENvbW1hbmQoY21kLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZhbmN5TG9nKCdncmVlbicsICdGSU5JU0hFRCcsICdjb2RlJyk7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG5cbiAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgIH0pO1xuICAgICAgY2xlYW51cChkZXZFbnZQcm9jZXNzKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGF0YVN0cmluZyA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIGZhbmN5TG9nKCdibHVlJywgJ2RldkVudlByb2Nlc3Muc3Rkb3V0OicsIGRhdGFTdHJpbmcpO1xuICAgICAgb25EYXRhKGRhdGFTdHJpbmcsIGZpbmlzaCk7XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZykge1xuICAgICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICBvblN0ZGVycihkYXRhKTtcbiAgICAgIH1cbiAgICAgIGZhbmN5TG9nKCdjeWFuJywgJ2RldkVudlByb2Nlc3Muc3RkZXJyOicsIGRhdGEpO1xuICAgIH0pO1xuICAgIGRldkVudlByb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgZmFuY3lMb2coJ3llbGxvdycsICdjaGlsZCBwcm9jZXNzIGV4aXRlZCB3aXRoIGNvZGU6JywgY29kZSk7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1NlcnZlcih7XG4gIHVzZURpc3QsXG4gIG9uQXNzZXQgPSAoKSA9PiB7fSxcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIGNsZWFudXAgPSAoKSA9PiB7fSxcbiAgbWFrZVNoZWxsQ21kU3RyLFxuICBhc3NldHNUb0dlbmVyYXRlLFxuICBub2RlUGF0aCxcbn0pIHtcbiAgY29uc3Qgc2NyYXBlRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc2NyYXBlJyk7XG4gIGxldCBvbmNlID0gZmFsc2U7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIG1ha2VTaGVsbENtZFN0cjogKHBhdGhUb0RlbW9FbnRyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZVBhdGhTaFZhciA9IG5vZGVQYXRoID8gYCR7bm9kZVBhdGh9IGAgOiAnJztcbiAgICAgIGNvbnNvbGUubG9nKCdub2RlUGF0aCcsIG5vZGVQYXRoU2hWYXIpO1xuICAgICAgaWYgKG1ha2VTaGVsbENtZFN0cikge1xuICAgICAgICByZXR1cm4gbWFrZVNoZWxsQ21kU3RyKHBhdGhUb0RlbW9FbnRyeSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmVwdWJsaXNoID0gdXNlRGlzdCA/IGAoY2QgJHtkZXZFbnZSb290fSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIGAgOiAnJztcbiAgICAgIHJldHVybiBgKFxuICAgICAgICAke3ByZXB1Ymxpc2h9bnBtIHJ1biBkZXYgLS0gLS1kZW1vLWVudHJ5PScke3BhdGhUb0RlbW9FbnRyeX0nJHt1c2VEaXN0ID8gJyAtLXVzZS1kaXN0JyA6ICcnfSBcbiAgICAgIClgO1xuICAgIH0sXG4gICAgb25EYXRhOiAoZGF0YVN0cmluZywgZmluaXNoKSA9PiB7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZywgZmluaXNoKTtcbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IEZhaWxlZCB0byBjb21waWxlLicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgZmluaXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBDb21waWxlZCBzdWNjZXNzZnVsbHkuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuXG4gICAgICAgIHNjcmFwZSh7XG4gICAgICAgICAgdXJsczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAvJ10sXG4gICAgICAgICAgZGlyZWN0b3J5OiBzY3JhcGVEaXIsXG4gICAgICAgICAgcmVzb3VyY2VTYXZlcjogY2xhc3MgTXlSZXNvdXJjZVNhdmVyIHtcbiAgICAgICAgICAgIHNhdmVSZXNvdXJjZShyZXNvdXJjZSkge1xuICAgICAgICAgICAgICBvbkFzc2V0KHJlc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2xlYW51cChlcnIpIHtcbiAgICAgICAgICAgICAgZmFuY3lMb2coJ3BpbmsnLCAnc2NyYXBlIHJlc291cmNlIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TdGRlcnIsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBjbGVhbnVwOiAoZGV2RW52UHJvY2VzcykgPT4ge1xuICAgICAgY2xlYW51cChkZXZFbnZQcm9jZXNzKTtcbiAgICAgIGZzLnJlbW92ZVN5bmMoc2NyYXBlRGlyKTtcbiAgICAgIHRlcm1pbmF0ZShkZXZFbnZQcm9jZXNzLnBpZCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFuY3lMb2coJ3JlZCcsICdPb3BzeSBkdXJpbmcgdGVybWluYXRlOicsIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ2RvbmUgZm9yIHRlcm1pbmF0ZScsICcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1Rlc3Qoe1xuICB0ZXN0UGF0aFBhdHRlcm4sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBjbGVhbnVwID0gKCkgPT4ge30sXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG59KSB7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIG9uU3RkZXJyLFxuICAgIG9uRGF0YSxcbiAgICBhc3NldHNUb0dlbmVyYXRlLFxuICAgIGNsZWFudXAsXG4gICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7XG4gICAgICByZXR1cm4gYChcbiAgICAgICAgbnBtIHJ1biB0ZXN0cGFja2FnZXMgLS0gLS13YXRjaD1mYWxzZSAtLXRlc3RQYXRoUGF0dGVybj0nJHt0ZXN0UGF0aFBhdHRlcm59J1xuICAgICAgKWA7XG4gICAgfSxcbiAgfSk7XG59XG5cbmNvbnN0IG1vbm9yZXBvRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uLycpO1xuZGVzY3JpYmUoJ3Rlc3RkZXZlbnYnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IHZpYSBvbiBkZW1hbmQgY29tcGlsZWQgc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcblxuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IHZpYSBwcmUtY29tcGlsZWQgc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgdXNlRGlzdDogdHJ1ZSxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUub25seSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBzaW1pbGFyIHRvIG5wbSB1c2FnZScsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIG5vZGVQYXRoOiBnZXROb2RlUGF0aFNoVmFyKHsgY3dkOiBkZXZFbnZSb290LCBiZWZvcmU6IFsnYXNkZmFzZGYnXSB9KSxcbiAgICAgIG1ha2VTaGVsbENtZFN0cjogKCkgPT4geyByZXR1cm4gJ3B3ZCc7IH0sXG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuLi90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYvdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgICAgY2xlYW51cDogKC8qIGRldkVudlByb2Nlc3MgKi8pID0+IHtcbiAgICAgICAgZnMucmVtb3ZlU3luYyhwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuLi90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYnKSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnbm9uLWV4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgbGV0IG5vdEZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcE1BWUJFLUEtVFlQTyc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogJ2V4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJ0ZXN0ZGV2ZW52LXNvbWUtZGVwXCIpOyB9OycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIG5vdEZvdW5kRXJyb3IgPSBub3RGb3VuZEVycm9yIHx8IGRhdGEuaW5kZXhPZihgTW9kdWxlIG5vdCBmb3VuZDogRXJyb3I6IENhbid0IHJlc29sdmUgJyR7aW1wb3J0VG9BdHRlbXB0fSdgKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCd3ZWJwYWNrIGJ1bmRsaW5nIHRocm93cyBlcnJvciBmb3Igbm9uLWV4aXN0ZW50IGltcG9ydHMgd2l0aGluIGFzc2V0cycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChub3RGb3VuZEVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMgd2l0aCBucG0tc2NvcGluZycsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXAnO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnQHNvbWUtbnBtLXNjb3BlLyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIG5wbS1zY29wZWQgaW1wb3J0IGJ1bmRsaW5nJywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGVzdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCB0ZXN0c1Bhc3NlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdUZXN0KHtcbiAgICAgIHRlc3RQYXRoUGF0dGVybjogJy4qL3Rlc3RkZXZlbnYtc29tZS1kZXAvLionLFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLnRlc3QuanMnKSxcbiAgICAgICAgICB0ZXh0OiAndGVzdChcImFkZHMgMSArIDIgdG8gZXF1YWwgM1wiLCAoKSA9PiB7IGV4cGVjdCgxICsgMikudG9CZSgzKTsgfSk7JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvblN0ZGVycjogKGRhdGEpID0+IHtcbiAgICAgICAgdGVzdHNQYXNzZWQgPSB0ZXN0c1Bhc3NlZCB8fCBkYXRhLmluZGV4T2YoJzEgcGFzc2VkLCAxIHRvdGFsJykgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgndGVzdHRlc3R0ZXN0JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKHRlc3RzUGFzc2VkLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3RkZXZlbnYyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhbGtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFsa1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvci1wYWlycy1waWNrZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvci1wYWlycy1waWNrZXJcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmluZC1ub2RlLW1vZHVsZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmaW5kLW5vZGUtbW9kdWxlc1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoYXMtYW5zaVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhhcy1hbnNpXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=