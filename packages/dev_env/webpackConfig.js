import webpack from 'webpack';
import { argv } from 'yargs';
import fs from 'fs-extra';
import globby from 'globby';
import nodeExternals from 'webpack-node-externals';
import path from 'path';
import webpackConfigResolve from './core/webpack-config-resolve';


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
/* eslint-disable no-nested-ternary */
function generateConfigJson(options = {}) {
  const isCommandLine = options.isCommandLine || argv.entry;
  const isMocha = options.isMocha;
  const isBuild = argv.env === 'build';
  const dirRoot = argv.dirroot || process.cwd();
  const packageJson = fs.readJsonSync(`${dirRoot}/package.json`);
  const libraryName = packageJson.name;

  const config = {
    devtool: 'sourcemap',
    ...(
      !isMocha
      ?
      (
        {
          entry: isCommandLine ? argv.entry : makeEntry({libraryName,isBuild,dirRoot}),
          output: isCommandLine ? makeOutputSettingsFromFilePath(argv.output) : {
            path: `${dirRoot}`,
            filename: '[name].js',
            library: libraryName,
            libraryTarget: 'umd',
            umdNamedDefine: true,
            publicPath: '/',
          }
        }
      )
      :
      {}
    ),

    // for node start
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [
      nodeExternals({
        // modulesFromFile: true,
        modulesDir: path.resolve(__dirname.split('/packages/dev_env')[0], './node_modules'),
      }),
    ],
    // for node end

    module: {
      rules: [
        // for node start
        { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' },
        { test: /async\.js/, use: 'imports-loader?define=>false' },
        // for node end

        {
          test: /\.(js)?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|\.tmp)/,
        },
      ],
    },
    resolve: webpackConfigResolve.resolve,
    plugins: [
      // for node start
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false,
      }),
      ...(
        isCommandLine || isMocha
        ?
        [
          // I needed __dirname hardcoded as the original dirname
          // https://github.com/webpack/webpack/issues/1599#issuecomment-266588898
          {
            apply(compiler) {
              function setModuleConstant(expressionName, fn) {
                compiler.plugin('compilation', (compilation, data) => {
                  data.normalModuleFactory.plugin('parser', (parser) => {
                    parser.plugin(`expression ${expressionName}`, function compilerParserPlugin() {
                      this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
                      return true;
                    });
                  });
                });
              }

              setModuleConstant('__filename', (module) => {
                return module.resource;
              });

              setModuleConstant('__dirname', (module) => {
                return module.context;
              });
            },
          }
        ]
        :
        []
      ),
      // for node end
    ]
  };

  // fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

export default generateConfigJson;
