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
console.log('__dirname packages/dev_env/dev_env.js',__dirname)
const env = argv.env;
const item = argv.item;

if (item) {
  shellCommand(`(cd ./packages/${item} && npm run start)`);
} else if (env === 'test') {
  jestSpawnProcess(argv.testdevenv, argv.watch, argv.testPathPattern);
} else if (argv.entry) {
  webpackBuildCommandLine();
} else if (env === 'build') {
  webpackRunCompiler(webpack(webpackConfig()));  
} else {
  serveWebpack();
}
const serve = function ()   {
  serveWebpack.apply(this,arguments);
}
export { serve };