
class GamePiece {
	constructor (x, y, w, h){
		this.x = 450;
		this.y = 50;
		this.width = 50;
		this.height= 50;
	}

	draw(context){
		context.beginPath(this.x, this.y)
		context.arc(this.x, this.y, 25, 0, Math.PI*2, true);
		context.fill();

	return this;
	}

	move(context){
		if (this.y <= 625){
			this.y++;
			return this;
		}

	}

}


module.exports = GamePiece;