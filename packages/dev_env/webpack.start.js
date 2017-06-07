/* eslint-disable no-console */

import { argv } from 'yargs';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import url from 'url';
import generateWebpackConfig from './generate.webpack.config.babel';

import testSetup from './testSetup';

const env = argv.env;

const doWebpack = true;
const doTest = env !== 'build';

if (!doWebpack && doTest) {
  testSetup();
}


if (doWebpack) {
  const app = express();
  const port = 3000;
  const config = generateWebpackConfig(argv);
  const compiler = webpack(config);
  if (env === 'build' || env === 'node') {
    compiler.run((err/* , stats*/) => {
      if (err) {
        console.warn(err);
      } else {
        // console.log(stats);
      }
    });
  } else {
    if (doTest) {
      testSetup();
    }
    app.use((req, res, next) => {
      const urlSplit = url.parse(req.url).pathname.split('/');
      const lastPart = urlSplit[urlSplit.length - 1];
      const lastPartContainsDot = lastPart.indexOf('.') !== -1;
      const lastPartContainsDotHtml = lastPart.indexOf('.html') !== -1;
      if (!lastPartContainsDot || lastPartContainsDotHtml) {
        req.url = '/';
      }
      next();
    });

    console.info('🔷 Starting webpack ...');
    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true,
      },
    }));

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

    app.listen(port, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.info(
          '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
          port,
          port,
        );
      }
    });
  }
}
