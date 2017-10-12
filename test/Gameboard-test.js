const chai = require('chai');
const assert = chai.assert;
const Gameboard = require('../lib/Gameboard.js');

describe('Gameboard', () => {
  let gameboard;

  beforeEach( () => {
    gameboard = new Gameboard(65, 75, 750, 650);
  });

  it('should be a function', () => {
    assert.isFunction(Gameboard);
  });

  it('should instantiate a new gameboard', () => {
    assert.isObject(gameboard, true);
  });
  
  it('should have a default x of 65', () => {
    assert.equal(gameboard.x, 65)
  });

  it('should have a default y of 75', () => {
    assert.equal(gameboard.y, 75)
  });

  it('should have a default width of 750', () => {
    assert.equal(gameboard.width, 750)
  });

  it('should have a default height of 650', () => {
    assert.equal(gameboard.height, 650)
  });

  
});