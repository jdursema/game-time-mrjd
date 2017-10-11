const chai = require('chai');
const assert = chai.assert;
const GamePiece = require('../lib/gamepiece.js');

describe('Gamepice', () => {
  let gamePiece;
  
  beforeEach( () => {
    gamePiece = new GamePiece(440, 35, 50, 50, 1, 'red');
  });

  it('should instantiate a new gamePiece instance', () => {
    assert.isObject(gamePiece);
  });
  
  it('should have default values', () => {
    assert.equal(gamePiece.x, 440)
    assert.equal(gamePiece.y, 35)
    assert.equal(gamePiece.width, 50)
    assert.equal(gamePiece.height, 50)
    assert.equal(gamePiece.player, 1)
    assert.equal(gamePiece.color, 'red')
  });

  it('should move right', () => {
    //assert that it starts at default x
    //call the function to move right
    //assert that the x coordinate of the gamepiece is +100
    assert.equal(gamePiece.x, 440)
    gamePiece.moveGamePiece({}, 'right');
    assert.equal(gamePiece.x, 540)
    //add additional function calls to ensure it stops at 740
  });
  
  it('should not move right if x coordinate is >= 740', () => {
    gamePiece = new GamePiece(740, 35, 50, 50, 1, 'red');
    gamePiece.moveGamePiece({}, 'right');
    assert.equal(gamePiece.x, 740);
  });
});