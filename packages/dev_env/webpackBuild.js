import webpackCompile from './webpackCompile';
import webpackRunner from './core/webpackRunner';

export default () => {
  webpackRunner(webpackCompile);
};
