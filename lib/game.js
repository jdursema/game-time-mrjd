const Gameboard = require('./Gameboard.js');

module.exports = class Game {
	constructor(context, width, height){

		this.gameboard = new Gameboard(50, 50, 100, 100)

		this.width = width;
		this.height = height;
		this.context = context;
	}