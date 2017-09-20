// ----- client dev
const path = require('path')
const webpack = require('webpack')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const AutoDllPlugin = require('autodll-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const resolve2 = require('../../core/webpack-config-resolve')
const StatsPlugin = require('stats-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const jsonImporter = require('node-sass-json-importer');

const makeProgressPlugin = () => {
  return new ProgressPlugin(function (percentage, msg, current, active, modulepath) {
    if (process.stdout.isTTY && percentage < 1) {
      process.stdout.cursorTo(0)
      modulepath = modulepath ? ' …' + modulepath.substr(modulepath.length - 30) : ''
      current = current ? ' ' + current : ''
      active = active ? ' ' + active : ''
      process.stdout.write((percentage * 100).toFixed(0) + '% ' + msg + current + active + modulepath + ' ')
      process.stdout.clearLine(1)
    } else if (percentage === 1) {
      process.stdout.write('\n')
      console.log('webpack: done.')
    }
  })
};

// ----- server dev
const fs = require('fs')
// const path = require('path')
// const webpack = require('webpack')
// const resolve2 = require('../../core/webpack-config-resolve')

// ----- server dev
const res = p => path.resolve(__dirname, p)

// if you're specifying externals to leave unbundled, you need to tell Webpack
// to still bundle `react-universal-component`, `webpack-flush-chunks` and
// `require-universal-module` so that they know they are running
// within Webpack and can properly make connections to client modules:
const externals = fs
  .readdirSync(res('../../../../node_modules'))
  .filter(
    x =>
      !/\.bin|react-universal-component|require-universal-module|webpack-flush-chunks/.test(
        x
      )
  )
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`
    return externals
  }, {})


/* eslint-disable no-nested-ternary */
module.exports = ({isClient = false, isDev = false, isUniversal = false}) => {
  return {
    name: isClient ? 'client' : 'server',
    target: isClient ? 'web' : 'node',
    devtool: 'source-map',
    // devtool: 'eval',
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
        '../src/clientRender.js'
        :
        (
          isUniversal
          ?
          '../server/render.js'
          :
          '../server/nonUniversalRender.js'
        )
      )
    ],
    ...(!isClient ? {externals} : {}),
    output: {
      path: res(isClient ? '../buildClient' : '../buildServer'),
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
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        ...(
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
        ),
      ]
    },
    resolve: resolve2.resolve,
    plugins: isClient
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
  };

}



















