import { argv } from 'yargs';
import webpackEnhanceBaseConfig from './webpackEnhanceBaseConfig';
import webpackEnhanceConfigNode from './webpackEnhanceConfigNode';

function enhance() {
  let config = webpackEnhanceBaseConfig();
  const entry = {
    main: argv.entry,
  };
  let output = argv.output;
  output = output.split('/');

  output = {
    filename: output.pop(),
    path: output.join('/'),
  };
  config = {
    ...config,
    entry,
    output,
  };
  config = webpackEnhanceConfigNode(config);
  return config;
}

export default enhance;
