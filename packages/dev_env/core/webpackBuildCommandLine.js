import webpack from 'webpack';
import webpackRunCompiler from './webpackRunCompiler';
import webpackConfig from './webpackConfigCommandLine';

function webpackMakeCompiler() {
  const config = webpackConfig();
  console.log(config);
  const compiler = webpack(config);
  return compiler;
}

export default () => {
  webpackRunCompiler(webpackMakeCompiler);
};
