//====================================================
var getPermutations = function(str) {
  //Enclosed data to be used by the internal recursive function permutate():
  var permutations = {}; //generated permutations stored here
  var nextWord = []; //next word builds up in here     
  var chars = []; //collection for each recursion level
  //---------------------
  //split words or numbers into an array of characters
  if (typeof str === 'string') {
    chars = str.split('');
  } else if (typeof str === 'number') {
    str = str + ""; //convert number to string
    chars = str.split(''); //convert string into char array
  }
  //===========UNDER THE HOOD===========
  var recurse = function(chars) { //recursive: generates the permutations
    if (chars.length === 0) {
      permutations[nextWord.join('')] = true;
    }
    for (var i = 0; i < chars.length; i++) {
      chars.push(chars.shift()); //rotate the characters
      nextWord.push(chars[0]); //use the first char in the array            
      recurse(chars.slice(1)); //Recurse: array-less-one-char
      nextWord.pop(); //clear for nextWord (multiple pops)
    }
  }
  //============TWO Declaratives========
  recurse(chars);
  return Object.keys(permutations);
  //--------------------------------
} //==============END of getPermutations(str)=============

console.log(getPermutations('aasdf'));
