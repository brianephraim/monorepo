import webpack from 'webpack';
import { argv } from 'yargs';
import fs from 'fs-extra';
import globby from 'globby';
import nodeExternals from 'webpack-node-externals';
import path from 'path';


// from universal
// import path from 'path';
// import webpack from 'webpack';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import AutoDllPlugin from 'autodll-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';
import ProgressPlugin from 'webpack/lib/ProgressPlugin';
import jsonImporter from 'node-sass-json-importer';
import WriteFilePlugin from 'write-file-webpack-plugin';

import webpackConfigResolve from './core/webpack-config-resolve';

// from universal
const makeProgressPlugin = () => {
  return new ProgressPlugin((percentage, msg, current, active, modulepath) => {
    if (process.stdout.isTTY && percentage < 1) {
      process.stdout.cursorTo(0);
      modulepath = modulepath ? ` …${modulepath.substr(modulepath.length - 30)}` : '';
      current = current ? ` ${current}` : '';
      active = active ? ` ${active}` : '';
      process.stdout.write(`${(percentage * 100).toFixed(0)}% ${msg}${current}${active}${modulepath} `)
      process.stdout.clearLine(1)
    } else if (percentage === 1) {
      process.stdout.write('\n')
      console.log('webpack: done.')
    }
  })
};
const res = (p) => {
  return path.resolve(__dirname, p);
};



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
// /Users/brianephraim/Sites/monorepo/packages/dev_env/universal/webpack/universalWebpackConfig.js
// /Users/brianephraim/Sites/monorepo/packages/dev_env/         /       /webpackConfig.js
const externalsOld = fs
  .readdirSync(res('../../node_modules'))
  .filter((x) => {
    return !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(x);      
  })
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`
    return externals
  }, {});


/* eslint-disable no-nested-ternary */
function generateConfigJson(options = {}) {
  const isCommandLine = options.isCommandLine || argv.entry;
  const isMocha = options.isMocha;
  const {isReact = false, isClient = false, isDev = false, isUniversal = false} = options;

  const isBuild = argv.env === 'build';
  const dirRoot = argv.dirroot || process.cwd();
  const packageJson = fs.readJsonSync(`${dirRoot}/package.json`);
  const libraryName = packageJson.name;

  const config = {
    ...(isReact ? {
        name: isClient ? 'client' : 'server'
    }: {}),
    target: isReact && isClient ? 'web' : 'node',
    devtool: 'sourcemap',
    ...(
      !isMocha
      ?
      (
        isReact
        ?
        {
          entry: [
            ...(!isClient && !isDev ? [] : ['babel-polyfill']), // not sure why non babel-polyfill when server-prod
            'fetch-everywhere',
            ...(
              isClient &&  isDev ? [
              'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
              'react-hot-loader/patch',
              ] : []
            ),
            path.resolve(__dirname,
              isClient
              ?
              './universal/src/clientRender.js'
              :
              (
                isUniversal
                ?
                './universal/server/render.js'
                :
                './universal/server/nonUniversalRender.js'
              )
            )
          ],
          output: {
            path: res(isClient ? './universal/buildClient' : './universal/buildServer'),
            filename: isClient && !isDev ? '[name].[chunkhash].js' : '[name].js',
            publicPath: '/static/',
            ...(
              isClient
              ?
              {chunkFilename: isDev ? '[name].js' : '[name].[chunkhash].js'}
              :
              {libraryTarget: 'commonjs2'}
            ),      
          },
        }
        :
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
    ...(
      !isReact
      ?
      {
        node: {
          __dirname: false,
          __filename: false,
        }
      }
      :
      {}
    ),
    ...(
      isReact
      ?
      (!isClient ? {externals:externalsOld} : {})
      :
      {
        externals: [
          nodeExternals({
            // modulesFromFile: true,
            modulesDir: path.resolve(__dirname.split('/packages/dev_env')[0], './node_modules'),
          }),
        ],
      }
    ),
    // ...(
    //   !isReact || (isReact && !isClient)
    //   ?
    //   {
    //     externals: [
    //       nodeExternals({
    //         // modulesFromFile: true,
    //         modulesDir: path.resolve(__dirname.split('/packages/dev_env')[0], './node_modules'),
    //         ...(
    //           isReact ?
    //           {
    //             whitelist: [
    //               '.bin','react-universal-component','require-universal-module','webpack-flush-chunks',
    //             ]
    //           }
    //           :
    //           {}
    //         )
    //       }),
    //     ],
    //   }
    //   :
    //   {}
    // ),
        
    // for node end

    module: {
      rules: [
        // for node start
        ...(
          !isReact
          ?
          [
            { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' },
            { test: /async\.js/, use: 'imports-loader?define=>false' },
          ]
          :
          []
        ),
        // for node end

        {
          test: /\.(js)?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|\.tmp)/,
        },
        ...(
          isReact
          ?
          (
            isClient
            ?
            [
              {
                test: /\.css$/,
                use: ExtractCssChunks.extract({
                  use: {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                  }
                })
              },
              {
                test: /\.scss$/,
                use: ExtractCssChunks.extract({
                  use: [
                    'css-loader?sourceMap',
                    {
                      loader: 'sass-loader?sourceMap',
                      options: {
                        importer: jsonImporter,
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                      }
                    }
                  ]
                })
              },
            ]
            :
            [
              {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                  loader: 'css-loader/locals',
                  options: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                  }
                }
              },
              {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                  'css-loader?sourceMap',
                  {
                    loader: 'sass-loader?sourceMap',
                    options: {
                      importer: jsonImporter,
                      modules: true,
                      localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                  }
                ]
              }
            ]
          )
          :
          []
        ),
      ],
    },
    resolve: webpackConfigResolve.resolve,
    plugins: [
      ...(
        isReact
        ?
        (
          isClient
          ?
          [
            (
              isDev 
                ?
                new WriteFilePlugin() // used so you can see what chunks are produced in dev
                :
                new StatsPlugin('stats.json')
            ), 
            new ExtractCssChunks(),
            new webpack.optimize.CommonsChunkPlugin({
              names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
              filename: isDev ? '[name].js' : '[name].[chunkhash].js',
              minChunks: Infinity
            }),
            ...(
              isDev
                ?
                [
                  new webpack.HotModuleReplacementPlugin(),
                  new webpack.NoEmitOnErrorsPlugin(),
                ]
                :
                []
            ),
            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
              }
            }),
            ...(
              !isDev
                ?
                [
                  new webpack.optimize.UglifyJsPlugin({
                    compress: {
                      screw_ie8: true,
                      warnings: false
                    },
                    mangle: {
                      screw_ie8: true
                    },
                    output: {
                      screw_ie8: true,
                      comments: false
                    },
                    sourceMap: true
                  }),
                  new webpack.HashedModuleIdsPlugin(), // not needed for strategy to work (just good practice)
                ]
                :
                []
            ),
            new AutoDllPlugin({
              context: path.join(__dirname, '..'),
              filename: '[name].js',
              entry: {
                vendor: [
                  'react',
                  'react-dom',
                  'react-redux',
                  'redux',
                  'history/createBrowserHistory',
                  'transition-group',
                  'redux-first-router',
                  'redux-first-router-link',
                  'fetch-everywhere',
                  'babel-polyfill',
                  'redux-devtools-extension/logOnlyInProduction'
                ]
              }
            }),
            makeProgressPlugin()
          ]
          :
          // IS SERVER
          [
            new webpack.optimize.LimitChunkCountPlugin({
              maxChunks: 1
            }),

            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
              }
            }),
            makeProgressPlugin()
          ]
        )
        :
        [
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

        ]
      ),
          
      // for node end
    ]
  };

  // fs.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

export default generateConfigJson;
