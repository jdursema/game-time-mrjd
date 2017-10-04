const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js')
const gamePiece = new GamePiece();

gamePiece.draw(context);

class Game {

  gameLoop () {
    requestAnimationFrame(gameLoop);
    context.clearRect(0, 0, canvas.width, canvas.height); 
    gamePiece.draw(context);
    gamePiece.move(context);
  }

  moveLeft () {
    requestAnimationFrame(moveLeft);
    context.clearRect(0, 0, canvas.width, canvas.height); 
    gamePiece.draw(context);
    gamePiece.moveLeft(context);
  }

// document.onkeyup = function(e) {
//   if (e.keyCode == 32 || e.keyCode == 13) {
//   requestAnimationFrame(gameLoop);
//   }
// }

// document.onkeyup = function(e) {
//   if (e.keyCode == 37 || e.keyCode == 65) {
//   requestAnimationFrame(moveLeft);
//   }
// }
}
module.exports = Game;