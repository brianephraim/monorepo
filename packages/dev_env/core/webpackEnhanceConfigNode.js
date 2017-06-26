/* eslint-disable no-mixed-operators */
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

function enhance(originalConfig) {
  const module = { ...(originalConfig && originalConfig.module) };
  module.rules = [
    { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' },
    ...(module.rules || []),
  ];

  const plugins = originalConfig.plugins || [];
  plugins.push(new webpack.BannerPlugin({
    banner: `require("source-map-support").install(
      { hookRequire: true }
      // {
      // retrieveSourceMap: function(source) {
      //   console.log('source',arguments);
      //   // if (source === 'compiled.js') {
      //   //   return {
      //   //     url: 'original.js',
      //   //     map: fs.readFileSync('compiled.js.map', 'utf8')
      //   //   };
      //   // }
      //   return null;
      // }
    // }
    );`,
    raw: true,
    entryOnly: false,
  }));

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
      nodeExternals({ modulesFromFile: true }),
    ],
    plugins,

  };
  return config;
}
export default enhance;
