import webpack from 'webpack';
import webpackRunCompiler from './webpackRunCompiler';
import webpackConfig from './webpackConfigCommandLine';

function webpackMakeCompiler() {
  const compiler = webpack(webpackConfig());
  return compiler;
}

export default () => {
  webpackRunCompiler(webpackMakeCompiler);
};
