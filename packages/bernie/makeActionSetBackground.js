import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';

export default function makeActionSetBackground(imgSrc) {
  return (dispatch, getState) => {
    console.log(imgSrc);
    console.log(getState().bernie.compositeImageData);
    return getNormalizedImageInfo(imgSrc).then(response => {
      console.log(getState());
      const action = payloadRefineAction({
        type: 'BERNIE_CROP',
        payload: {
          // ...this.props.location.payload,
          ...compositeImageIntoParams(getState().bernie.compositeImageData),
          bgSrcKey: response.srcKey,
        },
      });
      dispatch(action);
    });
  };
}
