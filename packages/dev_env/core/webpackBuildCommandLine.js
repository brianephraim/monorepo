import webpack from 'webpack';
import webpackRunCompiler from './webpackRunCompiler';
import webpackConfig from './webpackConfigCommandLine';

export default () => {
  webpackRunCompiler(webpack(webpackConfig()));
};
