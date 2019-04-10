import webpack from 'webpack';
import webpackRunCompiler from './webpackRunCompiler';
import webpackConfig from '../webpackConfig';

export default () => {
  webpackRunCompiler(webpack(webpackConfig({isCommandLine: true})));
};
