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
  console.log('config.output.publicPath',config.output.publicPath)
  app.use(webpackDevMiddleware(compiler, {
    // noInfo: true,
    publicPath: '/assets/',
    // publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
  }));

  app.use('/images', express.static('packages/images'));
  app.use('/fonts', express.static('packages/fonts'));
  // app.get(new RegExp('^[/](images|fonts)[/](.+)'), (req, res) => {
  //   res.sendFile(path.join(__dirname, `packages${url.parse(req.url).pathname}`));
  // });

  app.get('/*', (req, res) => {
    console.log(url.parse(req.url).pathname);
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });
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
