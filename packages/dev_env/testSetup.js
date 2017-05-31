/* eslint-disable camelcase */
import child_process from 'child_process';

export default () => {
  console.log('LETS TEST STUFF');
  const command = 'sh';

  const configJSONString = JSON.stringify({
    testMatch: ['**/?(*.)(test).js?(x)'],
  });
  console.log('configJSONString',configJSONString)
  const args = [
    '-c',
    // `${__dirname}/node_modules/.bin/jest`,
    `${__dirname}/node_modules/.bin/jest --config='${configJSONString}'`,
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
