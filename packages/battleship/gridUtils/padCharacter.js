module.exports = function padCharacter(num, size, char) {
  let s = `${num}`;
  while (s.length < size) {
    s = `${char}${s}`;
  }
  return s;
};
