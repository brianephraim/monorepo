
var str = 'asdf zxcv asdf0';

var replace = function(str){
	var spaces = 0;
	var length = 0;
	var char = null;
	while(char !== '0'){
		char = str[length++];
		if(char === ' '){
			spaces++;
		}
	}
	str = str.split('');
	char = null;
	var replacement = '123';
	for(var i = length;i--;){
		var offset = spaces * (replacement.length - 1);
		char = str[i];
		if(char === ' '){
			var k = 0;
			for(var ii=replacement.length;ii--;){
				var replacementChar = replacement[ii];
				str[i + offset - (k++)] = replacementChar;
			}
			spaces--;

		} else {
			str[i+offset] = str[i];
		}
		
	}
	console.log(spaces, length);
	console.log(str)
};
replace(str)