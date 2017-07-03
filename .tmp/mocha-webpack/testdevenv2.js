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

  var childProcess = __webpack_require__(12);
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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("color-pairs-picker");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("has-ansi");

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _terminate = __webpack_require__(9);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(1);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(4);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _chalk = __webpack_require__(2);

var _chalk2 = _interopRequireDefault(_chalk);

var _colorPairsPicker = __webpack_require__(3);

var _colorPairsPicker2 = _interopRequireDefault(_colorPairsPicker);

var _hasAnsi = __webpack_require__(5);

var _hasAnsi2 = _interopRequireDefault(_hasAnsi);

var _websiteScraper = __webpack_require__(10);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _nodeUuid = __webpack_require__(7);

var _mocha = __webpack_require__(6);

var _shellCommand = __webpack_require__(0);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable no-console */
/* eslint-disable class-methods-use-this */


var chalk = new _chalk2.default.constructor({ level: 3 });
function formatLog(color, heading) {
  var _chalk$rgb;

  var bg = (0, _colorPairsPicker2.default)(color, { contrast: 8 }).bg.split('(')[1].split(')')[0].split(',').map(function (item) {
    return +item;
  });
  var fg = (0, _colorPairsPicker2.default)(color, { contrast: 8 }).fg.split('(')[1].split(')')[0].split(',').map(function (item) {
    return +item;
  });
  console.log((_chalk$rgb = chalk.rgb.apply(chalk, _toConsumableArray(fg))).bgRgb.apply(_chalk$rgb, _toConsumableArray(bg))(heading));

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (typeof args.find(function (item) {
    return (0, _hasAnsi2.default)(item);
  }) === 'undefined') {
    console.log(chalk[color].apply(chalk, args));
  } else {
    var _console;

    (_console = console).log.apply(_console, args);
  }
}

function duringTest(_ref) {
  var _ref$onData = _ref.onData,
      onData = _ref$onData === undefined ? function () {} : _ref$onData,
      _ref$onStderr = _ref.onStderr,
      onStderr = _ref$onStderr === undefined ? function () {} : _ref$onStderr,
      assetsToGenerate = _ref.assetsToGenerate,
      testPathPattern = _ref.testPathPattern;

  (0, _mocha.before)(function beforeDuringTest(done) {
    this.timeout(60000);
    assetsToGenerate.forEach(function (assetInfo) {
      var dir = _path2.default.dirname(assetInfo.path);
      _fsExtra2.default.ensureDirSync(dir);
      _fsExtra2.default.writeFileSync(assetInfo.path, assetInfo.text);
    });

    var devEnvProcess = (0, _shellCommand2.default)('(\n      npm run testpackages -- --watch=false --testPathPattern=\'' + testPathPattern + '\'\n    )', null, false);
    var finished = false;
    function finish() {
      if (finished) {
        return;
      }
      formatLog('green', 'FINISHED', 'code');
      finished = true;

      assetsToGenerate.forEach(function (assetInfo) {
        var dir = _path2.default.dirname(assetInfo.path);
        _fsExtra2.default.removeSync(dir);
      });
      done();
    }
    devEnvProcess.stdout.on('data', function (data) {
      var dataString = data.toString();
      formatLog('blue', 'devEnvProcess.stdout:', dataString);
      onData(dataString);
    });
    devEnvProcess.stderr.on('data', function (data) {
      if (data && data.toString) {
        data = data.toString();
        onStderr(data);
      }
      formatLog('cyan', 'devEnvProcess.stderr:', data);
    });
    devEnvProcess.on('exit', function (code) {
      formatLog('yellow', 'child process exited with code:', code);
      finish();
    });
  });
}

function duringServer(_ref2) {
  var _ref2$onAsset = _ref2.onAsset,
      onAsset = _ref2$onAsset === undefined ? function () {} : _ref2$onAsset,
      _ref2$onData = _ref2.onData,
      onData = _ref2$onData === undefined ? function () {} : _ref2$onData,
      _ref2$onStderr = _ref2.onStderr,
      onStderr = _ref2$onStderr === undefined ? function () {} : _ref2$onStderr,
      assetsToGenerate = _ref2.assetsToGenerate;

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

    var devEnvProcess = (0, _shellCommand2.default)('(\n      npm run dev -- --demo-entry=\'' + pathToDemoEntry + '\'\n    )', null, false);
    var scrapeDir = _path2.default.resolve(__dirname, './scrape');
    var finished = false;
    function finish() {
      if (finished) {
        return;
      }
      formatLog('green', 'FINISHED', 'code');
      finished = true;

      _fsExtra2.default.removeSync(scrapeDir);
      assetsToGenerate.forEach(function (assetInfo) {
        var dir = _path2.default.dirname(assetInfo.path);
        _fsExtra2.default.removeSync(dir);
      });

      (0, _terminate2.default)(devEnvProcess.pid, function (err) {
        if (err) {
          // you will get an error if you did not supply a valid process.pid
          formatLog('red', 'Oopsy during terminate:', err);
        } else {
          formatLog('green', 'done for terminate', '');
        }
      });
      done();
    }
    var once = false;
    devEnvProcess.stdout.on('data', function (data) {
      var dataString = data.toString();
      onData(dataString);
      formatLog('blue', 'devEnvProcess.stdout:', dataString);
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
                formatLog('pink', 'scrape resource error:', err);
              }
            }]);

            return MyResourceSaver;
          }()
        }).then(function () {
          finish();
        });
      }
    });
    devEnvProcess.stderr.on('data', function (data) {
      if (data && data.toString) {
        data = data.toString();
        onStderr(data);
      }
      formatLog('cyan', 'devEnvProcess.stderr:', data);
    });
    devEnvProcess.on('exit', function (code) {
      formatLog('yellow', 'child process exited with code:', code);
      finish();
    });
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGI1Mjc2ZjdiOTk0NTJhZmI3ZjkiLCJ3ZWJwYWNrOi8vLy4uL3NoZWxsLWNvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvci1wYWlycy1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhhcy1hbnNpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9jaGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLXV1aWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGVybWluYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2Vic2l0ZS1zY3JhcGVyXCIiLCJ3ZWJwYWNrOi8vLy4vdGVzdGRldmVudjIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb21tYW5kVG9SdW4iLCJvcHRpb25zIiwic3RkaW8iLCJraWxsUGFyZW50T25FeGl0IiwiY29tbWFuZCIsImFyZ3MiLCJjaGlsZFByb2Nlc3MiLCJyZXF1aXJlIiwicHJvYyIsInNwYXduIiwib24iLCJjb2RlIiwic2lnbmFsIiwicHJvY2VzcyIsImtpbGwiLCJwaWQiLCJleGl0IiwiY2hhbGsiLCJjb25zdHJ1Y3RvciIsImxldmVsIiwiZm9ybWF0TG9nIiwiY29sb3IiLCJoZWFkaW5nIiwiYmciLCJjb250cmFzdCIsInNwbGl0IiwibWFwIiwiaXRlbSIsImZnIiwiY29uc29sZSIsImxvZyIsInJnYiIsImJnUmdiIiwiZmluZCIsImR1cmluZ1Rlc3QiLCJvbkRhdGEiLCJvblN0ZGVyciIsImFzc2V0c1RvR2VuZXJhdGUiLCJ0ZXN0UGF0aFBhdHRlcm4iLCJiZWZvcmVEdXJpbmdUZXN0IiwiZG9uZSIsInRpbWVvdXQiLCJmb3JFYWNoIiwiYXNzZXRJbmZvIiwiZGlyIiwiZGlybmFtZSIsInBhdGgiLCJlbnN1cmVEaXJTeW5jIiwid3JpdGVGaWxlU3luYyIsInRleHQiLCJkZXZFbnZQcm9jZXNzIiwiZmluaXNoZWQiLCJmaW5pc2giLCJyZW1vdmVTeW5jIiwic3Rkb3V0IiwiZGF0YSIsImRhdGFTdHJpbmciLCJ0b1N0cmluZyIsInN0ZGVyciIsImR1cmluZ1NlcnZlciIsIm9uQXNzZXQiLCJkdXJpbmdTZXJ2ZXJCZWZvcmUiLCJwYXRoVG9EZW1vRW50cnkiLCJpc0RlbW9FbnRyeSIsInNjcmFwZURpciIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJlcnIiLCJvbmNlIiwiaW5kZXhPZiIsInVybHMiLCJkaXJlY3RvcnkiLCJyZXNvdXJjZVNhdmVyIiwicmVzb3VyY2UiLCJ0aGVuIiwibW9ub3JlcG9EaXIiLCJjb250ZW50VG9CdW5kbGUiLCJidW5kbGVIYXNDb250ZW50IiwiZXF1YWwiLCJub3RGb3VuZEVycm9yIiwiaW1wb3J0VG9BdHRlbXB0IiwidGVzdHNQYXNzZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7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QTBCLElBQTFCO0FBQ0QsS0FGRDtBQUdELEdBNUJEO0FBNkJELENBN0hELEU7Ozs7Ozs7QUMxS0EsMEMiLCJmaWxlIjoidGVzdGRldmVudjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYjUyNzZmN2I5OTQ1MmFmYjdmOSIsIi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5tb2R1bGUuZXhwb3J0cyA9IChjb21tYW5kVG9SdW4sIG9wdGlvbnMgPSB7IHN0ZGlvOiAnaW5oZXJpdCcgfSwga2lsbFBhcmVudE9uRXhpdCA9IHRydWUpID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kVG9SdW4sXG4gIF07XG4gIC8vXG4gIC8vIGtleGVjIGRvZXNuJ3Qgd29yayBpbiB3aW5kb3dzLCBzbyBmYWxsYmFjayB0byBjaGlsZF9wcm9jZXNzLnNwYXduXG4gIC8vIHRoaXMgbG9naWMgY29waWVkIGZyb20gYmFiZWwtY2xpL2xpYi9iYWJlbC1ub2RlLmpzXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3Qga2V4ZWMgPSByZXF1aXJlKCdrZXhlYycpO1xuICAvLyAgIGtleGVjKGNvbW1hbmQsIGFyZ3MpO1xuICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyO1xuXG4gIGNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zIHx8IHt9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBpZiAoa2lsbFBhcmVudE9uRXhpdCkge1xuICAgICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9jO1xuICAvLyB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NoZWxsLWNvbW1hbmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWxrXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3ItcGFpcnMtcGlja2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1leHRyYVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhhcy1hbnNpXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGFzLWFuc2lcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2NoYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vY2hhXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS11dWlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS11dWlkXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0ZXJtaW5hdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJzaXRlLXNjcmFwZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IHRlcm1pbmF0ZSBmcm9tICd0ZXJtaW5hdGUnO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IGNoYWxrTGliIGZyb20gJ2NoYWxrJztcbmltcG9ydCBjb2xvclBhaXJzUGlja2VyIGZyb20gJ2NvbG9yLXBhaXJzLXBpY2tlcic7XG5pbXBvcnQgaGFzQW5zaSBmcm9tICdoYXMtYW5zaSc7XG5pbXBvcnQgc2NyYXBlIGZyb20gJ3dlYnNpdGUtc2NyYXBlcic7XG5pbXBvcnQgeyB2NCBhcyBtYWtlVXVpZCB9IGZyb20gJ25vZGUtdXVpZCc7XG5pbXBvcnQgeyBpdCwgZGVzY3JpYmUsIGJlZm9yZSB9IGZyb20gJ21vY2hhJztcbmltcG9ydCBzaGVsbENvbW1hbmQgZnJvbSAnLi4vc2hlbGwtY29tbWFuZCc7XG5cbmNvbnN0IGNoYWxrID0gbmV3IGNoYWxrTGliLmNvbnN0cnVjdG9yKHsgbGV2ZWw6IDMgfSk7XG5mdW5jdGlvbiBmb3JtYXRMb2coY29sb3IsIGhlYWRpbmcsIC4uLmFyZ3MpIHtcbiAgY29uc3QgYmcgPSBjb2xvclBhaXJzUGlja2VyKGNvbG9yLCB7IGNvbnRyYXN0OiA4IH0pLmJnLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAraXRlbTtcbiAgfSk7XG4gIGNvbnN0IGZnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5mZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhjaGFsay5yZ2IoLi4uZmcpLmJnUmdiKC4uLmJnKShoZWFkaW5nKSk7XG5cbiAgaWYgKHR5cGVvZiBhcmdzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuIGhhc0Fuc2koaXRlbSk7IH0pID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKGNoYWxrW2NvbG9yXSguLi5hcmdzKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBkdXJpbmdUZXN0KHtcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG4gIHRlc3RQYXRoUGF0dGVybixcbn0pIHtcbiAgYmVmb3JlKGZ1bmN0aW9uIGJlZm9yZUR1cmluZ1Rlc3QoZG9uZSkge1xuICAgIHRoaXMudGltZW91dCg2MDAwMCk7XG4gICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICBmcy5lbnN1cmVEaXJTeW5jKGRpcik7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKGFzc2V0SW5mby5wYXRoLCBhc3NldEluZm8udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXZFbnZQcm9jZXNzID0gc2hlbGxDb21tYW5kKGAoXG4gICAgICBucG0gcnVuIHRlc3RwYWNrYWdlcyAtLSAtLXdhdGNoPWZhbHNlIC0tdGVzdFBhdGhQYXR0ZXJuPScke3Rlc3RQYXRoUGF0dGVybn0nXG4gICAgKWAsIG51bGwsIGZhbHNlKTtcbiAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9ybWF0TG9nKCdncmVlbicsICdGSU5JU0hFRCcsICdjb2RlJyk7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG5cbiAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgIH0pO1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgICBkZXZFbnZQcm9jZXNzLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBkYXRhU3RyaW5nID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgZm9ybWF0TG9nKCdibHVlJywgJ2RldkVudlByb2Nlc3Muc3Rkb3V0OicsIGRhdGFTdHJpbmcpO1xuICAgICAgb25EYXRhKGRhdGFTdHJpbmcpO1xuICAgIH0pO1xuICAgIGRldkVudlByb2Nlc3Muc3RkZXJyLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgb25TdGRlcnIoZGF0YSk7XG4gICAgICB9XG4gICAgICBmb3JtYXRMb2coJ2N5YW4nLCAnZGV2RW52UHJvY2Vzcy5zdGRlcnI6JywgZGF0YSk7XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5vbignZXhpdCcsIChjb2RlKSA9PiB7XG4gICAgICBmb3JtYXRMb2coJ3llbGxvdycsICdjaGlsZCBwcm9jZXNzIGV4aXRlZCB3aXRoIGNvZGU6JywgY29kZSk7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1NlcnZlcih7XG4gIG9uQXNzZXQgPSAoKSA9PiB7fSxcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG59KSB7XG4gIGJlZm9yZShmdW5jdGlvbiBkdXJpbmdTZXJ2ZXJCZWZvcmUoZG9uZSkge1xuICAgIHRoaXMudGltZW91dCg2MDAwMCk7XG4gICAgbGV0IHBhdGhUb0RlbW9FbnRyeTtcbiAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgIGZzLmVuc3VyZURpclN5bmMoZGlyKTtcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXNzZXRJbmZvLnBhdGgsIGFzc2V0SW5mby50ZXh0KTtcbiAgICAgIGlmIChhc3NldEluZm8uaXNEZW1vRW50cnkpIHtcbiAgICAgICAgcGF0aFRvRGVtb0VudHJ5ID0gYXNzZXRJbmZvLnBhdGg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXZFbnZQcm9jZXNzID0gc2hlbGxDb21tYW5kKGAoXG4gICAgICBucG0gcnVuIGRldiAtLSAtLWRlbW8tZW50cnk9JyR7cGF0aFRvRGVtb0VudHJ5fSdcbiAgICApYCwgbnVsbCwgZmFsc2UpO1xuICAgIGNvbnN0IHNjcmFwZURpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NjcmFwZScpO1xuICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3JtYXRMb2coJ2dyZWVuJywgJ0ZJTklTSEVEJywgJ2NvZGUnKTtcbiAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcblxuICAgICAgZnMucmVtb3ZlU3luYyhzY3JhcGVEaXIpO1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgICAgZnMucmVtb3ZlU3luYyhkaXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHRlcm1pbmF0ZShkZXZFbnZQcm9jZXNzLnBpZCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7IC8vIHlvdSB3aWxsIGdldCBhbiBlcnJvciBpZiB5b3UgZGlkIG5vdCBzdXBwbHkgYSB2YWxpZCBwcm9jZXNzLnBpZFxuICAgICAgICAgIGZvcm1hdExvZygncmVkJywgJ09vcHN5IGR1cmluZyB0ZXJtaW5hdGU6JywgZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JtYXRMb2coJ2dyZWVuJywgJ2RvbmUgZm9yIHRlcm1pbmF0ZScsICcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICAgIGxldCBvbmNlID0gZmFsc2U7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGF0YVN0cmluZyA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIG9uRGF0YShkYXRhU3RyaW5nKTtcbiAgICAgIGZvcm1hdExvZygnYmx1ZScsICdkZXZFbnZQcm9jZXNzLnN0ZG91dDonLCBkYXRhU3RyaW5nKTtcbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IEZhaWxlZCB0byBjb21waWxlLicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgZmluaXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBDb21waWxlZCBzdWNjZXNzZnVsbHkuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuXG4gICAgICAgIHNjcmFwZSh7XG4gICAgICAgICAgdXJsczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAvJ10sXG4gICAgICAgICAgZGlyZWN0b3J5OiBzY3JhcGVEaXIsXG4gICAgICAgICAgcmVzb3VyY2VTYXZlcjogY2xhc3MgTXlSZXNvdXJjZVNhdmVyIHtcbiAgICAgICAgICAgIHNhdmVSZXNvdXJjZShyZXNvdXJjZSkge1xuICAgICAgICAgICAgICBvbkFzc2V0KHJlc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2xlYW51cChlcnIpIHtcbiAgICAgICAgICAgICAgZm9ybWF0TG9nKCdwaW5rJywgJ3NjcmFwZSByZXNvdXJjZSBlcnJvcjonLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkZXZFbnZQcm9jZXNzLnN0ZGVyci5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgIG9uU3RkZXJyKGRhdGEpO1xuICAgICAgfVxuICAgICAgZm9ybWF0TG9nKCdjeWFuJywgJ2RldkVudlByb2Nlc3Muc3RkZXJyOicsIGRhdGEpO1xuICAgIH0pO1xuICAgIGRldkVudlByb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgZm9ybWF0TG9nKCd5ZWxsb3cnLCAnY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlOicsIGNvZGUpO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jb25zdCBtb25vcmVwb0RpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi8nKTtcbmRlc2NyaWJlKCd0ZXN0ZGV2ZW52JywgKCkgPT4ge1xuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG5cbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCdiYXNpYyBidW5kbGVIYXNDb250ZW50JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnbm9uLWV4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgbGV0IG5vdEZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcE1BWUJFLUEtVFlQTyc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogJ2V4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoXCJ0ZXN0ZGV2ZW52LXNvbWUtZGVwXCIpOyB9OycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIG5vdEZvdW5kRXJyb3IgPSBub3RGb3VuZEVycm9yIHx8IGRhdGEuaW5kZXhPZihgTW9kdWxlIG5vdCBmb3VuZDogRXJyb3I6IENhbid0IHJlc29sdmUgJyR7aW1wb3J0VG9BdHRlbXB0fSdgKSAhPT0gLTE7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIGl0KCd3ZWJwYWNrIGJ1bmRsaW5nIHRocm93cyBlcnJvciBmb3Igbm9uLWV4aXN0ZW50IGltcG9ydHMgd2l0aGluIGFzc2V0cycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChub3RGb3VuZEVycm9yLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2V4aXN0ZW50IGltcG9ydHMgd2l0aCBucG0tc2NvcGluZycsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXAnO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnQHNvbWUtbnBtLXNjb3BlLyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIG5wbS1zY29wZWQgaW1wb3J0IGJ1bmRsaW5nJywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgndGVzdCcsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCB0ZXN0c1Bhc3NlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdUZXN0KHtcbiAgICAgIHRlc3RQYXRoUGF0dGVybjogJy4qL3Rlc3RkZXZlbnYtc29tZS1kZXAvLionLFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJyR7aW1wb3J0VG9BdHRlbXB0fSc7XFxuO3NvbWVEZXAoKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAuanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZXhwb3J0IGRlZmF1bHQgKCkgPT4geyBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7IH07YCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLnRlc3QuanMnKSxcbiAgICAgICAgICB0ZXh0OiAndGVzdChcImFkZHMgMSArIDIgdG8gZXF1YWwgM1wiLCAoKSA9PiB7IGV4cGVjdCgxICsgMikudG9CZSgzKTsgfSk7JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvblN0ZGVycjogKGRhdGEpID0+IHtcbiAgICAgICAgdGVzdHNQYXNzZWQgPSB0ZXN0c1Bhc3NlZCB8fCBkYXRhLmluZGV4T2YoJzEgcGFzc2VkLCAxIHRvdGFsJykgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgndGVzdHRlc3R0ZXN0JywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKHRlc3RzUGFzc2VkLCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3RkZXZlbnYyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==