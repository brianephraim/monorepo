module.exports = function getCoordsFromIndex(index, width) {
  const row = Math.floor(index / width);
  const col = index - (width * row);
  return {
    col,
    row,
  };
};
