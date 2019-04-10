class PluginRegistry {
  constructor() {
    this.registry = {};
    this.plugins = [];
  }
  register(name, plugin) {
    if (!this.registry[name]) {
      this.plugins.push(plugin);
      this.registry[name] = true;
      return true;
    }
    return false;
  }
}

const pluginRegistry = new PluginRegistry();
const plugins = pluginRegistry.plugins;
const register = pluginRegistry.register.bind(pluginRegistry);
export { register };
export default plugins;
