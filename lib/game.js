const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js')




class Game {
  constructor(){
  this.gamePiece = new GamePiece(440, 50, 50, 50);  
  }
  
  gameLoop () {
    requestAnimationFrame(this.gameLoop.bind(this));
    context.clearRect(0, 0, canvas.width, canvas.height); 
    this.gamePiece.draw(context);
    // this.gamePiece.moveGamePiece(context, direction)
    
  }

  gameStart(){
    requestAnimationFrame(this.gameLoop.bind(this))
  }

  keyPress(direction){
    this.gamePiece.moveGamePiece(context, direction)

  }




}
module.exports = Game;