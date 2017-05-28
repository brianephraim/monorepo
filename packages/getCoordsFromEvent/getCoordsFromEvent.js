function getCoordsFromEvent(e) {
  if (e.touches) {
    return {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY,
    };
  }
  return {
    x: e.pageX,
    y: e.pageY,
  };
}
export default getCoordsFromEvent;
