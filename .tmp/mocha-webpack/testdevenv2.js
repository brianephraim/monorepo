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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _terminate = __webpack_require__(1);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(2);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(3);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(4);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _websiteScraper = __webpack_require__(5);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _nodeUuid = __webpack_require__(6);

var _singleLineLog = __webpack_require__(7);

var _mocha = __webpack_require__(8);

var _shellCommand = __webpack_require__(9);

var _shellCommand2 = _interopRequireDefault(_shellCommand);

var _fancyLog = __webpack_require__(11);

var _fancyLog2 = _interopRequireDefault(_fancyLog);

var _getDevEnvRoot = __webpack_require__(15);

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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("terminate");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("website-scraper");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("single-line-log");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mocha");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */
module.exports = function (commandToRun) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { stdio: 'inherit' };
  var killParentOnExit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var command = 'sh';
  var args = ['-c',
  // commandToRun.replace('node $TMPFILE','node --inspect=9223 $TMPFILE'),
  commandToRun];
  //
  // kexec doesn't work in windows, so fallback to child_process.spawn
  // this logic copied from babel-cli/lib/babel-node.js
  // try {
  //   const kexec = require('kexec');
  //   kexec(command, args);
  // } catch (err) {
  // if (err.code !== 'MODULE_NOT_FOUND') throw err;

  var childProcess = __webpack_require__(10);
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-console */
var chalkLib = __webpack_require__(12);
var colorPairsPicker = __webpack_require__(13);
var hasAnsi = __webpack_require__(14);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("color-pairs-picker");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("has-ansi");

/***/ }),
/* 15 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=testdevenv2.js.map