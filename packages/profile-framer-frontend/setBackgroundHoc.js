import { connect } from 'react-redux';  
import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';
import {appConnect} from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

export default function setBackgroundHoc(Comp){

  // return ancestorConstantsHoc(
  //   connect(
  //     null,
  //     (dispatch, ownProps,...args) => {
  //       console.log('xxxx',ownProps.constants);
  //       console.log('args',args)
  //       return {
  //         setBackground: (imgSrc) => {
  //           console.log('SETTING BG')
  //           imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
  //           return (dispatch, getState) => {
  //             console.log('SETTING BG 2')
  //             return getNormalizedImageInfo(imgSrc).then(response => {
  //               console.log('SETTING BG 3')
  //               const action = payloadRefineAction({
  //                 type: 'CROP',
  //                 payload: {
  //                   ...compositeImageIntoParams(getState()[ownProps.constants.appNameSpace].compositeImageData),
  //                   bgSrcKey: response.srcKey,
  //                 },
  //               });
  //               dispatch(action);
  //             });
  //           };
  //         }
  //       };
  //     }
  //   )(Comp)
  // );
  return ancestorConstantsHoc(appConnect(
    null,
    {
      setBackground: (imgSrc,constants) => {
        console.log('constants WOOOOO',constants);
        imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
        return (dispatch, getState,...args) => {
          console.log('argsargs',args)
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
    }
    // ,
    // (stateProps, dispatchProps, ownProps) => {
    //   const originalSetBackground = dispatchProps.setBackground;
    //   const newDispatchProps = {
    //     ...dispatchProps,
    //     setBackground: (...args) => {
    //       originalSetBackground(...args, ownProps.constants);
    //     },
    //   }
    //   return Object.assign({}, ownProps, stateProps, newDispatchProps);
    // }
  )(Comp));
}