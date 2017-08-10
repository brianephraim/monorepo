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


export function setterActionCreator(newCompositeImageData) {
  return (dispatch, getState) => {
    const state = getState().bernie.compositeImageData;
    const compositeImageData = {
      ...state,
      foreground: {
        ...state.foreground,
        ...newCompositeImageData.foreground,
      },
      background: {
        ...state.background,
        ...newCompositeImageData.background,
      }          
    };
    compositeImageData.imgSrcUrl = generateCompositeImgSrcUrl(compositeImageData);
    compositeImageData.browserUrlBase = formUrl(compositeImageData);
    dispatch({
      type: 'SET_COMPOSITE_IMAGE_DATA',
      compositeImageData,
    });
  };
}

class CompositeImage {
  constructor({ params, data }) {
    if (params) {
      this.data = this.parseCompositeImageDataFromRouteParams(params);
    } else if (data) {
      this.data = data;
    }
  }
  refresh(pathAssignments) {
    if (!Array.isArray(pathAssignments)) {
      pathAssignments = [pathAssignments];
    }
    const compositeImageData = pathAssignments.reduce((accum, assignment) => {
      const path = assignment.path;
      const pathSplit = path.split('.');
      const val = assignment.val;
      accum.background = accum.background || { ...this.data.background };
      accum.foreground = accum.foreground || { ...this.data.foreground };
      accum[pathSplit[0]][pathSplit[1]] = val;
      return accum;
    }, {});
    return new CompositeImage({ data: compositeImageData });
  }
  generateUrl({ rootPath, urlAppend }) {
    const url = `${rootPath}/${formUrl(this.data)}${urlAppend}`;
    return url;
  }
  parseCompositeImageDataFromRouteParams(params, overrides) {
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
      ...overrides,
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
}