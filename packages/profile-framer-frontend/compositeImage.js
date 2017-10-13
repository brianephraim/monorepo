export function generateCompositeImgSrcUrl(compositeImageData) {
  return `/image/${compositeImageData.foreground.srcKey}/${compositeImageData
    .background.srcKey}_${compositeImageData.foreground
    .width}_${compositeImageData.foreground.height}_${compositeImageData
    .foreground.x}_${compositeImageData.foreground.y}.jpg`;
}

export function compositeImageIntoParams(compositeImageData) {
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
export function paramsIntoCompositeImage(params, constants) {
  const placeholder = {
    fgX: 363,
    fgY: 44,
    fgW: 554,
    fgH: 554,
    bgW: 1200,
    bgH: 1200,
    bgSrcKey: '160608135318-01-bernie-sanders-0608-super-1691507902935062',
    fgSrcKey: 'ahgqjgkcz55chapma9wu',
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
      src: `${constants.fgImagePrefix}${paramsToUse.fgSrcKey}${constants.imageSuffix}`,
      srcKey: paramsToUse.fgSrcKey,
    },
    background: {
      width: +paramsToUse.bgW,
      height: +paramsToUse.bgH,
      src: `${constants.bgImagePrefix}${paramsToUse.bgSrcKey}${constants.imageSuffix}`,
      srcKey: paramsToUse.bgSrcKey,
    },
  };
  return compositeImageData;
}

export function getDefaultCompositeImageData (constants){
  return paramsIntoCompositeImage({},constants);
}
