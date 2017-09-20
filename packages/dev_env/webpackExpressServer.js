/* eslint-disable no-console */

import express from 'express';
import { argv } from 'yargs';
import demoEndpoints from './universal/server/demoEndpoints';
import startUniversalExpress from './startUniversalExpress';

function startWebpack(app) {
  console.log('SERVE');
  // This module either extends an existing express app
  // or creates a new express app


  demoEndpoints({app})
  startUniversalExpress({app});

  app.use('/images', express.static('packages/images'));
  app.use('/fonts', express.static('packages/fonts'));

  const port = 3000;
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

  return app;
}


function asyncRecurseStartApps(app,serverNamespaces) {
  return new Promise((resolve, reject) => {
    let i = 0;
    function recurse(backendAppNamespace) {
      System.import(`../../packages/${backendAppNamespace}/${backendAppNamespace}.express`).then((someBackendApp) => {
        const serveBackendApp = someBackendApp.default;
        const backendAppSettings = {
          nameSpace: backendAppNamespace,
        };
        backendAppSettings.app = app;
        serveBackendApp(backendAppSettings);
        const nextNamespace = serverNamespaces[++i];
        if (nextNamespace) {
          recurse(nextNamespace);
        } else {
          resolve(app);
        }
      });
    }
    recurse(serverNamespaces[i]);
  });  
}

export default function () {
  const serverNamespaces = argv.servers && argv.servers.split(',');
  const app = express();
  if (serverNamespaces) {
    asyncRecurseStartApps(app,serverNamespaces).then(startWebpack);
  } else {
    startWebpack(app)
  }
}


