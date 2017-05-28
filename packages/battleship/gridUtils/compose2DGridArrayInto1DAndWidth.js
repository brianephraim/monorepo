const getIndexFromCoords = require('./getIndexFromCoords');
module.exports = function compose2DGridArrayInto1DAndWidth(grid, isArrayOfRows) {
  if (isArrayOfRows) {
    let oneDimensionArray = [];
    const width = grid[0].length;
    grid.forEach((row) => {
      oneDimensionArray = oneDimensionArray.concat(row);
    });
    return {
      array: oneDimensionArray,
      width,
    };
  }
  // else
  const oneDimensionArray = [];
  const width = grid.length;
  grid.forEach((column, colPosition) => {
    column.forEach((value, rowPosition) => {
      const oneDimensionIndex = getIndexFromCoords(colPosition, rowPosition, width);
      oneDimensionArray[oneDimensionIndex] = value;
    });
  });
  return {
    array: oneDimensionArray,
    width,
  };
};
