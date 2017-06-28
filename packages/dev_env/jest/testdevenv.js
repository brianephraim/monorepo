/* eslint-disable no-console */
import path from 'path';
import fs from 'fs-extra';
import walkSync from 'walk-sync';
import scrape from 'website-scraper';
import { spawn } from 'child_process';
import shellCommand from '../shell-command';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;



// import sum from 'sum';
// import aaa8 from '@defualt/aaa8';
// console.log('logging from testdevenv.js');
// it('works after timeout', () => {
//   return new Promise((resolve, reject) => {
//     jest.setTimeout(() => {
//       expect(true).toBe(false)
//       resolve()
//     }, 10)
//   })
// })

// it("promises work?", () => {
//   return Promise.resolve().then(() => {
//     expect(true).toBe(false)
//   })
// })
// jest.useRealTimers()
// it("should get David Nichols' latest study from valid HTML", (done) => {
//   return  new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//     jest.runAllTimers();
//   })
//   .then((result => {
//     expect(result).toEqual(2); // commenting this out causes test to pass.
//   }))
// });
jest.useRealTimers()
test('passing `setTimeout` test does not time out', done => {
  var a = "1234124";
  setTimeout(() => {
    expect(true).toBe(false);
    done();
  }, 0);
  return;
});


test('dev', () => {
  return new Promise((resolvex, reject) => {
    // resolvex();
    // p.resolve('asdfadsf');
    
    
    // const aaaDir = path.resolve(__dirname, '../../aaa8');
    const monorepoDir = path.resolve(__dirname, '../../../');
    const testdevenvMain = path.resolve(monorepoDir, './packages/testdevenv-main');
    const testdevenvMainJs = path.resolve(testdevenvMain, './testdevenv-main.js');
    console.log(testdevenvMainJs);
    fs.ensureDirSync(testdevenvMain);
    const stringOnPage = 'js working on page'
    fs.writeFile(testdevenvMainJs, `document.body.append('${stringOnPage}');`);
    // const testingTempDir = path.resolve(monorepoDir, './testingtemp');
    // const testingTempPackagesDir = path.resolve(testingTempDir, './packages');
    // console.log('testingTempDir',testingTempDir);
    // testdevenv-main

    // fs.removeSync(testingTempDir);
    // fs.ensureDirSync(testingTempDir);
    // fs.copySync(path.resolve(monorepoDir, './package.json'), path.resolve(testingTempDir, './package.json'));
    // fs.ensureDirSync(testingTempPackagesDir);
    // fs.removeSync(path.resolve(monorepoDir, './packages/dev_env/node_modulesBU'));
    // fs.copySync(path.resolve(monorepoDir, './packages/dev_env/node_modules'), path.resolve(monorepoDir, './packages/dev_env/node_modulesBU'));
    // var filepaths = walkSync(path.resolve(monorepoDir, './packages/dev_env/node_modules'));
    // console.log(filepaths);
    // console.log('TTT');
    // console.log('TTT');
    // console.log('TTT');
    // console.log('TTT');
    // console.log('TTT');
    // filepaths.forEach((filepath) => {
    //   console.log('000000');
    //   filepath = path.resolve(monorepoDir,`./packages/dev_env/node_modules/${filepath}`);
    //   console.log('filepath',filepath)
    //   const stat = fs.lstatSync(filepath);
    //   console.log('stat',stat);
    //   console.log('isSymbolicLink',stat.isSymbolicLink())
    //   if (stat.isSymbolicLink()) {
    //     console.log('realpathSync', fs.realpathSync(filepath));
    //     const realPath = fs.realpathSync(filepath);
    //     fs.removeSync(filepath);
    //     fs.symlinkSync(realPath, filepath);
    //   }
    // });  
    // fs.copySync(path.resolve(monorepoDir, './packages/dev_env'), path.resolve(testingTempPackagesDir, './dev_env'));
    // fs.removeSync(path.resolve(monorepoDir, './packages/dev_env/node_modules'));
    // fs.copySync(path.resolve(monorepoDir, './packages/dev_env/node_modulesBU'), path.resolve(monorepoDir, './packages/dev_env/node_modules'));
    // fs.removeSync(path.resolve(monorepoDir, './packages/dev_env/node_modulesBU'));


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
      npm run dev -- --asdf
    )`,null);
    ls.stdout.on('data', (data) => {
      const dataString = data.toString();
      console.log('stdout: ' + data.toString());
      if (dataString.indexOf('webpack: Compiled successfully.') !== -1) {
        console.log('OK LETS CHECK OUT THE HTML')
        const scrapeDir = path.resolve(testdevenvMain,'./scrape');
        fs.removeSync(scrapeDir);
        scrape({
          urls: ['http://localhost:3000/'],
          directory: scrapeDir,
          resourceSaver: class MyResourceSaver {
            saveResource (resource) {
              console.log('resource', resource.url, resource.text.substring(0,20));
              expect(1 + 3).toBe(40);
              // resolvex();
              
            }
            errorCleanup (err) {
              console.log('resource error', err);
            }
          }
        }).then(() => {
          console.log('THEN')
          resolvex();
          // ;
        });
      }
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data.toString());
    });

    ls.on('exit', function (code) {
      // shellCommand(`rm -rf ${testingTempDir}`);
      console.log('child process exited with code ' + code.toString());
    });

    // expect(1 + 2).toBe(3);
    console.log('DONE');
  });
});
