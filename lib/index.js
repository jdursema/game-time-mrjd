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
	context.font = '68px Montserrat';
	context.fillStyle = 'orange'
    context.fillText('ConnectFour' , 225, 175)
    context.font = '36px Open Sans';
    context.fillText('(Halloween Edition)' , 290, 225)
    context.font = '24px Open Sans';
    context.fillText('To win you must be the first player to get four of your colored ', 100, 300)
    context.fillText('checkers in a row either horizontally, vertically or diagonally.', 110, 325)
    context.fillText('Select a column using the arrow key. Press the space bar ', 120, 350)
    context.fillText('or enter keys to drop your piece in the column. ', 170, 375)
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
		game.moveDownAnimationTwo(context)
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
	game.clearBoard();
	

})

let connectFiveBtn = document.getElementById('connect-five')
connectFiveBtn.addEventListener('click', function(e){
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawGameboard();
	game.gameStart();
	game.playConnectFive();
});



// game.gameStart();

