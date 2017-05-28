const {
  coordsFormatErr, outOfBoundsErr, overlapErr, placementOkMsg, hitMsg, sunkMsg, missMsg,
} = require('./BattleshipBoard.constants');

/*
  This BattleshipBoard class is based on an 'occupiedCells' dictionary where
  coordinate pairs are treated as strings, serving as the dictionary keys.
  Each ship has a unique ID, which are assigned to those keys as values.
  If a ship is 3 cells long,
  its ship id appears in the dictionary as a value 3 times on initial placement.
  When coordinates are attacked, those coordinates are looked up in the dictionary.
  If they are not present in the dictionary, it is a "miss".
  If they are present, the ship ID value that was discovered is cached
  and the attacked coordinate-pair entry is removed from the dictionary.
  The dictionary is iterated through to determine if there are other shipIDs matching our cached ID.
  If so, the attack is a "hit", otherwise it is a "sunk".
*/

/*
  Throughout this class definition
  X/Y coordinate pairs are treated as arrays with the following ordering:
    someCoords = [someX, someY]
*/

// Base shipIds on increments starting from current-time-as-milliseconds.
// Current time is basis instead of zero so uniqueness ensured for app restart + old board.
let lastShipId = Date.now();
class BattleshipBoard {
  // These arguments are sufficient state for reconsituting object from storage.
  constructor(width, height, occupiedCells = {}) {
    this.width = width;
    this.height = height;
    this.occupiedCells = occupiedCells;
  }
  validateCoordsInBoundaries(coords) {
    return (
      coords[0] < this.width &&
      coords[1] < this.height &&
      coords[0] >= 0 &&
      coords[1] >= 0
    );
  }

  // The argument `occupiedCellsWorkingCopy` here is a superset of `this.occupiedCells`.
  // It contains the additional temporary data about the the batch of ships being placed.
  // If there is a placement error on one ship in the batch, the entire batch is discarded.
  // If no errors occur, `occupiedCellsWorkingCopy` will be integrated into `this.occupiedCells`.
  prepareOneShipPlacement(startCoords, occupiedCellsWorkingCopy, size = 3) {
    if (!Number.isInteger(startCoords[0] + startCoords[1])) {
      throw new Error(coordsFormatErr);
    }
    const occupiedCellsAdditions = {};
    let i = 0;

    lastShipId = lastShipId + 1;

    while (i < size) {
      const cellCoords = [
        startCoords[0],
        startCoords[1] + i,
      ];
      if (!this.validateCoordsInBoundaries(cellCoords)) {
        throw new Error(outOfBoundsErr);
      }

      const cellCoordsAsStringKey = cellCoords.join(',');
      if (occupiedCellsWorkingCopy[cellCoordsAsStringKey]) {
        throw new Error(overlapErr);
      }
      occupiedCellsAdditions[cellCoordsAsStringKey] = lastShipId;
      i++;
    }
    return occupiedCellsAdditions;
  }
  prepareMultipleShipPlacements(coordsSets) {
    return coordsSets.reduce((allCellAssignments, startCoords) => {
      const cellAssignments = this.prepareOneShipPlacement(startCoords, allCellAssignments);
      return Object.assign({}, allCellAssignments, cellAssignments);
    }, this.occupiedCells);
  }

  // 'coordsSets' argument is 2D array of multiple coord-pairs.
  // So [[someX, someY], [someOtherX, someOtherY], ...etc]
  placeShips(coordsSets) {
    try {
      this.occupiedCells = this.prepareMultipleShipPlacements(coordsSets);
      return {
        message: placementOkMsg,
      };
    } catch (error) {
      return error;
    }
  }
  attack(coords) {
    const attackCoordsAsStringKey = coords.join(',');
    const cellValueAtAttackCoords = this.occupiedCells[attackCoordsAsStringKey];
    delete this.occupiedCells[attackCoordsAsStringKey];
    if (cellValueAtAttackCoords) {
      const stillAfloat = Object.keys(this.occupiedCells).find((coordsAsString) => {
        const shipId = this.occupiedCells[coordsAsString];
        return shipId === cellValueAtAttackCoords;
      });

      return {
        message: stillAfloat ? hitMsg : sunkMsg,
      };
    }
    return {
      message: missMsg,
    };
  }
}

module.exports = BattleshipBoard;
