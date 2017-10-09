import webpack from "webpack";
import { argv } from "yargs";
import fs from "fs-extra";
import globby from "globby";
import path from "path";
import findNodeModules from "find-node-modules";
import ExtractCssChunks from "extract-css-chunks-webpack-plugin";
import AutoDllPlugin from "autodll-webpack-plugin";
import StatsPlugin from "stats-webpack-plugin";
import ProgressPlugin from "webpack/lib/ProgressPlugin";
import jsonImporter from "node-sass-json-importer";
import WriteFilePlugin from "write-file-webpack-plugin";
import VirtualModulesPlugin from 'webpack-virtual-modules';
import webpackConfigResolve from "./core/webpack-config-resolve";

if (argv.isReact && !argv.initialApp) {
  throw new Error('MISSING REQUIRED argv.initialApp');
}

function getDirname() {
  return typeof __dirnameWhenCompiled !== "undefined"
    ? __dirnameWhenCompiled
    : __dirname;
}

const makeProgressPlugin = () => {
  return new ProgressPlugin((percentage, msg, current, active, modulepath) => {
    if (process.stdout.isTTY && percentage < 1) {
      process.stdout.cursorTo(0);
      modulepath = modulepath
        ? ` …${modulepath.substr(modulepath.length - 30)}`
        : "";
      current = current ? ` ${current}` : "";
      active = active ? ` ${active}` : "";
      process.stdout.write(
        `${(percentage * 100).toFixed(
          0
        )}% ${msg}${current}${active}${modulepath} `
      );
      process.stdout.clearLine(1);
    } else if (percentage === 1) {
      process.stdout.write("\n");
      console.log("webpack: done.");
    }
  });
};

const res = (p) => {
  return path.resolve(getDirname(), p);
};

// *** Non-mocha Non-React
function removeKeysWithEmptyVals(obj) {
  return Object.keys(obj).reduce((accum, key) => {
    if (obj[key].length) {
      accum[key] = obj[key];
    }
    return accum;
  }, {});
}

// *** Non-mocha Non-React
function makeOutputSettingsFromFilePath(filePath) {
  let output = filePath;
  output = output.split("/");

  output = {
    filename: output.pop(),
    path: output.join("/")
  };
  return output;
}

// *** Non-mocha Non-React
function makeOutputFiles({ libraryNameReduced, isBuild }) {
  const outputFiles = {};
  if (isBuild) {
    outputFiles.library = `dist/${libraryNameReduced}`;
    outputFiles.libraryMin = `dist/${libraryNameReduced}.min`;
    outputFiles.demo = "dist/demo/index";
  } else {
    outputFiles.demo = "boot";
    outputFiles.library = `${libraryNameReduced}`;
  }
  return outputFiles;
}

// *** Non-mocha Non-React
function makeEntry({ libraryName, isBuild, dirRoot }) {
  const libraryNameReduced =
    libraryName.split("/")[1] || libraryName.split("/")[0];
  const outputFiles = makeOutputFiles({ libraryNameReduced, isBuild });
  return removeKeysWithEmptyVals(
    argv["demo-entry"]
      ? {
          [outputFiles.demo]: [argv["demo-entry"]]
        }
      : {
          [outputFiles.library]: globby.sync([
            `${dirRoot}/${libraryNameReduced}.js`,
            `${dirRoot}/src/library/index.js`
          ]),
          ...(outputFiles.libraryMin
            ? {
                [outputFiles.libraryMin]: globby.sync([
                  `${dirRoot}/src/library/index.js`
                ])
              }
            : {}),
          [outputFiles.demo]: globby.sync([
            `${dirRoot}/*.demo.js`,
            `${dirRoot}/demo.js`,
            `${dirRoot}/**/*/*.demo.js`,
            `${dirRoot}/**/*/demo.js`,
            `!${dirRoot}/packages/**/*`,
            `!${dirRoot}/node_modules/**/*`
          ])
        }
  );
}

const nodeModulesLocationsArray = findNodeModules({ relative: false });
let nodeModulesLocation = nodeModulesLocationsArray[0];
if (nodeModulesLocation.indexOf("packages/dev_env") !== -1) {
  nodeModulesLocation = nodeModulesLocation.split("packages/dev_env")[0];
  nodeModulesLocation = `${nodeModulesLocation}node_modules`;
}




/* eslint-disable no-nested-ternary */
// prettier-ignore
function generateConfigJson(options = {}) {

  const isCommandLine = options.isCommandLine || argv.entry;
  const isMocha = options.isMocha;
  const {isReact = false, isClient = false, isDev = false, isUniversal = false} = options;

  const isBuild = argv.env === 'build';
  const dirRoot = argv.dirroot || process.cwd();
  const packageJson = fs.readJsonSync(`${dirRoot}/package.json`);
  const libraryName = packageJson.name;


  function makeServerCollection () {
    /*
      // if argv.servers, Will produce a module like this
      import varName1 from '/Users/brianephraim/Sites/monorepo/packages/someServer1/someServer1.js'
      import varName2 from '/Users/brianephraim/Sites/monorepo/packages/someServer2/someServer2.js'
      export default [varName1,varName2];

      //if not argv.servers, Will produce a module like this
      export default [];
    */
    let id = 0;
    const servers = !argv.servers ? [] : argv.servers.split(',').map((item) => {
      return {
        varName: `varName${id++}`,
        path: path.resolve(dirRoot, item.trim()),
      }
    });
    
    const importSection = servers.reduce((accum,item) => {
      const line = `import ${item.varName} from '${item.path}';`;
      return `${accum}${'\n'}${line}`;
    },'');
    const exportSection = `export default [${servers.map((item) => {
      return `${item.varName}`;
    }).join(',')}];`;
    const toReturn = `${importSection}${'\n'}${'\n'}${exportSection}`;
    return `${'\n'}${toReturn}`;
  }

  // NOTE!!!!!!!
  // 1. Non-React is always server (node) right now.
  //    This will be a problem when publish packages out of the monorepo
  //    that are designed for client.
  //    Be aware.
  //
  // 2. Comments below with a format like this
  //      // *** React Client
  //    indicates which configurations the code below controls.
  //    These are seen adjacent to ternaries.
  const config = {
    ...(isReact ? {
        name: isClient ? 'client' : 'server'
    }: {}),
    target: isReact && isClient ? 'web' : 'node',
    ...(!isClient ? {node: { __dirname: false, __filename: false, }} : {}),
    devtool: 'sourcemap',
    //  cheap-module-eval-source-map
    // new webpack.EvalSourceMapDevToolPlugin()
    ...(
      isMocha ? {} :(
        // *** Non-mocha
        isReact
        ?
        // *** Non-mocha React
        {
          entry: [
            ...(!isClient && !isDev ? [] : ['babel-polyfill']), // not sure why non babel-polyfill when server-prod
            'fetch-everywhere',
            ...(
              isClient && isDev ? [
              'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
              'react-hot-loader/patch',
              ] : []
            ),
            path.resolve(getDirname(),
              isClient
              ?
              './universal/src/renderClient.js'
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
            path: res(isClient ? './universal/buildClient' : './universal/buildServer','outputXX'),
            filename: isClient && !isDev ? '[name].[chunkhash].js' : '[name].js',
            publicPath: '/staticx/',
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
        // *** Non-mocha Non-React
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
    ),
    ...(
      // *** React Server or Non-React
      !(!isReact || !isClient) ? {} : {
        // Specify externals to leave unbundled, but tell Webpack
        // to still bundle `react-universal-component`, `webpack-flush-chunks` and
        // `require-universal-module` so that they know they are running
        // within Webpack and can properly make connections to client modules:
        externals: fs
        .readdirSync(res(nodeModulesLocation, "externalsOldXX"))
        .filter(x => {
          return !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(
            x
          );
        })
        .reduce((externals, mod) => {
          externals[mod] = `commonjs ${mod}`;
          return externals;
        }, {})
      }
    ),

    module: {
      rules: [
        // *** Non-React
        ...(isReact ? [] : [
          { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' },
          { test: /async\.js/, use: 'imports-loader?define=>false' },
        ]),
        // *** All configs
        {
          test: /\.(js)?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|\.tmp)/,
        },
        ...(
          !isReact ? [] : (
            isClient
            ?
            // *** React Client
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

            // *** React Server
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
        ),
      ],
    },
    resolve: webpackConfigResolve.resolve,
    plugins: [
      ...(
        !isReact ? [] : (

          // *** React just Client
          !isClient ? [] : [

            // *** React Client Dev and Prod
            (
              isDev 
                ?
                new WriteFilePlugin() // used so you can see what chunks are produced in dev
                :
                new StatsPlugin('stats.json')
            ), 
            new ExtractCssChunks(),

            // Needed for code splitting.
            new webpack.optimize.CommonsChunkPlugin({
              names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
              filename: isDev ? '[name].js' : '[name].[chunkhash].js',
              minChunks: Infinity
            }),

            // *** React Client Dev
            ...(!isDev ? [] : [
              new webpack.HotModuleReplacementPlugin(),
              new webpack.NoEmitOnErrorsPlugin(),
            ]),

            // *** React Client Prod
            ...(isDev ? [] : [
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
            ]),

            // *** React Client Dev and Prod

            // This creates file vendor.js
            // AutoDllPlugin caches vendor bundle between build initiation.
            // So compiling is faster.  Google it. It's interesting.
            new AutoDllPlugin({
              context: path.join(getDirname(), '..'),
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
          ]
        )
      ),

      // *** If not react or is react but is server
      ...(!(!isReact || !isClient) ? [] : [
        // In case Node code uses import(...) code splitting
        // put chunks in one file instead of multiple
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1
        }),

        // needed for sourcemap stacktrace in node
        new webpack.BannerPlugin({
          banner: 'require("source-map-support").install();',
          raw: true,
          entryOnly: false,
        }),
      ]),

      // *** Everything gets these
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
          // In bundles, where `__filename` appears, replace with string
          // consisting of the original file path withere `__filename` appeared
          setModuleConstant('__filename', (module) => {
            return module.resource;
          });

          // In bundles, where `__dirnameWhenCompiled` appears, replace with string
          // consisting of the original directory path withere `__dirnameWhenCompiled` appeared
          setModuleConstant('__dirnameWhenCompiled', (module) => {
            return module.context;
          });
        },
      },
      // Give bundled code global access to `process.env.NODE_ENV`, with a value defined below.
      new webpack.EnvironmentPlugin({
        NODE_ENV: isDev ? 'development' : 'production', // use 'development' unless process.env.NODE_ENV is defined
        // DEBUG: false
      }),
      ...(
        // *** React Client And Server
        isReact && argv.initialApp  ? [
          new VirtualModulesPlugin({
            'node_modules/virtual-module-initial-app.js': `
              import routeData from '${path.resolve(dirRoot, argv.initialApp)}';
              export default routeData;
            `,
          }),
        ] : []
      ),

      new VirtualModulesPlugin({
        'node_modules/virtual-module-server-collection': makeServerCollection(),
      }),

      // Terminal visualizer for bundling progress
      makeProgressPlugin(),
    ]
  };

  return config;
}

export default generateConfigJson;
