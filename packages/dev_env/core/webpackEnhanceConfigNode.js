/* eslint-disable no-mixed-operators */
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import path from 'path';

function enhance(originalConfig) {
  const module = { ...(originalConfig && originalConfig.module) };
  module.rules = [
    { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' },
    { test: /async\.js/, use: 'imports-loader?define=>false' },
    ...(module.rules || []),
  ];

  const plugins = originalConfig.plugins || [];
  plugins.push(new webpack.BannerPlugin({
    banner: `require("source-map-support").install();`,
    raw: true,
    entryOnly: false,
  }));

  let modulesDir = '../node_modules';
  if (__dirname.indexOf('/packages/') > __dirname.indexOf('/node_modules/')) {
    modulesDir = `${__dirname.split('/packages/')[0]}/node_modules`;
  }
  console.log('a',modulesDir);
  console.log('b','/Users/brianephraim/Sites/monorepo/node_modules');
  const config = {
    ...originalConfig,
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-source-map',
    // devtool: 'cheap-eval-source-map',
    // devtool: 'source-map',
    devtool: 'inline-source-map',
    // devtool: 'sourcemap',
    // devtool: 'eval',
    module,
    target: 'node',
    node: {
      ...originalConfig.node,
      __dirname: false,
      __filename: false,
    },
    externals: [
      ...(originalConfig.externals || []),
      nodeExternals({ 
        // modulesFromFile: true,
        modulesDir: '/Users/brianephraim/Sites/monorepo/node_modules'
      }),
    ],
    plugins,

  };
  return config;
}
export default enhance;
