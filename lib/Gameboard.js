class Gameboard {
	constructor (x, y, w, h){
		this.x = x;
		this.y = y;
		this.width = w;
		this.height= h;
		this.color = 'yellow';
	}

	draw(context){
		context.fillRect(this.x, this.y, this.width, this.height);
		context.fillStyle = this.color;
		return this;
	}
}

