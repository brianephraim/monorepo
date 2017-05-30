import { argv } from 'yargs';
const env = argv.env;
const generateWebpackConfig = require("./generate.webpack.config.babel").default;



//
// const compiler = Webpack(generateWebpackConfig(argv)); 

// if (env === 'build'){
//   compiler.run((err, stats) => {
//     if (err) {
//       console.warn(err);
//     } else {
//       // console.log(stats);
//     }
//   });
// } else {
  // const server = new WebpackDevServer(compiler, {
  //   stats: {
  //     colors: true
  //   }
  // });

  // server.listen(8080, "127.0.0.1", function() {
  //   console.log("Starting server on http://localhost:8080");
  // });
// }

// =======
// =======
// =======
// =======
console.log('__dirname',__dirname,process.cwd());

import path from 'path';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import url from 'url';
// import config from './webpack.config.babel';
// import url from 'url';

const app = express();
const port = 3000;
const config = generateWebpackConfig(argv);
const compiler = webpack(config);
if (env === 'build'){
  compiler.run((err, stats) => {
    if (err) {
      console.warn(err);
    } else {
      // console.log(stats);
    }
  });
} else {
  app.use(function(req, res, next) {
    const urlSplit = url.parse(req.url).pathname.split('/');
    console.log('AAAAAAA',urlSplit);
    const lastPart = urlSplit[urlSplit.length - 1];
    const lastPartContainsDot = lastPart.indexOf('.') !== -1;
    const lastPartContainsDotHtml = lastPart.indexOf('.html') !== -1;
    console.log('lastPartContainsDot',lastPartContainsDot);
    console.log('lastPartContainsDotHtml',lastPartContainsDotHtml);
    if (!lastPartContainsDot || lastPartContainsDotHtml) {
      console.log('bbbbbb')
      req.url = '/';
    }
    next();
  });

  console.log('config.output.publicPath',config.output.publicPath)
  app.use(webpackDevMiddleware(compiler, {
    // noInfo: true,
    // publicPath: '/',
    // publicPath: "/assets/",
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
  }));


  // const server = new webpackDevServer(compiler, {
  //   stats: {
  //     colors: true
  //   },
  //   publicPath: '/',
  //   setup: function(app) {
  //     app.use(function(req, res, next) {
  //       console.log(`Using middleware for ${req.url}`);
  //       next();
  //     });
  //   }
  // });
  // server.listen(8080, "127.0.0.1", function() {
  //   console.log("Starting server on http://localhost:8080");
  // });


  app.use('/images', express.static('packages/images'));
  app.use('/fonts', express.static('packages/fonts'));
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

  app.listen(port, error => {
    /* eslint-disable no-console */
    if (error) {
      console.error(error);
    } else {
      console.info(
        '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
        port,
        port
      );
    }
    /* eslint-enable no-console */
  });
}
