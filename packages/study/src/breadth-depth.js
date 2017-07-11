var o = {
	v:1,
	l:{
		v:2,
		l:{
			v:4
		},
		r:{
			v:5
		}
	},
	r:{
		v:3,
		l:{
			v:6
		},
		r:{
			v:7
		}
	}
};

console.log(o);
var queue = [];
var recurse = function(n){
	console.log(n.v);
	
	if(n.l){
		queue.push(n.l);
	}
	if(n.r){
		queue.push(n.r);
	}
	while(queue.length){
		var a = queue[0];
		queue.shift();
		recurse(a)
	}


};
recurse(o);


var o2 = {
	v:1,
	l:{
		v:2,
		l:{
			v:3,
			l:{
				v:4
			},
			r:{
				v:5
			}
		},
		r:{
			v:6,
			l:{
				v:7
			}
		}
	},
	m:{
		v:8
	},
	r:{
		v:9,
		l:{
			v:10,
			l:{
				v:11
			},
			r:{
				v:12
			}
		},
		r:{
			v:13
		}
	}

};

var recurse2 = function(n){
	console.log(n.v,n);
	if(n.l){
		recurse2(n.l)
	}
	if(n.m){
		recurse2(n.m)
	}
	if(n.r){
		recurse2(n.r)
	}
};
recurse2(o2);


