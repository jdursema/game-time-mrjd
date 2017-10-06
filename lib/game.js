const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js')

let gameArray = [[0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0],
                  [0, 1, 2, 0, 0, 0, 0]
                ];


class Game {
  constructor(){
  this.gamePiece = new GamePiece(440, 35, 50, 50);  
  }
  
  gameLoop () {
    requestAnimationFrame(this.gameLoop.bind(this));
    context.clearRect(0, 0, canvas.width, canvas.height); 
    this.gamePiece.draw(context);
    for (var i=0; i<gameArray.length; i++){
      for(var j=0; j<gameArray[i].length; j++){
        if (gameArray[i][j] === 0){

        } else if (gameArray[i][j] === 1){
          context.fillStyle='red';
          context.fillRect(75+(j*100), 75+(i*100), 100, 100)
        } else if (gameArray[i][j] === 2){
          context.fillStyle='black'
          context.fillRect(75+(j*100), 75+(i*100), 100, 100)
        }

      }
    }
    
  }

  gameStart(){
    requestAnimationFrame(this.gameLoop.bind(this))
  }

  keyPress(direction){
    this.gamePiece.moveGamePiece(context, direction)

  }




}
module.exports = Game;