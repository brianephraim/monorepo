/* eslint-disable no-mixed-operators */

import nodeExternals from 'webpack-node-externals';

function enhance(originalConfig) {
  const module = { ...(originalConfig && originalConfig.module) };
  module.rules = [
    { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' },
    ...module.rules,
  ];

  const config = {
    ...originalConfig,
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

  };
  return config;
}
export default enhance;
