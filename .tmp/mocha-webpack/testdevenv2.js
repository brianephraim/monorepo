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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable no-console */
var chalkLib = __webpack_require__(11);
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

module.exports = require("terminate");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("website-scraper");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable class-methods-use-this */


var _terminate = __webpack_require__(8);

var _terminate2 = _interopRequireDefault(_terminate);

var _assert = __webpack_require__(3);

var _assert2 = _interopRequireDefault(_assert);

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _fsExtra = __webpack_require__(4);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _websiteScraper = __webpack_require__(9);

var _websiteScraper2 = _interopRequireDefault(_websiteScraper);

var _nodeUuid = __webpack_require__(6);

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

var symlinkNodeModulesContents = function symlinkNodeModulesContents(nodeModulesOriginalPath, nodeModulesCopyPath) {
  var promises = [];
  _fsExtra2.default.readdirSync(nodeModulesOriginalPath).forEach(function (file, i) {
    if (i < 20) {
      console.log('symlinking node_modules content', file);
    }
    if (file !== '.bin') {
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
    promises.push(_fsExtra2.default.symlinkSync(_path2.default.resolve(devEnvCopyPath, val), _path2.default.resolve(binCopyPath, './' + key)));
  });
  return Promise.all(promises);
};

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
    early().then(function () {
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
      var cmd = makeShellCmdStr(pathToDemoEntry);
      var devEnvProcess = (0, _shellCommand2.default)(cmd, null, false);
      var finished = false;
      function finish() {
        if (finished) {
          return;
        }
        (0, _fancyLog2.default)('green', 'FINISHED', '');
        finished = true;
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
      _cleanup = _ref2$cleanup === undefined ? function () {
    return Promise.resolve();
  } : _ref2$cleanup,
      _makeShellCmdStr = _ref2.makeShellCmdStr,
      assetsToGenerate = _ref2.assetsToGenerate,
      early = _ref2.early;

  var scrapeDir = _path2.default.resolve(__dirname, './scrape');
  var once = false;
  duringProcess({
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
    var devEnvOriginalPath = _path2.default.resolve(monorepoDir, './packages/dev_env');
    var nodeModulesOriginalPath = _path2.default.resolve(monorepoDir, './node_modules');
    var nodeModulesCopyPath = _path2.default.resolve(testProjectPath, './node_modules');
    var pathToMain = _path2.default.resolve(testProjectPath, './testdevenv-main.demo.js');
    var devEnvCopyPath = _path2.default.resolve(nodeModulesCopyPath, './dev_env');
    var devEnvCopyPackageDotJsonPath = _path2.default.resolve(devEnvCopyPath, './package.json');
    var devEnvCopyDistPath = _path2.default.resolve(devEnvCopyPath, './dist');
    var binCopyPath = _path2.default.resolve(nodeModulesCopyPath, './.bin');
    var binOriginalPath = _path2.default.resolve(nodeModulesOriginalPath, './.bin');

    var bundleHasContent = false;
    duringServer({
      early: function early() {
        (0, _fancyLog2.default)('orange', 'EARLY', '');

        var promises = [_fsExtra2.default.removeSync(testProjectPath), _fsExtra2.default.ensureDirSync(testProjectPath), _fsExtra2.default.ensureDirSync(nodeModulesCopyPath), _fsExtra2.default.ensureDirSync(devEnvCopyPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './package.json'), devEnvCopyPackageDotJsonPath), _fsExtra2.default.copySync(_path2.default.resolve(devEnvRoot, './bin'), _path2.default.resolve(devEnvCopyPath, './bin')), _fsExtra2.default.copySync(binOriginalPath, binCopyPath), _fsExtra2.default.writeFile(pathToMain, 'document.body.append(\'' + contentToBundle + '\');'), _fsExtra2.default.writeFileSync(_path2.default.resolve(testProjectPath, './package.json'), '{\n            "name": "test-project-for-dev-env",\n            "version": "0.0.2",\n            "publishConfig": {\n              "access": "public"\n            },\n            "scripts": {\n              "dev": "devenv",\n              "devx": "devenv --demo-entry=\'' + pathToMain + '\'",\n              "start": "devenv",\n              "thing": "devenv --env=build --dirroot=$(pwd)"\n            },\n            "devDependencies": {\n              "@defualt/dev_env": "^0.0.14"\n            },\n            "repository": {\n              "type": "git",\n              "url": "https://github.com/defualt/test-project-for-dev-env.git"\n            }\n          }')];

        promises.push(symlinkNodeModulesContents(nodeModulesOriginalPath, nodeModulesCopyPath));

        promises.push(binPromises(devEnvCopyPackageDotJsonPath, devEnvCopyPath, binCopyPath));

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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("color-pairs-picker");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("has-ansi");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDY3MDkzNTFiZmMxMDk5YjAwYjUiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZmFuY3lMb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL2NvcmUvZ2V0RGV2RW52Um9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2NoYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtdXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0ZXJtaW5hdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJzaXRlLXNjcmFwZXJcIiIsIndlYnBhY2s6Ly8vLi90ZXN0ZGV2ZW52Mi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvci1wYWlycy1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYXMtYW5zaVwiIl0sIm5hbWVzIjpbImNoYWxrTGliIiwicmVxdWlyZSIsImNvbG9yUGFpcnNQaWNrZXIiLCJoYXNBbnNpIiwiY2hhbGsiLCJjb25zdHJ1Y3RvciIsImxldmVsIiwiZm9ybWF0TG9nIiwiY29sb3IiLCJoZWFkaW5nIiwiYmciLCJjb250cmFzdCIsInNwbGl0IiwibWFwIiwiaXRlbSIsImZnIiwiY29uc29sZSIsImxvZyIsInJnYiIsImJnUmdiIiwiYXJncyIsImZpbmQiLCJrZXl3b3JkIiwibW9kdWxlIiwiZXhwb3J0cyIsImVuc3VyZVRyYWlsaW5nU2xhc2giLCJzdHIiLCJyZXBsYWNlIiwiZGV2RW52Um9vdCIsIl9fZGlybmFtZSIsImxlbmd0aCIsImpvaW4iLCJjb21tYW5kVG9SdW4iLCJvcHRpb25zIiwic3RkaW8iLCJraWxsUGFyZW50T25FeGl0IiwiY29tbWFuZCIsImNoaWxkUHJvY2VzcyIsInByb2MiLCJzcGF3biIsIm9uIiwiY29kZSIsInNpZ25hbCIsInByb2Nlc3MiLCJraWxsIiwicGlkIiwiZXhpdCIsInN5bWxpbmtOb2RlTW9kdWxlc0NvbnRlbnRzIiwibm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgiLCJub2RlTW9kdWxlc0NvcHlQYXRoIiwicHJvbWlzZXMiLCJyZWFkZGlyU3luYyIsImZvckVhY2giLCJmaWxlIiwiaSIsInB1c2giLCJzeW1saW5rU3luYyIsInJlc29sdmUiLCJQcm9taXNlIiwiYWxsIiwiYmluUHJvbWlzZXMiLCJkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoIiwiZGV2RW52Q29weVBhdGgiLCJiaW5Db3B5UGF0aCIsImRldkVudkNvcHlQYWNrYWdlRG90SnNvbiIsInJlYWRKc29uU3luYyIsImRldkVudkJpbkRpY3QiLCJiaW4iLCJPYmplY3QiLCJrZXlzIiwia2V5IiwidmFsIiwiZHVyaW5nUHJvY2VzcyIsIm9uRGF0YSIsIm9uU3RkZXJyIiwibWFrZVNoZWxsQ21kU3RyIiwiY2xlYW51cCIsImVhcmx5IiwiYXNzZXRzVG9HZW5lcmF0ZSIsImR1cmluZ1Byb2Nlc3NCZWZvcmUiLCJkb25lIiwidGltZW91dCIsInRoZW4iLCJwYXRoVG9EZW1vRW50cnkiLCJhc3NldEluZm8iLCJwYXRoIiwiZGlyIiwiZGlybmFtZSIsImVuc3VyZURpclN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwidGV4dCIsImlzRGVtb0VudHJ5IiwiY21kIiwiZGV2RW52UHJvY2VzcyIsImZpbmlzaGVkIiwiZmluaXNoIiwicmVtb3ZlU3luYyIsInN0ZG91dCIsImRhdGEiLCJkYXRhU3RyaW5nIiwidG9TdHJpbmciLCJzdGRlcnIiLCJkdXJpbmdTZXJ2ZXIiLCJ1c2VEaXN0Iiwib25Bc3NldCIsInNjcmFwZURpciIsIm9uY2UiLCJwcmVwdWJsaXNoIiwiaW5kZXhPZiIsInVybHMiLCJkaXJlY3RvcnkiLCJyZXNvdXJjZVNhdmVyIiwicmVzb3VyY2UiLCJlcnIiLCJyZWplY3QiLCJkdXJpbmdUZXN0IiwidGVzdFBhdGhQYXR0ZXJuIiwibW9ub3JlcG9EaXIiLCJjb250ZW50VG9CdW5kbGUiLCJidW5kbGVIYXNDb250ZW50IiwiZXF1YWwiLCJvbmx5IiwidGVzdFByb2plY3RQYXRoIiwiZGV2RW52T3JpZ2luYWxQYXRoIiwicGF0aFRvTWFpbiIsImRldkVudkNvcHlEaXN0UGF0aCIsImJpbk9yaWdpbmFsUGF0aCIsImNvcHlTeW5jIiwid3JpdGVGaWxlIiwiY21kWCIsImNtZFkiLCJjbWRaIiwiZWFybHl4IiwiYVByb2Nlc3MiLCJ1bmRlZmluZWQiLCJub3RGb3VuZEVycm9yIiwiaW1wb3J0VG9BdHRlbXB0IiwidGVzdHNQYXNzZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBLElBQU1BLFdBQVcsbUJBQUFDLENBQVEsRUFBUixDQUFqQjtBQUNBLElBQU1DLG1CQUFtQixtQkFBQUQsQ0FBUSxFQUFSLENBQXpCO0FBQ0EsSUFBTUUsVUFBVSxtQkFBQUYsQ0FBUSxFQUFSLENBQWhCOztBQUdBLElBQU1H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dCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNjcwOTM1MWJmYzEwOTliMDBiNSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmNvbnN0IGNoYWxrTGliID0gcmVxdWlyZSgnY2hhbGsnKTtcbmNvbnN0IGNvbG9yUGFpcnNQaWNrZXIgPSByZXF1aXJlKCdjb2xvci1wYWlycy1waWNrZXInKTtcbmNvbnN0IGhhc0Fuc2kgPSByZXF1aXJlKCdoYXMtYW5zaScpO1xuXG5cbmNvbnN0IGNoYWxrID0gbmV3IGNoYWxrTGliLmNvbnN0cnVjdG9yKHsgbGV2ZWw6IDMgfSk7XG5mdW5jdGlvbiBmb3JtYXRMb2coY29sb3IsIGhlYWRpbmcsIC4uLmFyZ3MpIHtcbiAgY29uc3QgYmcgPSBjb2xvclBhaXJzUGlja2VyKGNvbG9yLCB7IGNvbnRyYXN0OiA4IH0pLmJnLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiAraXRlbTtcbiAgfSk7XG4gIGNvbnN0IGZnID0gY29sb3JQYWlyc1BpY2tlcihjb2xvciwgeyBjb250cmFzdDogOCB9KS5mZy5zcGxpdCgnKCcpWzFdLnNwbGl0KCcpJylbMF0uc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gK2l0ZW07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhjaGFsay5yZ2IoLi4uZmcpLmJnUmdiKC4uLmJnKShoZWFkaW5nKSk7XG5cbiAgaWYgKHR5cGVvZiBhcmdzLmZpbmQoKGl0ZW0pID0+IHsgcmV0dXJuIGhhc0Fuc2koaXRlbSk7IH0pID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKGNoYWxrLmtleXdvcmQoY29sb3IpKC4uLmFyZ3MpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXRMb2c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9mYW5jeUxvZy5qcyIsImZ1bmN0aW9uIGVuc3VyZVRyYWlsaW5nU2xhc2goc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwvPyQvLCAnLycpO1xufVxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGxldCBkZXZFbnZSb290ID0gZW5zdXJlVHJhaWxpbmdTbGFzaChfX2Rpcm5hbWUpLnNwbGl0KCcvZGV2X2Vudi8nKTtcbiAgZGV2RW52Um9vdFtkZXZFbnZSb290Lmxlbmd0aCAtIDFdID0gJyc7XG4gIGRldkVudlJvb3QgPSBkZXZFbnZSb290LmpvaW4oJy9kZXZfZW52LycpO1xuICByZXR1cm4gZGV2RW52Um9vdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9nZXREZXZFbnZSb290LmpzIiwiLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cbm1vZHVsZS5leHBvcnRzID0gKGNvbW1hbmRUb1J1biwgb3B0aW9ucyA9IHsgc3RkaW86ICdpbmhlcml0JyB9LCBraWxsUGFyZW50T25FeGl0ID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBjb21tYW5kID0gJ3NoJztcbiAgY29uc3QgYXJncyA9IFtcbiAgICAnLWMnLFxuICAgIGNvbW1hbmRUb1J1bixcbiAgXTtcbiAgLy9cbiAgLy8ga2V4ZWMgZG9lc24ndCB3b3JrIGluIHdpbmRvd3MsIHNvIGZhbGxiYWNrIHRvIGNoaWxkX3Byb2Nlc3Muc3Bhd25cbiAgLy8gdGhpcyBsb2dpYyBjb3BpZWQgZnJvbSBiYWJlbC1jbGkvbGliL2JhYmVsLW5vZGUuanNcbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCBrZXhlYyA9IHJlcXVpcmUoJ2tleGVjJyk7XG4gIC8vICAga2V4ZWMoY29tbWFuZCwgYXJncyk7XG4gIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGlmIChlcnIuY29kZSAhPT0gJ01PRFVMRV9OT1RfRk9VTkQnKSB0aHJvdyBlcnI7XG5cbiAgY29uc3QgY2hpbGRQcm9jZXNzID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xuICBjb25zdCBwcm9jID0gY2hpbGRQcm9jZXNzLnNwYXduKGNvbW1hbmQsIGFyZ3MsIG9wdGlvbnMgfHwge30pO1xuICBwcm9jLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuICAgIGlmIChraWxsUGFyZW50T25FeGl0KSB7XG4gICAgICBwcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgcHJvY2Vzcy5raWxsKHByb2Nlc3MucGlkLCBzaWduYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2M7XG4gIC8vIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vY29yZS9zaGVsbENvbW1hbmQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3NlcnRcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLWV4dHJhXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9jaGFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb2NoYVwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtdXVpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtdXVpZFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGVybWluYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidGVybWluYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2Vic2l0ZS1zY3JhcGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2Vic2l0ZS1zY3JhcGVyXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IHRlcm1pbmF0ZSBmcm9tICd0ZXJtaW5hdGUnO1xuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHNjcmFwZSBmcm9tICd3ZWJzaXRlLXNjcmFwZXInO1xuaW1wb3J0IHsgdjQgYXMgbWFrZVV1aWQgfSBmcm9tICdub2RlLXV1aWQnO1xuaW1wb3J0IHsgaXQsIGRlc2NyaWJlLCBiZWZvcmUgfSBmcm9tICdtb2NoYSc7XG5pbXBvcnQgc2hlbGxDb21tYW5kIGZyb20gJy4uL2NvcmUvc2hlbGxDb21tYW5kJztcbmltcG9ydCBmYW5jeUxvZyBmcm9tICcuLi9jb3JlL2ZhbmN5TG9nJztcbmltcG9ydCBnZXREZXZFbnZSb290IGZyb20gJy4uL2NvcmUvZ2V0RGV2RW52Um9vdCc7XG5cbmNvbnN0IGRldkVudlJvb3QgPSBnZXREZXZFbnZSb290KF9fZGlybmFtZSk7XG5cbmNvbnN0IHN5bWxpbmtOb2RlTW9kdWxlc0NvbnRlbnRzID0gKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoLCBub2RlTW9kdWxlc0NvcHlQYXRoKSA9PiB7XG4gIGNvbnN0IHByb21pc2VzID0gW107XG4gIGZzLnJlYWRkaXJTeW5jKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoKS5mb3JFYWNoKChmaWxlLCBpKSA9PiB7XG4gICAgaWYgKGkgPCAyMCkge1xuICAgICAgY29uc29sZS5sb2coJ3N5bWxpbmtpbmcgbm9kZV9tb2R1bGVzIGNvbnRlbnQnLCBmaWxlKTtcbiAgICB9XG4gICAgaWYgKGZpbGUgIT09ICcuYmluJykge1xuICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgZnMuc3ltbGlua1N5bmMoXG4gICAgICAgICAgcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzT3JpZ2luYWxQYXRoLCBmaWxlKSxcbiAgICAgICAgICBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgZmlsZSkpLFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuY29uc3QgYmluUHJvbWlzZXMgPSAoZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCwgZGV2RW52Q29weVBhdGgsIGJpbkNvcHlQYXRoKSA9PiB7XG4gIGNvbnN0IHByb21pc2VzID0gW107XG4gIGNvbnN0IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbiA9IGZzLnJlYWRKc29uU3luYyhkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoKTtcbiAgY29uc3QgZGV2RW52QmluRGljdCA9IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbi5iaW47XG4gIE9iamVjdC5rZXlzKGRldkVudkJpbkRpY3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IGRldkVudkJpbkRpY3Rba2V5XTtcbiAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgZnMuc3ltbGlua1N5bmMocGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCB2YWwpLCBwYXRoLnJlc29sdmUoYmluQ29weVBhdGgsIGAuLyR7a2V5fWApKSxcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmZ1bmN0aW9uIGR1cmluZ1Byb2Nlc3Moe1xuICBvbkRhdGEgPSAoKSA9PiB7fSxcbiAgb25TdGRlcnIgPSAoKSA9PiB7fSxcbiAgbWFrZVNoZWxsQ21kU3RyID0gKCkgPT4ge30sXG4gIGNsZWFudXAgPSAoKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSxcbiAgZWFybHkgPSAoKSA9PiB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfSxcbiAgYXNzZXRzVG9HZW5lcmF0ZSA9IFtdLFxufSkge1xuICBiZWZvcmUoZnVuY3Rpb24gZHVyaW5nUHJvY2Vzc0JlZm9yZShkb25lKSB7XG4gICAgdGhpcy50aW1lb3V0KDYwMDAwKTtcbiAgICBlYXJseSgpLnRoZW4oKCkgPT4ge1xuICAgICAgbGV0IHBhdGhUb0RlbW9FbnRyeTtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdncmVlbicsICdHRU5FUkFUSU5HJywgYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKGRpcik7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoYXNzZXRJbmZvLnBhdGgsIGFzc2V0SW5mby50ZXh0KTtcbiAgICAgICAgaWYgKGFzc2V0SW5mby5pc0RlbW9FbnRyeSkge1xuICAgICAgICAgIHBhdGhUb0RlbW9FbnRyeSA9IGFzc2V0SW5mby5wYXRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNtZCA9IG1ha2VTaGVsbENtZFN0cihwYXRoVG9EZW1vRW50cnkpO1xuICAgICAgY29uc3QgZGV2RW52UHJvY2VzcyA9IHNoZWxsQ29tbWFuZChjbWQsIG51bGwsIGZhbHNlKTtcbiAgICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmFuY3lMb2coJ2dyZWVuJywgJ0ZJTklTSEVEJywgJycpO1xuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGNsZWFudXAoZGV2RW52UHJvY2VzcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICdyZW1vdmUgYXNzZXRzJywgJycpO1xuICAgICAgICAgIGFzc2V0c1RvR2VuZXJhdGUuZm9yRWFjaCgoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoYXNzZXRJbmZvLnBhdGgpO1xuICAgICAgICAgICAgZnMucmVtb3ZlU3luYyhkaXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAnYmVmb3JlXFwncyBkb25lKCkgY2FsbGVkJywgJycpO1xuICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkZXZFbnZQcm9jZXNzLnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICAgIGZhbmN5TG9nKCdibHVlJywgJ2RldkVudlByb2Nlc3Muc3Rkb3V0OicsIGRhdGFTdHJpbmcpO1xuICAgICAgICBvbkRhdGEoZGF0YVN0cmluZywgZmluaXNoKTtcbiAgICAgIH0pO1xuICAgICAgZGV2RW52UHJvY2Vzcy5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnRvU3RyaW5nKSB7XG4gICAgICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgICBvblN0ZGVycihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBmYW5jeUxvZygnY3lhbicsICdkZXZFbnZQcm9jZXNzLnN0ZGVycjonLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgZGV2RW52UHJvY2Vzcy5vbignZXhpdCcsIChjb2RlKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCd5ZWxsb3cnLCAnY2hpbGQgcHJvY2VzcyBleGl0ZWQgd2l0aCBjb2RlOicsIGNvZGUpO1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHVyaW5nU2VydmVyKHtcbiAgdXNlRGlzdCxcbiAgb25Bc3NldCA9ICgpID0+IHt9LFxuICBvbkRhdGEgPSAoKSA9PiB7fSxcbiAgb25TdGRlcnIgPSAoKSA9PiB7fSxcbiAgY2xlYW51cCA9ICgpID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9LFxuICBtYWtlU2hlbGxDbWRTdHIsXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG4gIGVhcmx5LFxufSkge1xuICBjb25zdCBzY3JhcGVEaXIgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zY3JhcGUnKTtcbiAgbGV0IG9uY2UgPSBmYWxzZTtcbiAgZHVyaW5nUHJvY2Vzcyh7XG4gICAgZWFybHksXG4gICAgbWFrZVNoZWxsQ21kU3RyOiAocGF0aFRvRGVtb0VudHJ5KSA9PiB7XG4gICAgICBpZiAobWFrZVNoZWxsQ21kU3RyKSB7XG4gICAgICAgIHJldHVybiBtYWtlU2hlbGxDbWRTdHIocGF0aFRvRGVtb0VudHJ5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXB1Ymxpc2ggPSB1c2VEaXN0ID8gYChjZCAke2RldkVudlJvb3R9ICYmIG5wbSBydW4gcHJlcHVibGlzaCkgJiYgYCA6ICcnO1xuICAgICAgcmV0dXJuIGAoXG4gICAgICAgICR7cHJlcHVibGlzaH1ucG0gcnVuIGRldiAtLSAtLWRlbW8tZW50cnk9JyR7cGF0aFRvRGVtb0VudHJ5fScke3VzZURpc3QgPyAnIC0tdXNlLWRpc3QnIDogJyd9IFxuICAgICAgKWA7XG4gICAgfSxcbiAgICBvbkRhdGE6IChkYXRhU3RyaW5nLCBmaW5pc2gpID0+IHtcbiAgICAgIG9uRGF0YShkYXRhU3RyaW5nLCBmaW5pc2gpO1xuICAgICAgaWYgKGRhdGFTdHJpbmcuaW5kZXhPZignd2VicGFjazogRmFpbGVkIHRvIGNvbXBpbGUuJykgIT09IC0xICYmICFvbmNlKSB7XG4gICAgICAgIG9uY2UgPSB0cnVlO1xuICAgICAgICBmaW5pc2goKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoJ3dlYnBhY2s6IENvbXBpbGVkIHN1Y2Nlc3NmdWxseS4nKSAhPT0gLTEgJiYgIW9uY2UpIHtcbiAgICAgICAgb25jZSA9IHRydWU7XG4gICAgICAgIHNjcmFwZSh7XG4gICAgICAgICAgdXJsczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAvJ10sXG4gICAgICAgICAgZGlyZWN0b3J5OiBzY3JhcGVEaXIsXG4gICAgICAgICAgcmVzb3VyY2VTYXZlcjogY2xhc3MgTXlSZXNvdXJjZVNhdmVyIHtcbiAgICAgICAgICAgIHNhdmVSZXNvdXJjZShyZXNvdXJjZSkge1xuICAgICAgICAgICAgICBvbkFzc2V0KHJlc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yQ2xlYW51cChlcnIpIHtcbiAgICAgICAgICAgICAgZmFuY3lMb2coJ3BpbmsnLCAnc2NyYXBlIHJlc291cmNlIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TdGRlcnIsXG4gICAgYXNzZXRzVG9HZW5lcmF0ZSxcbiAgICBjbGVhbnVwOiAoZGV2RW52UHJvY2VzcykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICd0ZXJtaW5hdGUgc3RhcnQnLCAnJyk7XG4gICAgICAgIHRlcm1pbmF0ZShkZXZFbnZQcm9jZXNzLnBpZCwgKGVycikgPT4ge1xuICAgICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAndGVybWluYXRlIGVuZCcsICcnKTtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBmYW5jeUxvZygncmVkJywgJ09vcHN5IGR1cmluZyB0ZXJtaW5hdGU6JywgZXJyKTtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmYW5jeUxvZygnZ3JlZW4nLCAnZG9uZSBmb3IgdGVybWluYXRlJywgJycpO1xuICAgICAgICAgICAgY2xlYW51cChkZXZFbnZQcm9jZXNzKTtcbiAgICAgICAgICAgIGZzLnJlbW92ZVN5bmMoc2NyYXBlRGlyKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGR1cmluZ1Rlc3Qoe1xuICB0ZXN0UGF0aFBhdHRlcm4sXG4gIG9uU3RkZXJyID0gKCkgPT4ge30sXG4gIG9uRGF0YSA9ICgpID0+IHt9LFxuICBjbGVhbnVwID0gKCkgPT4ge30sXG4gIGFzc2V0c1RvR2VuZXJhdGUsXG59KSB7XG4gIGR1cmluZ1Byb2Nlc3Moe1xuICAgIG9uU3RkZXJyLFxuICAgIG9uRGF0YSxcbiAgICBhc3NldHNUb0dlbmVyYXRlLFxuICAgIGNsZWFudXAsXG4gICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7XG4gICAgICByZXR1cm4gYChcbiAgICAgICAgbnBtIHJ1biB0ZXN0cGFja2FnZXMgLS0gLS13YXRjaD1mYWxzZSAtLXRlc3RQYXRoUGF0dGVybj0nJHt0ZXN0UGF0aFBhdHRlcm59J1xuICAgICAgKWA7XG4gICAgfSxcbiAgfSk7XG59XG5cbmNvbnN0IG1vbm9yZXBvRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uLycpO1xuZGVzY3JpYmUoJ3Rlc3RkZXZlbnYnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IG9mIG1vbm9yZXBvIHZpYSBvbiBkZW1hbmQgY29tcGlsZWQgc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcblxuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2Jhc2ljIGJ1bmRsZUhhc0NvbnRlbnQnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdsb2NhbGhvc3QgZGV2IGVudmlyb25tZW50IG9mIG1vbm9yZXBvIHZpYSBwcmUtY29tcGlsZWQgc2NyaXB0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgdXNlRGlzdDogdHJ1ZSxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUub25seSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBvZiBzY2F0dGVyZWQgcGFja2FnZSByZXBvIHZpYSBwcmUtY29tcGlsZWQgc2NyaXB0LCBzaW1pbGFyIHRvIG5wbSB1c2FnZScsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGNvbnN0IHRlc3RQcm9qZWN0UGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4uL3Rlc3RkZXZlbnYtbWFpbi9hc2RmJyk7XG4gICAgY29uc3QgZGV2RW52T3JpZ2luYWxQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy9kZXZfZW52Jyk7XG4gICAgY29uc3Qgbm9kZU1vZHVsZXNPcmlnaW5hbFBhdGggPSBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL25vZGVfbW9kdWxlcycpO1xuICAgIGNvbnN0IG5vZGVNb2R1bGVzQ29weVBhdGggPSBwYXRoLnJlc29sdmUodGVzdFByb2plY3RQYXRoLCAnLi9ub2RlX21vZHVsZXMnKTtcbiAgICBjb25zdCBwYXRoVG9NYWluID0gcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vdGVzdGRldmVudi1tYWluLmRlbW8uanMnKTtcbiAgICBjb25zdCBkZXZFbnZDb3B5UGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCAnLi9kZXZfZW52Jyk7XG4gICAgY29uc3QgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyk7XG4gICAgY29uc3QgZGV2RW52Q29weURpc3RQYXRoID0gcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9kaXN0Jyk7XG4gICAgY29uc3QgYmluQ29weVBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgJy4vLmJpbicpO1xuICAgIGNvbnN0IGJpbk9yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc09yaWdpbmFsUGF0aCwgJy4vLmJpbicpO1xuXG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgZWFybHk6ICgpID0+IHtcbiAgICAgICAgZmFuY3lMb2coJ29yYW5nZScsICdFQVJMWScsICcnKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICBmcy5yZW1vdmVTeW5jKHRlc3RQcm9qZWN0UGF0aCksXG4gICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyh0ZXN0UHJvamVjdFBhdGgpLFxuICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMobm9kZU1vZHVsZXNDb3B5UGF0aCksXG4gICAgICAgICAgZnMuZW5zdXJlRGlyU3luYyhkZXZFbnZDb3B5UGF0aCksXG4gICAgICAgICAgZnMuY29weVN5bmMocGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL3BhY2thZ2UuanNvbicpLCBkZXZFbnZDb3B5UGFja2FnZURvdEpzb25QYXRoKSxcbiAgICAgICAgICBmcy5jb3B5U3luYyhwYXRoLnJlc29sdmUoZGV2RW52Um9vdCwgJy4vYmluJyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vYmluJykpLFxuICAgICAgICAgIGZzLmNvcHlTeW5jKGJpbk9yaWdpbmFsUGF0aCwgYmluQ29weVBhdGgpLFxuICAgICAgICAgIGZzLndyaXRlRmlsZShwYXRoVG9NYWluLCBgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO2ApLFxuICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyksIGB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0ZXN0LXByb2plY3QtZm9yLWRldi1lbnZcIixcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuMC4yXCIsXG4gICAgICAgICAgICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgICAgICAgICAgICBcImFjY2Vzc1wiOiBcInB1YmxpY1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzY3JpcHRzXCI6IHtcbiAgICAgICAgICAgICAgXCJkZXZcIjogXCJkZXZlbnZcIixcbiAgICAgICAgICAgICAgXCJkZXZ4XCI6IFwiZGV2ZW52IC0tZGVtby1lbnRyeT0nJHtwYXRoVG9NYWlufSdcIixcbiAgICAgICAgICAgICAgXCJzdGFydFwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICBcInRoaW5nXCI6IFwiZGV2ZW52IC0tZW52PWJ1aWxkIC0tZGlycm9vdD0kKHB3ZClcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgICAgICAgXCJAZGVmdWFsdC9kZXZfZW52XCI6IFwiXjAuMC4xNFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RlZnVhbHQvdGVzdC1wcm9qZWN0LWZvci1kZXYtZW52LmdpdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWApLFxuICAgICAgICBdO1xuXG5cbiAgICAgICAgcHJvbWlzZXMucHVzaChzeW1saW5rTm9kZU1vZHVsZXNDb250ZW50cyhcbiAgICAgICAgICBub2RlTW9kdWxlc09yaWdpbmFsUGF0aCxcbiAgICAgICAgICBub2RlTW9kdWxlc0NvcHlQYXRoLFxuICAgICAgICApKTtcblxuICAgICAgICBwcm9taXNlcy5wdXNoKGJpblByb21pc2VzKFxuICAgICAgICAgIGRldkVudkNvcHlQYWNrYWdlRG90SnNvblBhdGgsXG4gICAgICAgICAgZGV2RW52Q29weVBhdGgsXG4gICAgICAgICAgYmluQ29weVBhdGgsXG4gICAgICAgICkpO1xuICAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgIH0sXG4gICAgICAvLyB1c2VEaXN0OiB0cnVlLFxuICAgICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgKGNkICR7ZGV2RW52T3JpZ2luYWxQYXRofSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIGNwIC1yZiAke3BhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9kaXN0Jyl9ICR7ZGV2RW52Q29weURpc3RQYXRofSAmJiAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIG5wbSBydW4gZGV2KWA7XG4gICAgICAgIC8vIHJldHVybiBgKGNkICR7ZGV2RW52T3JpZ2luYWxQYXRofSAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gJiYgbm9kZSAke3BhdGgucmVzb2x2ZShkZXZFbnZPcmlnaW5hbFBhdGgsICcuL2Rpc3QvZGV2X2Vudi5qcycpfSAtLWRlbW8tZW50cnk9JyR7cGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vdGVzdGRldmVudi1tYWluLmRlbW8uanMnKX0nIC0tdXNlLWRpc3QpYDtcbiAgICAgICAgLy8gcmV0dXJuIGAoY2QgL1VzZXJzL2JyaWFuZXBocmFpbS9TaXRlcy9tb25vcmVwby9wYWNrYWdlcy9kZXZfZW52LyAmJiBucG0gcnVuIHByZXB1Ymxpc2gpICYmIG5wbSBydW4gZGV2IC0tIC0tZGVtby1lbnRyeT0nL1VzZXJzL2JyaWFuZXBocmFpbS9TaXRlcy9tb25vcmVwby90ZXN0ZGV2ZW52LW1haW4vYXNkZi90ZXN0ZGV2ZW52LW1haW4uZGVtby5qcycgLS11c2UtZGlzdGA7XG4gICAgICB9LFxuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi90ZXN0ZGV2ZW52LW1haW4vYXNkZi90ZXN0ZGV2ZW52LW1haW4uZGVtby5qcycpLFxuICAgICAgICAvLyAgIHRleHQ6IGBkb2N1bWVudC5ib2R5LmFwcGVuZCgnJHtjb250ZW50VG9CdW5kbGV9Jyk7YCxcbiAgICAgICAgLy8gICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vdGVzdGRldmVudi1tYWluL2FzZGYvcGFja2FnZS5qc29uJyksXG4gICAgICAgIC8vICAgdGV4dDogYHtcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAvLyAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgICAgICAgLy8gICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAvLyAgICAgICBcImRldlwiOiBcImRldmVudlwiXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAvLyAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICAvLyAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgLy8gICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGVmdWFsdC90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYuZ2l0XCJcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9YCxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cblxuICBkZXNjcmliZSgnbG9jYWxob3N0IGRldiBlbnZpcm9ubWVudCBzaW1pbGFyIHRvIG5wbSB1c2FnZScsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50VG9CdW5kbGUgPSBtYWtlVXVpZCgpO1xuICAgIGxldCBidW5kbGVIYXNDb250ZW50ID0gZmFsc2U7XG4gICAgY29uc3QgdGVzdFByb2plY3RQYXRoID0gcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYnKTtcbiAgICBcbiAgICBjb25zdCBub2RlTW9kdWxlc09yaWdpbmFsUGF0aCA9IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vbm9kZV9tb2R1bGVzJyk7XG4gICAgY29uc3Qgbm9kZU1vZHVsZXNDb3B5UGF0aCA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL25vZGVfbW9kdWxlcycpO1xuICAgIGNvbnN0IGRldkVudkNvcHlQYXRoID0gcGF0aC5yZXNvbHZlKG5vZGVNb2R1bGVzQ29weVBhdGgsICcuL2Rldl9lbnYnKTtcbiAgICBjb25zdCBiaW5PcmlnaW5hbFBhdGggPSBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsICcuLy5iaW4nKTtcbiAgICBjb25zdCBiaW5Db3B5UGF0aCA9IHBhdGgucmVzb2x2ZShub2RlTW9kdWxlc0NvcHlQYXRoLCAnLi8uYmluJyk7XG4gICAgY29uc3QgZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyk7XG4gICAgXG4gICAgICAgIFxuXG4gICAgY29uc3QgcGF0aFRvTWFpbiA9IHBhdGgucmVzb2x2ZSh0ZXN0UHJvamVjdFBhdGgsICcuL3Rlc3RkZXZlbnYtbWFpbi5kZW1vLmpzJyk7XG4gICAgLy8gY29uc3QgY21keCA9IGAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICYmIG5vZGUgLi9ub2RlX21vZHVsZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59JylgO1xuICAgIGNvbnN0IGNtZFggPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBscylgO1xuICAgIGNvbnN0IGNtZFkgPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJiBucG0gcnVuIGRldilgO1xuICAgIGNvbnN0IGNtZFogPSBgKGNkICR7dGVzdFByb2plY3RQYXRofSAmJiBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJiBub2RlIC4vbm9kZV9tb2R1bGVzL2Rldl9lbnYvZGlzdC9kZXZfZW52KWA7XG4gICAgY29uc3QgY21kID0gYFxuICAgICAgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKSAmJiBcbiAgICAgIHJtIC1yZiAke3Rlc3RQcm9qZWN0UGF0aH0gJiZcbiAgICAgIG1rZGlyICR7dGVzdFByb2plY3RQYXRofSAmJlxuICAgICAgbWtkaXIgJHtub2RlTW9kdWxlc0NvcHlQYXRofSAmJlxuICAgICAgbWtkaXIgJHtkZXZFbnZDb3B5UGF0aH0gJiZcbiAgICAgIGNwICR7cGF0aC5yZXNvbHZlKGRldkVudlJvb3QsICcuL3BhY2thZ2UuanNvbicpfSAke3BhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vcGFja2FnZS5qc29uJyl9ICYmXG4gICAgICBlY2hvIFwiZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpO1wiID4gJHtwYXRoVG9NYWlufSAmJlxuICAgICAgZWNobyAne1wibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFwic2NyaXB0c1wiOiB7XCJkZXZcIjogXCJkZXZlbnZcIn19JyA+ICR7cGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyl9ICYmXG4gICAgICAoY2QgJHt0ZXN0UHJvamVjdFBhdGh9ICAmJiBub2RlIC4uL3BhY2thZ2VzL2Rldl9lbnYvZGlzdC9kZXZfZW52KVxuICAgIGA7XG4gICAgLy8gY29uc3QgY21kID0gYChjZCAke3Rlc3RQcm9qZWN0UGF0aH0gICYmIG5vZGUgLi4vcGFja2FnZXMvZGV2X2Vudi9kaXN0L2Rldl9lbnYpYDtcbiAgICAvLyBjb25zdCBjbWQgPSBgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKWA7XG4gICAgY29uc29sZS5sb2coJ2NtZCcsIGNtZCk7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIC8vIHVzZURpc3QsXG4gICAgICBlYXJseXg6ICgpID0+IHtcblxuICAgICAgICBmYW5jeUxvZygnb3JhbmdlJywgJ0VBUkxZJywgJycpO1xuICAgICAgICAvLyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIGNvbnN0IHByZXB1Ymxpc2ggPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdhYWEnKTtcbiAgICAgICAgICBjb25zdCBhUHJvY2VzcyA9IHNoZWxsQ29tbWFuZChgKGNkICR7ZGV2RW52Um9vdH0gJiYgbnBtIHJ1biBwcmVwdWJsaXNoKWAsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgIGFQcm9jZXNzLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JiYicpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJlcHVibGlzaC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICAgIGZzLnJlbW92ZVN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmModGVzdFByb2plY3RQYXRoKSxcbiAgICAgICAgICAgIGZzLmVuc3VyZURpclN5bmMobm9kZU1vZHVsZXNDb3B5UGF0aCksXG4gICAgICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKGRldkVudkNvcHlQYXRoKSxcbiAgICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9kaXN0JyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vZGlzdCcpKSxcbiAgICAgICAgICAgIGZzLmNvcHlTeW5jKHBhdGgucmVzb2x2ZShkZXZFbnZSb290LCAnLi9wYWNrYWdlLmpzb24nKSwgcGF0aC5yZXNvbHZlKGRldkVudkNvcHlQYXRoLCAnLi9wYWNrYWdlLmpzb24nKSksXG4gICAgICAgICAgICBmcy5jb3B5U3luYyhwYXRoLnJlc29sdmUoZGV2RW52Um9vdCwgJy4vYmluJyksIHBhdGgucmVzb2x2ZShkZXZFbnZDb3B5UGF0aCwgJy4vYmluJykpLFxuICAgICAgICAgICAgZnMuY29weVN5bmMoYmluT3JpZ2luYWxQYXRoLCBiaW5Db3B5UGF0aCksXG4gICAgICAgICAgICBmcy53cml0ZUZpbGUocGF0aFRvTWFpbiwgYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgKSxcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyksIGB7XG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjAuMlwiLFxuICAgICAgICAgICAgICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJzY3JpcHRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImRldlwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICAgIFwiZGV2eFwiOiBcImRldmVudiAtLWRlbW8tZW50cnk9JyR7cGF0aFRvTWFpbn0nXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFwiOiBcImRldmVudlwiLFxuICAgICAgICAgICAgICAgIFwidGhpbmdcIjogXCJkZXZlbnYgLS1lbnY9YnVpbGQgLS1kaXJyb290PSQocHdkKVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1YWx0L3Rlc3QtcHJvamVjdC1mb3ItZGV2LWVudi5naXRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9YCksXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAvLyBmcy5yZWFkZGlyU3luYyhub2RlTW9kdWxlc09yaWdpbmFsUGF0aCkuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICAgIC8vICAgaWYgKGkrKyA8IDIwKSB7XG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdFQVJMWTMnKVxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyAgIGlmIChmaWxlICE9PSAnLmJpbicpIHtcbiAgICAgICAgICAvLyAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAvLyAgICAgICBmcy5zeW1saW5rU3luYyhwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNPcmlnaW5hbFBhdGgsIGZpbGUpLCBwYXRoLnJlc29sdmUobm9kZU1vZHVsZXNDb3B5UGF0aCwgZmlsZSkpXG4gICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAvLyBjb25zdCBkZXZFbnZDb3B5UGFja2FnZURvdEpzb24gPSBmcy5yZWFkSnNvblN5bmMoZGV2RW52Q29weVBhY2thZ2VEb3RKc29uUGF0aCk7XG4gICAgICAgICAgLy8gY29uc3QgZGV2RW52QmluRGljdCA9IGRldkVudkNvcHlQYWNrYWdlRG90SnNvbi5iaW47XG4gICAgICAgICAgLy8gT2JqZWN0LmtleXMoZGV2RW52QmluRGljdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgLy8gICBjb25zdCB2YWwgPSBkZXZFbnZCaW5EaWN0W2tleV07XG4gICAgICAgICAgLy8gICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgIC8vICAgICBmcy5zeW1saW5rU3luYyhwYXRoLnJlc29sdmUoZGV2RW52Q29weVBhdGgsIHZhbCksIHBhdGgucmVzb2x2ZShiaW5Db3B5UGF0aCwgYC4vJHtrZXl9YCkpXG4gICAgICAgICAgLy8gICApO1xuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9LFxuICAgICAgLy8gbm9kZVBhdGg6IG5vZGVQYXRoVmFyLFxuICAgICAgbWFrZVNoZWxsQ21kU3RyOiAoKSA9PiB7Y29uc29sZS5sb2coJ0ZJTkQgTUUgRE8gU1RVRkYnKTsgcmV0dXJuIGNtZDsgfSxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHBhdGg6IHBhdGhUb01haW4sXG4gICAgICAgIC8vICAgdGV4dDogYGRvY3VtZW50LmJvZHkuYXBwZW5kKCcke2NvbnRlbnRUb0J1bmRsZX0nKTtgLFxuICAgICAgICAvLyAgIGlzRGVtb0VudHJ5OiB0cnVlLFxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgcGF0aDogcGF0aC5yZXNvbHZlKHRlc3RQcm9qZWN0UGF0aCwgJy4vcGFja2FnZS5qc29uJyksXG4gICAgICAgIC8vICAgdGV4dDogYHtcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcInRlc3QtcHJvamVjdC1mb3ItZGV2LWVudlwiLFxuICAgICAgICAvLyAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjJcIixcbiAgICAgICAgLy8gICAgIFwicHVibGlzaENvbmZpZ1wiOiB7XG4gICAgICAgIC8vICAgICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAvLyAgICAgICBcImRldlwiOiBcImRldmVudlwiLFxuICAgICAgICAvLyAgICAgICBcImRldnhcIjogXCJkZXZlbnYgLS1kZW1vLWVudHJ5PScke3BhdGhUb01haW59J1wiLFxuICAgICAgICAvLyAgICAgICBcInN0YXJ0XCI6IFwiZGV2ZW52XCIsXG4gICAgICAgIC8vICAgICAgIFwidGhpbmdcIjogXCJkZXZlbnYgLS1lbnY9YnVpbGQgLS1kaXJyb290PSQocHdkKVwiXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAvLyAgICAgICBcIkBkZWZ1YWx0L2Rldl9lbnZcIjogXCJeMC4wLjE0XCJcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBcInJlcG9zaXRvcnlcIjoge1xuICAgICAgICAvLyAgICAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICAgICAgLy8gICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZGVmdWFsdC90ZXN0LXByb2plY3QtZm9yLWRldi1lbnYuZ2l0XCJcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9YCxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgICBvbkFzc2V0OiAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgYnVuZGxlSGFzQ29udGVudCA9IGJ1bmRsZUhhc0NvbnRlbnQgfHwgcmVzb3VyY2UudGV4dC5pbmRleE9mKGNvbnRlbnRUb0J1bmRsZSkgIT09IC0xO1xuICAgICAgfSxcbiAgICAgIGNsZWFudXA6ICgvKiBkZXZFbnZQcm9jZXNzICovKSA9PiB7XG4gICAgICAgIGZhbmN5TG9nKCdvcmFuZ2UnLCAncmVtb3ZlIHRlc3RQcm9qZWN0UGF0aCcsICcnKTtcbiAgICAgICAgZnMucmVtb3ZlU3luYyh0ZXN0UHJvamVjdFBhdGgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnYmFzaWMgYnVuZGxlSGFzQ29udGVudCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ25vbi1leGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGxldCBub3RGb3VuZEVycm9yID0gZmFsc2U7XG4gICAgY29uc3QgaW1wb3J0VG9BdHRlbXB0ID0gJ3Rlc3RkZXZlbnYtc29tZS1kZXBNQVlCRS1BLVRZUE8nO1xuICAgIGR1cmluZ1NlcnZlcih7XG4gICAgICBhc3NldHNUb0dlbmVyYXRlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtbWFpbi90ZXN0ZGV2ZW52LW1haW4uanMnKSxcbiAgICAgICAgICB0ZXh0OiBgaW1wb3J0IHNvbWVEZXAgZnJvbSAnJHtpbXBvcnRUb0F0dGVtcHR9JztcXG47c29tZURlcCgpO2AsXG4gICAgICAgICAgaXNEZW1vRW50cnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC5qcycpLFxuICAgICAgICAgIHRleHQ6ICdleHBvcnQgZGVmYXVsdCAoKSA9PiB7IGRvY3VtZW50LmJvZHkuYXBwZW5kKFwidGVzdGRldmVudi1zb21lLWRlcFwiKTsgfTsnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG9uU3RkZXJyOiAoZGF0YSkgPT4ge1xuICAgICAgICBub3RGb3VuZEVycm9yID0gbm90Rm91bmRFcnJvciB8fCBkYXRhLmluZGV4T2YoYE1vZHVsZSBub3QgZm91bmQ6IEVycm9yOiBDYW4ndCByZXNvbHZlICcke2ltcG9ydFRvQXR0ZW1wdH0nYCkgIT09IC0xO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBpdCgnd2VicGFjayBidW5kbGluZyB0aHJvd3MgZXJyb3IgZm9yIG5vbi1leGlzdGVudCBpbXBvcnRzIHdpdGhpbiBhc3NldHMnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwobm90Rm91bmRFcnJvciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnRUb0J1bmRsZSA9IG1ha2VVdWlkKCk7XG4gICAgbGV0IGJ1bmRsZUhhc0NvbnRlbnQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nU2VydmVyKHtcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBpbXBvcnQgYnVuZGxpbmcnLCAoKSA9PiB7XG4gICAgICBhc3NlcnQuZXF1YWwoYnVuZGxlSGFzQ29udGVudCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdleGlzdGVudCBpbXBvcnRzIHdpdGggbnBtLXNjb3BpbmcnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgYnVuZGxlSGFzQ29udGVudCA9IGZhbHNlO1xuICAgIGNvbnN0IGltcG9ydFRvQXR0ZW1wdCA9ICd0ZXN0ZGV2ZW52LXNvbWUtZGVwJztcbiAgICBkdXJpbmdTZXJ2ZXIoe1xuICAgICAgYXNzZXRzVG9HZW5lcmF0ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKG1vbm9yZXBvRGlyLCAnLi9wYWNrYWdlcy90ZXN0ZGV2ZW52LW1haW4vdGVzdGRldmVudi1tYWluLmpzJyksXG4gICAgICAgICAgdGV4dDogYGltcG9ydCBzb21lRGVwIGZyb20gJ0Bzb21lLW5wbS1zY29wZS8ke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25Bc3NldDogKHJlc291cmNlKSA9PiB7XG4gICAgICAgIGJ1bmRsZUhhc0NvbnRlbnQgPSBidW5kbGVIYXNDb250ZW50IHx8IHJlc291cmNlLnRleHQuaW5kZXhPZihjb250ZW50VG9CdW5kbGUpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ2J1bmRsZUhhc0NvbnRlbnQgcHJvdmluZyBucG0tc2NvcGVkIGltcG9ydCBidW5kbGluZycsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbChidW5kbGVIYXNDb250ZW50LCB0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Rlc3QnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudFRvQnVuZGxlID0gbWFrZVV1aWQoKTtcbiAgICBsZXQgdGVzdHNQYXNzZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpbXBvcnRUb0F0dGVtcHQgPSAndGVzdGRldmVudi1zb21lLWRlcCc7XG4gICAgZHVyaW5nVGVzdCh7XG4gICAgICB0ZXN0UGF0aFBhdHRlcm46ICcuKi90ZXN0ZGV2ZW52LXNvbWUtZGVwLy4qJyxcbiAgICAgIGFzc2V0c1RvR2VuZXJhdGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1tYWluL3Rlc3RkZXZlbnYtbWFpbi5qcycpLFxuICAgICAgICAgIHRleHQ6IGBpbXBvcnQgc29tZURlcCBmcm9tICcke2ltcG9ydFRvQXR0ZW1wdH0nO1xcbjtzb21lRGVwKCk7YCxcbiAgICAgICAgICBpc0RlbW9FbnRyeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHBhdGgucmVzb2x2ZShtb25vcmVwb0RpciwgJy4vcGFja2FnZXMvdGVzdGRldmVudi1zb21lLWRlcC90ZXN0ZGV2ZW52LXNvbWUtZGVwLmpzJyksXG4gICAgICAgICAgdGV4dDogYGV4cG9ydCBkZWZhdWx0ICgpID0+IHsgZG9jdW1lbnQuYm9keS5hcHBlbmQoJyR7Y29udGVudFRvQnVuZGxlfScpOyB9O2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBwYXRoLnJlc29sdmUobW9ub3JlcG9EaXIsICcuL3BhY2thZ2VzL3Rlc3RkZXZlbnYtc29tZS1kZXAvdGVzdGRldmVudi1zb21lLWRlcC50ZXN0LmpzJyksXG4gICAgICAgICAgdGV4dDogJ3Rlc3QoXCJhZGRzIDEgKyAyIHRvIGVxdWFsIDNcIiwgKCkgPT4geyBleHBlY3QoMSArIDIpLnRvQmUoMyk7IH0pOycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgb25TdGRlcnI6IChkYXRhKSA9PiB7XG4gICAgICAgIHRlc3RzUGFzc2VkID0gdGVzdHNQYXNzZWQgfHwgZGF0YS5pbmRleE9mKCcxIHBhc3NlZCwgMSB0b3RhbCcpICE9PSAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaXQoJ3Rlc3R0ZXN0dGVzdCcsICgpID0+IHtcbiAgICAgIGFzc2VydC5lcXVhbCh0ZXN0c1Bhc3NlZCwgdHJ1ZSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0ZGV2ZW52Mi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhbGtcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3ItcGFpcnMtcGlja2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3ItcGFpcnMtcGlja2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhhcy1hbnNpXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGFzLWFuc2lcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==