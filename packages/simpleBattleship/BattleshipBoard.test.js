const BattleshipBoard = require('./BattleshipBoard');

const {
  coordsFormatErr, outOfBoundsErr, overlapErr, placementOkMsg, hitMsg, sunkMsg, missMsg,
} = require('./BattleshipBoard.constants.js');

const boardSizes = {
  square: {
    width: 10,
    height: 10,
  },
  narrow: {
    width: 5,
    height: 10,
  },
  short: {
    width: 10,
    height: 5,
  },
};

const shipSets = {
  adjacentHorizontal: [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  adjacentHorizontal2: [
    [3, 0],
    [4, 0],
    [5, 0],
  ],
  spreadOutHorizontal: [
    [0, 0],
    [4, 0],
    [9, 0],
  ],
  vertical: [
    [0, 0],
    [0, 3],
    [0, 6],
  ],
  overlapping: [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
  invalidCoords: [
    [0, 0],
    ['a', 0],
    [2, 0],
  ],
  oneOff: [[3, 0]],
  oneOffOutOfBoundsRight: [[90, 0]],
  oneOffOutOfBoundsLeft: [[-1, 0]],
  oneOffOutOfBoundsTop: [[0, -1]],
  oneOffOutOfBoundsBottom: [[0, 90]],
};

const placementSuccessResponse = {
  message: placementOkMsg,
};

describe('BattleshipBoard', () => {
  Object.keys(boardSizes).forEach((boardSizesName) => {
    const boardSize = boardSizes[boardSizesName];
    describe((
      `when board size is ${boardSizesName} [${boardSize.width}w ${boardSize.height}h]`
    ), () => {
      let board;
      beforeEach(() => {
        board = new BattleshipBoard(boardSize.width, boardSize.height);
      });
      it('has an `occupiedCells` property that is initially an empty object', () => {
        expect(board.occupiedCells).toEqual({});
      });
      describe('`placeShips` method is called', () => {
        function testPlacementSuccess(shipSetsName) {
          it(`succeeds for ships that are ${shipSetsName}`, () => {
            const shipSet = shipSets[shipSetsName];
            expect(board.placeShips(shipSet)).toEqual(placementSuccessResponse);
          });
        }
        function testPlacementFail(shipSetsName, errorMsg) {
          it(`fails for ships that are ${shipSetsName}`, () => {
            expect(board.placeShips(shipSets[shipSetsName]).message).toBe(errorMsg);
          });
        }

        testPlacementSuccess('adjacentHorizontal');
        testPlacementSuccess('oneOff');
        testPlacementFail('oneOffOutOfBoundsRight', outOfBoundsErr);
        testPlacementFail('oneOffOutOfBoundsLeft', outOfBoundsErr);
        testPlacementFail('oneOffOutOfBoundsTop', outOfBoundsErr);
        testPlacementFail('oneOffOutOfBoundsBottom', outOfBoundsErr);
        testPlacementFail('invalidCoords', coordsFormatErr);
        testPlacementFail('overlapping', overlapErr);
        if (boardSizesName === 'square') {
          testPlacementSuccess('spreadOutHorizontal');
          testPlacementSuccess('vertical');
        }
        if (boardSizesName === 'narrow') {
          testPlacementFail('spreadOutHorizontal', outOfBoundsErr);
          testPlacementSuccess('vertical');
        }
        if (boardSizesName === 'short') {
          testPlacementSuccess('spreadOutHorizontal');
          testPlacementFail('vertical', outOfBoundsErr);
        }
      });
      describe('`attack` method is called', () => {
        let board;
        beforeEach(() => {
          board = new BattleshipBoard(boardSize.width, boardSize.height);
          board.placeShips(shipSets.adjacentHorizontal);
        });
        describe('and the coord matches a ship', () => {

        });
        it(`
          responds with 'sunk' if the last cell of a ship, 
          otherwise responds with 'hit'`,
          () => {
            // mixed around coord attacks amongst ships proving attack order doesn't matter
            expect(board.occupiedCells).not.toEqual({});
            expect(board.attack([1, 0]).message).toBe(hitMsg);
            expect(board.attack([1, 2]).message).toBe(hitMsg);
            expect(board.attack([0, 2]).message).toBe(hitMsg);
            expect(board.attack([2, 2]).message).toBe(hitMsg);
            expect(board.attack([1, 1]).message).toBe(sunkMsg);
            expect(board.occupiedCells).not.toEqual({});
            expect(board.attack([2, 1]).message).toBe(hitMsg);
            expect(board.attack([2, 0]).message).toBe(sunkMsg);
            expect(board.occupiedCells).not.toEqual({});
            expect(board.attack([0, 1]).message).toBe(hitMsg);
            expect(board.attack([0, 0]).message).toBe(sunkMsg);
            expect(board.occupiedCells).toEqual({});
          }
        );
        it('responds with "miss" in other circumstances', () => {
          expect(board.attack([-1, 0]).message).toBe(missMsg);
          expect(board.attack([0, -1]).message).toBe(missMsg);
          expect(board.attack([100, 0]).message).toBe(missMsg);
          expect(board.attack(['a', 0]).message).toBe(missMsg);
          expect(board.attack([3, 0]).message).toBe(missMsg);
        });
      });
    });
  });
});
