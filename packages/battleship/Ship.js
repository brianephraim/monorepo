class ShipCell {
  constructor(ship) {
    this.ship = ship;
    this.hitCount = 0;
  }
  attack() {
    if (this.hitCount === 0) {
      this.ship.remainingCells = this.ship.remainingCells - 1;
    }
    this.hitCount = this.hitCount + 1;
    return this.hitCount;
  }
}
class Ship {
  constructor(size) {
    this.size = size;
    this.remainingCells = size;

    this.cells = [];
    let i = size;
    while (i--) {
      this.cells.push(new ShipCell(this));
    }
  }
}

module.exports = Ship;
