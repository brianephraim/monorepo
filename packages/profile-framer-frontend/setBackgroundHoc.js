import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';
import {appConnect} from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

export default function setBackgroundHoc(Comp){
  return ancestorConstantsHoc(appConnect(
    null,
    {
      setBackground: (imgSrc,ownProps) => {
        imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
        return (dispatch, getState) => {
          return getNormalizedImageInfo(imgSrc,ownProps.constants.backendApiPrefix).then(response => {
            const action = payloadRefineAction({
              type: 'CROP',
              payload: {
                ...compositeImageIntoParams(getState()[ownProps.constants.appNameSpace].compositeImageData),
                bgSrcKey: response.srcKey,
              },
            });
            dispatch(action);
          });
        };
      }
    }
  )(Comp));
}