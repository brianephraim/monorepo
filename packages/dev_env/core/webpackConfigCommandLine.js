import fs from 'fs-extra';
import { argv } from 'yargs';
import webpackEnhanceBaseConfig from './webpackEnhanceBaseConfig';
import webpackEnhanceConfigNode from './webpackEnhanceConfigNode';
import webpackEnhanceImmediateConfig from './webpackEnhanceImmediateConfig';

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
  config = webpackEnhanceImmediateConfig(config);
  // fs.writeFileSync('./_webpack-config-preview-commandline.json', JSON.stringify(config, null, 2));
  return config;
}

export default enhance;
