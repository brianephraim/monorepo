import { getNormalizedImageInfo } from './s3';
import { compositeImageIntoParams } from './compositeImage';
import { payloadRefineAction } from './setup';
import { appConnect } from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

export default function setBackgroundHoc(Comp) {
  return ancestorConstantsHoc(
    appConnect(
      // (appState) => {
      //   return {}
      // },
      null,
      {
        setBackground: (imgSrc,attemptId, ownProps) => {
          console.log(imgSrc,attemptId);
          imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
          return (dispatch, getState) => {
            return getNormalizedImageInfo(
              imgSrc,
              ownProps.constants.backendApiPrefix
            ).then(response => {
              const stillLoading = getState().loading;
              if (stillLoading) {
                const action = payloadRefineAction(
                  {
                    type: 'CROP',
                    payload: {
                      ...compositeImageIntoParams(
                        getState().compositeImageData
                      ),
                      bgSrcKey: response.srcKey,
                    },
                  },
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
        },
        setBackgroundTemplateUploader: (imgSrc,attemptId, ownProps) => {
          imgSrc = typeof imgSrc === 'object' ? imgSrc.src : imgSrc;
          return (dispatch, getState) => {
            return getNormalizedImageInfo(
              imgSrc,
              ownProps.constants.backendApiPrefix
            ).then(response => {
              const compositeImageData = {...getState().compositeImageData};
              const action = payloadRefineAction(
                {
                  type: 'UPLOAD_TEMPLATE',
                  payload: {
                    ...compositeImageIntoParams(
                      compositeImageData
                    ),
                    bgSrcKey: response.srcKey,
                    // the foreground will be hidden, so this is a spare parameter.
                    // lets cache the previous background image here, since it was overwritten for the new template image.
                    fgSrcKey: compositeImageData.background.srcKey,
                  },
                },
                ownProps.constants.appNameSpace
              );
              dispatch(action);
              dispatch({
                type: 'STOP_LOADING',
                where: `setBackgroundHoc_${attemptId}`,
              });
            });
          };
        },
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
