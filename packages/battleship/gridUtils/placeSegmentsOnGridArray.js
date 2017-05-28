const placeOneSegmentOnGridArray = require('./placeOneSegmentOnGridArray');
module.exports = function placeSegmentsOnGridArray(options) {
  return options.placements.reduce((modifiedGridAsArray, placement) => {
    return placeOneSegmentOnGridArray(
      Object.assign({}, options, placement, { gridAsArray: modifiedGridAsArray })
    );
  }, options.gridAsArray.slice(0));
};
