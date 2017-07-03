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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-console */
var chalkLib = __webpack_require__(10);
var colorPairsPicker = __webpack_require__(12);
var hasAnsi = __webpack_require__(13);

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

  var childProcess = __webpack_require__(11);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mocha");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("terminate");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("website-scraper");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _terminate = __webpack_require__(7);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(2);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(3);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _websiteScraper = __webpack_require__(8);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _nodeUuid = __webpack_require__(5);

var _mocha = __webpack_require__(4);

var _shellCommand = __webpack_require__(1);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _fancyLog = __webpack_require__(0);

var _fancyLog2 = _interopRequireDefault(_fancyLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    var devEnvProcess = (0, _shellCommand2.default)(makeShellCmdStr(pathToDemoEntry), null, false);
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
  var _ref2$onAsset = _ref2.onAsset,
      onAsset = _ref2$onAsset === undefined ? function () {} : _ref2$onAsset,
      _ref2$onData = _ref2.onData,
      _onData = _ref2$onData === undefined ? function () {} : _ref2$onData,
      _ref2$onStderr = _ref2.onStderr,
      onStderr = _ref2$onStderr === undefined ? function () {} : _ref2$onStderr,
      assetsToGenerate = _ref2.assetsToGenerate;

  var scrapeDir = _path2.default.resolve(__dirname, './scrape');
  var once = false;
  duringProcess({
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
    makeShellCmdStr: function makeShellCmdStr(pathToDemoEntry) {
      return '(\n        npm run dev -- --demo-entry=\'' + pathToDemoEntry + '\'\n      )';
    },
    cleanup: function cleanup(devEnvProcess) {
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
      assetsToGenerate = _ref3.assetsToGenerate;

  duringProcess({
    onStderr: onStderr,
    onData: onData,
    assetsToGenerate: assetsToGenerate,
    makeShellCmdStr: function makeShellCmdStr() {
      return '(\n        npm run testpackages -- --watch=false --testPathPattern=\'' + testPathPattern + '\'\n      )';
    }
  });
}

var monorepoDir = _path2.default.resolve(__dirname, '../../../');
(0, _mocha.describe)('testdevenv', function () {
  (0, _mocha.describe)('localhost dev environment', function () {
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("color-pairs-picker");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("has-ansi");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDI1NGU0ZjJkNjI2ODBkYjg1ZTUiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZmFuY3lMb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvc2hlbGxDb21tYW5kLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLWV4dHJhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9jaGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLXV1aWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGVybWluYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2Vic2l0ZS1zY3JhcGVyXCIiLCJ3ZWJwYWNrOi8vLy4vdGVzdGRldmVudjIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGFzLWFuc2lcIiJdLCJuYW1lcyI6WyJjaGFsa0xpYiIsInJlcXVpcmUiLCJjb2xvclBhaXJzUGlja2VyIiwiaGFzQW5zaSIsImNoYWxrIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsImZvcm1hdExvZyIsImNvbG9yIiwiaGVhZGluZyIsImJnIiwiY29udHJhc3QiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJmZyIsImNvbnNvbGUiLCJsb2ciLCJyZ2IiLCJiZ1JnYiIsImFyZ3MiLCJmaW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbW1hbmRUb1J1biIsIm9wdGlvbnMiLCJzdGRpbyIsImtpbGxQYXJlbnRPbkV4aXQiLCJjb21tYW5kIiwiY2hpbGRQcm9jZXNzIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwicHJvY2VzcyIsImtpbGwiLCJwaWQiLCJleGl0IiwiZHVyaW5nUHJvY2VzcyIsIm9uRGF0YSIsIm9uU3RkZXJyIiwibWFrZVNoZWxsQ21kU3RyIiwiY2xlYW51cCIsImFzc2V0c1RvR2VuZXJhdGUiLCJkdXJpbmdTZXJ2ZXJCZWZvcmUiLCJkb25lIiwidGltZW91dCIsInBhdGhUb0RlbW9FbnRyeSIsImZvckVhY2giLCJhc3NldEluZm8iLCJkaXIiLCJkaXJuYW1lIiwicGF0aCIsImVuc3VyZURpclN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwidGV4dCIsImlzRGVtb0VudHJ5IiwiZGV2RW52UHJvY2VzcyIsImZpbmlzaGVkIiwiZmluaXNoIiwicmVtb3ZlU3luYyIsInN0ZG91dCIsImRhdGEiLCJkYXRhU3RyaW5nIiwidG9TdHJpbmciLCJzdGRlcnIiLCJkdXJpbmdTZXJ2ZXIiLCJvbkFzc2V0Iiwic2NyYXBlRGlyIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsIm9uY2UiLCJpbmRleE9mIiwidXJscyIsImRpcmVjdG9yeSIsInJlc291cmNlU2F2ZXIiLCJyZXNvdXJjZSIsImVyciIsInRoZW4iLCJkdXJpbmdUZXN0IiwidGVzdFBhdGhQYXR0ZXJuIiwibW9ub3JlcG9EaXIiLCJjb250ZW50VG9CdW5kbGUiLCJidW5kbGVIYXNDb250ZW50IiwiZXF1YWwiLCJub3RGb3VuZEVycm9yIiwiaW1wb3J0VG9BdHRlbXB0IiwidGVzdHNQYXNzZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1D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RCxLQUZEO0FBR0QsR0F2QkQ7O0FBeUJBLHVCQUFTLE1BQVQsRUFBaUIsWUFBTTtBQUNyQixRQUFNRCxrQkFBa0IsbUJBQXhCO0FBQ0EsUUFBSUssY0FBYyxLQUFsQjtBQUNBLFFBQU1ELGtCQUFrQixxQkFBeEI7QUFDQVAsZUFBVztBQUNUQyx1QkFBaUIsMkJBRFI7QUFFVHJDLHdCQUFrQixDQUNoQjtBQUNFUyxjQUFNLGVBQUtpQixPQUFMLENBQWFZLFdBQWIsRUFBMEIsK0NBQTFCLENBRFI7QUFFRTFCLHlDQUE4QitCLGVBQTlCLHFCQUZGO0FBR0U5QixxQkFBYTtBQUhmLE9BRGdCLEVBTWhCO0FBQ0VKLGNBQU0sZUFBS2lCLE9BQUwsQ0FBYVksV0FBYixFQUEwQix1REFBMUIsQ0FEUjtBQUVFMUIsaUVBQXNEMkIsZUFBdEQ7QUFGRixPQU5nQixFQVVoQjtBQUNFOUIsY0FBTSxlQUFLaUIsT0FBTCxDQUFhWSxXQUFiLEVBQTBCLDREQUExQixDQURSO0FBRUUxQixjQUFNO0FBRlIsT0FWZ0IsQ0FGVDtBQWlCVGYsZ0JBQVUsa0JBQUNzQixJQUFELEVBQVU7QUFDbEJ5QixzQkFBY0EsZUFBZXpCLEtBQUtVLE9BQUwsQ0FBYSxtQkFBYixNQUFzQyxDQUFDLENBQXBFO0FBQ0Q7QUFuQlEsS0FBWDtBQXFCQSxtQkFBRyxjQUFILEVBQW1CLFlBQU07QUFDdkIsdUJBQU9ZLEtBQVAsQ0FBYUcsV0FBYixFQUEwQixJQUExQjtBQUNELEtBRkQ7QUFHRCxHQTVCRDtBQTZCRCxDQTdIRCxFOzs7Ozs7O0FDeklBLGtDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InRlc3RkZXZlbnYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMjU0ZTRmMmQ2MjY4MGRiODVlNSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmNvbnN0IGNoYWxrTGliID0gcmVxdWlyZSgnY2hhbGsnKTtcbmNvbnN0IGNvbG9yUGFpcnNQaWNrZXIgPSByZXF1aXJlKCdjb2xvci1wYWlycy1waWNrZXInKTtcbmNvbnN0IGhhc0Fuc2kgPSByZXF1aXJlKCdoYXMtYW5zaScpO1xuXG5cbmNvbnN0IGNoYWxrID0gbmV3IGNoYWxrTGliLmNvbnN0cnVjdG9yKHsgbGV2ZWw6IDMgfSk7XG5mdW5jdGlvbiBmb3JtYXRMb2coY29sb3IsIGhlYWRpbmcsIC4uLmFyZ3MpIHtcbiAgY29uc3QgYmcgPSBjb2xvclBhaXJzUGlja2VyKGNvbG9yLCB7IGNvbnRyYXN0OiA4IH0pLmJnLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAraXRlbTtcbiAgfSk7XG4gIGNvbnN0IGZnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5mZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhjaGFsay5yZ2IoLi4uZmcpLmJnUmdiKC4uLmJnKShoZWFkaW5nKSk7XG5cbiAgaWYgKHR5cGVvZiBhcmdzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuIGhhc0Fuc2koaXRlbSk7IH0pID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKGNoYWxrW2NvbG9yXSguLi5hcmdzKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0TG9nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL2NvcmUvZmFuY3lMb2cuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xubW9kdWxlLmV4cG9ydHMgPSAoY29tbWFuZFRvUnVuLCBvcHRpb25zID0geyBzdGRpbzogJ2luaGVyaXQnIH0sIGtpbGxQYXJlbnRPbkV4aXQgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGNvbW1hbmQgPSAnc2gnO1xuICBjb25zdCBhcmdzID0gW1xuICAgICctYycsXG4gICAgY29tbWFuZFRvUnVuLFxuICBdO1xuICAvL1xuICAvLyBrZXhlYyBkb2Vzbid0IHdvcmsgaW4gd2luZG93cywgc28gZmFsbGJhY2sgdG8gY2hpbGRfcHJvY2Vzcy5zcGF3blxuICAvLyB0aGlzIGxvZ2ljIGNvcGllZCBmcm9tIGJhYmVsLWNsaS9saWIvYmFiZWwtbm9kZS5qc1xuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IGtleGVjID0gcmVxdWlyZSgna2V4ZWMnKTtcbiAgLy8gICBrZXhlYyhjb21tYW5kLCBhcmdzKTtcbiAgLy8gfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gaWYgKGVyci5jb2RlICE9PSAnTU9EVUxFX05PVF9GT1VORCcpIHRocm93IGVycjtcblxuICBjb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XG4gIGNvbnN0IHByb2MgPSBjaGlsZFByb2Nlc3Muc3Bhd24oY29tbWFuZCwgYXJncywgb3B0aW9ucyB8fCB7fSk7XG4gIHByb2Mub24oJ2V4aXQnLCAoY29kZSwgc2lnbmFsKSA9PiB7XG4gICAgaWYgKGtpbGxQYXJlbnRPbkV4aXQpIHtcbiAgICAgIHByb2Nlc3Mub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICBwcm9jZXNzLmtpbGwocHJvY2Vzcy5waWQsIHNpZ25hbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5leGl0KGNvZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcHJvYztcbiAgLy8gfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzc2VydFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLWV4dHJhXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtZXh0cmFcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2NoYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vY2hhXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS11dWlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS11dWlkXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0ZXJtaW5hdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJzaXRlLXNjcmFwZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgdGVybWluYXRlIGZyb20gJ3Rlcm1pbmF0ZSc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgc2NyYXBlIGZyb20gJ3dlYnNpdGUtc2NyYXBlcic7XG5pbXBvcnQgeyB2NCBhcyBtYWtlVXVpZCB9IGZyb20gJ25vZGUtdXVpZCc7XG5pbXBvcnQgeyBpdCwgZGVzY3JpYmUsIGJlZm9yZSB9IGZyb20gJ21vY2hhJztcbmltcG9ydCBzaGVsbENvbW1hbmQgZnJvbSAnLi4vY29yZS9zaGVsbENvbW1hbmQnO1xuaW1wb3J0IGZhbmN5TG9nIGZyb20gJy4uL2NvcmUvZmFuY3lMb2cnO1xuXG5mdW5jdGlvbiBkdXJpbmdQcm9jZXNzKHtcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIG1ha2VTaGVsbENtZFN0ciA9ICgpID0+IHt9LFxuICBjbGVhbnVwID0gKCkgPT4ge30sXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG59KSB7XG4gIGJlZm9yZShmdW5jdGlvbiBkdXJpbmdTZXJ2ZXJCZWZvcmUoZG9uZSkge1xuICAgIHRoaXMudGltZW91dCg2MDAwMCk7XG4gICAgbGV0IHBhdGhUb0RlbW9FbnRyeTtcbiAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgIGZzLmVuc3VyZURpclN5bmMoZGlyKTtcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXNzZXRJbmZvLnBhdGgsIGFzc2V0SW5mby50ZXh0KTtcbiAgICAgIGlmIChhc3NldEluZm8uaXNEZW1vRW50cnkpIHtcbiAgICAgICAgcGF0aFRvRGVtb0VudHJ5ID0gYXNzZXRJbmZvLnBhdGg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZGV2RW52UHJvY2VzcyA9IHNoZWxsQ29tbWFuZChtYWtlU2hlbGxDbWRTdHIocGF0aFRvRGVtb0VudHJ5KSwgbnVsbCwgZmFsc2UpO1xuICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmYW5jeUxvZygnZ3JlZW4nLCAnRklOSVNIRUQnLCAnY29kZScpO1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICBmcy5yZW1vdmVTeW5jKGRpcik7XG4gICAgICB9KTtcbiAgICAgIGNsZWFudXAoZGV2RW52UHJvY2Vzcyk7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICAgIGRldkVudlByb2Nlc3Muc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICBmYW5jeUxvZygnYmx1ZScsICdkZXZFbnZQcm9jZXNzLnN0ZG91dDonLCBkYXRhU3RyaW5nKTtcbiAgICAgIG9uRGF0YShkYXRhU3RyaW5nLCBmaW5pc2gpO1xuICAgIH0pO1xuICAgIGRldkVudlByb2Nlc3Muc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgb25TdGRlcnIoZGF0YSk7XG4gICAgICB9XG4gICAgICBmYW5jeUxvZygnY3lhbicsICdkZXZFbnZQcm9jZXNzLnN0ZGVycjonLCBkYXRhKTtcbiAgICB9KTtcbiAgICBkZXZFbnZQcm9jZXNzLm9uKCdleGl0JywgKGNvZGUpID0+IHtcbiAgICAgIGZhbmN5TG9nKCd5ZWxsb3cnLCAnY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlOicsIGNvZGUpO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkdXJpbmdTZXJ2ZXIoe1xuICBvbkFzc2V0ID0gKCkgPT4ge30sXG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBvblN0ZGVyciA9ICgpID0+IHt9LFxuICBhc3NldHNUb0dlbmVyYXRlLFxufSkge1xuICBjb25zdCBzY3JhcGVEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zY3JhcGUnKTtcbiAgbGV0IG9uY2UgPSBmYWxzZTtcbiAgZHVyaW5nUHJvY2Vzcyh7XG4gICAgb25EYXRhOiAoZGF0YVN0cmluZywgZmluaXNoKSA9PiB7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZywgZmluaXNoKTtcbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IEZhaWxlZCB0byBjb21waWxlLicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgZmluaXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBDb21waWxlZCBzdWNjZXNzZnVsbHkuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuXG4gICAgICAgIHNjcmFwZSh7XG4gICAgICAgICAgdXJsczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAvJ10sXG4gICAgICAgICAgZGlyZWN0b3J5OiBzY3JhcGVEaXIsXG4gICAgICAgICAgcmVzb3VyY2VTYXZlcjogY2xhc3MgTXlSZXNvdXJjZVNhdmVyIHtcbiAgICAgICAgICAgIHNhdmVSZXNvdXJjZShyZXNvdXJjZSkge1xuICAgICAgICAgICAgICBvbkFzc2V0KHJlc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2xlYW51cChlcnIpIHtcbiAgICAgICAgICAgICAgZmFuY3lMb2coJ3BpbmsnLCAnc2NyYXBlIHJlc291cmNlIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TdGRlcnIsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBtYWtlU2hlbGxDbWRTdHI6IChwYXRoVG9EZW1vRW50cnkpID0+IHtcbiAgICAgIHJldHVybiBgKFxuICAgICAgICBucG0gcnVuIGRldiAtLSAtLWRlbW8tZW50cnk9JyR7cGF0aFRvRGVtb0VudHJ5fSdcbiAgICAgIClgO1xuICAgIH0sXG4gICAgY2xlYW51cDogKGRldkVudlByb2Nlc3MpID0+IHtcbiAgICAgIGZzLnJlbW92ZVN5bmMoc2NyYXBlRGlyKTtcbiAgICAgIHRlcm1pbmF0ZShkZXZFbnZQcm9jZXNzLnBpZCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFuY3lMb2coJ3JlZCcsICdPb3BzeSBkdXJpbmcgdGVybWluYXRlOicsIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ2RvbmUgZm9yIHRlcm1pbmF0ZScsICcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1Rlc3Qoe1xuICB0ZXN0UGF0aFBhdHRlcm4sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBhc3NldHNUb0dlbmVyYXRlLFxufSkge1xuICBkdXJpbmdQcm9jZXNzKHtcbiAgICBvblN0ZGVycixcbiAgICBvbkRhdGEsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBtYWtlU2hlbGxDbWRTdHI6ICgpID0+IHtcbiAgICAgIHJldHVybiBgKFxuICAgICAgICBucG0gcnVuIHRlc3RwYWNrYWdlcyAtLSAtLXdhdGNoPWZhbHNlIC0tdGVzdFBhdGhQYXR0ZXJuPScke3Rlc3RQYXRoUGF0dGVybn0nXG4gICAgICApYDtcbiAgICB9LFxuICB9KTtcbn1cblxuY29uc3QgbW9ub3JlcG9EaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vJyk7XG5kZXNjcmliZSgndGVzdGRldmVudicsICgpID0+IHtcbiAgZGVzY3JpYmUoJ2xvY2FsaG9zdCBkZXYgZW52aXJvbm1lbnQnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuXG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ25vbi1leGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGxldCBub3RGb3VuZEVycm9yID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXBNQVlCRS1BLVRZUE8nO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6ICdleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKFwidGVzdGRldmVudi1zb21lLWRlcFwiKTsgfTsnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uU3RkZXJyOiAoZGF0YSkgPT4ge1xuICAgICAgICBub3RGb3VuZEVycm9yID0gbm90Rm91bmRFcnJvciB8fCBkYXRhLmluZGV4T2YoYE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICcke2ltcG9ydFRvQXR0ZW1wdH0nYCkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnd2VicGFjayBidW5kbGluZyB0aHJvd3MgZXJyb3IgZm9yIG5vbi1leGlzdGVudCBpbXBvcnRzIHdpdGhpbiBhc3NldHMnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwobm90Rm91bmRFcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBpbXBvcnQgYnVuZGxpbmcnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzIHdpdGggbnBtLXNjb3BpbmcnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJ0Bzb21lLW5wbS1zY29wZS8ke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBucG0tc2NvcGVkIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Rlc3QnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgdGVzdHNQYXNzZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nVGVzdCh7XG4gICAgICB0ZXN0UGF0aFBhdHRlcm46ICcuKi90ZXN0ZGV2ZW52LXNvbWUtZGVwLy4qJyxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC50ZXN0LmpzJyksXG4gICAgICAgICAgdGV4dDogJ3Rlc3QoXCJhZGRzIDEgKyAyIHRvIGVxdWFsIDNcIiwgKCkgPT4geyBleHBlY3QoMSArIDIpLnRvQmUoMyk7IH0pOycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIHRlc3RzUGFzc2VkID0gdGVzdHNQYXNzZWQgfHwgZGF0YS5pbmRleE9mKCcxIHBhc3NlZCwgMSB0b3RhbCcpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ3Rlc3R0ZXN0dGVzdCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbCh0ZXN0c1Bhc3NlZCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0ZGV2ZW52Mi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhbGtcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3ItcGFpcnMtcGlja2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhhcy1hbnNpXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGFzLWFuc2lcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==