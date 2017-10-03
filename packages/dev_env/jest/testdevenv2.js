/* eslint-disable class-methods-use-this */
import terminate from 'terminate';
import assert from 'assert';
import path from 'path';
import fs from 'fs-extra';
import scrape from 'website-scraper';
import { v4 as makeUuid } from 'node-uuid';
import { stdout as singleLineLog } from 'single-line-log';
import { it, describe, before } from 'mocha';
import shellCommand from '../core/shellCommand';
import fancyLog from '../core/fancyLog';
import getDevEnvRoot from '../core/getDevEnvRoot';



const devEnvRoot = getDevEnvRoot(__dirnameWhenCompiled);
const monorepoDir = path.resolve(__dirnameWhenCompiled, '../../../');

const symlinkNodeModulesContents = (nodeModulesOriginalPath, nodeModulesCopyPath) => {
  const promises = [];
  fs.readdirSync(nodeModulesOriginalPath).forEach((file) => {
    if (file !== '.bin') {
      singleLineLog(`symlinking node_modules content: ${file}\n`);
      promises.push(
        fs.symlinkSync(
          path.resolve(nodeModulesOriginalPath, file),
          path.resolve(nodeModulesCopyPath, file)),
      );
    }
  });
  return Promise.all(promises);
};

const binPromises = (devEnvCopyPackageDotJsonPath, devEnvCopyPath, binCopyPath) => {
  const promises = [];
  const devEnvCopyPackageDotJson = fs.readJsonSync(devEnvCopyPackageDotJsonPath);
  const devEnvBinDict = devEnvCopyPackageDotJson.bin;
  Object.keys(devEnvBinDict).forEach((key) => {
    const val = devEnvBinDict[key];
    singleLineLog(`symlinking devEnv bin content: ${key}\n`);
    promises.push(
      fs.symlinkSync(path.resolve(devEnvCopyPath, val), path.resolve(binCopyPath, `./${key}`)),
    );
  });
  return Promise.all(promises);
};

function createScatteredPackageProject(testProjectPath, contentToBundle) {
  const devEnvOriginalPath = path.resolve(monorepoDir, './packages/dev_env');
  const nodeModulesOriginalPath = path.resolve(monorepoDir, './node_modules');
  const nodeModulesCopyPath = path.resolve(testProjectPath, './node_modules');
  const pathToMain = path.resolve(testProjectPath, './testdevenv-main.demo.js');
  const devEnvCopyPath = path.resolve(nodeModulesCopyPath, './dev_env');
  const devEnvCopyPackageDotJsonPath = path.resolve(devEnvCopyPath, './package.json');
  const devEnvCopyDistPath = path.resolve(devEnvCopyPath, './dist');
  const binCopyPath = path.resolve(nodeModulesCopyPath, './.bin');
  const binOriginalPath = path.resolve(nodeModulesOriginalPath, './.bin');

  const promises = [
    fs.removeSync(testProjectPath),
    fs.ensureDirSync(testProjectPath),
    fs.ensureDirSync(nodeModulesCopyPath),
    fs.ensureDirSync(devEnvCopyPath),
    fs.copySync(path.resolve(devEnvRoot, './package.json'), devEnvCopyPackageDotJsonPath),
    fs.copySync(path.resolve(devEnvRoot, './bin'), path.resolve(devEnvCopyPath, './bin')),
    fs.copySync(binOriginalPath, binCopyPath),
    fs.writeFile(pathToMain, `document.body.append('${contentToBundle}');`),
    fs.writeFileSync(path.resolve(testProjectPath, './package.json'), `{
      "name": "test-project-for-dev-env",
      "version": "0.0.2",
      "publishConfig": {
        "access": "public"
      },
      "scripts": {
        "dev": "devenv"
      },
      "devDependencies": {
        "@defualt/dev_env": "^0.0.14"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/defualt/test-project-for-dev-env.git"
      }
    }`),
  ];


  promises.push(symlinkNodeModulesContents(
    nodeModulesOriginalPath,
    nodeModulesCopyPath,
  ));

  promises.push(binPromises(
    devEnvCopyPackageDotJsonPath,
    devEnvCopyPath,
    binCopyPath,
  ));

  return Promise.all(promises).then(() => {
    const cmd = `(cd ${devEnvOriginalPath} && npm run prepublish) && cp -rf ${path.resolve(devEnvRoot, './dist')} ${devEnvCopyDistPath} && (cd ${testProjectPath} && npm run dev)`;
    return cmd;
  });
}

function duringProcess({
  onData = () => {},
  onStderr = () => {},
  makeShellCmdStr = () => {},
  cleanup = () => { return Promise.resolve(); },
  early = () => { return Promise.resolve(); },
  assetsToGenerate = [],
}) {
  before(function duringProcessBefore(done) {
    this.timeout(60000);
    early().then((forceCommand) => {
      let pathToDemoEntry;
      assetsToGenerate.forEach((assetInfo) => {
        fancyLog('green', 'GENERATING', assetInfo.path);
        const dir = path.dirname(assetInfo.path);
        fs.ensureDirSync(dir);
        fs.writeFileSync(assetInfo.path, assetInfo.text);
        if (assetInfo.isDemoEntry) {
          pathToDemoEntry = assetInfo.path;
        }
      });
      const cmd = forceCommand || makeShellCmdStr(pathToDemoEntry);
      console.log('COOOOOOOMAND', cmd);
      const devEnvProcess = shellCommand(cmd, null, false);
      let finished = false;
      function finish() {
        if (finished) {
          return;
        }
        fancyLog('green', 'FINISHED');
        finished = true;
        cleanup(devEnvProcess).then(() => {
          fancyLog('orange', 'remove assets');
          assetsToGenerate.forEach((assetInfo) => {
            const dir = path.dirname(assetInfo.path);
            fs.removeSync(dir);
          });
          fancyLog('orange', 'before\'s done() called');
          done();
        });
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
  });
}

function duringServer({
  useDist,
  onAsset = () => {},
  onData = () => {},
  cleanup = () => { return Promise.resolve(); },
  makeShellCmdStr,
  assetsToGenerate,
  early,
  onStderr,
}) {
  const scrapeDir = path.resolve(__dirnameWhenCompiled, './scrape');
  let once = false;
  duringProcess({
    onStderr,
    assetsToGenerate,
    early,
    makeShellCmdStr: (pathToDemoEntry) => {
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
    cleanup: (devEnvProcess) => {
      return new Promise((resolve, reject) => {
        fancyLog('orange', 'terminate start');
        terminate(devEnvProcess.pid, (err) => {
          fancyLog('orange', 'terminate end');
          if (err) {
            fancyLog('red', 'Oopsy during terminate:', err);
            reject();
          } else {
            fancyLog('green', 'done for terminate');
            cleanup(devEnvProcess);
            fs.removeSync(scrapeDir);
            resolve();
          }
        });
      });
    },
  });
}

function duringTest({
  testPathPattern,
  onStderr,
  onData,
  cleanup,
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


describe('testdevenv', () => {
  describe('localhost dev environment of monorepo via on demand compiled script', () => {
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

  describe('localhost dev environment of monorepo via pre-compiled script', () => {
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

  describe.only('localhost dev environment of scattered package repo via pre-compiled script, similar to npm usage', () => {
    const contentToBundle = makeUuid();
    const testProjectPath = path.resolve(monorepoDir, '../testdevenv-main/asdf');

    let bundleHasContent = false;
    duringServer({
      cleanup: () => {
        fancyLog('orange', 'remove testProjectPath');
        fs.removeSync(testProjectPath);
      },
      early: () => {
        fancyLog('orange', 'EARLY');
        return createScatteredPackageProject(testProjectPath, contentToBundle);
      },

      onAsset: (resource) => {
        bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
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
