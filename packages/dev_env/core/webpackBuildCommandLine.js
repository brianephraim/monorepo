import webpack from 'webpack';
import webpackRunner from './webpackRunner';
import webpackConfig from './webpackConfigCommandLine';

function webpackCompile() {
  const compiler = webpack(webpackConfig());
  return compiler;
}

export default () => {
  webpackRunner(webpackCompile);
};
