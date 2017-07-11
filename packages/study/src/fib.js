var fib = function(g){
	var i = 0;
	var recurse = function(v,l){
		if(i === g){
			return v;
		}
		if(i++ === 0){
			return recurse(1,0);
		} else {
			console.log(v+l,l)
			return recurse(v + l, v);
		}
	};
	recurse(0);
};

console.log(fib(5));