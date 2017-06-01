'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _stringReplaceWebpackPlugin = require('string-replace-webpack-plugin');

var _stringReplaceWebpackPlugin2 = _interopRequireDefault(_stringReplaceWebpackPlugin);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _nodeSassJsonImporter = require('node-sass-json-importer');

var _nodeSassJsonImporter2 = _interopRequireDefault(_nodeSassJsonImporter);

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _directoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

var _directoryNamedWebpackPlugin2 = _interopRequireDefault(_directoryNamedWebpackPlugin);

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // import glob from 'glob';


var devHtmlPath = './index.html';

exports.default = function (argv) {
  console.log('argv', argv);
  var env = argv.env;

  var dirRoot = process.cwd();

  var packageJson = _fsExtra2.default.readJsonSync(dirRoot + '/package.json');

  var username = null;
  if (packageJson.repository && packageJson.repository.url) {
    username = packageJson.repository.url.replace('://').split('/')[1];
  }

  var libraryName = packageJson.name;

  var plugins = [];
  var pluginRegistry = {};
  function registerPlugin(name, plugin) {
    if (!pluginRegistry[name]) {
      plugins.push(plugin);
      pluginRegistry[name] = true;
      return true;
    }
    return false;
  }

  function conditionalExtractTextLoaderCss(usePlugin, moreLoaderParams) {
    if (usePlugin) {
      registerPlugin('ExtractTextPlugin', new _extractTextWebpackPlugin2.default('[name].css'));
      return { use: _extractTextWebpackPlugin2.default.extract(moreLoaderParams) };
    }
    return {
      use: [moreLoaderParams.fallback].concat(_toConsumableArray(moreLoaderParams.use))
    };
  }

  var outputFiles = {};
  if (env === 'build') {
    outputFiles.library = 'dist/' + libraryName;
    outputFiles.libraryMin = 'dist/' + libraryName + '.min';
    outputFiles.demo = 'demo/index';
  } else {
    outputFiles.demo = 'boot';
    outputFiles.library = '' + libraryName;
  }

  var entryFiles = _extends(_defineProperty({
    MainApp: _globby2.default.sync([dirRoot + '/packages/MainApp/MainApp.js'])
  }, outputFiles.library, _globby2.default.sync([dirRoot + '/src/library/index.js'])), outputFiles.libraryMin ? _defineProperty({}, outputFiles.libraryMin, _globby2.default.sync([dirRoot + '/src/library/index.js'])) : {}, _defineProperty({}, outputFiles.demo, _globby2.default.sync([dirRoot + '/**/*/*.demo.js', dirRoot + '/**/*/demo.js', '!' + dirRoot + '/packages/**/*', dirRoot + '/packages/MainApp/MainApp.js'])));
  var entry = Object.keys(entryFiles).reduce(function (accum, entryName) {
    if (entryFiles[entryName].length) {
      accum[entryName] = entryFiles[entryName];
    }
    return accum;
  }, {});

  // entry[outputFiles.library] = entryFiles.library;
  // if (outputFiles.libraryMin) {
  //   entry[outputFiles.libraryMin] = entryFiles.library;
  // }
  // entry[outputFiles.demo] = entryFiles.demo;

  // if (isLerna) {
  //   // /Users/brianephraim/Sites/todos-tacos/packages/MainApp/MainApp.js
  //   entry = {
  //     MainApp: './packages/MainApp/MainApp.js',
  //   };
  // }

  function moveModify(source, modifyPath, modifyContent) {
    var sources = [];
    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
      sources = source;
    } else {
      sources.push(source);
    }
    var toCopy = [];
    sources.forEach(function (pattern) {
      toCopy = [].concat(_toConsumableArray(toCopy), _toConsumableArray(_globby2.default.sync(pattern)));
    });
    toCopy.forEach(function (filePath) {
      var filePathOut = filePath;
      if (modifyPath) {
        filePathOut = modifyPath(filePath);
      }
      var content = _fsExtra2.default.readFileSync(filePath, 'utf8');
      if (modifyContent) {
        content = modifyContent(content, filePath, filePathOut);
      }
      _fsExtra2.default.outputFileSync(filePathOut, content);
    });
  }

  if (env === 'build') {
    moveModify(['src/import-examples/**/!(webpack.config).*', 'src/tonicExample.js'], function (filePath) {
      return filePath.replace('src/', './');
    }, function (content) {
      return content.replace(/LIBRARYNAME/g, libraryName);
    });

    registerPlugin('UglifyJsPlugin', new _webpack2.default.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }));
    var indexHtmlSettings = {
      chunks: [outputFiles.demo],
      template: 'src/demo/index.ejs',
      title: 'afasdfasdfasd',
      username: username,
      libraryName: libraryName
    };
    registerPlugin('demoIndex-HtmlWebpackPlugin', new _htmlWebpackPlugin2.default(_extends({
      filename: './demo/index.html'
    }, indexHtmlSettings)));
    registerPlugin('rootIndex-HtmlWebpackPlugin', new _htmlWebpackPlugin2.default(_extends({
      filename: './index.html'
    }, indexHtmlSettings)));
  } else {
    registerPlugin('demoDevIndex-HtmlWebpackPlugin', new _htmlWebpackPlugin2.default({
      chunks: [outputFiles.demo],
      filename: devHtmlPath
    }));
  }
  registerPlugin('StringReplacePlugin', new _stringReplaceWebpackPlugin2.default());

  registerPlugin('LoaderOptionsPlugin', new _webpack2.default.LoaderOptionsPlugin({
    options: {
      sassLoader: {
        importer: _nodeSassJsonImporter2.default
      },
      context: dirRoot
    }
  }));

  var config = {
    entry: entry,
    devtool: env === 'build' ? 'source-map' : 'eval',
    output: {
      path: '' + dirRoot,
      filename: '[name].js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      publicPath: '/'
    },
    module: {
      rules: [{
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // include: `${dirRoot}`,
        options: {
          presets: [['es2015',
          // needed for tree shaking
          { modules: false }], 'react'],
          plugins: ['transform-es2015-spread', 'transform-object-rest-spread'],
          // mocha needs .babelrc,
          // and .babelrc cannot use the above config
          // so ignore .babelrc here
          babelrc: false
        }
      }, _extends({
        test: /\.css$/
      }, conditionalExtractTextLoaderCss(env === 'build', {
        fallback: 'style-loader',
        use: ['css-loader']
      })), _extends({
        test: /\.scss$/
      }, conditionalExtractTextLoaderCss(env === 'build', {
        fallback: 'style-loader',
        use: ['css-loader?sourceMap', {
          loader: 'sass-loader?sourceMap',
          // Apply the JSON importer via sass-loader's options.
          options: {
            importer: _nodeSassJsonImporter2.default
          }
        }]
      })), {
        test: /\.json$/,
        loaders: ['json-loader']
      }, {
        test: /\.ejs$/,
        loader: 'ejs-compiled-loader'
      }, {
        test: /\.md/,
        loaders: ['html-loader', 'markdown-loader']
      }, {
        test: /\.js|\.html|\.ejs$/,
        loader: _stringReplaceWebpackPlugin2.default.replace({
          replacements: [{
            pattern: /LIBRARYNAME/g,
            replacement: function replacement() /* match, p1, offset, string */{
              return libraryName;
            }
          }]
        })
      }]
    },
    resolve: {
      modules: [_path2.default.resolve('./src/library'), _path2.default.resolve(process.cwd(), 'packages'),
      // path.resolve('./packages'),
      'node_modules'],
      extensions: ['.js'],
      plugins: [new _directoryNamedWebpackPlugin2.default(true)]
    },
    plugins: plugins
  };

  _fsExtra2.default.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
};