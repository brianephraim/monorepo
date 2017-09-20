/* eslint-disable no-console */
import webpack from 'webpack';
import { argv } from 'yargs';
import shellCommand from './core/shellCommand';
import jestSpawnProcess from './jest/jestSpawnProcess';
import webpackRunCompiler from './core/webpackRunCompiler';
import webpackBuildCommandLine from './core/webpackBuildCommandLine';
import serveWebpack from './webpackExpressServer.js';
import webpackConfig from './webpackConfig'; 
// import isWithinMonoRepo from './core/isWithinMonoRepo');
 
const env = argv.env;
const item = argv.item;

function asyncRecurseStartApps(serverNamespaces) {
  let lastBackendApp = null;
  let i = 0;
  function recurse(backendAppNamespace) {
    System.import(`../../packages/${backendAppNamespace}/${backendAppNamespace}.express`).then((someBackendApp) => {
      const serveBackendApp = someBackendApp.default;
      const backendAppSettings = {
        nameSpace: backendAppNamespace,
      };
      if (lastBackendApp) {
        backendAppSettings.app = lastBackendApp;
      }
      const backendAppServed = serveBackendApp(backendAppSettings);
      lastBackendApp = backendAppServed;
      const nextNamespace = serverNamespaces[++i];
      if (nextNamespace) {
        recurse(nextNamespace);
      } else {
        serveWebpack({
          app: backendAppServed,
        });
      }
    });
  }
  recurse(serverNamespaces[i]);
}

if (item) {
  shellCommand(`(cd ./packages/${item} && npm run start)`);
} else if (env === 'test') {
  jestSpawnProcess(argv.testdevenv, argv.watch, argv.testPathPattern);
} else if (argv.entry) {
  webpackBuildCommandLine();
} else if (env === 'build') {
  webpackRunCompiler(webpack(webpackConfig));
} else if (argv.servers) {
  const serverNamespaces = argv.servers.split(',');
  asyncRecurseStartApps(serverNamespaces);
} else {
  serveWebpack({});
}
const serve = function ()   {
  serveWebpack.apply(this,arguments);
}
export { serve };