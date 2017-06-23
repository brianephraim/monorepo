import { argv } from 'yargs';
import publish from './src/publish';
import initPackage from './src/initPackage';

console.log('x',argv);

if (argv.m) {
  publish();
}

if (argv.i) {
  initPackage();
}
