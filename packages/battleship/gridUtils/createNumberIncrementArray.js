module.exports = function createNumberIncrementArray(a, z) {
  const array = [];
  let i = a;
  while (i <= z) {
    array.push(i++);
  }
  return array;
};
