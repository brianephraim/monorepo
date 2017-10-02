import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';
import { appConnect } from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

function makeSetImageHandler (type) {
  return (imgSrc,attemptId, ownProps) => {
    imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
    return (dispatch, getState) => {
      return getNormalizedImageInfo(
        imgSrc,
        ownProps.constants.backendApiPrefix
      ).then(response => {
        const stillLoading = getState().loading;
        if (stillLoading) {
          const compositeImageData = {...getState().compositeImageData};
          const actionRaw = {
            type,
            payload: {
              ...compositeImageIntoParams(
                compositeImageData
              ),
              bgSrcKey: response.srcKey,
            },
          };
          if (type === 'UPLOAD_TEMPLATE') {
            actionRaw.fgSrcKey = compositeImageData.background.srcKey
          }
          const action = payloadRefineAction(
            actionRaw,
            ownProps.constants.appNameSpace
          );
          dispatch(action);
          dispatch({
            type: 'STOP_LOADING',
            where: `setBackgroundHoc_${attemptId}`,
          });
        }
      });
    };
  };
}


export default function setBackgroundHoc(Comp) {
  return ancestorConstantsHoc(
    appConnect(
      // (appState) => {
      //   return {}
      // },
      null,
      {
        setBackground: makeSetImageHandler('CROP'),
        setBackgroundTemplateUploader: makeSetImageHandler('UPLOAD_TEMPLATE'),
        onLoading:(attemptId) => {
          console.log('onloading',attemptId);
          return (dispatch, getState) => {
            dispatch({
              type: 'LOADING',
              where: `setBackgroundHoc_${attemptId}`
            })
          };
        },
        onError:(attemptId) => {
          console.log('onloading',attemptId);
          return (dispatch, getState) => {
            dispatch({
              type: 'LOADINGERROR',
              where: `setBackgroundHoc_${attemptId}`
            })
          };
        },
      },
      // (stateProps, dispatchProps, ownProps) => {
      //   console.log('stateProps, dispatchProps, ownProps',stateProps, dispatchProps, ownProps)
      //   return Object.assign({}, ownProps, stateProps, dispatchProps);
      // }
    )(Comp)
  );
}
