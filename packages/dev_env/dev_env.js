/* eslint-disable no-console */
import { argv } from 'yargs';
import shellCommand from './core/shellCommand';
import jestSpawnProcess from './jest/jestSpawnProcess';
import webpackMakeCompiler from './webpackMakeCompiler';
import webpackRunCompiler from './core/webpackRunCompiler';
import webpackBuildCommandLine from './core/webpackBuildCommandLine';
import serve from './webpackExpressServer.js';

const env = argv.env;
const item = argv.item;
if (item) {
  shellCommand(`(cd ./packages/${item} && npm run start)`);
} else if (env === 'test') {
  jestSpawnProcess(argv.testdevenv, argv.watch, argv.testPathPattern);
} else if (argv.entry) {
  webpackBuildCommandLine();
} else if (env === 'build') {
  webpackRunCompiler(webpackMakeCompiler);
} else {
  // if (argv.server) {
  //   const p = '/Users/brianephraim/Sites/monorepo/packages/bernieserver/bernieserver';
  //   System.import(p).then((someServer) => {
  //   // System.import(argv.server + '.express.js').then((someServer) => {
  //     console.log('someServersomeServersomeServersomeServer',someServer);
  //     serve(serv);
  //   });
  // }
  // else {
  //   serve();
  // }
  serve();
}

export { serve };