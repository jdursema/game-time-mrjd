global.document = {
  getElementById: function() {
    return {
      getContext: function() {}
    }
  }
}

const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/game.js');

describe('Game', () => {
  let game;

  beforeEach( () => {
    game = new Game();
  });

  it('should instantiate a new game object', () => {
    assert.isObject(game);
  });

  it('should have an array',()=>{
    assert.isArray(game.gameArray, true)
  });

  it('should start as an array with every index equal to zero', () => {
    assert.deepEqual(game.gameArray, [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
     ]
    );
  });

  it('should populate array with a game piece when the moveDown function is run', () =>{
    game.moveDown(game.gamePiece);
    assert.equal(game.gameArray[5][3], game.gamePiece);
  });

  it('should put one piece on top of another if the space is already occupied', () => {
    game.moveDown(game.gamePiece);
    game.moveDown(game.gamePiece);
    assert.equal(game.gameArray[5][3], game.gamePiece);
    assert.equal(game.gameArray[4][3], game.gamePiece);
    assert.equal(game.gameArray[3][3], 0);
  });

  it('should change players after a piece is dropped', () => {
    game.moveDown(game.gamePiece);
    game.changeGamePiecePlayer();
    assert.equal(game.gameArray[5][3].player, 1);
    game.moveDown(game.gamePiece);
    assert.equal(game.gameArray[4][3].player, 2);
  });

  it('should check for four of the same gamePieces in a row horizontally', () => {
    assert.equal(game.gameWon, false);
    // game.gameArray = [
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, game.gamePiece, game.gamePiece, game.gamePiece, game.gamePiece, 0]
    //  ]

    game.gameArray[5][0].player===1;
    game.gameArray[5][1].player===1;
    game.gameArray[5][2].player===1;
    game.gameArray[5][3].player===1;

    game.horizontalConnectFour(5, 0);
    assert.equal(game.gameWon, true) 
  });
});