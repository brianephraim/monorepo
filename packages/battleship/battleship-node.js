const Board = require('./Board');
const board = new Board(10, 10);
const Ship = require('./Ship');

const placementAttempts = [
  // good
  board.place([
    {
      col: 2,
      row: 4,
      content: (new Ship(3)).cells,
      isHorizontal: false,
    },
    {
      col: 3,
      row: 4,
      content: (new Ship(4)).cells,
      isHorizontal: true,
    },
  ]),

  // overlap error
  board.place([
    {
      col: 2,
      row: 5,
      content: (new Ship(3)).cells,
      isHorizontal: true,
    },
  ]),

  // too far right error
  board.place([
    {
      col: 8,
      row: 0,
      content: (new Ship(3)).cells,
      isHorizontal: true,
    },
  ]),

  // too far down error
  board.place([
    {
      col: 0,
      row: 8,
      content: (new Ship(3)).cells,
      isHorizontal: false,
    },
  ]),
];

const placementLog = placementAttempts.reduce((log, status) => {
  return log.concat([status.success ? 'success' : status.error]);
}, []);

console.log('attack Z', board.attack(90, 4));
console.log('attack Z', board.attack(1, 4));
console.log('attack A', board.attack(2, 4));
console.log('attack B', board.attack(2, 4));
console.log('attack C', board.attack(2, 5));
console.log('attack C', board.attack(2, 6));

console.log('attack D', board.attack(3, 4));
console.log('attack E', board.attack(4, 4));
console.log('attack F', board.attack(5, 4));
console.log('attack G', board.attack(6, 4));

console.log(placementLog);
console.log(board.getStringGrid());
