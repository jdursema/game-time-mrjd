const Gameboard = require('./Gameboard.js');
const gameboard = new Gameboard();


const canvas = document.getElementById('gameboard');
const context = canvas.getContext('2d');

const Game = require('./game.js');
const game = new Game();

const GamePiece = require('./gamepiece.js')
const gamePiece = new GamePiece();

function drawGameboard(){
	gameboard.draw(context);
}

drawGameboard();

document.addEventListener('keydown', function(e){
	if (e.keyCode == 32 || e.keyCode == 13) {
		game.moveDown(context);
		game.newGamePiece(context);
	}
});

document.addEventListener('keydown', function(e) {
	// if (e.keyCode == 32 || e.keyCode == 13) {
	// 	game.keyPress('down')
	// 	// gamePiece.moveGamePiece(context, 'down');
	// } else 
	if (e.keyCode == 37) {
		game.keyPress('left')
		// gamePiece.moveGamePiece(context, 'left');
	} else if (e.keyCode == 39) {
		game.keyPress('right')
		// gamePiece.moveGamePiece(context, 'right');
	}
	
})

game.gameStart();

