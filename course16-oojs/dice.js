function Dice(sides) {
  this.sides = 6;
  this.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var dice = new Dice(6);