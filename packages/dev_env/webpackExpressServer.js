import express from 'express';
import { argv } from 'yargs';
import demoEndpoints from './universal/server/demoEndpoints';
import startUniversalExpress from './startUniversalExpress';
import bernieServer from '@defualt/bernieserver/bernieserver.express';
import junkServer from '@defualt/junk-express/junk-express.express';

function startWebpack(app) {
  /* eslint-disable no-console */
  console.log('SERVE');
  /* eslint-enable no-console */
  app.use('/images', express.static('packages/images'));
  app.use('/fonts', express.static('packages/fonts'));
  demoEndpoints({app}) 
  startUniversalExpress(app);
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

function asyncRecurseStartApps(app,serverNamespaces) {
  // I want to asynchronously load these endpoint modules.
  // but this is tricky.  Fix this later.
  const extraServers = {
    bernieserver: bernieServer,
    'junk-express': junkServer,
  };
  return new Promise((resolve) => {
    let i = 0;
    function recurse(backendAppNamespace) {
      const someBackendApp = extraServers[backendAppNamespace];
      // const someBackendApp = __non_webpack_require__(path.resolve(__xdirname, `../../packages/${backendAppNamespace}/${backendAppNamespace}.express`));
      // import(`../../packages/${backendAppNamespace}/${backendAppNamespace}.express`).then((someBackendApp) => {
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
      // });
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
