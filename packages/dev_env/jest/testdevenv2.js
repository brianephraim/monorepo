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

function duringServer({onAsset, assetsToGenerate}) {
  before(function (done) {
    this.timeout(60000);
    assetsToGenerate.forEach((assetInfo) => {
      const dir = path.dirname(assetInfo.path);
      fs.ensureDirSync(dir);
      fs.writeFileSync(assetInfo.path, assetInfo.text);
    });

    const devEnvProcess = shellCommand(`(
      npm run dev -- --tailor-web-bundle-for-testing-of-dev-env-itself
    )`, null/*{ detached: true }*/, false);
    const scrapeDir = path.resolve(__dirname,'./scrape');
    let finished = false;
    function finish() {
      if (finished) {
        return;
      }
      console.log('FINISHED');
      finished = true;
      
      // fs.removeSync(scrapeDir);
      // assetsToGenerate.forEach((assetInfo) => {
      //   const dir = path.dirname(assetInfo.path);
      //   fs.removeSync(dir);
      // });

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
      if (dataString.indexOf('webpack: Compiled successfully.') !== -1 && !once) {
        once = true;
        
        var d = false;
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
      console.log('stderr: ', data);
    });
    devEnvProcess.on('exit', function (code) {
      console.log('child process exited with code:',code);
      finish();
    });
  });
}

describe('asdf', function() {
  describe('localhost dev environment', () => {
    const contentToBundle = makeUuid();
    console.log('contentToBundle',contentToBundle);
    let bundleHasContent = false;
    const monorepoDir = path.resolve(__dirname, '../../../');
    duringServer({
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `document.body.append('${contentToBundle}');`
        }
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('bundleHasContent', () => {
      assert.equal(bundleHasContent, true);
      
    });
  });

  describe('localhost dev environment', () => {
    const contentToBundle = makeUuid();
    console.log('contentToBundle',contentToBundle);
    let bundleHasContent = false;
    const monorepoDir = path.resolve(__dirname, '../../../');
    duringServer({
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `document.body.append('${contentToBundle}');`
        }
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      }
    });
    it('bundleHasContent', () => {
      assert.equal(bundleHasContent, true);
      
    });
  });
});