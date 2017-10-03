
class Gameboard {
	constructor (x, y, w, h){
		this.x = 25;
		this.y = 100;
		this.width = 700;
		this.height= 600;
		this.color = '#ff0000';
	}

	draw(context){
		context.fillRect(this.x, this.y, this.width, this.height);
		context.fillStyle = this.color;
		var arrayX = [50, 150, 250, 350, 450, 550, 650, 750];
		var arrayY = [125, 225, 325, 425, 525, 625];


		for (var i=0; i < arrayX.length; i++){
			for (var j=0; j < arrayY.length; j++){
				context.clearRect (arrayX[i], arrayY[j], 50, 50)
			}
		}


		return this;
	}
}

module.exports = Gameboard;
