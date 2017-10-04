import express from 'express';
import { argv } from 'yargs';
import demoEndpoints from './universal/server/demoEndpoints';
import path from 'path';
import fs from 'fs-extra';

function asyncRecurseStartApps(app,serverNamespaces) {
  return new Promise((resolve) => {
    let i = 0;
    function recurse(backendAppNamespace) {
      // I want to specify additional express servers to integrate from command line.
      // I can accomplish this with Webpack's code-splitting .
      // I tried import(...) but it wouldn't work in my compiled node situation.
      // require.ensure works.
      require.ensure([], (require) => {
        /* eslint-disable import/no-dynamic-require */
        const someBackendApp = require(`../../packages/${backendAppNamespace}/${backendAppNamespace}.express`);
        /* eslint-enable import/no-dynamic-require */
        const serveBackendApp = someBackendApp.default || someBackendApp;
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



function startWebpack(app,renderAndUse) {
  /* eslint-disable no-console */
  console.log('SERVE');
  /* eslint-enable no-console */
  app.use('/images', express.static('packages/images'));
  app.use('/fonts', express.static('packages/fonts'));
  demoEndpoints({app}) 
  renderAndUse(app);
  const port = process.env.PORT || 3000;
  app.listen(port, (error) => {
    /* eslint-disable no-console */
    if (error) {
      console.error(error);
    } else {
      console.info(
        '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
        port,
        port,
      );
    }
    /* eslint-enable no-console */
  });
  return app;
}

export default function startServer(renderAndUse) {
  const serverNamespaces = argv.servers && argv.servers.split(',');
  const app = express();
  if (serverNamespaces) {
    asyncRecurseStartApps(app,serverNamespaces).then(() => {
      startWebpack(app,renderAndUse)
    });
  } else {
    startWebpack(app,renderAndUse)
  }
  // startWebpack(express())
}
