/* eslint-disable camelcase */
import child_process from 'child_process';
import path from 'path';
import jestConfig from './jestConfig';

console.log('TEST SETUP xxxx', __dirname);


// console.log(path.resolve(__dirname,'./'));
// const config = `"${JSON.stringify(getJestConfig).replace(/"/g, '\\"')}"`;
// const config = `${JSON.stringify(getJestConfig).replace(/"/g, '\\"')}`;
const config = `'${JSON.stringify(jestConfig).replace(/'/g, "\\'")}'`;
console.log(config);
const configPath = `${__dirname}/jestConfig.js`;
// qwer();



export default () => {

  const command = 'sh';

  const args = [
    '-c',
    // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
    `CI=true ${process.cwd()}/node_modules/.bin/jest --watch --config=${configPath}`,
  ];

  const proc = child_process.spawn(command, args, { stdio: 'inherit' });
  proc.on('exit', (code, signal) => {
    process.on('exit', () => {
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });
};
