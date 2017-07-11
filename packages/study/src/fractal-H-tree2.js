var Fractal = function(settings){
	this.settings = settings;
	this.generate();
};
Fractal.prototype.drawLine = function(){
	this.settings.drawLine.apply(null,arguments);
};
Fractal.prototype.getPointB = function(pointA,length,angle){
	return {
		x: pointA.x + Math.cos(angle * (Math.PI/180)) * length,
		y: pointA.y + Math.sin(angle * (Math.PI/180)) * length
	};
};

Fractal.prototype.generate = function(){
	var settings = this.settings;
	var spokes = settings.spokes;
	var angleIncrements = 360/spokes;
	var denominator = Math.pow(spokes, 1/spokes);
	var isEven = spokes % 2 === 0;
	var i = 0;
	var recurse = function(middle,length,i,currentAngle){
		if(i === 0){
			//normalize size
			length = length * ((length/2)/(length/spokes))
		}
		if(i++ < settings.generations){	
			var distanceFromMiddle = length/spokes;
			var verticalLength = length/denominator;
			var verticalDistanceFromMiddle = verticalLength/spokes;
			var nextHorizontalLength = verticalLength/denominator;
			var nextAngle = currentAngle;
			for(var j=0;j<spokes;j++){
				var nextPoint = this.getPointB(middle,distanceFromMiddle,nextAngle);
				this.drawLine(middle,nextPoint);
				var nextVerticalAngle = 90;
				for(var k=0;k<spokes;k++){
					var nextVerticalPoint = this.getPointB(nextPoint,verticalDistanceFromMiddle,nextVerticalAngle);
					this.drawLine(nextPoint,nextVerticalPoint);
					recurse(nextVerticalPoint,nextHorizontalLength,i,nextAngle);
					nextVerticalAngle += angleIncrements;
				}
				nextAngle += angleIncrements;
			}
		}
	}.bind(this);
	recurse.call(this,settings.middle,settings.length,0,isEven ? 0 : 90);
};

var drawLine = function(canvas,pointA,pointB){
	var context = canvas.getContext('2d');
	context.beginPath();
	context.moveTo(pointA.x, pointA.y);
	context.lineTo(pointB.x, pointB.y);
	context.stroke();
};
var drawLineOnCanvas = function(pointA,pointB){
	drawLine(canvas,pointA,pointB);
};

var canvas = document.getElementById('myCanvas');

var myFractal = new Fractal({
	middle: {
		x: 200,
		y: 200
	},
	length: 200,
	generations: 2,
	spokes:3,
	drawLine: drawLineOnCanvas
});


var makeButtons = function(setting,start,end){
	var parent = document.createElement('div');
	document.body.insertBefore(parent, document.body.firstChild);
	for(var i=start;i<=end;i++){
		(function(i){
			var el = document.createElement('button');
			el.textContent = i + ' ' + setting;
			el.addEventListener('click', function(e){
				myFractal.settings[setting] = i;
				var context = canvas.getContext('2d');
				context.clearRect(0, 0, canvas.width, canvas.height);
				myFractal.generate();
				e.preventDefault();
			});
			parent.appendChild(el);
		})(i);
	}
};

makeButtons('spokes',2,10);
makeButtons('generations',1,2);


