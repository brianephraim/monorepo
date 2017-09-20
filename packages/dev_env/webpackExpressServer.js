/* eslint-disable no-console */

import express from 'express';
import url from 'url';
import { argv } from 'yargs';
import webpackMakeCompiler from './webpackMakeCompiler';

import demoEndpoints from './universal/server/demoEndpoints';
import startUniversalExpress from './startUniversalExpress';


export default ({app, port = 3000}) => {
  
  console.log('SERVE');
  // This module either extends an existing express app
  // or creates a new express app
  let appIsBrandNew = false;
  if (!app) {
    appIsBrandNew = true;
    app = express();
  }

  demoEndpoints({app})
  startUniversalExpress({app});

  // if (isUniversal) {
  //   demoEndpoints({app})
  //   startUniversalExpress({app});
  // } else {
    
  //   webpackMakeCompiler(app)
  // }


  

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
    console.log('LISTEN UP',app);
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
