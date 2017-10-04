
class Gameboard {
	constructor (x, y, w, h){
		this.x = 50;
		this.y = 100;
		this.width = 800;
		this.height= 625;
	}

	draw(context){
		context.fillStyle = "#E1BC29";
		context.fillRect(this.x, this.y, this.width, this.height);
		var arrayX = [100, 200, 300, 400, 500, 600, 700];
		var arrayY = [125, 225, 325, 425, 525, 625];



		for (var i=0; i < arrayX.length; i++){
			for (var j=0; j < arrayY.length; j++){
				context.clearRect (arrayX[i], arrayY[j], 75, 75);
				context.lineWidth = 25;
				context.strokeStyle = "#E1BC29";
				context.beginPath(arrayX[i], arrayY[j]);
				context.arc(arrayX[i]+35, arrayY[j]+35, 45, 0, Math.PI*2, true);
				context.stroke();
				
			}
		}

	


		return this;
	}

}

module.exports = Gameboard;
