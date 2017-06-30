/* eslint-disable no-console */
import terminate from 'terminate';
import assert from 'assert';
import path from 'path';
import fs from 'fs-extra';
// import walkSync from 'walk-sync';
import scrape from 'website-scraper';
import { spawn } from 'child_process';
import shellCommand from '../shell-command';
import { v4 as makeUuid  } from 'node-uuid';

function duringTest({onAsset = () => {}, onData = () => {}, onStderr = () => {}, assetsToGenerate, testPathPattern}) {
  before(function (done) {
    this.timeout(60000);
    let pathToDemoEntry;
    assetsToGenerate.forEach((assetInfo) => {
      const dir = path.dirname(assetInfo.path);
      fs.ensureDirSync(dir);
      fs.writeFileSync(assetInfo.path, assetInfo.text);
      if (assetInfo.isDemoEntry) {
        pathToDemoEntry = assetInfo.path;
      }
    });

    const devEnvProcess = shellCommand(`(
      npm run test -- --watch=false --testPathPattern='${testPathPattern}'
    )`, null/*{ detached: true }*/, false);
    let finished = false;
    function finish() {
      if (finished) {
        return;
      }
      console.log('FINISHED');
      finished = true;
      
      assetsToGenerate.forEach((assetInfo) => {
        const dir = path.dirname(assetInfo.path);
        fs.removeSync(dir);
      });

      // terminate(devEnvProcess.pid,function (err) {
      //   if (err) { // you will get an error if you did not supply a valid process.pid
      //     console.log("Oopsy during terminate: ", err); // handle errors in your preferred way.
      //   }
      //   else {
      //     console.log('done for terminate'); // terminating the Processes succeeded.
      //   }
      // });

      // setTimeout(() => { 
        done();
      // }, 1000);

      
    }
    var once = false;
    devEnvProcess.stdout.on('data', (data) => {
      const dataString = data.toString();
      console.log('devEnvProcess.stdout\n', dataString);
      onData(dataString);
    });
    devEnvProcess.stderr.on('data', function (data) {
      if (data && data.toString){
        data = data.toString();
        onStderr(data);
      }
      console.log('stderr: ', data);
    });
    devEnvProcess.on('exit', function (code) {
      console.log('child process exited with code:',code);
      finish();
    });
  });
}

function duringServer({onAsset = () => {}, onData = () => {}, assetsToGenerate}) {
  before(function (done) {
    this.timeout(60000);
    let pathToDemoEntry;
    assetsToGenerate.forEach((assetInfo) => {
      const dir = path.dirname(assetInfo.path);
      fs.ensureDirSync(dir);
      fs.writeFileSync(assetInfo.path, assetInfo.text);
      if (assetInfo.isDemoEntry) {
        pathToDemoEntry = assetInfo.path;
      }
    });

    const devEnvProcess = shellCommand(`(
      npm run dev -- --demo-entry='${pathToDemoEntry}'
    )`, null/*{ detached: true }*/, false);
    const scrapeDir = path.resolve(__dirname,'./scrape');
    let finished = false;
    function finish() {
      if (finished) {
        return;
      }
      console.log('FINISHED');
      finished = true;
      
      fs.removeSync(scrapeDir);
      assetsToGenerate.forEach((assetInfo) => {
        const dir = path.dirname(assetInfo.path);
        fs.removeSync(dir);
      });

      terminate(devEnvProcess.pid,function (err) {
        if (err) { // you will get an error if you did not supply a valid process.pid
          console.log("Oopsy during terminate: ", err); // handle errors in your preferred way.
        }
        else {
          console.log('done for terminate'); // terminating the Processes succeeded.
        }
      });

      // setTimeout(() => { 
        done();
      // }, 1000);

      
    }
    var once = false;
    devEnvProcess.stdout.on('data', (data) => {
      const dataString = data.toString();
      onData(dataString);
      console.log('devEnvProcess.stdout\n', dataString);
      if (dataString.indexOf('webpack: Failed to compile.') !== -1 && !once) {
        once = true;
        finish();
      }
      if (dataString.indexOf('webpack: Compiled successfully.') !== -1 && !once) {
        once = true;
        
        scrape({
          urls: ['http://localhost:3000/'],
          directory: scrapeDir,
          resourceSaver: class MyResourceSaver {
            saveResource (resource) {
              onAsset(resource);
            }
            errorCleanup (err) {
              console.log('resource error', err);
            }
          }
        }).then(() => {
          finish();
        });
      }
    });
    devEnvProcess.stderr.on('data', function (data) {
      if (data && data.toString){
        data = data.toString();
      }
      console.log('stderr: ', data);
    });
    devEnvProcess.on('exit', function (code) {
      console.log('child process exited with code:',code);
      finish();
    });
  });
}

const monorepoDir = path.resolve(__dirname, '../../../');
describe('testdevenv', function() {
  describe('localhost dev environment', () => {
    const contentToBundle = makeUuid();
    let bundleHasContent = false;
    
    duringServer({
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `document.body.append('${contentToBundle}');`,
          isDemoEntry: true,
        }
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('basic bundleHasContent', () => {
      assert.equal(bundleHasContent, true);
    });
  });

  describe('non-existent imports', () => {
    let notFoundError = false;
    const importToAttempt = 'testdevenv-some-depMAYBE-A-TYPE';
    duringServer({
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `import someDep from '${importToAttempt}';\n;someDep();`,
          isDemoEntry: true,
        },
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
          text: `export default () => { document.body.append('testdevenv-some-dep'); };`,
        }
      ],
      onData: (data) => {
        notFoundError = notFoundError || data.indexOf(`Module not found: Error: Can't resolve '${importToAttempt}'`) !== -1;
      }
    });
    it('webpack bundling throws error for non-existent imports within assets', () => {
      assert.equal(notFoundError, true);
      
    });
  });

  describe('existent imports', () => {
    const contentToBundle = makeUuid();
    let bundleHasContent = false;
    const importToAttempt = 'testdevenv-some-dep';
    duringServer({
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `import someDep from '${importToAttempt}';\n;someDep();`,
          isDemoEntry: true,
        },
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
          text: `export default () => { document.body.append('${contentToBundle}'); };`,
        }
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('bundleHasContent proving import bundling', () => {
      assert.equal(bundleHasContent, true);
      
    });
  });

  describe('existent imports with npm-scoping', () => {
    const contentToBundle = makeUuid();
    let bundleHasContent = false;
    const importToAttempt = 'testdevenv-some-dep';
    duringServer({
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `import someDep from '@some-npm-scope/${importToAttempt}';\n;someDep();`,
          isDemoEntry: true,
        },
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
          text: `export default () => { document.body.append('${contentToBundle}'); };`,
        }
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('bundleHasContent proving npm-scoped import bundling', () => {
      assert.equal(bundleHasContent, true);
      
    });
  });

  describe.only('test', () => {
    const contentToBundle = makeUuid();
    let testsPassed = false;
    const importToAttempt = 'testdevenv-some-dep';
    duringTest({
      testPathPattern: '.*/testdevenv-some-dep/.*',
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `import someDep from '${importToAttempt}';\n;someDep();`,
          isDemoEntry: true,
        },
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
          text: `export default () => { document.body.append('${contentToBundle}'); };`,
        },
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.test.js'),
          text: `test('adds 1 + 2 to equal 3', () => { expect(1 + 2).toBe(3); });`,
        },
      ],
      onStderr: (data) => {
        testsPassed = testsPassed || data.indexOf(`1 passed, 1 total`) !== -1;
      }
    });
    it('testtesttest', () => {
      assert.equal(testsPassed, true);
      
    });
  });
});