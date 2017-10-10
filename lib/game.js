const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js')
let gameWon= false;



class Game {
  constructor(){
  this.gamePiece = new GamePiece(440, 35, 50, 50, 1, 'red');  
  this.gameArray = [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0]
                   ];
  }

  
  gameLoop () {
    if (gameWon === false){
    requestAnimationFrame(this.gameLoop.bind(this));
    context.clearRect(0, 0, canvas.width, canvas.height); 
    this.gamePiece.draw(context);
    for (var i=0; i<this.gameArray.length; i++){
      for(var j=0; j<this.gameArray[i].length; j++){
        if (this.gameArray[i][j].player === 1){
          context.fillStyle='red';
          context.fillRect(75+(j*100), 75+(i*100), 100, 100)
          context.closePath();
        } else if (this.gameArray[i][j].player === 2){
          context.fillStyle='black'
          context.fillRect(75+(j*100), 75+(i*100), 100, 100)
          context.closePath();
      }else if(gameWon=== true){
        context.font = '48px serif';
        context.fillText('You Won', 10, 50);
      }
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
    this.gamePiece.dropPiece(context);
    var j = ((this.gamePiece.x - 40)/100) -1;
    for (var i=this.gameArray.length-1; i>=0; i--){
      if(!this.gameArray[i][j]){
        this.gameArray[i][j] = this.gamePiece;
        this.gamePiece.row=i;
        this.gamePiece.column= j;
        this.checkConnectFour();
        return 
      }
    }
  }

   moveDownAnimation(){
    context.clearRect(0, 0, canvas.width, canvas.height); 
    this.gamePiece.draw(context);
    this.gamePiece.dropPiece(context);
  }

  moveDownAnimationTwo(){
    requestAnimationFrame(this.moveDown.bind(this))
  }

  changeGamePiecePlayer(){
    let nextPlayer = ((this.gamePiece.player)%2 +1)
    let nextColor
    if (nextPlayer===1){
        nextColor = 'red'
    } else if (nextPlayer === 2){
      nextColor = 'black'
    }
    this.gamePiece = new GamePiece(440, 35, 50, 50, nextPlayer, nextColor)
    this.gamePiece.draw(context)
    // console.log(this.gameArray)
  }

  checkConnectFour(){
    // console.log(this.gamePiece)
     for (var i=0; i<this.gameArray.length; i++){
      for (var j=0; j<this.gameArray[i].length; j++){
            if (this.gameArray[i][j]!= 0){
              this.horizontalConnectFour(i, j);
              this.verticalConnectFour(i, j);
              this.forwardDiagonalConnectFour(i, j);
              this.backwardDiagonalConnectFour(i, j);
              // if((this.gameArray[i][j].player=== this.gameArray[i][j+1].player) && (this.gameArray[i][j+1].player===this.gameArray[i][j+2].player) && (this.gameArray[i][j+2].player===this.gameArray[i][j+3].player)){
              //   console.log('four in a row')
       } 
      }
    }
  }


horizontalConnectFour(i, j){
  if (j>=4){
  }else{
    if((this.gameArray[i][j].player === this.gameArray[i][j+1].player) && (this.gameArray[i][j+1].player===this.gameArray[i][j+2].player) && (this.gameArray[i][j+2].player===this.gameArray[i][j+3].player)){
      console.log('four in a row')
      // this.win()
    }
  }
}

verticalConnectFour(i, j){
  if (i>=3){
  }else{
   if((this.gameArray[i][j].player=== this.gameArray[i+1][j].player) && (this.gameArray[i+1][j].player===this.gameArray[i+2][j].player) && (this.gameArray[i+2][j].player===this.gameArray[i+3][j].player)){
    console.log('four in a row')
    // this.win()
    }
  }
}

backwardDiagonalConnectFour(i, j){
  if ((i>=3)||(j>=4)){
  }else{
  if((this.gameArray[i][j].player=== this.gameArray[i+1][j+1].player) && (this.gameArray[i+1][j+1].player===this.gameArray[i+2][j+2].player) && (this.gameArray[i+2][j+2].player===this.gameArray[i+3][j+3].player)){
    console.log('four in a row');
    // this.win()
  }
  }
}


forwardDiagonalConnectFour(i, j){
   if ((i<=2)||(j>=4)){
   }else{
   if((this.gameArray[i][j].player=== this.gameArray[i-1][j+1].player) && (this.gameArray[i-1][j+1].player===this.gameArray[i-2][j+2].player) && (this.gameArray[i-2][j+2].player===this.gameArray[i-3][j+3].player)){
    console.log('four in a row')
    // this.win()
  }
  }
}

win(){
  gameWon = true
}


}
 

 


module.exports = Game;