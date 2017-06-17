/* eslint-disable no-console */
import { argv } from 'yargs';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import url from 'url';
import shellCommand from './pre-webpack/shell-command';
import generateWebpackConfig from './webpack.config.babel';
import parseStatsForDependencyProblems from './parseStatsForDependencyProblems';
import testSetup from './testSetup';

const env = argv.env;
const item = argv.item;

const doWebpack = true;
if (item) {
  console.log('aaaa', argv);
  shellCommand(`(cd ./packages/${item} && npm run start)`);
} else if (env === 'test') {
  testSetup();
} else if (doWebpack) {
  const app = express();
  const port = 3000;
  const config = generateWebpackConfig;
  const compiler = webpack(config);
  if (env === 'build' || argv.entry) {
    compiler.run((err, stats) => {
      // parseStatsForDependencyProblems(stats);
      // fs.writeFileSync(process.cwd() + '/_webpack_stats.json',JSON.stringify(stats, null, 2));

      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      const info = stats.toJson();

      if (stats.hasErrors()) {
        info.errors.forEach((e) => {
          console.error('\x1b[31m', e, '\x1b[0m');
        });
      }

      if (stats.hasWarnings()) {
        info.warnings.forEach((w) => {
          console.warn('\x1b[33m', w, '\x1b[0m');
        });
      }
    });
  } else {
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

    const activeWebpackDevMiddleware = webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true,
      },
    });
    activeWebpackDevMiddleware.waitUntilValid((stats) => {
      parseStatsForDependencyProblems(stats);
    });

    app.use(activeWebpackDevMiddleware);

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
