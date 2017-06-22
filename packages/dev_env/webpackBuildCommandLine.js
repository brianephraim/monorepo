import webpackCompile from './webpackCompileCommandLine';
import webpackRunner from './webpackRunner';

export default () => {
  webpackRunner(webpackCompile);
};
