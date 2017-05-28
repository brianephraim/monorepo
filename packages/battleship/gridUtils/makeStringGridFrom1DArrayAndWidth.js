module.exports = function makeStringGridFrom1DArrayAndWidth(array, width, transform) {
  return array.reduce((stringGrid, value, index) => {
    const isLastItemInRow = (((index + 1) / width) % 1) === 0;
    const suffix = isLastItemInRow ? '\n' : ' ';
    const transformedValue = transform ? transform(value) : value;
    return `${stringGrid}${transformedValue}${suffix}`;
  }, '');
};
