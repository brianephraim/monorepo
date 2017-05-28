const initializeHomogenousArray = require('./initializeHomogenousArray');
const getIndexFromCoords = require('./getIndexFromCoords');
module.exports = function placeOneSegmentOnGridArray({
  gridAsArray, width, col, row, content, isHorizontal, validate,
}) {
  const arrayToPlace = Array.isArray(content) ? content : initializeHomogenousArray(
    content.size, content.value
  );
  return arrayToPlace.reduce((modifiedGridAsArray, value, i) => {
    const colAdjusted = isHorizontal ? col + i : col;
    const rowAdjusted = isHorizontal ? row : row + i;
    const index = getIndexFromCoords(colAdjusted, rowAdjusted, width);
    if (index > modifiedGridAsArray.length - 1) {
      throw 'Too far down.';
    }

    const previousCellValue = modifiedGridAsArray[index];

    if (validate) {
      const validationResult = validate(previousCellValue);
      // when validation returns false, it failed genericaly
      if (!validationResult) {
        throw 'validation failed';
      // or if it returns a string, then that's an error message.
      } else if (typeof validationResult === 'string') {
        throw validationResult;
      }
      // validation passing will return true.
    }

    modifiedGridAsArray[index] = value;
    return modifiedGridAsArray;
  }, gridAsArray.slice(0));
};