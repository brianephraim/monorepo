var JsonFileManager = function(path){
  this.path = path;
  var fs = require('fs');
  var exists = fs.existsSync(path);
  if(exists){
    this.json = fs.readFileSync(path);
    this.json = JSON.parse(this.json);
  } else {
    this.json = {};
  }
};
JsonFileManager.prototype.update = function(key,val){
  var fs = require('fs');
  this.json[key] = val;
  fs.writeFileSync(this.path,JSON.stringify(this.json, null, 2));
};
module.exports = function(path){
  return new JsonFileManager(path);
};