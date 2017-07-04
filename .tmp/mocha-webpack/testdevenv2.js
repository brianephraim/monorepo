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
    var testProjectPath = _path2.default.resolve(monorepoDir, '../test-project-for-dev-env');
    _fsExtra2.default.ensureDirSync(testProjectPath);
    var nodeModulesOriginalPath = _path2.default.resolve(monorepoDir, './node_modules');
    var nodeModulesCopyPath = _path2.default.resolve(testProjectPath, './node_modules');
    _fsExtra2.default.symlinkSync(nodeModulesOriginalPath, nodeModulesCopyPath);
    // fs.copySync(nodeModulesOriginalPath, nodeModulesCopyPath);

    // fs.ensureDirSync(nodeModulesCopyPath);
    // const devEnvCopy = path.resolve(nodeModulesCopyPath, 'dev_env');
    _fsExtra2.default.copySync(devEnvRoot, _path2.default.resolve(testProjectPath, 'dev_env'));

    // fs.removeSync(path.resolve(devEnvCopy, './node_modules'));
    // fs.symlinkSync(path.resolve(devEnvRoot, './node_modules'), path.resolve(devEnvCopy, './node_modules'));
    // fs.symlinkSync(path.resolve(devEnvCopy, './bin'),  path.resolve(testProjectPath, './node_modules/.bin'));
    var pathToMain = _path2.default.resolve(testProjectPath, './testdevenv-main.js');
    // const nodePathVar = getNodePathShVar({ cwd: devEnvRoot, before: [nodeModulesCopyPath] });
    var cmd = '(cd ' + testProjectPath + ' && node ./dev_env/dist/dev_env --demo-entry=\'' + pathToMain + '\')';
    console.log('cmd', cmd);
    duringServer({
      // nodePath: nodePathVar,
      makeShellCmdStr: function makeShellCmdStr() {
        console.log('FIND ME DO STUFF');return cmd;
      },
      assetsToGenerate: [{
        path: pathToMain,
        text: 'document.body.append(\'' + contentToBundle + '\');',
        isDemoEntry: true
      }, {
        path: _path2.default.resolve(testProjectPath, './package.json'),
        text: '{\n            "name": "test-project-for-dev-env",\n            "version": "0.0.2",\n            "publishConfig": {\n              "access": "public"\n            },\n            "scripts": {\n              "start": "devenv",\n              "thing": "devenv --env=build --dirroot=$(pwd)"\n            },\n            "devDependencies": {\n              "@defualt/dev_env": "^0.0.14"\n            },\n            "repository": {\n              "type": "git",\n              "url": "https://github.com/defualt/test-project-for-dev-env.git"\n            }\n          }'
      }],
      onAsset: function onAsset(resource) {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
      cleanup: function cleanup() /* devEnvProcess */{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2QyMjIwOTYwZmEwMWFhYjIwMjMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZmFuY3lMb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyLmpzIiwid2VicGFjazovLy8uLi9jb3JlL3NoZWxsQ29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vY2hhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS11dWlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRlcm1pbmF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnNpdGUtc2NyYXBlclwiIiwid2VicGFjazovLy8uL3Rlc3RkZXZlbnYyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yLXBhaXJzLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbmQtbm9kZS1tb2R1bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGFzLWFuc2lcIiJdLCJuYW1lcyI6WyJjaGFsa0xpYiIsInJlcXVpcmUiLCJjb2xvclBhaXJzUGlja2VyIiwiaGFzQW5zaSIsImNoYWxrIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsImZvcm1hdExvZyIsImNvbG9yIiwiaGVhZGluZyIsImJnIiwiY29udHJhc3QiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJmZyIsImNvbnNvbGUiLCJsb2ciLCJyZ2IiLCJiZ1JnYiIsImFyZ3MiLCJmaW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsImVuc3VyZVRyYWlsaW5nU2xhc2giLCJzdHIiLCJyZXBsYWNlIiwiZGV2RW52Um9vdCIsIl9fZGlybmFtZSIsImxlbmd0aCIsImpvaW4iLCJmaW5kTm9kZU1vZHVsZXMiLCJub2RlUGF0aFNlcGFyYXRvciIsInRlc3QiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJiZWZvcmUiLCJhZnRlciIsImN3ZCIsIm5vZGVQYXRocyIsImNvbmNhdCIsInJlbGF0aXZlIiwiY29tbWFuZFRvUnVuIiwib3B0aW9ucyIsInN0ZGlvIiwia2lsbFBhcmVudE9uRXhpdCIsImNvbW1hbmQiLCJjaGlsZFByb2Nlc3MiLCJwcm9jIiwic3Bhd24iLCJvbiIsImNvZGUiLCJzaWduYWwiLCJraWxsIiwicGlkIiwiZXhpdCIsImR1cmluZ1Byb2Nlc3MiLCJvbkRhdGEiLCJvblN0ZGVyciIsIm1ha2VTaGVsbENtZFN0ciIsImNsZWFudXAiLCJhc3NldHNUb0dlbmVyYXRlIiwiZHVyaW5nU2VydmVyQmVmb3JlIiwiZG9uZSIsInRpbWVvdXQiLCJwYXRoVG9EZW1vRW50cnkiLCJmb3JFYWNoIiwiYXNzZXRJbmZvIiwiZGlyIiwiZGlybmFtZSIsInBhdGgiLCJlbnN1cmVEaXJTeW5jIiwid3JpdGVGaWxlU3luYyIsInRleHQiLCJpc0RlbW9FbnRyeSIsImNtZCIsImRldkVudlByb2Nlc3MiLCJmaW5pc2hlZCIsImZpbmlzaCIsInJlbW92ZVN5bmMiLCJzdGRvdXQiLCJkYXRhIiwiZGF0YVN0cmluZyIsInRvU3RyaW5nIiwic3RkZXJyIiwiZHVyaW5nU2VydmVyIiwidXNlRGlzdCIsIm9uQXNzZXQiLCJub2RlUGF0aCIsInNjcmFwZURpciIsInJlc29sdmUiLCJvbmNlIiwibm9kZVBhdGhTaFZhciIsInByZXB1Ymxpc2giLCJpbmRleE9mIiwidXJscyIsImRpcmVjdG9yeSIsInJlc291cmNlU2F2ZXIiLCJyZXNvdXJjZSIsImVyciIsInRoZW4iLCJkdXJpbmdUZXN0IiwidGVzdFBhdGhQYXR0ZXJuIiwibW9ub3JlcG9EaXIiLCJjb250ZW50VG9CdW5kbGUiLCJidW5kbGVIYXNDb250ZW50IiwiZXF1YWwiLCJvbmx5IiwidGVzdFByb2plY3RQYXRoIiwibm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgiLCJub2RlTW9kdWxlc0NvcHlQYXRoIiwic3ltbGlua1N5bmMiLCJjb3B5U3luYyIsInBhdGhUb01haW4iLCJub3RGb3VuZEVycm9yIiwiaW1wb3J0VG9BdHRlbXB0IiwidGVzdHNQYXNzZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBLElBQU1BLFdBQVcsbUJBQUFDLENBQVEsRUFBUixDQUFqQjtBQUNBLElBQU1DLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXpCO0FBQ0EsSUFBTUUsVUFBVSxtQkFBQUYsQ0FBUSxFQUFSLENBQWhCOztBQUdBLElBQU1HLFFBQVEsSUFBSUosU0FBU0ssV0FBYixDQUF5QixFQUFFQyxPQUFPLENBQVQsRUFBekIsQ0FBZDtBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxPQUExQixFQUE0QztBQUFBOztBQUMxQyxNQUFNQyxLQUFLUixpQkFBaUJNLEtBQWpCLEVBQXdCLEVBQUVHLFVBQVUsQ0FBWixFQUF4QixFQUF5Q0QsRUFBekMsQ0FB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QUEwQiwrQ0FBMUIsQ0FEUjtBQUVFOUIseUNBQThCMEMsZUFBOUIscUJBRkY7QUFHRXpDLHFCQUFhO0FBSGYsT0FEZ0IsRUFNaEI7QUFDRUosY0FBTSxlQUFLb0IsT0FBTCxDQUFhYSxXQUFiLEVBQTBCLHVEQUExQixDQURSO0FBRUU5QixpRUFBc0QrQixlQUF0RDtBQUZGLE9BTmdCLEVBVWhCO0FBQ0VsQyxjQUFNLGVBQUtvQixPQUFMLENBQWFhLFdBQWIsRUFBMEIsNERBQTFCLENBRFI7QUFFRTlCLGNBQU07QUFGUixPQVZnQixDQUZUO0FBaUJUZixnQkFBVSxrQkFBQ3VCLElBQUQsRUFBVTtBQUNsQm1DLHNCQUFjQSxlQUFlbkMsS0FBS2EsT0FBTCxDQUFhLG1CQUFiLE1BQXNDLENBQUMsQ0FBcEU7QUFDRDtBQW5CUSxLQUFYO0FBcUJBLG1CQUFHLGNBQUgsRUFBbUIsWUFBTTtBQUN2Qix1QkFBT1ksS0FBUCxDQUFhVSxXQUFiLEVBQTBCLElBQTFCO0FBQ0QsS0FGRDtBQUdELEdBNUJEO0FBNkJELENBbE5ELEU7Ozs7Ozs7QUMzSkEsa0M7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InRlc3RkZXZlbnYyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2QyMjIwOTYwZmEwMWFhYjIwMjMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5jb25zdCBjaGFsa0xpYiA9IHJlcXVpcmUoJ2NoYWxrJyk7XG5jb25zdCBjb2xvclBhaXJzUGlja2VyID0gcmVxdWlyZSgnY29sb3ItcGFpcnMtcGlja2VyJyk7XG5jb25zdCBoYXNBbnNpID0gcmVxdWlyZSgnaGFzLWFuc2knKTtcblxuXG5jb25zdCBjaGFsayA9IG5ldyBjaGFsa0xpYi5jb25zdHJ1Y3Rvcih7IGxldmVsOiAzIH0pO1xuZnVuY3Rpb24gZm9ybWF0TG9nKGNvbG9yLCBoZWFkaW5nLCAuLi5hcmdzKSB7XG4gIGNvbnN0IGJnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5iZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zdCBmZyA9IGNvbG9yUGFpcnNQaWNrZXIoY29sb3IsIHsgY29udHJhc3Q6IDggfSkuZmcuc3BsaXQoJygnKVsxXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsJykubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuICtpdGVtO1xuICB9KTtcbiAgY29uc29sZS5sb2coY2hhbGsucmdiKC4uLmZnKS5iZ1JnYiguLi5iZykoaGVhZGluZykpO1xuXG4gIGlmICh0eXBlb2YgYXJncy5maW5kKChpdGVtKSA9PiB7IHJldHVybiBoYXNBbnNpKGl0ZW0pOyB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmxvZyhjaGFsa1tjb2xvcl0oLi4uYXJncykpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZvcm1hdExvZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL2ZhbmN5TG9nLmpzIiwiZnVuY3Rpb24gZW5zdXJlVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC8/JC8sICcvJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcbiAgbGV0IGRldkVudlJvb3QgPSBlbnN1cmVUcmFpbGluZ1NsYXNoKF9fZGlybmFtZSkuc3BsaXQoJy9kZXZfZW52LycpO1xuICBkZXZFbnZSb290W2RldkVudlJvb3QubGVuZ3RoIC0gMV0gPSAnJztcbiAgZGV2RW52Um9vdCA9IGRldkVudlJvb3Quam9pbignL2Rldl9lbnYvJyk7XG4gIHJldHVybiBkZXZFbnZSb290O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9jb3JlL2dldERldkVudlJvb3QuanMiLCJjb25zdCBmaW5kTm9kZU1vZHVsZXMgPSByZXF1aXJlKCdmaW5kLW5vZGUtbW9kdWxlcycpO1xuLy8gZm9yIE5PREVfUEFUSCwgb24gd2luZG93cywgc2VwZXJhdG9yIGlzIDsgaW5zdGVhZCBvZiA6LiAgV2hhdCBmdW4uXG4vLyBzZXBlcmF0b3IgaXMgYmFzaCBhcnJheSBhcmd1bWVudCBzZXBlcmF0b3Igc3ludGF4LlxuY29uc3Qgbm9kZVBhdGhTZXBhcmF0b3IgPSAvXndpbi8udGVzdChwcm9jZXNzLnBsYXRmb3JtKSA/ICc7JyA6ICc6Jztcbi8vIEZpbmQgYWxsIGRpcmVjdG9yaWVzIG9mIG5vZGVfbW9kdWxlcyB0aGF0IGFwcGx5IHRvIHRoZSBmaWxlIHdlIGFyZSBjb21waWxpbmcuXG5tb2R1bGUuZXhwb3J0cyA9ICh7IGJlZm9yZSA9IFtdLCBhZnRlciA9IFtdLCBjd2QgfSkgPT4ge1xuICBjb25zdCBub2RlUGF0aHMgPSBiZWZvcmVcbiAgLmNvbmNhdChmaW5kTm9kZU1vZHVsZXMoeyByZWxhdGl2ZTogZmFsc2UsIGN3ZCB9KSlcbiAgLmNvbmNhdChhZnRlcilcbiAgLmpvaW4obm9kZVBhdGhTZXBhcmF0b3IpO1xuICByZXR1cm4gYE5PREVfUEFUSD0nJHtub2RlUGF0aHN9J2A7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbm1vZHVsZS5leHBvcnRzID0gKGNvbW1hbmRUb1J1biwgb3B0aW9ucyA9IHsgc3RkaW86ICdpbmhlcml0JyB9LCBraWxsUGFyZW50T25FeGl0ID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBjb21tYW5kID0gJ3NoJztcbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWMnLFxuICAgIGNvbW1hbmRUb1J1bixcbiAgXTtcbiAgLy9cbiAgLy8ga2V4ZWMgZG9lc24ndCB3b3JrIGluIHdpbmRvd3MsIHNvIGZhbGxiYWNrIHRvIGNoaWxkX3Byb2Nlc3Muc3Bhd25cbiAgLy8gdGhpcyBsb2dpYyBjb3BpZWQgZnJvbSBiYWJlbC1jbGkvbGliL2JhYmVsLW5vZGUuanNcbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCBrZXhlYyA9IHJlcXVpcmUoJ2tleGVjJyk7XG4gIC8vICAga2V4ZWMoY29tbWFuZCwgYXJncyk7XG4gIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGlmIChlcnIuY29kZSAhPT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB0aHJvdyBlcnI7XG5cbiAgY29uc3QgY2hpbGRQcm9jZXNzID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuICBjb25zdCBwcm9jID0gY2hpbGRQcm9jZXNzLnNwYXduKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMgfHwge30pO1xuICBwcm9jLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgIGlmIChraWxsUGFyZW50T25FeGl0KSB7XG4gICAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWduYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2M7XG4gIC8vIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWV4dHJhXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9jaGFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb2NoYVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdXVpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtdXVpZFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGVybWluYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidGVybWluYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vic2l0ZS1zY3JhcGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2Vic2l0ZS1zY3JhcGVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCB0ZXJtaW5hdGUgZnJvbSAndGVybWluYXRlJztcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBzY3JhcGUgZnJvbSAnd2Vic2l0ZS1zY3JhcGVyJztcbmltcG9ydCB7IHY0IGFzIG1ha2VVdWlkIH0gZnJvbSAnbm9kZS11dWlkJztcbmltcG9ydCB7IGl0LCBkZXNjcmliZSwgYmVmb3JlIH0gZnJvbSAnbW9jaGEnO1xuaW1wb3J0IHNoZWxsQ29tbWFuZCBmcm9tICcuLi9jb3JlL3NoZWxsQ29tbWFuZCc7XG5pbXBvcnQgZmFuY3lMb2cgZnJvbSAnLi4vY29yZS9mYW5jeUxvZyc7XG5pbXBvcnQgZ2V0RGV2RW52Um9vdCBmcm9tICcuLi9jb3JlL2dldERldkVudlJvb3QnO1xuaW1wb3J0IGdldE5vZGVQYXRoU2hWYXIgZnJvbSAnLi4vY29yZS9nZXROb2RlUGF0aFNoVmFyJztcblxuY29uc3QgZGV2RW52Um9vdCA9IGdldERldkVudlJvb3QoX19kaXJuYW1lKTtcblxuZnVuY3Rpb24gZHVyaW5nUHJvY2Vzcyh7XG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBvblN0ZGVyciA9ICgpID0+IHt9LFxuICBtYWtlU2hlbGxDbWRTdHIgPSAoKSA9PiB7fSxcbiAgY2xlYW51cCA9ICgpID0+IHt9LFxuICBhc3NldHNUb0dlbmVyYXRlLFxufSkge1xuICBiZWZvcmUoZnVuY3Rpb24gZHVyaW5nU2VydmVyQmVmb3JlKGRvbmUpIHtcbiAgICB0aGlzLnRpbWVvdXQoNjAwMDApO1xuICAgIGxldCBwYXRoVG9EZW1vRW50cnk7XG4gICAgYXNzZXRzVG9HZW5lcmF0ZS5mb3JFYWNoKChhc3NldEluZm8pID0+IHtcbiAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICBmcy5lbnN1cmVEaXJTeW5jKGRpcik7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKGFzc2V0SW5mby5wYXRoLCBhc3NldEluZm8udGV4dCk7XG4gICAgICBpZiAoYXNzZXRJbmZvLmlzRGVtb0VudHJ5KSB7XG4gICAgICAgIHBhdGhUb0RlbW9FbnRyeSA9IGFzc2V0SW5mby5wYXRoO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNtZCA9IG1ha2VTaGVsbENtZFN0cihwYXRoVG9EZW1vRW50cnkpO1xuICAgIGNvbnN0IGRldkVudlByb2Nlc3MgPSBzaGVsbENvbW1hbmQoY21kLCBudWxsLCBmYWxzZSk7XG4gICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZhbmN5TG9nKCdncmVlbicsICdGSU5JU0hFRCcsICdjb2RlJyk7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG5cbiAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShhc3NldEluZm8ucGF0aCk7XG4gICAgICAgIGZzLnJlbW92ZVN5bmMoZGlyKTtcbiAgICAgIH0pO1xuICAgICAgY2xlYW51cChkZXZFbnZQcm9jZXNzKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGF0YVN0cmluZyA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIGZhbmN5TG9nKCdibHVlJywgJ2RldkVudlByb2Nlc3Muc3Rkb3V0OicsIGRhdGFTdHJpbmcpO1xuICAgICAgb25EYXRhKGRhdGFTdHJpbmcsIGZpbmlzaCk7XG4gICAgfSk7XG4gICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS50b1N0cmluZykge1xuICAgICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgICBvblN0ZGVycihkYXRhKTtcbiAgICAgIH1cbiAgICAgIGZhbmN5TG9nKCdjeWFuJywgJ2RldkVudlByb2Nlc3Muc3RkZXJyOicsIGRhdGEpO1xuICAgIH0pO1xuICAgIGRldkVudlByb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xuICAgICAgZmFuY3lMb2coJ3llbGxvdycsICdjaGlsZCBwcm9jZXNzIGV4aXRlZCB3aXRoIGNvZGU6JywgY29kZSk7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1NlcnZlcih7XG4gIHVzZURpc3QsXG4gIG9uQXNzZXQgPSAoKSA9PiB7fSxcbiAgb25EYXRhID0gKCkgPT4ge30sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIGNsZWFudXAgPSAoKSA9PiB7fSxcbiAgbWFrZVNoZWxsQ21kU3RyLFxuICBhc3NldHNUb0dlbmVyYXRlLFxuICBub2RlUGF0aCxcbn0pIHtcbiAgY29uc3Qgc2NyYXBlRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc2NyYXBlJyk7XG4gIGxldCBvbmNlID0gZmFsc2U7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIG1ha2VTaGVsbENtZFN0cjogKHBhdGhUb0RlbW9FbnRyeSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZVBhdGhTaFZhciA9IG5vZGVQYXRoID8gYCR7bm9kZVBhdGh9IGAgOiAnJztcbiAgICAgIGNvbnNvbGUubG9nKCdub2RlUGF0aCcsIG5vZGVQYXRoU2hWYXIpO1xuICAgICAgaWYgKG1ha2VTaGVsbENtZFN0cikge1xuICAgICAgICByZXR1cm4gbWFrZVNoZWxsQ21kU3RyKHBhdGhUb0RlbW9FbnRyeSk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmVwdWJsaXNoID0gdXNlRGlzdCA/IGAoY2QgJHtkZXZFbnZSb290fSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIGAgOiAnJztcbiAgICAgIHJldHVybiBgKFxuICAgICAgICAke3ByZXB1Ymxpc2h9bnBtIHJ1biBkZXYgLS0gLS1kZW1vLWVudHJ5PScke3BhdGhUb0RlbW9FbnRyeX0nJHt1c2VEaXN0ID8gJyAtLXVzZS1kaXN0JyA6ICcnfSBcbiAgICAgIClgO1xuICAgIH0sXG4gICAgb25EYXRhOiAoZGF0YVN0cmluZywgZmluaXNoKSA9PiB7XG4gICAgICBvbkRhdGEoZGF0YVN0cmluZywgZmluaXNoKTtcbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IEZhaWxlZCB0byBjb21waWxlLicpICE9PSAtMSAmJiAhb25jZSkge1xuICAgICAgICBvbmNlID0gdHJ1ZTtcbiAgICAgICAgZmluaXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKCd3ZWJwYWNrOiBDb21waWxlZCBzdWNjZXNzZnVsbHkuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuXG4gICAgICAgIHNjcmFwZSh7XG4gICAgICAgICAgdXJsczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAvJ10sXG4gICAgICAgICAgZGlyZWN0b3J5OiBzY3JhcGVEaXIsXG4gICAgICAgICAgcmVzb3VyY2VTYXZlcjogY2xhc3MgTXlSZXNvdXJjZVNhdmVyIHtcbiAgICAgICAgICAgIHNhdmVSZXNvdXJjZShyZXNvdXJjZSkge1xuICAgICAgICAgICAgICBvbkFzc2V0KHJlc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2xlYW51cChlcnIpIHtcbiAgICAgICAgICAgICAgZmFuY3lMb2coJ3BpbmsnLCAnc2NyYXBlIHJlc291cmNlIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TdGRlcnIsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBjbGVhbnVwOiAoZGV2RW52UHJvY2VzcykgPT4ge1xuICAgICAgY2xlYW51cChkZXZFbnZQcm9jZXNzKTtcbiAgICAgIGZzLnJlbW92ZVN5bmMoc2NyYXBlRGlyKTtcbiAgICAgIHRlcm1pbmF0ZShkZXZFbnZQcm9jZXNzLnBpZCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFuY3lMb2coJ3JlZCcsICdPb3BzeSBkdXJpbmcgdGVybWluYXRlOicsIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ2RvbmUgZm9yIHRlcm1pbmF0ZScsICcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1Rlc3Qoe1xuICB0ZXN0UGF0aFBhdHRlcm4sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBjbGVhbnVwID0gKCkgPT4ge30sXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG59KSB7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIG9uU3RkZXJyLFxuICAgIG9uRGF0YSxcbiAgICBhc3NldHNUb0dlbmVyYXRlLFxuICAgIGNsZWFudXAsXG4gICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7XG4gICAgICByZXR1cm4gYChcbiAgICAgICAgbnBtIHJ1biB0ZXN0cGFja2FnZXMgLS0gLS13YXRjaD1mYWxzZSAtLXRlc3RQYXRoUGF0dGVybj0nJHt0ZXN0UGF0aFBhdHRlcm59J1xuICAgICAgKWA7XG4gICAgfSxcbiAgfSk7XG59XG5cbmNvbnN0IG1vbm9yZXBvRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uLycpO1xuZGVzY3JpYmUoJ3Rlc3RkZXZlbnYnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IHZpYSBvbiBkZW1hbmQgY29tcGlsZWQgc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcblxuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IHZpYSBwcmUtY29tcGlsZWQgc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgdXNlRGlzdDogdHJ1ZSxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUub25seSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBzaW1pbGFyIHRvIG5wbSB1c2FnZScsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgdGVzdFByb2plY3RQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi4vdGVzdC1wcm9qZWN0LWZvci1kZXYtZW52Jyk7XG4gICAgZnMuZW5zdXJlRGlyU3luYyh0ZXN0UHJvamVjdFBhdGgpO1xuICAgIGNvbnN0IG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9ub2RlX21vZHVsZXMnKTtcbiAgICBjb25zdCBub2RlTW9kdWxlc0NvcHlQYXRoID0gcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gICAgZnMuc3ltbGlua1N5bmMobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsIG5vZGVNb2R1bGVzQ29weVBhdGgpO1xuICAgIC8vIGZzLmNvcHlTeW5jKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoLCBub2RlTW9kdWxlc0NvcHlQYXRoKTtcblxuICAgIC8vIGZzLmVuc3VyZURpclN5bmMobm9kZU1vZHVsZXNDb3B5UGF0aCk7XG4gICAgLy8gY29uc3QgZGV2RW52Q29weSA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCAnZGV2X2VudicpO1xuICAgIGZzLmNvcHlTeW5jKGRldkVudlJvb3QsIHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICdkZXZfZW52JykpO1xuXG4gICAgLy8gZnMucmVtb3ZlU3luYyhwYXRoLnJlc29sdmUoZGV2RW52Q29weSwgJy4vbm9kZV9tb2R1bGVzJykpO1xuICAgIC8vIGZzLnN5bWxpbmtTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9ub2RlX21vZHVsZXMnKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHksICcuL25vZGVfbW9kdWxlcycpKTtcbiAgICAvLyBmcy5zeW1saW5rU3luYyhwYXRoLnJlc29sdmUoZGV2RW52Q29weSwgJy4vYmluJyksICBwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9ub2RlX21vZHVsZXMvLmJpbicpKTtcbiAgICBjb25zdCBwYXRoVG9NYWluID0gcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vdGVzdGRldmVudi1tYWluLmpzJyk7XG4gICAgLy8gY29uc3Qgbm9kZVBhdGhWYXIgPSBnZXROb2RlUGF0aFNoVmFyKHsgY3dkOiBkZXZFbnZSb290LCBiZWZvcmU6IFtub2RlTW9kdWxlc0NvcHlQYXRoXSB9KTtcbiAgICBjb25zdCBjbWQgPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBub2RlIC4vZGV2X2Vudi9kaXN0L2Rldl9lbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59JylgO1xuICAgIGNvbnNvbGUubG9nKCdjbWQnLCBjbWQpO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICAvLyBub2RlUGF0aDogbm9kZVBhdGhWYXIsXG4gICAgICBtYWtlU2hlbGxDbWRTdHI6ICgpID0+IHtjb25zb2xlLmxvZygnRklORCBNRSBETyBTVFVGRicpOyByZXR1cm4gY21kOyB9LFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aFRvTWFpbixcbiAgICAgICAgICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSxcbiAgICAgICAgICB0ZXh0OiBge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdC1wcm9qZWN0LWZvci1kZXYtZW52XCIsXG4gICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICAgICAgICAgICAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICAgICAgICAgICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2NyaXB0c1wiOiB7XG4gICAgICAgICAgICAgIFwic3RhcnRcIjogXCJkZXZlbnZcIixcbiAgICAgICAgICAgICAgXCJ0aGluZ1wiOiBcImRldmVudiAtLWVudj1idWlsZCAtLWRpcnJvb3Q9JChwd2QpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgICAgICAgICAgIFwiQGRlZnVhbHQvZGV2X2VudlwiOiBcIl4wLjAuMTRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1YWx0L3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudi5naXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1gLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uQXNzZXQ6IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBidW5kbGVIYXNDb250ZW50ID0gYnVuZGxlSGFzQ29udGVudCB8fCByZXNvdXJjZS50ZXh0LmluZGV4T2YoY29udGVudFRvQnVuZGxlKSAhPT0gLTE7XG4gICAgICB9LFxuICAgICAgY2xlYW51cDogKC8qIGRldkVudlByb2Nlc3MgKi8pID0+IHtcbiAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ25vbi1leGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGxldCBub3RGb3VuZEVycm9yID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXBNQVlCRS1BLVRZUE8nO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6ICdleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKFwidGVzdGRldmVudi1zb21lLWRlcFwiKTsgfTsnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uU3RkZXJyOiAoZGF0YSkgPT4ge1xuICAgICAgICBub3RGb3VuZEVycm9yID0gbm90Rm91bmRFcnJvciB8fCBkYXRhLmluZGV4T2YoYE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICcke2ltcG9ydFRvQXR0ZW1wdH0nYCkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnd2VicGFjayBidW5kbGluZyB0aHJvd3MgZXJyb3IgZm9yIG5vbi1leGlzdGVudCBpbXBvcnRzIHdpdGhpbiBhc3NldHMnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwobm90Rm91bmRFcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBpbXBvcnQgYnVuZGxpbmcnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzIHdpdGggbnBtLXNjb3BpbmcnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJ0Bzb21lLW5wbS1zY29wZS8ke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBucG0tc2NvcGVkIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Rlc3QnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgdGVzdHNQYXNzZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nVGVzdCh7XG4gICAgICB0ZXN0UGF0aFBhdHRlcm46ICcuKi90ZXN0ZGV2ZW52LXNvbWUtZGVwLy4qJyxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC50ZXN0LmpzJyksXG4gICAgICAgICAgdGV4dDogJ3Rlc3QoXCJhZGRzIDEgKyAyIHRvIGVxdWFsIDNcIiwgKCkgPT4geyBleHBlY3QoMSArIDIpLnRvQmUoMyk7IH0pOycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIHRlc3RzUGFzc2VkID0gdGVzdHNQYXNzZWQgfHwgZGF0YS5pbmRleE9mKCcxIHBhc3NlZCwgMSB0b3RhbCcpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ3Rlc3R0ZXN0dGVzdCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbCh0ZXN0c1Bhc3NlZCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0ZGV2ZW52Mi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhbGtcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3ItcGFpcnMtcGlja2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpbmQtbm9kZS1tb2R1bGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmluZC1ub2RlLW1vZHVsZXNcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGFzLWFuc2lcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJoYXMtYW5zaVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9