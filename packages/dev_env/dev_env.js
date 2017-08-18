/* eslint-disable no-console */
import { argv } from 'yargs';
import shellCommand from './core/shellCommand';
import jestSpawnProcess from './jest/jestSpawnProcess';
import webpackMakeCompiler from './webpackMakeCompiler';
import webpackRunCompiler from './core/webpackRunCompiler';
import webpackBuildCommandLine from './core/webpackBuildCommandLine';
import serve from './webpackExpressServer.js';
// import isWithinMonoRepo from './core/isWithinMonoRepo');

const env = argv.env;
const item = argv.item;
console.log('NOTHING');
console.log(argv.nothing)
if (item) {
  shellCommand(`(cd ./packages/${item} && npm run start)`);
} else if (env === 'test') {
  jestSpawnProcess(argv.testdevenv, argv.watch, argv.testPathPattern);
} else if (argv.entry) {
  webpackBuildCommandLine();
} else if (env === 'build') {
  webpackRunCompiler(webpackMakeCompiler);
} else {
  if (argv.server) {

    const p = '/Users/brianephraim/Sites/monorepo/packages/bernieserver/bernieserver';
    const x = '.express';
    // const p = '/Users/brianephraim/Sites/monorepo/packages/bernieserver/bernieserver.express';
    // /Users/brianephraim/Sites/monorepo/packages/bernieserver/bernieserver.express
// argv.server
    // System.import('../bernieserver/bernieserver' + x).then((someServer) => {

    // let serverImport;
    // if (isWithinMonoRepo(__dirname) {
    //   serverImport = System.import('../../' + argv.server + '.express')
    // } else {
    //   serverImport = System.import('../../' + argv.server + '.express'
    // }


    System.import('../../' + argv.server + '.express').then((someServer) => {
    // System.import(p+'.express').then((someServer) => {
    // System.import(argv.server+'.express').then((someServer) => {
    // System.import('/Users/brianephraim/Sites/monorepo/packages/bernieserver/bernieserver'+'.express').then((someServer) => {
    // System.import(argv.server + '.express.js').then((someServer) => {
      const serveBernieBackend = someServer.default;


      // const dev_envServed = serve();
      // const bernieBackendServed = serveBernieBackend(dev_envServed);

      const bernieBackendServed = serveBernieBackend({
        nameSpace: 'bernieBackend'
      });
      const dev_envServed = serve({
        app: bernieBackendServed,
        nameSpaces: ['bernieBackend'],
      });
    });
  }
  else {
    serve({});
  }
  // serve();
}

export { serve };