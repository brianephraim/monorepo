import webpack from 'webpack';

import webpackConfig from './webpackConfigCommandLine';

export default () => {
  const compiler = webpack(webpackConfig());
  return compiler;
};
