
class GamePiece {
	constructor (x, y, w, h, player=1){
		this.x = x;
		this.y = y;
		this.width = w;
		this.height= h;
		this.player= player;
	}

	draw(context){
		if(this.player === 1){
			context.fillstyle= 'red';
			context.beginPath(this.x, this.y);
			context.arc(this.x, this.y, 35, 0, Math.PI*2, true);
			context.fill();
		} else {
			context.fillstyle= 'black';
			context.beginPath(this.x, this.y);
			context.arc(this.x, this.y, 35, 0, Math.PI*2, true);
			context.fill();
		}
	}

	dropPiece(context){
		if (this.y<650){
			this.y +20;
		}
	}	
	
	moveGamePiece (context, direction) {
		if (direction === 'right') {
			this.x += 100;
		} else if (direction === 'left') {
			this.x -= 100;
		}
	} 
}

module.exports = GamePiece;