var ll = {
	value:4,
	next:{
		value:3,
		next:{
			value:2,
			next:{
				value:1,
				next:null
			}
		}
	}
};

var reverse = function(ll){
	var lastNode;
	var recurse = function(node,parent){
		lastNode = node;
		var next = node.next;
		if(next){
			recurse(node.next, node);
		}
		node.next = parent;
	};
	recurse(ll);
	return lastNode;

};
console.log(reverse(ll))