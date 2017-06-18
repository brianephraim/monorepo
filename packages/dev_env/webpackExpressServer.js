import express from 'express';
import url from 'url';
import webpackCompile from './webpackCompile';

export default (app, port = 3000) => {
  let appIsBrandNew = false;
  if (!app) {
    appIsBrandNew = true;
    app = express();
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

  app.use(webpackCompile(true));

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
  if (appIsBrandNew) {
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

  return app;
};
