/* eslint-disable no-console */
import path from 'path';
import fs from 'fs-extra';
import walkSync from 'walk-sync';
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
  fs.removeSync(testingTempDir);
  fs.ensureDirSync(testingTempDir);
  fs.copySync(path.resolve(monorepoDir, './package.json'), path.resolve(testingTempDir, './package.json'));
  fs.ensureDirSync(testingTempPackagesDir);
  fs.removeSync(path.resolve(monorepoDir, './packages/dev_env/node_modulesBU'));
  fs.copySync(path.resolve(monorepoDir, './packages/dev_env/node_modules'), path.resolve(monorepoDir, './packages/dev_env/node_modulesBU'));
  var filepaths = walkSync(path.resolve(monorepoDir, './packages/dev_env/node_modules'));
  console.log(filepaths);
  console.log('TTT');
  console.log('TTT');
  console.log('TTT');
  console.log('TTT');
  console.log('TTT');
  filepaths.forEach((filepath) => {
    console.log('000000');
    filepath = path.resolve(monorepoDir,`./packages/dev_env/node_modules/${filepath}`);
    console.log('filepath',filepath)
    const stat = fs.lstatSync(filepath);
    console.log('stat',stat);
  //   console.log('stat',stat);
    console.log('isSymbolicLink',stat.isSymbolicLink())
    if (stat.isSymbolicLink()) {
      console.log('realpathSync', fs.realpathSync(filepath));
      const realPath = fs.realpathSync(filepath);
      fs.removeSync(filepath);
      fs.symlinkSync(realPath, filepath);
  //     console.log('SYMLINK PATH', filepath, '---', fs.realpathSync(filepath));
  //   }
  //   // if (stat.isSymbolicLink()) {
    }
  });
  
  // do symlink things
  fs.copySync(path.resolve(monorepoDir, './packages/dev_env'), path.resolve(testingTempPackagesDir, './dev_env'));
  fs.removeSync(path.resolve(monorepoDir, './packages/dev_env/node_modules'));
  fs.copySync(path.resolve(monorepoDir, './packages/dev_env/node_modulesBU'), path.resolve(monorepoDir, './packages/dev_env/node_modules'));
  fs.removeSync(path.resolve(monorepoDir, './packages/dev_env/node_modulesBU'));


  /*const ls = shellCommand(`
    
      mkdir ${testingTempDir}
      cp ${path.resolve(monorepoDir, './package.json')} ${path.resolve(testingTempDir, './package.json')}
      mkdir ${testingTempPackagesDir}
      # rsync -r -K -a ${path.resolve(monorepoDir, './packages/dev_env')} ${path.resolve(testingTempPackagesDir, './')}

        
        cp -a ${path.resolve(monorepoDir, './packages/dev_env/node_modules')} ${path.resolve(monorepoDir, './packages/dev_env/node_modulesBU')}
        # cd ${path.resolve(monorepoDir, './packages/dev_env/node_modules/.bin')}
        readlinkf(){ perl -MCwd=abs_path -le 'print abs_path readlink(shift);' "$1";}
        # find ${path.resolve(monorepoDir, './packages/dev_env/node_modules/.bin')} -type l -execdir bash -c 'echo "tttttttttttt"' {} \;
        echo 111111
        readlink /Users/brianephraim/Sites/monorepo/packages/dev_env/node_modules/.bin/babel-node
        find ${path.resolve(monorepoDir, './packages/dev_env/node_modules/.bin')} -type l -execdir bash -c 'echo "$(readlinkf "$0")" "$0"' {} \\;
        echo 222222
        readlink /Users/brianephraim/Sites/monorepo/packages/dev_env/node_modules/.bin/babel-node

      cp -a ${path.resolve(monorepoDir, './packages/dev_env')} ${path.resolve(testingTempPackagesDir, './dev_env')}
      rm -rf ${path.resolve(monorepoDir, './packages/dev_env/node_modules')}
      cp -a ${path.resolve(monorepoDir, './packages/dev_env/node_modulesBU')} ${path.resolve(monorepoDir, './packages/dev_env/node_modules')}
      rm -rf ${path.resolve(monorepoDir, './packages/dev_env/node_modulesBU')}
      # mkdir ${path.resolve(testingTempPackagesDir, './MainApp')}
      # echo "console.log('hello there');" > ${path.resolve(testingTempPackagesDir, './MainApp/MainApp.js')}
      # echo "import './MainApp';" > ${path.resolve(testingTempPackagesDir, './MainApp/demo.js')}
      # cd ${testingTempDir}
      # npm run dev
    
    echo "asdfasdfasdfasd"
    echo "asdfasdfasdfasd"
    echo "asdfasdfasdfasd"
    echo "asdfasdfasdfasd"
    echo "asdfasdfasdfasd"
    echo "asdfasdfasdfasd"
    echo "asdfasdfasdfasd"

    # find /Users/brianephraim/Sites/monorepo/packages/dev_env/node_modules/.bin -type l -execdir bash -c 'touch /Users/brianephraim/Sites/monorepo/asdf' {} \\;
  `, null);*/
  // spawn('ls', ['-lh', '/usr']);
  const ls = shellCommand(`(
    cd ${testingTempDir}
    npm run dev
  )`);
  ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });

  ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  ls.on('exit', function (code) {
    // shellCommand(`rm -rf ${testingTempDir}`);
    console.log('child process exited with code ' + code.toString());
  });

  expect(1 + 2).toBe(3);
  console.log('DONE');
});
