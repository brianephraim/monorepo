var Fractal = function(settings){
	if(!settings){
		settings = {
			middle: {
				x: 200,
				y: 200
			},
			length: 200,
			generations: 2,
			spokes:3,
			drawLine: function(pointA,pointB){
				console.log(pointA,pointB);
			}
		}
	}
	this.settings = settings;
	this.generate();
};
Fractal.prototype.getNextPoint = function(pointA,length,angle){
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
			var outgrowthLength = length/denominator;
			var outgrowthDistanceFromMiddle = outgrowthLength/spokes;
			var nextHorizontalLength = outgrowthLength/denominator;
			var nextAngle = currentAngle;
			for(var j=0;j<spokes;j++){
				var nextPoint = this.getNextPoint(middle,distanceFromMiddle,nextAngle);
				this.settings.drawLine(middle,nextPoint);
				var nextOutgrowthAngle = 90;
				for(var k=0;k<spokes;k++){
					var nextOutgrowthPoint = this.getNextPoint(nextPoint,outgrowthDistanceFromMiddle,nextOutgrowthAngle);
					this.settings.drawLine(nextPoint,nextOutgrowthPoint);
					recurse(nextOutgrowthPoint,nextHorizontalLength,i,nextAngle);
					nextOutgrowthAngle += angleIncrements;
				}
				nextAngle += angleIncrements;
			}
		}
	}.bind(this);
	recurse(settings.middle,settings.length,0,isEven ? 0 : 90);
};

var Drawing = function(canvasEl){
	this.el = document.createElement('canvas');
	this.width = 1000;
	this.height = 1000;
	this.el.setAttribute('width',this.width);
	this.el.setAttribute('height',this.height);
	this.context = this.el.getContext('2d');
	document.body.appendChild(this.el);
	
};
Drawing.prototype.drawLine = function(pointA,pointB){
	this.context.beginPath();
	this.context.moveTo(pointA.x, pointA.y);
	this.context.lineTo(pointB.x, pointB.y);
	this.context.stroke();
};
Drawing.prototype.clear = function(){
	this.context.clearRect(0, 0, this.width, this.height);
};

var makeButtons = function(setting,start,end){
	var parent = document.createElement('div');
	document.body.appendChild(parent);
	for(var i=start;i<=end;i++){
		(function(i){
			var el = document.createElement('button');
			el.textContent = i + ' ' + setting;
			el.addEventListener('click', function(e){
				myFractal.settings[setting] = i;
				myDrawing.clear();
				myFractal.generate();
				e.preventDefault();
			});
			parent.appendChild(el);
		})(i);
	}
};

makeButtons('generations',1,2);
makeButtons('spokes',2,10);

var myDrawing = new Drawing(document.getElementById('myCanvas'));
var myFractal = new Fractal({
	middle: {
		x: 200,
		y: 200
	},
	length: 200,
	generations: 2,
	spokes:3,
	drawLine: myDrawing.drawLine.bind(myDrawing)
});



