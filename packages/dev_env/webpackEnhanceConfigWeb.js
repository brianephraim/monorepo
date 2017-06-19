/* eslint-disable no-mixed-operators */

function enhance(originalConfig) {
  const module = { ...(originalConfig && originalConfig.module) };
  module.rules = [
    ...module.rules,
  ];

  const config = {
    ...originalConfig,
    module,
  };
  return config;
}
export default enhance;
