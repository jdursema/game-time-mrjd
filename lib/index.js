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
		e.preventDefault();
		game.moveDown(context);
		game.changeGamePiecePlayer(context);
	}
});

document.addEventListener('keydown', function(e) {
	if (e.keyCode == 37) {
		game.keyPress('left')
	} else if (e.keyCode == 39) {
		game.keyPress('right')
	}
	
})

game.gameStart();

