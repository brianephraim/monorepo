var reverse = function(x) {
    var isNegative = x < 1;
    x = isNegative ? -x : x;
    var proceed = true;
    var div = 10;
    places = 1;
    while(proceed){
        var product = x/div;
        if(product < 1){
            proceed = false;
        } else {
            places++;
        }
        div = div * 10;
    }
    console.log(places)
    var sum = 0;
    var reversePlaces = 0;
    while(places){
        var tensDiv = Math.pow(10,places-1);
        var reverseTenDiv = Math.pow(10,reversePlaces);
        var digit = x/tensDiv;
        digit = Math.floor(digit);
        console.log(digit)
        var minusDigit = digit * tensDiv;
        x = x - minusDigit;
        digit = digit * reverseTenDiv;
        sum += digit;
        places--;
        reversePlaces++;
    }
    return sum * (isNegative ? -1 : 1);
};
// console.log(reverse(123));
// console.log(reverse(-123));
console.log(reverse(100));