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
  })

  it('should start as an array with every index equal to zero', () => {
    assert.deepEqual(game.gameArray, [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
     ]
    )


  })

  it('should populate array with a game piece when the moveDown function is run', () =>{
    game.moveDown({});
    assert.equal(game.gameArray[5][3], game.gamePiece);
  })

  it('should put one piece on top of another if the space is already occupied', () => {
    game.moveDown({});
    assert.equal(game.gameArray[5][3], game.gamePiece);
    game.moveDown({});
    assert.equal(game.gameArray[4][3], game.gamePiece);

  })

  it('should change players after a piece is dropped', () =>{
    game.moveDown({});
    assert.equal(game.gameArray[5][3].player, 1);
    game.moveDown({});
    assert.equal(game.gameArray[4][3].player, 2);
    // assert.equal(game.gamePiece.player, 1); 
    // game.moveDown({}); 
    // const lastPlayer = game.gameArray[5][3].player
    // assert.equal(lastPlayer, 1);
    // game.moveDown({});     
    // assert.equal(game.gameArray[4][3].player, 2);
  
  })


});
// const lastPlayer = this.gameArray[5][0].player
// assert.equal(lastPlayer, 1)