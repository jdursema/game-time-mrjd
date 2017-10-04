const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js')
const gamePiece = new GamePiece();

gamePiece.draw(context);

function gameLoop () {
  requestAnimationFrame(gameLoop);

  context.clearRect(0, 0, canvas.width, canvas.height); 

	gamePiece.draw(context);
	gamePiece.move(context);
}

requestAnimationFrame(gameLoop);
	



module.exports = Game;