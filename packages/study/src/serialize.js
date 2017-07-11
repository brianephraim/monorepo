var copyLetter = function(str, start, end){
	str = str.split('');
	if(typeof start === 'string'){

	} else {
		start = str[start];
	}
	
	str[end] = start;
	return str.join('');

};
var serialize = function(sentence,replaceDict){
	var totalIncrease = 0;
	var sentenceOriginalLength = 0;
	var sentenceExtendedLength = 0;
	var char = null;
	var i =0;
	var sentenceAppend = '';
	while(char !== '0'){
		sentenceOriginalLength++;
		sentenceExtendedLength++;
		char = sentence[i++];
		if(typeof replaceDict[char] !== 'undefined'){
			var increaseAmt = replaceDict[char].length - 1
			totalIncrease += increaseAmt;
			sentenceExtendedLength += increaseAmt;
			for(var ii=0;ii<increaseAmt;ii++){
				sentenceAppend += '_';
			}
		}
	}
	sentenceOriginalLength++;
		sentenceExtendedLength++;
	sentence += sentenceAppend;

	var k = 0;
	var adjustedCount = 0;
	for(var i=sentenceOriginalLength;i--;){
		var char = sentence[i];
		var newIndex = ((sentenceExtendedLength) - (k++)) - adjustedCount;
		if(typeof replaceDict[char] !== 'undefined'){
			var c = 0;
			for(var b = replaceDict[char].length; b--;){
				console.log(replaceDict[char][b],b)
				sentence = copyLetter(sentence,replaceDict[char][b],newIndex - (c++));
				adjustedCount++;
			}
			
		} else {
			sentence = copyLetter(sentence,i,newIndex);
		}
		
		
		console.log(sentence)
	}

	console.log(sentence,sentenceOriginalLength, sentenceExtendedLength)
	return sentence
};


console.log(serialize('asdf qwer zxcv0',{' ':'123','x':'456789'}))