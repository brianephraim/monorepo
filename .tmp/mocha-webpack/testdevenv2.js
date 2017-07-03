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
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */
/*
  This file used in 2 places
    1.  This file is executed by the monorepo serving as the monorepo's dev environment.
        (Only the monorepo uses dev_env like this. When the monorepo's packages are scattered
        into individual repos, each individual repo has a dev_env dependency
        in its node_modules folder,
        but this dev_env is executed from a compiled version of the dev_env.
        This is called from the individual repo's ./node_modules/.bin/devenv,
        which points to ./node_modules/@defualt/dev_env/dist/dev_env.js.)
    2.  This file is executed during the npm prepublish, which creates the /dist folder
        mentioned in (1) above.
*/
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
    console.log('DOO');
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

module.exports = require("chalk");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("color-pairs-picker");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("has-ansi");

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

var _assert = __webpack_require__(2);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(8);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(5);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _chalk = __webpack_require__(3);

var _chalk2 = _interopRequireDefault(_chalk);

var _colorPairsPicker = __webpack_require__(4);

var _colorPairsPicker2 = _interopRequireDefault(_colorPairsPicker);

var _hasAnsi = __webpack_require__(6);

var _hasAnsi2 = _interopRequireDefault(_hasAnsi);

var _websiteScraper = __webpack_require__(10);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _child_process = __webpack_require__(0);

var _shellCommand = __webpack_require__(1);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _nodeUuid = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable no-console */

// import walkSync from 'walk-sync';


var chalk = new _chalk2.default.constructor({ level: 3 });
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
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
  var _ref$onAsset = _ref.onAsset,
      onAsset = _ref$onAsset === undefined ? function () {} : _ref$onAsset,
      _ref$onData = _ref.onData,
      onData = _ref$onData === undefined ? function () {} : _ref$onData,
      _ref$onStderr = _ref.onStderr,
      onStderr = _ref$onStderr === undefined ? function () {} : _ref$onStderr,
      assetsToGenerate = _ref.assetsToGenerate,
      testPathPattern = _ref.testPathPattern;

  before(function (done) {
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

    var devEnvProcess = (0, _shellCommand2.default)('(\n      npm run testpackages -- --watch=false --testPathPattern=\'' + testPathPattern + '\'\n    )', null /*{ detached: true }*/, false);
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
    var once = false;
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

  before(function (done) {
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

    var devEnvProcess = (0, _shellCommand2.default)('(\n      npm run dev -- --demo-entry=\'' + pathToDemoEntry + '\'\n    )', null /*{ detached: true }*/, false);
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

      // setTimeout(() => { 
      done();
      // }, 1000);

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
describe('testdevenv', function () {
  describe('localhost dev environment', function () {
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
    it('basic bundleHasContent', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  describe('non-existent imports', function () {
    var notFoundError = false;
    var importToAttempt = 'testdevenv-some-depMAYBE-A-TYPO';
    duringServer({
      assetsToGenerate: [{
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: 'import someDep from \'' + importToAttempt + '\';\n;someDep();',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
        text: 'export default () => { document.body.append(\'testdevenv-some-dep\'); };'
      }],
      onStderr: function onStderr(data) {
        notFoundError = notFoundError || data.indexOf('Module not found: Error: Can\'t resolve \'' + importToAttempt + '\'') !== -1;
      }
    });
    it('webpack bundling throws error for non-existent imports within assets', function () {
      _assert2.default.equal(notFoundError, true);
    });
  });

  describe('existent imports', function () {
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
    it('bundleHasContent proving import bundling', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  describe('existent imports with npm-scoping', function () {
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
    it('bundleHasContent proving npm-scoped import bundling', function () {
      _assert2.default.equal(bundleHasContent, true);
    });
  });

  describe('test', function () {
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
        text: 'test(\'adds 1 + 2 to equal 3\', () => { expect(1 + 2).toBe(3); });'
      }],
      onStderr: function onStderr(data) {
        testsPassed = testsPassed || data.indexOf('1 passed, 1 total') !== -1;
      }
    });
    it('testtesttest', function () {
      _assert2.default.equal(testsPassed, true);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, "/Users/brianephraim/Sites/monorepo/packages/dev_env/jest"))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTE3MTA4YjEzNDJhZGFmNjUyMjciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy8uLi9zaGVsbC1jb21tYW5kLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYXMtYW5zaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIiIsIndlYnBhY2s6Ly8vLi90ZXN0ZGV2ZW52Mi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY29tbWFuZFRvUnVuIiwib3B0aW9ucyIsInN0ZGlvIiwia2lsbFBhcmVudE9uRXhpdCIsImNvbW1hbmQiLCJhcmdzIiwiY2hpbGRQcm9jZXNzIiwicmVxdWlyZSIsInByb2MiLCJzcGF3biIsIm9uIiwiY29kZSIsInNpZ25hbCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwia2lsbCIsInBpZCIsImV4aXQiLCJjaGFsayIsImNvbnN0cnVjdG9yIiwibGV2ZWwiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZm9ybWF0TG9nIiwiY29sb3IiLCJoZWFkaW5nIiwiYmciLCJjb250cmFzdCIsInNwbGl0IiwibWFwIiwiaXRlbSIsImZnIiwicmdiIiwiYmdSZ2IiLCJmaW5kIiwiZHVyaW5nVGVzdCIsIm9uQXNzZXQiLCJvbkRhdGEiLCJvblN0ZGVyciIsImFzc2V0c1RvR2VuZXJhdGUiLCJ0ZXN0UGF0aFBhdHRlcm4iLCJiZWZvcmUiLCJkb25lIiwidGltZW91dCIsInBhdGhUb0RlbW9FbnRyeSIsImZvckVhY2giLCJhc3NldEluZm8iLCJkaXIiLCJkaXJuYW1lIiwicGF0aCIsImVuc3VyZURpclN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwidGV4dCIsImlzRGVtb0VudHJ5IiwiZGV2RW52UHJvY2VzcyIsImZpbmlzaGVkIiwiZmluaXNoIiwicmVtb3ZlU3luYyIsIm9uY2UiLCJzdGRvdXQiLCJkYXRhIiwiZGF0YVN0cmluZyIsInRvU3RyaW5nIiwic3RkZXJyIiwiZHVyaW5nU2VydmVyIiwic2NyYXBlRGlyIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImVyciIsImluZGV4T2YiLCJ1cmxzIiwiZGlyZWN0b3J5IiwicmVzb3VyY2VTYXZlciIsInJlc291cmNlIiwidGhlbiIsIm1vbm9yZXBvRGlyIiwiZGVzY3JpYmUiLCJjb250ZW50VG9CdW5kbGUiLCJidW5kbGVIYXNDb250ZW50IiwiaXQiLCJlcXVhbCIsIm5vdEZvdW5kRXJyb3IiLCJpbXBvcnRUb0F0dGVtcHQiLCJ0ZXN0c1Bhc3NlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FB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Qix5Q0FBOEI4QixlQUE5QixxQkFGRjtBQUdFN0IscUJBQWE7QUFIZixPQURnQixFQU1oQjtBQUNFSixjQUFNLGVBQUtpQixPQUFMLENBQWFTLFdBQWIsRUFBMEIsdURBQTFCLENBRFI7QUFFRXZCLGlFQUFzRHlCLGVBQXREO0FBRkYsT0FOZ0IsRUFVaEI7QUFDRTVCLGNBQU0sZUFBS2lCLE9BQUwsQ0FBYVMsV0FBYixFQUEwQiw0REFBMUIsQ0FEUjtBQUVFdkI7QUFGRixPQVZnQixDQUZUO0FBaUJUZCxnQkFBVSxrQkFBQ3NCLElBQUQsRUFBVTtBQUNsQnVCLHNCQUFjQSxlQUFldkIsS0FBS1MsT0FBTCwwQkFBc0MsQ0FBQyxDQUFwRTtBQUNEO0FBbkJRLEtBQVg7QUFxQkFVLE9BQUcsY0FBSCxFQUFtQixZQUFNO0FBQ3ZCLHVCQUFPQyxLQUFQLENBQWFHLFdBQWIsRUFBMEIsSUFBMUI7QUFFRCxLQUhEO0FBSUQsR0E3QkQ7QUE4QkQsQ0FqSUQsRSIsImZpbGUiOiJ0ZXN0ZGV2ZW52Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUxNzEwOGIxMzQyYWRhZjY1MjI3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuLypcbiAgVGhpcyBmaWxlIHVzZWQgaW4gMiBwbGFjZXNcbiAgICAxLiAgVGhpcyBmaWxlIGlzIGV4ZWN1dGVkIGJ5IHRoZSBtb25vcmVwbyBzZXJ2aW5nIGFzIHRoZSBtb25vcmVwbydzIGRldiBlbnZpcm9ubWVudC5cbiAgICAgICAgKE9ubHkgdGhlIG1vbm9yZXBvIHVzZXMgZGV2X2VudiBsaWtlIHRoaXMuIFdoZW4gdGhlIG1vbm9yZXBvJ3MgcGFja2FnZXMgYXJlIHNjYXR0ZXJlZFxuICAgICAgICBpbnRvIGluZGl2aWR1YWwgcmVwb3MsIGVhY2ggaW5kaXZpZHVhbCByZXBvIGhhcyBhIGRldl9lbnYgZGVwZW5kZW5jeVxuICAgICAgICBpbiBpdHMgbm9kZV9tb2R1bGVzIGZvbGRlcixcbiAgICAgICAgYnV0IHRoaXMgZGV2X2VudiBpcyBleGVjdXRlZCBmcm9tIGEgY29tcGlsZWQgdmVyc2lvbiBvZiB0aGUgZGV2X2Vudi5cbiAgICAgICAgVGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgaW5kaXZpZHVhbCByZXBvJ3MgLi9ub2RlX21vZHVsZXMvLmJpbi9kZXZlbnYsXG4gICAgICAgIHdoaWNoIHBvaW50cyB0byAuL25vZGVfbW9kdWxlcy9AZGVmdWFsdC9kZXZfZW52L2Rpc3QvZGV2X2Vudi5qcy4pXG4gICAgMi4gIFRoaXMgZmlsZSBpcyBleGVjdXRlZCBkdXJpbmcgdGhlIG5wbSBwcmVwdWJsaXNoLCB3aGljaCBjcmVhdGVzIHRoZSAvZGlzdCBmb2xkZXJcbiAgICAgICAgbWVudGlvbmVkIGluICgxKSBhYm92ZS5cbiovXG5tb2R1bGUuZXhwb3J0cyA9IChjb21tYW5kVG9SdW4sIG9wdGlvbnMgPSB7IHN0ZGlvOiAnaW5oZXJpdCcgfSwga2lsbFBhcmVudE9uRXhpdCA9IHRydWUpID0+IHtcbiAgY29uc3QgY29tbWFuZCA9ICdzaCc7XG4gIGNvbnN0IGFyZ3MgPSBbXG4gICAgJy1jJyxcbiAgICBjb21tYW5kVG9SdW4sXG4gIF07XG4gIC8vXG4gIC8vIGtleGVjIGRvZXNuJ3Qgd29yayBpbiB3aW5kb3dzLCBzbyBmYWxsYmFjayB0byBjaGlsZF9wcm9jZXNzLnNwYXduXG4gIC8vIHRoaXMgbG9naWMgY29waWVkIGZyb20gYmFiZWwtY2xpL2xpYi9iYWJlbC1ub2RlLmpzXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3Qga2V4ZWMgPSByZXF1aXJlKCdrZXhlYycpO1xuICAvLyAgIGtleGVjKGNvbW1hbmQsIGFyZ3MpO1xuICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBpZiAoZXJyLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJykgdGhyb3cgZXJyO1xuXG4gIGNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbiAgY29uc3QgcHJvYyA9IGNoaWxkUHJvY2Vzcy5zcGF3bihjb21tYW5kLCBhcmdzLCBvcHRpb25zIHx8IHt9KTtcbiAgcHJvYy5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRE9PJylcbiAgICBpZiAoa2lsbFBhcmVudE9uRXhpdCkge1xuICAgICAgcHJvY2Vzcy5vbignZXhpdCcsICgpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIHByb2Nlc3Mua2lsbChwcm9jZXNzLnBpZCwgc2lnbmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoY29kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwcm9jO1xuICAvLyB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NoZWxsLWNvbW1hbmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWxrXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3ItcGFpcnMtcGlja2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1leHRyYVwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhhcy1hbnNpXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGFzLWFuc2lcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXV1aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLXV1aWRcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRlcm1pbmF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRlcm1pbmF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnNpdGUtc2NyYXBlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgdGVybWluYXRlIGZyb20gJ3Rlcm1pbmF0ZSc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgY2hhbGtMaWIgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IGNvbG9yUGFpcnNQaWNrZXIgZnJvbSAnY29sb3ItcGFpcnMtcGlja2VyJztcbmltcG9ydCBoYXNBbnNpIGZyb20gJ2hhcy1hbnNpJztcbi8vIGltcG9ydCB3YWxrU3luYyBmcm9tICd3YWxrLXN5bmMnO1xuaW1wb3J0IHNjcmFwZSBmcm9tICd3ZWJzaXRlLXNjcmFwZXInO1xuaW1wb3J0IHsgc3Bhd24gfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBzaGVsbENvbW1hbmQgZnJvbSAnLi4vc2hlbGwtY29tbWFuZCc7XG5pbXBvcnQgeyB2NCBhcyBtYWtlVXVpZCAgfSBmcm9tICdub2RlLXV1aWQnO1xuXG5jb25zdCBjaGFsayA9IG5ldyBjaGFsa0xpYi5jb25zdHJ1Y3Rvcih7bGV2ZWw6IDN9KTtcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdExvZyhjb2xvciwgaGVhZGluZywgLi4uYXJncykge1xuICBjb25zdCBiZyA9IGNvbG9yUGFpcnNQaWNrZXIoY29sb3IsIHtjb250cmFzdDogOH0pLmJnLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAraXRlbTtcbiAgfSk7XG4gIGNvbnN0IGZnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwge2NvbnRyYXN0OiA4fSkuZmcuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuICtpdGVtO1xuICB9KTtcbiAgY29uc29sZS5sb2coY2hhbGsucmdiKC4uLmZnKS5iZ1JnYiguLi5iZykoaGVhZGluZykpO1xuXG4gIGlmICggdHlwZW9mIGFyZ3MuZmluZCgoaXRlbSkgPT4geyByZXR1cm4gaGFzQW5zaShpdGVtKTsgfSkgPT09ICd1bmRlZmluZWQnICkge1xuICAgIGNvbnNvbGUubG9nKGNoYWxrW2NvbG9yXSguLi5hcmdzKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBkdXJpbmdUZXN0KHtvbkFzc2V0ID0gKCkgPT4ge30sIG9uRGF0YSA9ICgpID0+IHt9LCBvblN0ZGVyciA9ICgpID0+IHt9LCBhc3NldHNUb0dlbmVyYXRlLCB0ZXN0UGF0aFBhdHRlcm59KSB7XG4gIGJlZm9yZShmdW5jdGlvbiAoZG9uZSkge1xuICAgIHRoaXMudGltZW91dCg2MDAwMCk7XG4gICAgbGV0IHBhdGhUb0RlbW9FbnRyeTtcbiAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGFzc2V0SW5mby5wYXRoKTtcbiAgICAgIGZzLmVuc3VyZURpclN5bmMoZGlyKTtcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXNzZXRJbmZvLnBhdGgsIGFzc2V0SW5mby50ZXh0KTtcbiAgICAgIGlmIChhc3NldEluZm8uaXNEZW1vRW50cnkpIHtcbiAgICAgICAgcGF0aFRvRGVtb0VudHJ5ID0gYXNzZXRJbmZvLnBhdGg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXZFbnZQcm9jZXNzID0gc2hlbGxDb21tYW5kKGAoXG4gICAgICBucG0gcnVuIHRlc3RwYWNrYWdlcyAtLSAtLXdhdGNoPWZhbHNlIC0tdGVzdFBhdGhQYXR0ZXJuPScke3Rlc3RQYXRoUGF0dGVybn0nXG4gICAgKWAsIG51bGwvKnsgZGV0YWNoZWQ6IHRydWUgfSovLCBmYWxzZSk7XG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvcm1hdExvZygnZ3JlZW4nLCAnRklOSVNIRUQnLCAnY29kZScpO1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgXG4gICAgICBhc3NldHNUb0dlbmVyYXRlLmZvckVhY2goKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICBmcy5yZW1vdmVTeW5jKGRpcik7XG4gICAgICB9KTtcbiAgICAgIGRvbmUoKTsgICAgICBcbiAgICB9XG4gICAgdmFyIG9uY2UgPSBmYWxzZTtcbiAgICBkZXZFbnZQcm9jZXNzLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBkYXRhU3RyaW5nID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgZm9ybWF0TG9nKCdibHVlJywgJ2RldkVudlByb2Nlc3Muc3Rkb3V0OicsIGRhdGFTdHJpbmcpO1xuICAgICAgb25EYXRhKGRhdGFTdHJpbmcpO1xuICAgIH0pO1xuICAgIGRldkVudlByb2Nlc3Muc3RkZXJyLm9uKCdkYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEudG9TdHJpbmcpe1xuICAgICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICBvblN0ZGVycihkYXRhKTtcbiAgICAgIH1cbiAgICAgIGZvcm1hdExvZygnY3lhbicsICdkZXZFbnZQcm9jZXNzLnN0ZGVycjonLCBkYXRhKTtcbiAgICB9KTtcbiAgICBkZXZFbnZQcm9jZXNzLm9uKCdleGl0JywgZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgIGZvcm1hdExvZygneWVsbG93JywgJ2NoaWxkIHByb2Nlc3MgZXhpdGVkIHdpdGggY29kZTonLCBjb2RlKTtcbiAgICAgIGZpbmlzaCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHVyaW5nU2VydmVyKHtvbkFzc2V0ID0gKCkgPT4ge30sIG9uRGF0YSA9ICgpID0+IHt9LCBvblN0ZGVyciA9ICgpID0+IHt9LCBhc3NldHNUb0dlbmVyYXRlfSkge1xuICBiZWZvcmUoZnVuY3Rpb24gKGRvbmUpIHtcbiAgICB0aGlzLnRpbWVvdXQoNjAwMDApO1xuICAgIGxldCBwYXRoVG9EZW1vRW50cnk7XG4gICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICBmcy5lbnN1cmVEaXJTeW5jKGRpcik7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKGFzc2V0SW5mby5wYXRoLCBhc3NldEluZm8udGV4dCk7XG4gICAgICBpZiAoYXNzZXRJbmZvLmlzRGVtb0VudHJ5KSB7XG4gICAgICAgIHBhdGhUb0RlbW9FbnRyeSA9IGFzc2V0SW5mby5wYXRoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZGV2RW52UHJvY2VzcyA9IHNoZWxsQ29tbWFuZChgKFxuICAgICAgbnBtIHJ1biBkZXYgLS0gLS1kZW1vLWVudHJ5PScke3BhdGhUb0RlbW9FbnRyeX0nXG4gICAgKWAsIG51bGwvKnsgZGV0YWNoZWQ6IHRydWUgfSovLCBmYWxzZSk7XG4gICAgY29uc3Qgc2NyYXBlRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnLi9zY3JhcGUnKTtcbiAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBmaW5pc2goKSB7XG4gICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9ybWF0TG9nKCdncmVlbicsICdGSU5JU0hFRCcsICdjb2RlJyk7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICBcbiAgICAgIGZzLnJlbW92ZVN5bmMoc2NyYXBlRGlyKTtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgIH0pO1xuXG4gICAgICB0ZXJtaW5hdGUoZGV2RW52UHJvY2Vzcy5waWQsZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7IC8vIHlvdSB3aWxsIGdldCBhbiBlcnJvciBpZiB5b3UgZGlkIG5vdCBzdXBwbHkgYSB2YWxpZCBwcm9jZXNzLnBpZFxuICAgICAgICAgIGZvcm1hdExvZygncmVkJywgJ09vcHN5IGR1cmluZyB0ZXJtaW5hdGU6JywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmb3JtYXRMb2coJ2dyZWVuJywgJ2RvbmUgZm9yIHRlcm1pbmF0ZScsICcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICAgZG9uZSgpO1xuICAgICAgLy8gfSwgMTAwMCk7XG5cbiAgICAgIFxuICAgIH1cbiAgICB2YXIgb25jZSA9IGZhbHNlO1xuICAgIGRldkVudlByb2Nlc3Muc3Rkb3V0Lm9uKCdkYXRhJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZyk7XG4gICAgICBmb3JtYXRMb2coJ2JsdWUnLCAnZGV2RW52UHJvY2Vzcy5zdGRvdXQ6JywgZGF0YVN0cmluZyk7XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBGYWlsZWQgdG8gY29tcGlsZS4nKSAhPT0gLTEgJiYgIW9uY2UpIHtcbiAgICAgICAgb25jZSA9IHRydWU7XG4gICAgICAgIGZpbmlzaCgpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZignd2VicGFjazogQ29tcGlsZWQgc3VjY2Vzc2Z1bGx5LicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHNjcmFwZSh7XG4gICAgICAgICAgdXJsczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAvJ10sXG4gICAgICAgICAgZGlyZWN0b3J5OiBzY3JhcGVEaXIsXG4gICAgICAgICAgcmVzb3VyY2VTYXZlcjogY2xhc3MgTXlSZXNvdXJjZVNhdmVyIHtcbiAgICAgICAgICAgIHNhdmVSZXNvdXJjZSAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgb25Bc3NldChyZXNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvckNsZWFudXAgKGVycikge1xuICAgICAgICAgICAgICBmb3JtYXRMb2coJ3BpbmsnLCAnc2NyYXBlIHJlc291cmNlIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZyl7XG4gICAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgIG9uU3RkZXJyKGRhdGEpO1xuICAgICAgfVxuICAgICAgZm9ybWF0TG9nKCdjeWFuJywgJ2RldkVudlByb2Nlc3Muc3RkZXJyOicsIGRhdGEpO1xuICAgIH0pO1xuICAgIGRldkVudlByb2Nlc3Mub24oJ2V4aXQnLCBmdW5jdGlvbiAoY29kZSkge1xuICAgICAgZm9ybWF0TG9nKCd5ZWxsb3cnLCAnY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlOicsIGNvZGUpO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5jb25zdCBtb25vcmVwb0RpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi8nKTtcbmRlc2NyaWJlKCd0ZXN0ZGV2ZW52JywgZnVuY3Rpb24oKSB7XG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ25vbi1leGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGxldCBub3RGb3VuZEVycm9yID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXBNQVlCRS1BLVRZUE8nO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6IGBleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKCd0ZXN0ZGV2ZW52LXNvbWUtZGVwJyk7IH07YCxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uU3RkZXJyOiAoZGF0YSkgPT4ge1xuICAgICAgICBub3RGb3VuZEVycm9yID0gbm90Rm91bmRFcnJvciB8fCBkYXRhLmluZGV4T2YoYE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICcke2ltcG9ydFRvQXR0ZW1wdH0nYCkgIT09IC0xO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGl0KCd3ZWJwYWNrIGJ1bmRsaW5nIHRocm93cyBlcnJvciBmb3Igbm9uLWV4aXN0ZW50IGltcG9ydHMgd2l0aGluIGFzc2V0cycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChub3RGb3VuZEVycm9yLCB0cnVlKTtcbiAgICAgIFxuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnZXhpc3RlbnQgaW1wb3J0cycsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXAnO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6IGBleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTsgfTtgLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICAgIFxuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnZXhpc3RlbnQgaW1wb3J0cyB3aXRoIG5wbS1zY29waW5nJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICdAc29tZS1ucG0tc2NvcGUvJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6IGBleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTsgfTtgLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpdCgnYnVuZGxlSGFzQ29udGVudCBwcm92aW5nIG5wbS1zY29wZWQgaW1wb3J0IGJ1bmRsaW5nJywgKCkgPT4ge1xuICAgICAgYXNzZXJ0LmVxdWFsKGJ1bmRsZUhhc0NvbnRlbnQsIHRydWUpO1xuICAgICAgXG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCd0ZXN0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IHRlc3RzUGFzc2VkID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXAnO1xuICAgIGR1cmluZ1Rlc3Qoe1xuICAgICAgdGVzdFBhdGhQYXR0ZXJuOiAnLiovdGVzdGRldmVudi1zb21lLWRlcC8uKicsXG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6IGBleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTsgfTtgLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LXNvbWUtZGVwL3Rlc3RkZXZlbnYtc29tZS1kZXAudGVzdC5qcycpLFxuICAgICAgICAgIHRleHQ6IGB0ZXN0KCdhZGRzIDEgKyAyIHRvIGVxdWFsIDMnLCAoKSA9PiB7IGV4cGVjdCgxICsgMikudG9CZSgzKTsgfSk7YCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvblN0ZGVycjogKGRhdGEpID0+IHtcbiAgICAgICAgdGVzdHNQYXNzZWQgPSB0ZXN0c1Bhc3NlZCB8fCBkYXRhLmluZGV4T2YoYDEgcGFzc2VkLCAxIHRvdGFsYCkgIT09IC0xO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGl0KCd0ZXN0dGVzdHRlc3QnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwodGVzdHNQYXNzZWQsIHRydWUpO1xuICAgICAgXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdGRldmVudjIuanMiXSwic291cmNlUm9vdCI6IiJ9