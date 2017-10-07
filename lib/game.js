const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js')

// var playerNumber =

// let gameArray = [[0, 0, 0, 0, 0, 0, 0],
//                   [0, 0, 0, 0, 0, 0, 0],
//                   [0, 0, 0, 0, 0, 0, 0],
//                   [0, 0, 0, 0, 0, 0, 0],
//                   [0, 0, 0, 0, 0, 0, 0],
//                   [0, 0, 0, 0, 0, 0, 0]
//                 ];


class Game {
  constructor(){
  this.gamePiece = new GamePiece(440, 35, 50, 50, 1);  
  this.gameArray = [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0]
                   ];
  }

  
  gameLoop () {
    requestAnimationFrame(this.gameLoop.bind(this));
    context.clearRect(0, 0, canvas.width, canvas.height); 
    this.gamePiece.draw(context);
    for (var i=0; i<this.gameArray.length; i++){
      for(var j=0; j<this.gameArray[i].length; j++){
        if (this.gameArray[i][j] === 0){

        } else if (this.gameArray[i][j].player === 1){
          context.fillStyle='red';
          context.fillRect(75+(j*100), 75+(i*100), 100, 100)
        } else if (this.gameArray[i][j].player === 2){
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

  moveDown(context){
    // requestAnimationFrame(this.moveDown.bind(this));
    this.gamePiece.dropPiece(context);
    var j = ((this.gamePiece.x - 40)/100) -1;
    for (var i=this.gameArray.length-1; i>=0; i--){
      if(!this.gameArray[i][j]){
        let nextPlayer = (this.gamePiece.player % 2) + 1;
        this.gameArray[i][j] = this.gamePiece;
        this.gamePiece = new GamePiece(440, 35, 50, 50, nextPlayer);
        console.log(this.gameArray);
        return
      }
    }
  }

  moveDownAnimation(){
    requestAnimationFrame(this.moveDown.bind(this))

  }

  newGamePiece(context){
    this.gamePiece = new GamePiece(440, 50, 50, 50);  
    this.gamePiece.draw(context);
  }

}
module.exports = Game;