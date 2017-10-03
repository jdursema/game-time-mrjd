
const Gameboard = require('./Gameboard.js');
const gameboard = new Gameboard();


const canvas = document.getElementById('gameboard');
const context = canvas.getContext('2d');



function gameLoop(){
	gameboard.draw(context);

}

gameLoop();

const Game = require('./game.js');
const game = new Game();
