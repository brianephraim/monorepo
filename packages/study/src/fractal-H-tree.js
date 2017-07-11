var Fractal = function(settings){
	this.settings = settings;
	this.generate(settings.middle,settings.length,settings.generations);
};
Fractal.prototype.drawLine = function(pointA,pointB){
	this.settings.drawLine(pointA,pointB);
};
Fractal.prototype.generate = function(middle,length,generations){
	var self = this;
	var sqrtOfTwo = Math.sqrt(2);
	var i = 0;
	var recurse = function(middle,length,i){
		if(i++ < generations){
			console.log(middle);
			
			var distanceFromMiddle = length/2;
			var leftPoint = {
				x: middle.x - distanceFromMiddle,
				y: middle.y
			};
			var rightPoint = {
				x: middle.x + distanceFromMiddle,
				y: middle.y
			};
			self.drawLine(leftPoint,rightPoint);

			var verticalLength = length/sqrtOfTwo;
			var verticalDistanceFromMiddle = verticalLength/2;
			var nextHorizontalLength = verticalLength/sqrtOfTwo;
			self.drawLine(
				recurse({
					x:leftPoint.x,
					y:leftPoint.y - verticalDistanceFromMiddle
				}, nextHorizontalLength, i),
				recurse({
					x:leftPoint.x,
					y:leftPoint.y + verticalDistanceFromMiddle
				}, nextHorizontalLength, i)
			);
			self.drawLine(
				recurse({
					x:rightPoint.x,
					y:rightPoint.y - verticalDistanceFromMiddle
				}, nextHorizontalLength, i),
				recurse({
					x:rightPoint.x,
					y:rightPoint.y + verticalDistanceFromMiddle
				}, nextHorizontalLength, i)
			);
		}
		return middle;
	}
	recurse(middle,length,0);
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
	length: 100,
	generations: 4,
	drawLine: drawLineOnCanvas
});
