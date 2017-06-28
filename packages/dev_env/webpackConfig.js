/*
  This files return a function that when called generates a webpack config json.
  `argv` is passed into this function.

  when `argv.env === falsey`
    This compiles for a dev server via webpack-dev-middleware.  No files are created to disk,
    only created in memory.

  when `argv.env === 'build'`
    This compiles files to disk in a /dist folder and a /demo folder.

  when `argv.dirroot === some path`
    This is used when dev_env itself is compiled.
    This very file is compiled according the config set by this file.
    This is needed to make dev_env portable via npm.
    babel-node needs to compile this dev_env to work,
    but this does not play well when dev_env is in a node_modules folder.
    So we need to compile dev_env before publishing to npm.
    Directory paths need to be tweaked to accomplish this,
    and that's what `argv.dirroot` helps with.


  This function is also affected by package.json.

  when package.json.bundleForNode === true
    in conjunction with `argv.env === 'build'`, the bundle will
    have special consideration for a node platform.
    Only application files will be bundled.
    node_modules and node built-in requires will not be bundled.
*/
import { argv } from 'yargs';
import fs from 'fs-extra';
import webpackEnhanceConfigNode from './core/webpackEnhanceConfigNode';
import webpackEnhanceConfigWeb from './webpackEnhanceConfigWeb';
import webpackEnhanceEntryOutputStandard from './webpackEnhanceEntryOutputStandard';
import webpackEnhanceBaseConfig from './core/webpackEnhanceBaseConfig';
import webpackConfigCommandLine from './core/webpackConfigCommandLine';
// import aaa8 from '@defualt/aaa8';
// console.log(aaa8);

// console.log(process.cwd());
// // console.log(argv);
// console.log({
//   entry: path.resolve(process.cwd(), argv.entry),
//   output: path.resolve(process.cwd(), argv.output),
// });

function generateConfigJson() {
  console.log('ARGV',argv)
  const isCommandLine = argv.entry;
  let config;
  if (isCommandLine) {
    config = webpackConfigCommandLine();
  } else {
    config = webpackEnhanceBaseConfig();
    const isBuild = argv.env === 'build';
    const dirRoot = argv.dirroot || process.cwd();
    const packageJson = fs.readJsonSync(`${dirRoot}/package.json`);
    const outputFiles = {};
    const libraryName = packageJson.name;
    const libraryNameReduced = libraryName.split('/')[1] || libraryName.split('/')[0];
    if (isBuild) {
      outputFiles.library = `dist/${libraryNameReduced}`;
      outputFiles.libraryMin = `dist/${libraryNameReduced}.min`;
      outputFiles.demo = 'dist/demo/index';
    } else {
      outputFiles.demo = 'boot';
      outputFiles.library = `${libraryNameReduced}`;
    }
    config = webpackEnhanceEntryOutputStandard(
      config, dirRoot, libraryName, libraryNameReduced, outputFiles, argv.asdf
    );
    if (packageJson.bundleForNode) {
      config = webpackEnhanceConfigNode(config);
    } else {
      let username = null;
      if (packageJson.repository && packageJson.repository.url) {
        username = packageJson.repository.url.replace('://').split('/')[1];
      }
      config = webpackEnhanceConfigWeb(
        config, libraryName, isBuild, dirRoot, username, outputFiles,
      );
    }
  }
  fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

export default generateConfigJson();
