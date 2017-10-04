const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js')
const gamePiece = new GamePiece();

gamePiece.draw(context);

document.addEventListener('click', requestAnimationFrame)

requestAnimationFrame(function gameLoop(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	gamePiece.move();
	requestAnimationFrame(gameLoop);
});
	



module.exports = Game;