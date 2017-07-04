/* eslint-disable class-methods-use-this */
import terminate from 'terminate';
import assert from 'assert';
import path from 'path';
import fs from 'fs-extra';
import scrape from 'website-scraper';
import { v4 as makeUuid } from 'node-uuid';
import { it, describe, before } from 'mocha';
import shellCommand from '../core/shellCommand';
import fancyLog from '../core/fancyLog';
import getDevEnvRoot from '../core/getDevEnvRoot';
import getNodePathShVar from '../core/getNodePathShVar';

const devEnvRoot = getDevEnvRoot(__dirname);

function duringProcess({
  onData = () => {},
  onStderr = () => {},
  makeShellCmdStr = () => {},
  cleanup = () => {},
  assetsToGenerate,
}) {
  before(function duringServerBefore(done) {
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
    const cmd = makeShellCmdStr(pathToDemoEntry);
    const devEnvProcess = shellCommand(cmd, null, false);
    let finished = false;
    function finish() {
      if (finished) {
        return;
      }
      fancyLog('green', 'FINISHED', 'code');
      finished = true;

      assetsToGenerate.forEach((assetInfo) => {
        const dir = path.dirname(assetInfo.path);
        fs.removeSync(dir);
      });
      cleanup(devEnvProcess);
      done();
    }
    devEnvProcess.stdout.on('data', (data) => {
      const dataString = data.toString();
      fancyLog('blue', 'devEnvProcess.stdout:', dataString);
      onData(dataString, finish);
    });
    devEnvProcess.stderr.on('data', (data) => {
      if (data && data.toString) {
        data = data.toString();
        onStderr(data);
      }
      fancyLog('cyan', 'devEnvProcess.stderr:', data);
    });
    devEnvProcess.on('exit', (code) => {
      fancyLog('yellow', 'child process exited with code:', code);
      finish();
    });
  });
}

function duringServer({
  useDist,
  onAsset = () => {},
  onData = () => {},
  onStderr = () => {},
  cleanup = () => {},
  makeShellCmdStr,
  assetsToGenerate,
  nodePath,
}) {
  const scrapeDir = path.resolve(__dirname, './scrape');
  let once = false;
  duringProcess({
    makeShellCmdStr: (pathToDemoEntry) => {
      const nodePathShVar = nodePath ? `${nodePath} ` : '';
      console.log('nodePath', nodePathShVar);
      if (makeShellCmdStr) {
        return makeShellCmdStr(pathToDemoEntry);
      }
      const prepublish = useDist ? `(cd ${devEnvRoot} && npm run prepublish) && ` : '';
      return `(
        ${prepublish}npm run dev -- --demo-entry='${pathToDemoEntry}'${useDist ? ' --use-dist' : ''} 
      )`;
    },
    onData: (dataString, finish) => {
      onData(dataString, finish);
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
            saveResource(resource) {
              onAsset(resource);
            }
            errorCleanup(err) {
              fancyLog('pink', 'scrape resource error:', err);
            }
          },
        }).then(() => {
          finish();
        });
      }
    },
    onStderr,
    assetsToGenerate,
    cleanup: (devEnvProcess) => {
      cleanup(devEnvProcess);
      fs.removeSync(scrapeDir);
      terminate(devEnvProcess.pid, (err) => {
        if (err) {
          fancyLog('red', 'Oopsy during terminate:', err);
        } else {
          fancyLog('green', 'done for terminate', '');
        }
      });
    },
  });
}

function duringTest({
  testPathPattern,
  onStderr = () => {},
  onData = () => {},
  cleanup = () => {},
  assetsToGenerate,
}) {
  duringProcess({
    onStderr,
    onData,
    assetsToGenerate,
    cleanup,
    makeShellCmdStr: () => {
      return `(
        npm run testpackages -- --watch=false --testPathPattern='${testPathPattern}'
      )`;
    },
  });
}

const monorepoDir = path.resolve(__dirname, '../../../');
describe('testdevenv', () => {
  describe('localhost dev environment via on demand compiled script', () => {
    const contentToBundle = makeUuid();
    let bundleHasContent = false;

    duringServer({
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `document.body.append('${contentToBundle}');`,
          isDemoEntry: true,
        },
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
    });
    it('basic bundleHasContent', () => {
      assert.equal(bundleHasContent, true);
    });
  });

  describe('localhost dev environment via pre-compiled script', () => {
    const contentToBundle = makeUuid();
    let bundleHasContent = false;
    duringServer({
      useDist: true,
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `document.body.append('${contentToBundle}');`,
          isDemoEntry: true,
        },
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
    });
    it('basic bundleHasContent', () => {
      assert.equal(bundleHasContent, true);
    });
  });

  describe.only('localhost dev environment similar to npm usage', () => {
    const contentToBundle = makeUuid();
    let bundleHasContent = false;
    const testProjectPath = path.resolve(monorepoDir, '../test-project-for-dev-env');
    fs.ensureDirSync(path.resolve(testProjectPath, './node_modules'));
    // fs.copySync(devEnvRoot,)
    duringServer({
      nodePath: getNodePathShVar({ cwd: devEnvRoot, before: ['asdfasdf'] }),
      makeShellCmdStr: () => { return 'pwd'; },
      assetsToGenerate: [
        {
          path: path.resolve(testProjectPath, './testdevenv-main.js'),
          text: `document.body.append('${contentToBundle}');`,
          isDemoEntry: true,
        },
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
      cleanup: (/* devEnvProcess */) => {
        fs.removeSync(testProjectPath);
      },
    });
    it('basic bundleHasContent', () => {
      assert.equal(bundleHasContent, true);
    });
  });

  describe('non-existent imports', () => {
    let notFoundError = false;
    const importToAttempt = 'testdevenv-some-depMAYBE-A-TYPO';
    duringServer({
      assetsToGenerate: [
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
          text: `import someDep from '${importToAttempt}';\n;someDep();`,
          isDemoEntry: true,
        },
        {
          path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
          text: 'export default () => { document.body.append("testdevenv-some-dep"); };',
        },
      ],
      onStderr: (data) => {
        notFoundError = notFoundError || data.indexOf(`Module not found: Error: Can't resolve '${importToAttempt}'`) !== -1;
      },
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
        },
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
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
        },
      ],
      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
      },
    });
    it('bundleHasContent proving npm-scoped import bundling', () => {
      assert.equal(bundleHasContent, true);
    });
  });

  describe('test', () => {
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
          text: 'test("adds 1 + 2 to equal 3", () => { expect(1 + 2).toBe(3); });',
        },
      ],
      onStderr: (data) => {
        testsPassed = testsPassed || data.indexOf('1 passed, 1 total') !== -1;
      },
    });
    it('testtesttest', () => {
      assert.equal(testsPassed, true);
    });
  });
});
