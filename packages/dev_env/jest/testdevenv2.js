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

describe('asdf', function() {
  describe('localhost dev environment', () => {
    const contentToBundle = makeUuid();
    let bundleHasContent = false;
    before(function (done) {
      this.timeout(60000);
      const monorepoDir = path.resolve(__dirname, '../../../');
      const testdevenvMain = path.resolve(monorepoDir, './packages/testdevenv-main');
      const testdevenvMainJs = path.resolve(testdevenvMain, './testdevenv-main.js');
      fs.ensureDirSync(testdevenvMain);
      fs.writeFileSync(testdevenvMainJs, `document.body.append('${contentToBundle}');`);

      const devEnvProcess = shellCommand(`(
        npm run dev -- --tailor-web-bundle-for-testing-of-dev-env-itself
      )`, null/*{ detached: true }*/);
      devEnvProcess.stdout.on('data', (data) => {
        console.log('stdout from mocha child process of `npm run dev`:\n---\n' + data.toString());
        const dataString = data.toString();
        
        if (dataString.indexOf('webpack: Compiled successfully.') !== -1) {
          console.log('OK LETS CHECK OUT THE HTML')
          const scrapeDir = path.resolve(testdevenvMain,'./scrape');
          fs.removeSync(scrapeDir);
          var d = false;
          scrape({
            urls: ['http://localhost:3000/'],
            directory: scrapeDir,
            resourceSaver: class MyResourceSaver {
              saveResource (resource) {
                console.log('resource', resource.url, resource.text.substring(0,20));
                console.log('IS IT THERE', resource.text.indexOf(contentToBundle) !== -1);
                bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
              }
              errorCleanup (err) {
                console.log('resource error', err);
              }
            }
          }).then(() => {
            console.log('THEN');
            // 
            done();
            console.log('devEnvProcess',devEnvProcess.pid, typeof devEnvProcess.pid)
            // process.kill(-devEnvProcess.pid);
            terminate(devEnvProcess.pid,function (err) {
              if (err) { // you will get an error if you did not supply a valid process.pid
                console.log("Oopsy: " + err); // handle errors in your preferred way.
              }
              else {
                console.log('done'); // terminating the Processes succeeded.
              }
            });
            // process.kill(devEnvProcess.pid, 'SIGTERM');
            // ;
          });
        }
      });
      devEnvProcess.stderr.on('data', function (data) {
        console.log('stderr: ', data);
      });
      devEnvProcess.on('exit', function (code) {
        // shellCommand(`rm -rf ${testingTempDir}`);
        console.log('child process exited with code:',code);
      });
    });
    it('bundleHasContent', () => {
      console.log('bundleHasContentbundleHasContentbundleHasContentbundleHasContent',bundleHasContent)
      assert.equal(bundleHasContent, true);
      
    });
  });
});