import { push } from 'react-router-redux';
import { formUrl } from './deriveUrlInfo';


export function refresh(oldData, pathAssignments) {
  if (!Array.isArray(pathAssignments)) {
    pathAssignments = [pathAssignments];
  }
  const compositeImageData = pathAssignments.reduce((accum, assignment) => {
    const path = assignment.path;
    const pathSplit = path.split('.');
    const val = assignment.val;
    accum.background = accum.background || { ...oldData.background };
    accum.foreground = accum.foreground || { ...oldData.foreground };
    accum[pathSplit[0]][pathSplit[1]] = val;
    return accum;
  }, {});
  return compositeImageData;
}



function generateCompositeImgSrcUrl(compositeImageData) {
  return `/image/${compositeImageData.foreground.srcKey}/${compositeImageData.background
    .srcKey}_${compositeImageData.foreground.width}_${compositeImageData.foreground
    .height}_${compositeImageData.foreground.x}_${compositeImageData.foreground.y}.jpg`;
}

// function ensureTrailingSlash (url) {
//   return url.replace(/\/?$/, '/');
// }
export function furtherRefineCompositeImageData(compositeImageDataState,newCompositeImageData,namespace) {
  const compositeImageData = {
    ...compositeImageDataState,
    foreground: {
      ...compositeImageDataState.foreground,
      ...newCompositeImageData.foreground,
    },
    background: {
      ...compositeImageDataState.background,
      ...newCompositeImageData.background,
    },
    screen: typeof newCompositeImageData.screen !== 'undefined' ? newCompositeImageData.screen : compositeImageDataState.screen,
    namespace: namespace || compositeImageDataState.namespace,
  };

  compositeImageData.imgSrcUrl = generateCompositeImgSrcUrl(compositeImageData);
  const browserUrlBase = formUrl(compositeImageData);
  compositeImageData.browserUrlBaseWithPreceedingUrlFrag = `${compositeImageData.namespace}/${browserUrlBase}`;
  compositeImageData.desiredRoute = `${compositeImageData.browserUrlBaseWithPreceedingUrlFrag}/${compositeImageData.screen}`;
  return compositeImageData;
}
export function setterActionCreator(newCompositeImageData, namespace) {
  return (dispatch, getState) => {
    const state = getState();
    const compositeImageDataState = state.bernie.compositeImageData;
    const routerPathname = state.router.location.pathname;

    //
    const compositeImageData = furtherRefineCompositeImageData(compositeImageDataState,newCompositeImageData,namespace);
    dispatch({
      type: 'SET_COMPOSITE_IMAGE_DATA',
      compositeImageData,
    });
    
    if (
      compositeImageDataState.desiredRoute !== compositeImageData.desiredRoute &&
      routerPathname !== compositeImageData.desiredRoute
    ) {
      dispatch(push(compositeImageData.desiredRoute));
    }
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
    screen: '',
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
    screen: paramsToUse.screen,
  };
  return compositeImageData;
}
