var validate = function(str){
	var openers = {
		'{':'}',
		'[':']',
		'(':')'
	};
	var closers = {
		'}':true,
		']':true,
		')':true
	};
	var prevOpeners = [];
	for(var i=0,l=str.length;i<l;i++){
		var char = str[i];

		if(openers[char]){
			prevOpeners.push(char);
		} else if(closers[char]){
			var pO = prevOpeners.pop();
			if(openers[pO] !== char){
				return false;
			}
		}
	}
	return true;
};

var valid = '[{()[][()]{}}]';
// var valid = '[]';
console.log(validate(valid));
var invalid = '[{()[][(]){}}]';
// var invalid = '([a)]';
console.log(validate(invalid));
