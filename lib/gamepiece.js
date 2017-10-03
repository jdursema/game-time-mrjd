
class GamePiece {
	constructor (x, y, w, h){
		this.x = 25;
		this.y = 25;
		this.width = 50;
		this.height= 50;
	}

	draw(context){
		context.fillRect(this.x, this.y, this.width, this.height);

	return this;
}

}


module.exports = GamePiece;