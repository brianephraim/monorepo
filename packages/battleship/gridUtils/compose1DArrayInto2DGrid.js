const getCoordsFromIndex = require('./getCoordsFromIndex');
module.exports = function compose1DArrayInto2DGrid(width, array, isArrayOfRows) {
  // const isArrayOfColumns = !isArrayOfRows;

  // Array of columns looks like this:
  /*
    [[0,3],[1,4],[2,5]]

  */
  // Array of rows looks like this:
  /*
    [[0,1],[2,3],[4,5]]

  */

  return array.reduce((grid, value, index) => {
    // Take that item's index and the desired grid's width
    // and use that information to determine a set of x,y coordinates.
    let coords = getCoordsFromIndex(index, width);
    // (if we're making an array of columns the calculation just needs us to reverse the coords)
    if (!isArrayOfRows) {
      coords = {
        row: coords.col,
        col: coords.row,
      };
    }
    // Look at the grid you are in the middle of building,
    // and check to see it already has a row array
    // for your row coordinate.
    if (!grid[coords.row]) {
      // If not, create it.
      grid[coords.row] = [];
    }
    // Now you can assign a value to that column array.
    grid[coords.row][coords.col] = value;
    return grid;
  }, []);
};
