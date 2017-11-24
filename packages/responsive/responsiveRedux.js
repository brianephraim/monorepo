import { connect } from 'react-redux';
import {ResponsiveMasterHOC} from './responsive'

export function makeNamespacedReduxConnectHocForResponsiveStatusesDict(appNameSpace) {
  return connect(
    (state, props /* , { params }*/) => {
      
      const refinedAppNameSpace = typeof appNameSpace === 'function' ? appNameSpace(props) : appNameSpace;
      return {
        responsiveStatusesDict: state[refinedAppNameSpace].responsiveStatusesDict,
      };
    },
    null,
    (stateProps, dispatchProps, ownProps) => {
      // console.log('stateProps',stateProps);
      // console.log('dispatchProps',dispatchProps);
      // console.log('ownProps',ownProps);
      // const originalSetBackground = dispatchProps.setBackground;
      // const newDispatchProps = {
      //   ...dispatchProps,
      //   setBackground: (...args) => {
      //     originalSetBackground(...args, ownProps.constants);
      //   },
      // }
      return Object.assign({}, ownProps, stateProps, dispatchProps);
    }
  );
}
// ResponsiveReduxMasterHOC(Comp, `${appNameSpace}${splitter}${masterName}`,appNameSpaceOriginal,splitter,masterName)

function determineActionName(props,options) {
  const {splitter,masterName} = options;
  const {appNameSpace} = options;
  let actionName = typeof appNameSpace === 'function' ? appNameSpace(props) : appNameSpace;
  actionName = `${actionName}${splitter}${masterName}`;
  return actionName;
}
export function ResponsiveReduxMasterHOC(Comp, options) {
  let ResponsiveMaster = ResponsiveMasterHOC(Comp, options);
  ResponsiveMaster = connect(
    () => {
      return {};
    },
    {
      onResponsiveUpdate: (responsiveStatusesDict, props) => {
        return (dispatch,getState) => {
          dispatch({
            name: determineActionName(props,options),
            responsiveStatusesDict,
            type: 'UDATE_RESPONSIVE_STATUSES_DICT',
          });
        };
      },
      onStart: (props) => {
        return (dispatch,getState) => {
          dispatch({
            name: determineActionName(props,options),
            type: 'UDATE_RESPONSIVE_STATUSES_DICT',
            isStart: true
          });
        };
      },
      onEnd: (props) => {
        return (dispatch,getState) => {
          dispatch({
            name: determineActionName(props,options),
            type: 'UDATE_RESPONSIVE_STATUSES_DICT',
            isEnd: true
          });
        };
      },
    },
    (stateProps, dispatchProps, ownProps) => {
      const originalOnResponsiveUpdate = dispatchProps.onResponsiveUpdate;
      const originalOnStart = dispatchProps.onStart;
      const originalOnEnd = dispatchProps.onEnd;
      const newDispatchProps = {
        ...dispatchProps,
        onResponsiveUpdate: (...args) => {
          originalOnResponsiveUpdate(...args, ownProps);
        },
        onStart: (...args) => {
          originalOnStart(ownProps);
        },
        onEnd: (...args) => {
          originalOnEnd(ownProps);
        },
      }
      return Object.assign({}, ownProps, stateProps, newDispatchProps);
    }
  )(ResponsiveMaster);

  return ResponsiveMaster;
}