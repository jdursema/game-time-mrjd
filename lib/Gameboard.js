
class Gameboard {
	constructor (x, y, w, h){
		this.x = 25;
		this.y = 100;
		this.width = 700;
		this.height= 600;
	}

	draw(context){
		context.fillStyle = "#E1BC29";
		context.fillRect(this.x, this.y, this.width, this.height);
		var arrayX = [50, 150, 250, 350, 450, 550, 650, 750];
		var arrayY = [125, 225, 325, 425, 525, 625];


		for (var i=0; i < arrayX.length; i++){
			for (var j=0; j < arrayY.length; j++){
				context.clearRect (arrayX[i], arrayY[j], 50, 50);
				context.beginPath(arrayX[i], arrayY[j]);
				context.arc(arrayX[i]+25, arrayY[j]+25, 25, 0, Math.PI*2, true);
				context.stroke();
				context.lineWidth = 20;
				context.strokeStyle = "#E1BC29";
			}
		}


		return this;
	}
}

module.exports = Gameboard;
