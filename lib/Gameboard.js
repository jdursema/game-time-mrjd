const GameObject = require ('./GameObject.js');

class Gameboard extends GameObject {
  constructor () {
    super(...arguments);
    this.x = 65;
    this.y = 75;
    this.width = 750;
    this.height= 650;
  }

  draw(context) {
    context.fillStyle = "#F4E04D";
    context.fillRect(this.x, this.y, this.width, this.height);
    var arrayX = [100, 200, 300, 400, 500, 600, 700];
    var arrayY = [100, 200, 300, 400, 500, 600];

    for (var i=0; i < arrayX.length; i++) {
      for (var j=0; j < arrayY.length; j++) {
        context.clearRect (arrayX[i], arrayY[j], 75, 75);
        context.lineWidth = 25;
        context.strokeStyle = "#F4E04D";
        context.beginPath(arrayX[i], arrayY[j]);
        context.arc(arrayX[i]+40, arrayY[j]+35, 45, 0, Math.PI*2, true);
        context.stroke();
      }
    }
    return this;
  }
}

module.exports = Gameboard;