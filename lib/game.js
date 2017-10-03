const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js')
const gamePiece = new GamePiece();

function gameLoop(){
	gamePiece.draw(context);

}

gameLoop();

module.exports = Game;