import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';

export default function makeActionSetForeground(imgSrc) {
  imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
  return (dispatch, getState) => {
    return getNormalizedImageInfo(imgSrc).then(response => {
      const action = payloadRefineAction({
        type: 'BERNIE_CROP',
        payload: {
          ...compositeImageIntoParams(getState().bernie.compositeImageData),
          bgSrcKey: response.srcKey,
        },
      });
      dispatch(action);
    });
  };
}
