module.exports = function(standardModes){
  if(typeof standardModes === 'string'){
    standardModes = [standardModes];
  }
  var pipedString = ''
  for(var i =0,l=standardModes.length;i<l;i++){
    var mode = standardModes[i];
    pipedString += i > 0 ? '|' + mode : mode;

  }
  var regx = new RegExp('^/('+pipedString+')(.+)');;
  return regx;
};