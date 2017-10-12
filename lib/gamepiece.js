class GamePiece {
	constructor (x, y, w, h, player, color){
		this.x = x;
		this.y = y;
		this.width = w;
		this.height= h;
		this.player= player;
		this.color= color;
	}

	draw(context){
			context.beginPath(this.x, this.y)
			context.arc(this.x, this.y, 35, 0, Math.PI*2, true);
			context.fillStyle= this.color;
			context.fill();
			context.closePath();
	}
	
	moveGamePiece (context, direction) {
			if((direction === 'right')&&(this.x<740)) {
				this.x += 100;
						
			} else if ((direction === 'left')&&(this.x>140)){
				this.x -= 100
    	}
		} 
}


module.exports = GamePiece;