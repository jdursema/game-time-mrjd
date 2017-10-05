
class GamePiece {
	constructor (x, y, w, h){
		this.x = x;
		this.y = y;
		this.changeX = 100
		this.changeY = 100
		this.width = w;
		this.height= h;
	}

	draw(context){
		console.log(this.y)
		context.beginPath(this.x, this.y)
		context.arc(this.x, this.y, 45, 0, Math.PI*2, true);
		context.fill();
	}

	// move(context){
	// 	this.x-this.changeX
	// 	this.x-this.changeY
	// }
	

	moveGamePiece (context, direction) {
		if (direction === 'down') {
			console.log(this.y);
			this.y += 100;
        } else if(direction === 'right') {
            this.x += 100
        } else if (direction === 'left'){
        	this.x -= 100
        }
	} 

}


module.exports = GamePiece;