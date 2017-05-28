module.exports = function(fun){
  return function(c){
    if(c.prepareModuleWithDefaults){
      c = Object.assign({},c);
      var parseSettings = null;
      if(c.parseSettings){
        parseSettings = c.parseSettings;
        delete c.parseSettings;
      }
      delete c.prepareModuleWithDefaults;
      return function(r){
        if(typeof r === 'object' && !Array.isArray(r)){
          r = Object.assign({},c,r);
        }
        
        if(parseSettings){
          r = parseSettings(r);
        }
        return fun(r);
      };
    } else {
      return fun(c);
    }
  };
};