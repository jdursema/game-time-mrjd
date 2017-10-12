const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const GamePiece = require('./gamepiece.js');
let gameWon= false;
let checkConnectFive = false;

class Game {
  constructor() {
    this.gamePiece = new GamePiece(440, 35, 50, 50, 1, '#86C4B8');  
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
    if (gameWon === false) {
      requestAnimationFrame(this.gameLoop.bind(this));
      context.clearRect(0, 0, canvas.width, canvas.height); 
      this.gamePiece.draw(context);

      for (var i=0; i<this.gameArray.length; i++) {
        for(var j=0; j<this.gameArray[i].length; j++) {

          if (this.gameArray[i][j].player === 1) {
            context.fillStyle='#86C4B8';
            context.fillRect(75+(j*100), 75+(i*100), 100, 100);
            context.closePath();

          } else if (this.gameArray[i][j].player === 2) {
            context.fillStyle='#A32424';
            context.fillRect(75+(j*100), 75+(i*100), 100, 100);
            context.closePath();
          }
        }
      }

      if(checkConnectFive === false) {
        this.checkConnectFour();

      }else{
        this.checkConnectFive();
      }

    } else {
      requestAnimationFrame(this.gameLoop.bind(this));
      // context.clearRect(0, 0, canvas.width, canvas.height); 
      this.endScreen(context);
    }
  }

  endScreen(context) {
    context.font = '75px Montserrat';
    context.fillText('Winner' , 300, 60);
  }

  gameStart() {
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  keyPress(direction) {
    this.gamePiece.moveGamePiece(context, direction);
  }

  moveDown() {
    var j = ((this.gamePiece.x - 40)/100) -1;
    for (var i=this.gameArray.length-1; i>=0; i--) {
      if (!this.gameArray[i][j]) {
        this.gameArray[i][j] = this.gamePiece;
        this.gamePiece.row =i;
        this.gamePiece.column = j;
        return; 
      }
    }
  }

  changeGamePiecePlayer() {
    if (!gameWon){
      let nextPlayer = ((this.gamePiece.player)%2 +1);
      let nextColor;
      if (nextPlayer === 1) {
        nextColor = '#86C4B8';
      } else if (nextPlayer === 2) {
        nextColor = '#A32424';
      }
      this.gamePiece = new GamePiece(440, 35, 50, 50, nextPlayer, nextColor);
      this.gamePiece.draw(context);
    }
  }

  checkConnectFour() {
    for (var i=0; i<this.gameArray.length; i++) {
      for (var j=0; j<this.gameArray[i].length; j++) {
        if (this.gameArray[i][j] !== 0) {
          this.horizontalConnectFour(i, j);
          this.verticalConnectFour(i, j);
          this.forwardDiagonalConnectFour(i, j);
          this.backwardDiagonalConnectFour(i, j);
        } 
      }
    }
  }


  horizontalConnectFour(i, j) {
    if (j<4) {
      if((this.gameArray[i][j].player === this.gameArray[i][j+1].player) && 
      (this.gameArray[i][j+1].player === this.gameArray[i][j+2].player) && 
      (this.gameArray[i][j+2].player === this.gameArray[i][j+3].player)) {
        let winner = this.gameArray[i][j];
        this.win(winner);
      }
    }
  }

  verticalConnectFour(i, j) {
    if (i<3) {
      if ((this.gameArray[i][j].player === this.gameArray[i+1][j].player) && 
      (this.gameArray[i+1][j].player === this.gameArray[i+2][j].player) && 
      (this.gameArray[i+2][j].player === this.gameArray[i+3][j].player)) {
        let winner = this.gameArray[i][j];
        this.win(winner);
      }
    }
  }

  backwardDiagonalConnectFour(i, j) {
    if ((i < 3)&&(j < 4)) {
      if ((this.gameArray[i][j].player === this.gameArray[i+1][j+1].player) && 
      (this.gameArray[i+1][j+1].player === this.gameArray[i+2][j+2].player) && 
      (this.gameArray[i+2][j+2].player === this.gameArray[i+3][j+3].player)) {
        let winner= this.gameArray[i][j];
        this.win(winner);
      }
    }
  }

  forwardDiagonalConnectFour(i, j) {
    if ((i < 2) && (j < 4)) {
      if ((this.gameArray[i][j].player === this.gameArray[i-1][j+1].player) && 
      (this.gameArray[i-1][j+1].player === this.gameArray[i-2][j+2].player) && 
      (this.gameArray[i-2][j+2].player === this.gameArray[i-3][j+3].player)) {
        let winner= this.gameArray[i][j];
        this.win(winner);
      }
    }
  }

  checkConnectFive() {
    for (var i=0; i<this.gameArray.length; i++) {
      for (var j=0; j<this.gameArray[i].length; j++) {
        if (this.gameArray[i][j] !== 0) {
          this.horizontalConnectFive(i, j);
          this.verticalConnectFive(i, j);
          this.forwardDiagonalConnectFive(i, j);
          this.backwardDiagonalConnectFive(i, j);
        } 
      }
    }
  }


  horizontalConnectFive(i, j){
    if (j<3) {
      if ((this.gameArray[i][j].player === this.gameArray[i][j+1].player) && 
      (this.gameArray[i][j+1].player === this.gameArray[i][j+2].player) && 
      (this.gameArray[i][j+2].player === this.gameArray[i][j+3].player) && 
      (this.gameArray[i][j+3].player === this.gameArray[i][j+4].player)) {
        let winner = this.gameArray[i][j];
        this.win(winner);
      }
    }
  }

  verticalConnectFive(i, j) {
    if (i<2){
      if ((this.gameArray[i][j].player=== this.gameArray[i+1][j].player) && 
      (this.gameArray[i+1][j].player===this.gameArray[i+2][j].player) && 
      (this.gameArray[i+2][j].player===this.gameArray[i+3][j].player) && 
      (this.gameArray[i+3][j].player===this.gameArray[i+4][j].player)) {
        let winner= this.gameArray[i][j];
        this.win(winner);
      }
    }
  }

  backwardDiagonalConnectFive(i, j) {
    if ((i < 2) && (j < 3)) {
      if ((this.gameArray[i][j].player === this.gameArray[i+1][j+1].player) && 
      (this.gameArray[i+1][j+1].player === this.gameArray[i+2][j+2].player) && 
      (this.gameArray[i+2][j+2].player === this.gameArray[i+3][j+3].player) && 
      (this.gameArray[i+3][j+3].player === this.gameArray[i+4][j+4].player)) {
        let winner = this.gameArray[i][j];
        this.win(winner);
      }
    }
  }

  forwardDiagonalConnectFive(i, j) {
    if ((i > 3) && (j < 3)) {
      if ((this.gameArray[i][j].player === this.gameArray[i-1][j+1].player) && 
      (this.gameArray[i-1][j+1].player === this.gameArray[i-2][j+2].player) && 
      (this.gameArray[i-2][j+2].player === this.gameArray[i-3][j+3].player) && 
      (this.gameArray[i-3][j+3].player === this.gameArray[i-4][j+4].player)) {
        let winner= this.gameArray[i][j];
        this.win(winner);
      }
    }
  }

  win(winner) {
    gameWon = true;
    context.fillStyle = winner.color;
  }

  clearBoard() {
    this.gameArray = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  }

  playConnectFive() {
    checkConnectFive = true;
  }

  resetFunction(){
    // if (gameWon === false){
      gameWon = false;
      this.clearBoard()
    // } else{
      // window.location.reload();
    // }
  }
}

module.exports = Game;