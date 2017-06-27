/* eslint-disable camelcase */
import child_process from 'child_process';

// import jestConfig from './jestConfig';
// const config = `'${JSON.stringify(jestConfig).replace(/'/g, "\\'")}'`;

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
