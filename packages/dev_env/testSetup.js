/* eslint-disable camelcase */
import child_process from 'child_process';

export default () => {
  const command = 'sh';

  const configJSONString = JSON.stringify({
    testMatch: ['**/?(*.)(test).js?(x)'],
  });
  const args = [
    '-c',
    // `${__dirname}/node_modules/.bin/jest`,
    // `${__dirname}/node_modules/.bin/jest --config='${configJSONString}'`,

    // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
    `CI=true ${process.cwd()}/node_modules/.bin/jest --watch --config=${process.cwd()}/jest.config.js`,
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
