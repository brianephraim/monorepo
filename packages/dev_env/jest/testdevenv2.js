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

// todo implement
// https://github.com/cypress-io/cypress?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more

const devEnvRoot = getDevEnvRoot(__dirnameBeforeCompiled);
const monorepoDir = path.resolve(__dirnameBeforeCompiled, '../../../');

const tempDir = path.resolve(monorepoDir,'.tmp/test');

const symlinkNodeModulesContents = (nodeModulesOriginalPath, nodeModulesCopyPath) => {
  fs.readdirSync(nodeModulesOriginalPath).forEach((file) => {
    if (file !== '.bin') {
      singleLineLog(`symlinking node_modules content: ${file}\n`);
      fs.symlinkSync(
        path.resolve(nodeModulesOriginalPath, file),
        path.resolve(nodeModulesCopyPath, file)
      );
    }
  });
};

const symlinkBin = (devEnvCopyPackageDotJsonPath, devEnvCopyPath, binCopyPath) => {
  const devEnvCopyPackageDotJson = fs.readJsonSync(devEnvCopyPackageDotJsonPath);
  const devEnvBinDict = devEnvCopyPackageDotJson.bin;
  Object.keys(devEnvBinDict).forEach((key) => {
    const val = devEnvBinDict[key];
    singleLineLog(`symlinking devEnv bin content: ${key}\n`);
    fs.symlinkSync(path.resolve(devEnvCopyPath, val), path.resolve(binCopyPath, `./${key}`));
  });
};

function createScatteredPackageProject(testProjectPath, assetPath) {
  const asyncDirPath = path.resolve(testProjectPath,'./asyncDir');
  const buildDirPath = path.resolve(testProjectPath,'./build');
  const nodeModulesOriginalPath = path.resolve(monorepoDir, './node_modules');
  const nodeModulesCopyPath = path.resolve(testProjectPath, './node_modules');
  const devEnvCopyPath = path.resolve(nodeModulesCopyPath, './dev_env');
  const devEnvCopyPackageDotJsonPath = path.resolve(devEnvCopyPath, './package.json');
  const devEnvCopyDistPath = path.resolve(devEnvCopyPath, './dist');
  const binCopyPath = path.resolve(nodeModulesCopyPath, './.bin');
  const binOriginalPath = path.resolve(nodeModulesOriginalPath, './.bin');
  fs.removeSync(testProjectPath);
  fs.ensureDirSync(testProjectPath);
  fs.ensureDirSync(asyncDirPath);
  fs.ensureDirSync(buildDirPath);
  fs.ensureDirSync(path.resolve(testProjectPath,'./build/buildClient'));
  fs.ensureDirSync(path.resolve(testProjectPath,'./build/buildServer'));
  fs.ensureDirSync(nodeModulesCopyPath);
  fs.ensureDirSync(devEnvCopyPath);
  fs.copySync(path.resolve(devEnvRoot, './package.json'), devEnvCopyPackageDotJsonPath);
  fs.copySync(path.resolve(devEnvRoot, './bin'), path.resolve(devEnvCopyPath, './bin'));
  // fs.copySync(path.resolve(monorepoDir, './packages/favicon'), path.resolve(testProjectPath, './packages/favicon')),
  fs.copySync(binOriginalPath, binCopyPath);
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
  }`);

  symlinkNodeModulesContents(
    nodeModulesOriginalPath,
    nodeModulesCopyPath,
  );

  symlinkBin(
    devEnvCopyPackageDotJsonPath,
    devEnvCopyPath,
    binCopyPath,
  );

  const asyncRoutesPath = path.resolve(testProjectPath,'./asyncRoutes');

  const faviconsDirPath = path.resolve(testProjectPath, './favicons');
  fs.ensureDirSync(faviconsDirPath);
  const faviconsDirSrc = path.resolve(__dirnameBeforeCompiled, './fixtures/favicons');
  fs.copySync(faviconsDirSrc, faviconsDirPath);

  return {testProjectPath, devEnvCopyDistPath, asyncDirPath, buildDirPath, assetPath, asyncRoutesPath, faviconsDirPath};
}

function handleAssets(assetsToGenerate, asyncRoutesPath) {
  let pathToDemoEntry;
  const asyncRoutes = {};
  assetsToGenerate.forEach((assetInfo) => {
    fancyLog('green', 'GENERATING', assetInfo.path);
    const dir = path.dirname(assetInfo.path);
    if (assetInfo.asyncName) {
      asyncRoutes[assetInfo.asyncName] = assetInfo.path;
    }
    fs.ensureDirSync(dir);
    fs.writeFileSync(assetInfo.path, assetInfo.text);
    if (assetInfo.isDemoEntry) {
      pathToDemoEntry = assetInfo.path;
    }
  });
  fs.writeJsonSync(asyncRoutesPath, asyncRoutes, { spaces: 2 });
  return pathToDemoEntry;
}

function duringProcess({
  onData = () => {},
  onStderr = () => {},
  makeShellCmdStr = () => {},
  cleanup = () => { return Promise.resolve(); },
  generateFiles = () => { return {}; },
  assetsToGenerate = [],
}) {
  before(function duringProcessBefore(done) {
    this.timeout(60000);
    const scatteredProjectPaths = generateFiles();

    

    const devEnvProcess = makeShellCmdStr(scatteredProjectPaths);
   
    let finished = false;
    function finish(debug) {
      console.log('FINISH', debug);
      if (finished) {
        return;
      }
      fancyLog('green', 'FINISHED');
      finished = true;
      cleanup(devEnvProcess).then(() => {
        fancyLog('orange', 'remove assets');
        assetsToGenerate.forEach((assetInfo) => {
          const dir = path.dirname(assetInfo.path);
          // fs.removeSync(dir);
        });
        fancyLog('orange', 'before\'s done() called');
        done();
      });
    }
    devEnvProcess.stdout.on('data', (data) => {
      const dataString = data.toString();
      fancyLog('grey', 'devEnvProcess.stdout:', dataString);
      onData(dataString, () => finish('a'));
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
      finish('b');
    });
  });
}

// const deb = debounce(3000);

function duringServer({
  useDist,
  onAsset = () => {},
  onData = () => {},
  cleanup = () => { return Promise.resolve(); },
  assetsToGenerate,
  generateFiles,
  onStderr,
  pathToScrape = '/',
  external,
}) {
  const scrapeDir = path.resolve(tempDir, './scrape');
  fs.removeSync(scrapeDir);
  let once = false;

  const generateFilesToUse = (...args) => {
    const scatteredProjectPaths = generateFiles(...args);
    const { asyncRoutesPath } = scatteredProjectPaths;
    const pathToDemoEntry = handleAssets(assetsToGenerate, asyncRoutesPath);
    return {
      ...scatteredProjectPaths,
      pathToDemoEntry,
    }
  };
  duringProcess({
    onStderr,
    assetsToGenerate,
    generateFiles: generateFilesToUse,
    makeShellCmdStr: (morePaths = {}) => {
      const { pathToDemoEntry, testProjectPath, devEnvCopyDistPath, asyncDirPath, buildDirPath, asyncRoutesPath, faviconsDirPath } = morePaths;
      const command = [
        useDist ? `(cd ${devEnvRoot} && npm run prepublish) &&` : '',
        devEnvCopyDistPath ? `cp -rf ${path.resolve(devEnvRoot, './dist')} ${devEnvCopyDistPath} &&` : '',
        testProjectPath ? `(cd ${testProjectPath} &&` : '',
        "npm run dev --",
        useDist ? ' --use-dist' : '',
        // "--servers='./packages/bernieserver/bernieserver.express.js,./packages/junk-express/junk-express.express.js,./packages/hackathon-starter/app.js,./packages/apollo-simple-starter/server/index.js'",
        "--isDev=true",
        "--isUniversal=true",
        "--isDeploy=false",
        `--initialApp='${pathToDemoEntry}'`,
        // `--initialApp='./packages/MainApp/initialAppIntegration.js'`,
        `--asyncRoutes='${asyncRoutesPath}'`,
        asyncDirPath ? `--asyncDir='${asyncDirPath}'` : '',
        buildDirPath ? `--buildDir='${buildDirPath}'` : '',
        faviconsDirPath ? `--faviconsDir='${faviconsDirPath}'` : '',
        testProjectPath ? ')' : '',
      ].join(' ');

      console.log('COOOOOOOMAND', command);
      return shellCommand(`(${command})`, null, false);;
    },
    onData: (dataString, finish) => {
      onData(dataString, () => finish('c'));
      if (dataString.indexOf('webpack: Failed to compile.') !== -1 && !once) {
        once = true;
        finish('d');
      }

      if (dataString.indexOf('webpack: Compiled successfully.') !== -1 && !once) {
        once = true;
        const pathToScrapeParsed = pathToScrape[0] === '/' ? pathToScrape : `/${pathToScrape}`
        setTimeout(() => {
          scrape({
            urls: [`http://localhost:3000${pathToScrapeParsed}`],
            directory: scrapeDir,
            resourceSaver: class MyResourceSaver {
              saveResource(resource) {
                const resourePath = `${scrapeDir}/${resource.filename}`;
                const popped = resourePath.split('/');
                popped.pop();
                fs.ensureDirSync(popped.join('/'));
                fs.writeFile(resourePath, resource.text);
                onAsset(resource);
              }
              errorCleanup(err) {
                fancyLog('pink', 'scrape resource error:', err);
              }
            },
          }).then(() => {
            finish('e');
          });
        }, 0)
      }
    },
    cleanup: (devEnvProcess) => {
      return new Promise((resolve, reject) => {
        fancyLog('orange', 'terminate start');
        terminate(devEnvProcess.pid, (err) => {
          fancyLog('orange', 'terminate end');
          if (err) {
            fancyLog('pink', 'Oopsy during terminate:', err);
            reject();
          } else {
            fancyLog('green', 'done for terminate');
            cleanup(devEnvProcess);
            // fs.removeSync(scrapeDir);
            resolve();
          }
        });
      });
    },
  });
}

// describe('testdevenv', () => {
//   it('basic bundleHasContent', () => {
//     assert.equal(true, true);
//   });
// });
// function describeX () {}

function doTest({ useDist, assetPath, generateFiles, cleanup, external }) {
  const contentToBundle = makeUuid();
  let bundleHasContent = false;

  function defaultGenerateFiles() {
    fs.removeSync(tempDir);
    fs.ensureDirSync(tempDir);
    return {
      asyncRoutesPath: path.resolve(tempDir,'asyncRoutesTest.json'),
    };
  }

  duringServer({
    assetsToGenerate: [
      {
        asyncName: 'testRoute',
        path: assetPath || path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
        text: `
          import React from 'react';
          export const routeData = {
            routesMap:{
              TEST_ROUTE_ACTION_TYPE: '/'
            },
            pageMap: {
              TEST_ROUTE_ACTION_TYPE: 'testRoute'
            },
          };
          export default function () {
            return (<div>Hey find this content: ${contentToBundle}</div>);
          }
        `,
        isDemoEntry: true,
      },
    ],
    pathToScrape: '/',
    onAsset: (resource) => {
      bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
    },
    useDist,
    generateFiles: generateFiles || defaultGenerateFiles,
    cleanup,
    external,
  });
  it('basic bundleHasContent', () => {
    assert.equal(bundleHasContent, true);
  });
}

describe('dev environement', () => {
  describe('localhost dev environment of monorepo produces at least static html with custom content', () => {
    doTest({});
  });
  describe('same as above but with isDist', () => {
    doTest({
      useDist: true
    });
  });

  describe('localhost dev environment of scattered package repo via pre-compiled script, similar to npm usage', () => {
    const testProjectPath = path.resolve(monorepoDir, '../testdevenv-main/asdf');
    const assetPath = path.resolve(testProjectPath, 'testdevenv-main.js');
    doTest({
      useDist: true,
      external: true,
      generateFiles: () => {
        fancyLog('orange', 'generateFiles');
        return createScatteredPackageProject(testProjectPath, assetPath);
      },
      assetPath,
      cleanup: () => {
        fancyLog('orange', 'remove testProjectPath');
        // fs.removeSync(testProjectPath);
      },
    });
  });

  // describe('non-existent imports', () => {
  //   let notFoundError = false;
  //   const importToAttempt = 'testdevenv-some-depMAYBE-A-TYPO';
  //   duringServer({
  //     assetsToGenerate: [
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
  //         text: `import someDep from '${importToAttempt}';\n;someDep();`,
  //         isDemoEntry: true,
  //       },
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
  //         text: 'export default () => { document.body.append("testdevenv-some-dep"); };',
  //       },
  //     ],
  //     onStderr: (data) => {
  //       notFoundError = notFoundError || data.indexOf(`Module not found: Error: Can't resolve '${importToAttempt}'`) !== -1;
  //     },
  //   });
  //   it('webpack bundling throws error for non-existent imports within assets', () => {
  //     assert.equal(notFoundError, true);
  //   });
  // });

  // describe('existent imports', () => {
  //   const contentToBundle = makeUuid();
  //   let bundleHasContent = false;
  //   const importToAttempt = 'testdevenv-some-dep';
  //   duringServer({
  //     assetsToGenerate: [
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
  //         text: `import someDep from '${importToAttempt}';\n;someDep();`,
  //         isDemoEntry: true,
  //       },
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
  //         text: `export default () => { document.body.append('${contentToBundle}'); };`,
  //       },
  //     ],
  //     onAsset: (resource) => {
  //       bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
  //     },
  //   });
  //   it('bundleHasContent proving import bundling', () => {
  //     assert.equal(bundleHasContent, true);
  //   });
  // });

  // describe('existent imports with npm-scoping', () => {
  //   const contentToBundle = makeUuid();
  //   let bundleHasContent = false;
  //   const importToAttempt = 'testdevenv-some-dep';
  //   duringServer({
  //     assetsToGenerate: [
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
  //         text: `import someDep from '@some-npm-scope/${importToAttempt}';\n;someDep();`,
  //         isDemoEntry: true,
  //       },
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
  //         text: `export default () => { document.body.append('${contentToBundle}'); };`,
  //       },
  //     ],
  //     onAsset: (resource) => {
  //       bundleHasContent = bundleHasContent || resource.text.indexOf(contentToBundle) !== -1;
  //     },
  //   });
  //   it('bundleHasContent proving npm-scoped import bundling', () => {
  //     assert.equal(bundleHasContent, true);
  //   });
  // });

  // describe('test', () => {
  //   const contentToBundle = makeUuid();
  //   let testsPassed = false;
  //   const importToAttempt = 'testdevenv-some-dep';
  //   duringTest({
  //     testPathPattern: '.*/testdevenv-some-dep/.*',
  //     assetsToGenerate: [
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-main/testdevenv-main.js'),
  //         text: `import someDep from '${importToAttempt}';\n;someDep();`,
  //         isDemoEntry: true,
  //       },
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.js'),
  //         text: `export default () => { document.body.append('${contentToBundle}'); };`,
  //       },
  //       {
  //         path: path.resolve(monorepoDir, './packages/testdevenv-some-dep/testdevenv-some-dep.test.js'),
  //         text: 'test("adds 1 + 2 to equal 3", () => { expect(1 + 2).toBe(3); });',
  //       },
  //     ],
  //     onStderr: (data) => {
  //       testsPassed = testsPassed || data.indexOf('1 passed, 1 total') !== -1;
  //     },
  //   });
  //   it('testtesttest', () => {
  //     assert.equal(testsPassed, true);
  //   });
  // });
});
