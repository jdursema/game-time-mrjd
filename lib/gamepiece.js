
class GamePiece {
	constructor (x, y, w, h){
		this.x = 440;
		this.y = 50;
		this.width = 50;
		this.height= 50;
	}

	draw(context){
		context.beginPath(this.x, this.y)
		context.arc(this.x, this.y, 45, 0, Math.PI*2, true);
		context.fill();

	return this;
	}

	moveGamePiece (direction) {
		if (direction === 'down') {
			console.log(4);
			// if (this.y <= 650) {
			// 	this.y += 10;
			// 	return this;
			// }
		}
	} 

	// moveLeft(context)

	// move(context){
	// 	if (this.y <= 650){
	// 		this.y+=10;
	// 		return this;
	// 	}
	// }

	// moveLeft(context) {
	// 	this.x = 340;
	// }
}


module.exports = GamePiece;