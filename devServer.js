import path from 'path';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from './webpack.config.babel';
// import url from 'url';

const app = express();
const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use('/images', express.static('packages/images'));
app.use('/fonts', express.static('packages/fonts'));
// app.get(new RegExp('^[/](images|fonts)[/](.+)'), (req, res) => {
//   res.sendFile(path.join(__dirname, `packages${url.parse(req.url).pathname}`));
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

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
