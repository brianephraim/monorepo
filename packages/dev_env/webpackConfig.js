import { argv } from 'yargs';
import fs from 'fs-extra';
import globby from 'globby';
import webpackEnhanceConfigNode from './core/webpackEnhanceConfigNode';
import webpackEnhanceBaseConfig from './core/webpackEnhanceBaseConfig';


import webpackEnhanceImmediateConfig from './core/webpackEnhanceImmediateConfig';



function removeKeysWithEmptyVals(obj){
  return Object.keys(obj).reduce((accum, key) => {
    if (obj[key].length) {
      accum[key] = obj[key];
    }
    return accum;
  }, {})
}

function makeOutputSettingsFromFilePath(filePath) {
  let output = filePath;
  output = output.split('/');

  output = {
    filename: output.pop(),
    path: output.join('/'),
  };
  return output;
}

function makeOutputFiles({libraryNameReduced,isBuild}) {
  const outputFiles = {};
  if (isBuild) {
    outputFiles.library = `dist/${libraryNameReduced}`;
    outputFiles.libraryMin = `dist/${libraryNameReduced}.min`;
    outputFiles.demo = 'dist/demo/index';
  } else {
    outputFiles.demo = 'boot';
    outputFiles.library = `${libraryNameReduced}`;
  }
  return outputFiles;
}

function makeEntry({libraryName,isBuild,dirRoot}) {
  const libraryNameReduced = libraryName.split('/')[1] || libraryName.split('/')[0];
  const outputFiles = makeOutputFiles({libraryNameReduced,isBuild});
  return removeKeysWithEmptyVals(
    argv['demo-entry']
    ?
    {
      [outputFiles.demo]: [argv['demo-entry']],
    }
    :
    {
      MainApp: globby.sync([`${dirRoot}/packages/MainApp/demo.js`]),
      [outputFiles.library]: globby.sync([
        `${dirRoot}/${libraryNameReduced}.js`,
        `${dirRoot}/src/library/index.js`,
      ]),
      ...(
        outputFiles.libraryMin ? {
          [outputFiles.libraryMin]: globby.sync([`${dirRoot}/src/library/index.js`]),
        } : {}
      ),
      [outputFiles.demo]: globby.sync([
        `${dirRoot}/*.demo.js`,
        `${dirRoot}/demo.js`,
        `${dirRoot}/**/*/*.demo.js`,
        `${dirRoot}/**/*/demo.js`,
        `!${dirRoot}/packages/**/*`,
        `${dirRoot}/packages/MainApp/demo.js`,
        `!${dirRoot}/node_modules/**/*`,
      ]),
    }
  )
}

function generateConfigJson(options = {}) {
  const isCommandLine = options.isCommandLine || argv.entry;
  let config;
  config = webpackEnhanceBaseConfig();
  if (isCommandLine) {
    config = {
      ...config,
      entry: {
        main: argv.entry,
      },
      output: makeOutputSettingsFromFilePath(argv.output),
    };
  } else {
    const isBuild = argv.env === 'build';
    const dirRoot = argv.dirroot || process.cwd();
    const packageJson = fs.readJsonSync(`${dirRoot}/package.json`);
    
    const libraryName = packageJson.name;
    
    config = {
      ...config,
      entry: makeEntry({libraryName,isBuild,dirRoot}),
      output: {
        path: `${dirRoot}`,
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: '/',
        // publicPath: '/assets/',
      },
    };
  }

  config = webpackEnhanceConfigNode(config);

  if (isCommandLine) {
    config = webpackEnhanceImmediateConfig(config);
  }
  // fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

export default generateConfigJson;
