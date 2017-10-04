
const Gameboard = require('./Gameboard.js');
const gameboard = new Gameboard();


const canvas = document.getElementById('gameboard');
const context = canvas.getContext('2d');

function drawGameboard(){
	gameboard.draw(context);
}

drawGameboard();

document.addEventListener('keyup', function(e) {
	if (e.keyCode == 32 || e.keyCode == 13) {
		gamePiece.moveGamePiece('down');
	} else if (e.keyCode == 37) {
		gamePiece.moveGamePiece('left');
	} else if (e.keyCode == 39) {
		gamePiece.moveGamePiece('right');
	}
	
})

const Game = require('./game.js');
const game = new Game();
