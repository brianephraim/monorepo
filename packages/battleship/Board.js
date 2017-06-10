import aaa8 from '@defualt/aaa8';
console.log('asdf',aaa8);
const {
  createNumberIncrementArray,
  placeSegmentsOnGridArray,
  makeStringGridFrom1DArrayAndWidth,
  padCharacter,
  getIndexFromCoords,
} = require('./gridUtils');

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    const totalCells = this.width * this.height;
    this.gridAsArray = createNumberIncrementArray(0, totalCells - 1);
    this.placements = [];
  }
  update(toUpdate) {
    if (toUpdate) {
      Object.assign(this, toUpdate);
    }
  }
  place(placements) {
    try {
      const gridModification = placeSegmentsOnGridArray({
        gridAsArray: this.gridAsArray,
        width: this.width,
        placements,
        validate: (previousCellValue) => {
          if (typeof previousCellValue !== 'number') {
            return 'Overlapping placements.';
          }
          return true;
        },
      });
      this.update({
        gridAsArray: gridModification,
        placements: this.placements.concat(placements),
      });
      return {
        success: true,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }
  getRemainingShips() {
    return this.placements.reduce((remaining, placement) => {
      const ship = placement.content[0].ship;
      if (ship) {
        remaining += ship.remainingCells > 0 ? 1 : 0;
      }
      return remaining;
    }, 0);
  }
  attack(col, row) {
    if (col > this.width - 1) {
      return 'Too far right';
    }
    if (row > this.height - 1) {
      return 'Too far down';
    }
    const index = getIndexFromCoords(col, row, this.width);
    const cellContent = this.gridAsArray[index];
    if (cellContent && cellContent.ship) {
      const cellAttackCount = cellContent.attack();
      if (this.getRemainingShips() === 0) {
        return 'all sunk';
      } else if (cellContent.ship.remainingCells === 0) {
        return 'sunk';
      } else if (cellAttackCount === 1) {
        // If cellAttackCount is greater than 1, it's a repeat hit, therefor a miss
        return 'hit';
      }
      return 'miss';
    }
    return 'miss';
  }
  getStringGrid() {
    const highestDigits = `${this.gridAsArray[this.gridAsArray.length - 1]}`.length;
    return makeStringGridFrom1DArrayAndWidth(this.gridAsArray, this.width, (v) => {
      if (typeof v === 'number') {
        return padCharacter(v, highestDigits, '0');
      }
      return padCharacter(typeof v === 'object' ? 'O' : v, highestDigits, '_');
    });
  }
}

export default Board;
