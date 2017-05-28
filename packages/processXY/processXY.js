function processXY(cb) {
  return ['x', 'y'].reduce((accum, xOrY) => {
    return {
      ...accum,
      [xOrY]: cb(xOrY),
    };
  }, {});
}
export default processXY;
