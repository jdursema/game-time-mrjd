const Gameboard = require('./Gameboard.js');
const gameboard = new Gameboard();


const canvas = document.getElementById('gameboard');
const context = canvas.getContext('2d');

const Game = require('./game.js');
const game = new Game();

const GamePiece = require('./gamepiece.js')
const gamePiece = new GamePiece();

startBtn = document.getElementById('start-btn');

function startScreen(context){
	context.fillStyle ='black';
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.font = '48px serif';
	context.fillStyle = 'orange'
    context.fillText('ConnectFour' , 300, 175)
    context.font = '36px serif';
    context.fillText('(Halloween Edition)' , 300, 225)
    context.font = '24px serif';
    context.fillText('To win you must be the first player to get four of your colored ', 150, 300)
    context.fillText('checkers in a row either horizontally, vertically or', 150, 325)
    context.fillText('diagonally. Select a column using the arrow key. Press the space bar ', 150, 350)
    context.fillText('or enter keys to drop your piece in the column. ', 150, 375)
}

startScreen(context);

startBtn.addEventListener('click', function(e){
	e.preventDefault();
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawGameboard();
	game.gameStart();
	
})

function drawGameboard(){
	gameboard.draw(context);
}


document.addEventListener('keydown', function(e){
	if (e.keyCode == 32 || e.keyCode == 13) {
		e.preventDefault();
		game.moveDown(context);
		game.changeGamePiecePlayer();

	}
});

document.addEventListener('keydown', function(e) {
	if (e.keyCode == 37) {
		game.keyPress('left')
	} else if (e.keyCode == 39) {
		game.keyPress('right')
	}
	
})
let reset = document.getElementById('reset')
reset.addEventListener('click', function(e){
	console.log(window);
	// this.reload(e)

})



// game.gameStart();

