import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';
import constants from './constants';

export default function makeActionSetBackground(imgSrc) {
  imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
  return (dispatch, getState) => {
    return getNormalizedImageInfo(imgSrc).then(response => {
      const action = payloadRefineAction({
        type: 'CROP',
        payload: {
          ...compositeImageIntoParams(getState()[constants.appNameSpace].compositeImageData),
          bgSrcKey: response.srcKey,
        },
      });
      dispatch(action);
    });
  };
}


