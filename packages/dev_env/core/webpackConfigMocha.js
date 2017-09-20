import fs from 'fs-extra';
import webpackEnhanceBaseConfig from './webpackEnhanceBaseConfig';
import webpackEnhanceConfigNode from './webpackEnhanceConfigNode';
import webpackEnhanceImmediateConfig from './webpackEnhanceImmediateConfig';

function enhance() {
  let config = webpackEnhanceBaseConfig();
  config = webpackEnhanceConfigNode(config);
  config = webpackEnhanceImmediateConfig(config);
  // fs.writeFileSync('./_webpack-config-preview-mocha.json', JSON.stringify(config, null, 2));
  return config;
}

export default enhance();
