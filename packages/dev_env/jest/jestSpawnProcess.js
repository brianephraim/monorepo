/* eslint-disable camelcase */
import child_process from 'child_process';
import path from 'path';

// import jestConfig from './jestConfig';
// const config = `'${JSON.stringify(jestConfig).replace(/'/g, "\\'")}'`;

const configPath = `${__dirnameWhenCompiled}/jestConfig.js`;
// const configBasePath = `${__dirnameWhenCompiled}/jestConfigBase.js`;
// qwer();

export default (testdevenv, watch = true, testPathPattern) => {
  const command = 'sh';
  // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
  let commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest --watch=${watch && watch !== 'false' ? 'true' : 'false'} --config=${configPath}${testPathPattern ? [" --testPathPattern='",testPathPattern,"'"].join('') : ''}`;
  if (testdevenv) {
    // commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest -t testdevenv --config=${configBasePath}`;
    // commandBody = `CI=true ${process.cwd()}/node_modules/.bin/jest ${__dirnameWhenCompiled}/testdevenv.js  --config=${configBasePath}`;
    commandBody = `CI=true ${process.cwd()}/node_modules/.bin/mocha-webpack --colors --require babel-core/register --webpack-config ${path.resolve(__dirnameWhenCompiled, '../core/webpackConfigMocha.js')} \"${path.resolve(__dirnameWhenCompiled, './testdevenv2.js')}\" --require source-map-support/register`;
  }
  const args = [
    '-c',
    commandBody,
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
