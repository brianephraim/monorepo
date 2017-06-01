'use strict';

var _yargs = require('yargs');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _generateWebpackConfig = require('./generate.webpack.config.babel');

var _generateWebpackConfig2 = _interopRequireDefault(_generateWebpackConfig);

var _testSetup = require('./testSetup');

var _testSetup2 = _interopRequireDefault(_testSetup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = _yargs.argv.env; /* eslint-disable no-console */

var doWebpack = true;
var doTest = env !== 'build';

if (doTest) {
  (0, _testSetup2.default)();
}

if (doWebpack) {
  var app = (0, _express2.default)();
  var port = 3000;
  var config = (0, _generateWebpackConfig2.default)(_yargs.argv);
  var compiler = (0, _webpack2.default)(config);
  if (env === 'build') {
    compiler.run(function (err /* , stats*/) {
      if (err) {
        console.warn(err);
      } else {
        // console.log(stats);
      }
    });
  } else {
    app.use(function (req, res, next) {
      var urlSplit = _url2.default.parse(req.url).pathname.split('/');
      var lastPart = urlSplit[urlSplit.length - 1];
      var lastPartContainsDot = lastPart.indexOf('.') !== -1;
      var lastPartContainsDotHtml = lastPart.indexOf('.html') !== -1;
      if (!lastPartContainsDot || lastPartContainsDotHtml) {
        req.url = '/';
      }
      next();
    });

    console.info('🔷 Starting webpack ...');
    app.use((0, _webpackDevMiddleware2.default)(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      }
    }));

    app.use('/images', _express2.default.static('packages/images'));
    app.use('/fonts', _express2.default.static('packages/fonts'));
    // app.get(new RegExp('^[/](images|fonts)[/](.+)'), (req, res) => {
    //   res.sendFile(path.join(__dirname, `packages${url.parse(req.url).pathname}`));
    // });

    // app.get('/*', (req, res) => {
    //   console.log(url.parse(req.url).pathname);
    //   res.sendFile(path.join(process.cwd(), 'index.html'));
    // });

    // app.get(new RegExp('/^\/(.*)\.html$'), (req, res) => {
    //   res.sendFile(path.join(process.cwd(), 'index.html'));
    // });

    app.listen(port, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.info('🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
      }
    });
  }
}