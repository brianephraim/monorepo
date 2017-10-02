import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';
import { appConnect } from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

let attemptIdWhenNotArgumented = 0;

function makeSetImageHandler (type) {
  return (imgSrc,attemptId, ownProps) => {
    let priorLoading = attemptId && ownProps;
    if (typeof ownProps === 'undefined') {
      // WHEN LOADING WAS NOT INITIATED PRIOR TO THIS SCOPE
      attemptIdWhenNotArgumented++;
      ownProps = attemptId;
      attemptId = `A${attemptIdWhenNotArgumented}`
      
    }
    imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
    console.log(imgSrc,attemptId, ownProps);
    return (dispatch, getState) => {
      if (!priorLoading) {
        dispatch({
          type: 'LOADING',
          where: `setBackgroundHoc_${attemptId}`,
        });
      }
      console.log('GG')
      return getNormalizedImageInfo(
        imgSrc,
        ownProps.constants.backendApiPrefix
      ).then(response => {
        const stillLoading = getState().loading;
        console.log('HH',stillLoading,response)
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
          return (dispatch, getState) => {
            dispatch({
              type: 'LOADING',
              where: `setBackgroundHoc_${attemptId}`
            })
          };
        },
        onError:(attemptId) => {
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
