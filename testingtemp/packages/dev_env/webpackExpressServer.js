/* eslint-disable no-console */

import express from 'express';
import url from 'url';
import webpackMakeCompiler from './webpackMakeCompiler';

export default (app, port = 3000) => {
  // This module either extends an existing express app
  // or creates a new express app
  let appIsBrandNew = false;
  if (!app) {
    appIsBrandNew = true;
    app = express();
  }

  // SPA server support
  // All URLs that suggest an HTML file request get routed the same.
  app.use((req, res, next) => {
    const lastPartOfURL = url.parse(req.url).pathname.split('/').pop();
    const urlFormatSuggestsHtmlFileRequest = (
      lastPartOfURL.indexOf('.') === -1 || lastPartOfURL.indexOf('.html') !== -1
    );
    if (urlFormatSuggestsHtmlFileRequest) {
      req.url = '/';
    }
    next();
  });

  console.info('🔷 Starting webpack ...');

  app.use(webpackMakeCompiler(true));

  app.use('/images', express.static('packages/images'));
  app.use('/fonts', express.static('packages/fonts'));

  // Some Express code I don't want to lose yet.
  /*
  app.get(new RegExp('^[/](images|fonts)[/](.+)'), (req, res) => {
    res.sendFile(path.join(__dirname, `packages${url.parse(req.url).pathname}`));
  });

  app.get('/*', (req, res) => {
    console.log(url.parse(req.url).pathname);
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  app.get(new RegExp('/^\/(.*)\.html$'), (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });
  */

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
