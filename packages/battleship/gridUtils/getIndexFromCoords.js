module.exports = function getIndexFromCoords(col, row, width) {
  const index = Math.floor((row * width) + col);
  if (col > width - 1) {
    throw 'Too far right.';
  }
  return index;
};
