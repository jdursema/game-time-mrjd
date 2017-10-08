
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
		// if(this.player === 1){
			
		// 	context.beginPath(this.x, this.y)
		// 	context.arc(this.x, this.y, 35, 0, Math.PI*2, true);
		// 	context.fillstyle= 'red';
		// 	context.fill();
		// 	context.closePath();
			
		// 	// console.log(this.player)
		// } 
		// if(this.player === 2) {
			
		// 	context.beginPath(this.x, this.y)
		// 	context.arc(this.x, this.y, 35, 0, Math.PI*2, true);
		// 	context.fillstyle= 'black';
		// 	context.fill();
		// 	context.closePath();

		// }
					console.log(this.player)


	}

	dropPiece(context){
		if (this.y<650){
		this.y +20
		}
	}
	

	moveGamePiece (context, direction) {
	

        if(direction === 'right') {
            this.x += 100
        } else if (direction === 'left'){
        	this.x -= 100
        }
	} 


}


module.exports = GamePiece;