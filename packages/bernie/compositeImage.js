export function generateCompositeImgSrcUrl(compositeImageData) {
  return `/image/${compositeImageData.foreground.srcKey}/${compositeImageData.background
    .srcKey}_${compositeImageData.foreground.width}_${compositeImageData.foreground
    .height}_${compositeImageData.foreground.x}_${compositeImageData.foreground.y}.jpg`;
}

export function compositeImageIntoParams (compositeImageData) {
  return {
    fgX: compositeImageData.foreground.x,
    fgY: compositeImageData.foreground.y,
    fgW: compositeImageData.foreground.width,
    fgH: compositeImageData.foreground.height,
    bgW: compositeImageData.background.width,
    bgH: compositeImageData.background.height,
    bgSrcKey: compositeImageData.background.srcKey,
    fgSrcKey: compositeImageData.foreground.srcKey,
  };
}
export function paramsIntoCompositeImage (params) {
  const placeholder = {
    fgX: 142,
    fgY: 98,
    fgW: 305,
    fgH: 305,
    bgW: 1200,
    bgH: 1200,
    bgSrcKey: 'zephyr1476401787491',
    fgSrcKey: 'h3',
  };
  const paramsToUse = {
    ...placeholder,
    ...params,
  };
  const compositeImageData = {
    foreground: {
      x: +paramsToUse.fgX,
      y: +paramsToUse.fgY,
      width: +paramsToUse.fgW,
      height: +paramsToUse.fgH,
      src: `http://s3-us-west-1.amazonaws.com/bernieapp/decorations/${paramsToUse.fgSrcKey}.png`,
      srcKey: paramsToUse.fgSrcKey,
    },
    background: {
      width: +paramsToUse.bgW,
      height: +paramsToUse.bgH,
      src: `http://s3-us-west-1.amazonaws.com/bernieapp/selfies/${paramsToUse.bgSrcKey}.png`,
      srcKey: paramsToUse.bgSrcKey,
    },
  };
  return compositeImageData;
}
