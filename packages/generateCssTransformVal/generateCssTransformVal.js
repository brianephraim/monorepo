function generateCssTransformVal(settings) {
  var cssVal = [];

  if (typeof settings.x === "number" || typeof settings.y === "number") {
    var translateSettings = Object.assign({
      x: 0,
      y: 0
    }, settings);
    cssVal.push("translate3d(" + translateSettings.x + "px," + translateSettings.y + "px,0)");
  }

  if (typeof settings.scale === "number") {
    cssVal.push("scale3d(" + settings.scale + ", " + settings.scale + ", 1)");
  }

  if (typeof settings.rotateZ === "number") {
    cssVal.push("rotateZ(" + settings.rotateZ + "deg)");
  }

  return cssVal.join(" ");
}

export default generateCssTransformVal;