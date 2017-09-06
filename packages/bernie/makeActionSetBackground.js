import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';
import {appNameSpace} from './constants';

export default function makeActionSetBackground(imgSrc) {
  imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
  return (dispatch, getState) => {
    return getNormalizedImageInfo(imgSrc).then(response => {
      const action = payloadRefineAction({
        type: 'CROP',
        payload: {
          ...compositeImageIntoParams(getState()[appNameSpace].compositeImageData),
          bgSrcKey: response.srcKey,
        },
      });
      dispatch(action);
    });
  };
}


