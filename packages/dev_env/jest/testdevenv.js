/* eslint-disable no-console */
import path from 'path';
import { spawn } from 'child_process';
import shellCommand from '../shell-command';

console.log('shellCommandshellCommandshellCommand',shellCommand)
// import sum from 'sum';
// import aaa8 from '@defualt/aaa8';
// console.log('logging from testdevenv.js');
test('testdevenv adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('dev', () => {
  // const aaaDir = path.resolve(__dirname, '../../aaa8');
  const monorepoDir = path.resolve(__dirname, '../../../');
  const testingTempDir = path.resolve(monorepoDir, './testingtemp');
  const testingTempPackagesDir = path.resolve(testingTempDir, './packages');
  console.log('testingTempDir',testingTempDir);
  // const command = ``;
  // const ls = shellCommand('ls -lh /usr', null);
  const ls = shellCommand(`
    (
      mkdir ${testingTempDir}
      cp ${path.resolve(monorepoDir, './package.json')} ${path.resolve(testingTempDir, './package.json')}
      mkdir ${testingTempPackagesDir}
      # rsync -r -K -a ${path.resolve(monorepoDir, './packages/dev_env')} ${path.resolve(testingTempPackagesDir, './')}
      cp -a ${path.resolve(monorepoDir, './packages/dev_env')} ${path.resolve(testingTempPackagesDir, './dev_env')}
      mkdir ${path.resolve(testingTempPackagesDir, './MainApp')}
      echo "console.log('hello there');" > ${path.resolve(testingTempPackagesDir, './MainApp/MainApp.js')}
      echo "import './MainApp';" > ${path.resolve(testingTempPackagesDir, './MainApp/demo.js')}
      cd ${testingTempDir}
      npm run dev
    )
  `, null);
  // spawn('ls', ['-lh', '/usr']);

  ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });

  // ls.stderr.on('data', function (data) {
  //   console.log('stderr: ' + data.toString());
  // });

  ls.on('exit', function (code) {
    // shellCommand(`rm -rf ${testingTempDir}`);
    console.log('child process exited with code ' + code.toString());
  });

  expect(1 + 2).toBe(3);
});
