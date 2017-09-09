import { connect } from 'react-redux';
import {ResponsiveMasterHOC} from './responsive'

export function makeNamespacedReduxConnectHocForResponsiveStatusesDict(appNameSpace) {
  return connect(
    (state, props /* , { params }*/) => {
      
      appNameSpace = typeof appNameSpace === 'function' ? appNameSpace(props) : appNameSpace;
      return {
        responsiveStatusesDict: state[appNameSpace].responsiveStatusesDict,
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
export function ResponsiveReduxMasterHOC(Comp, options) {
  let ResponsiveMaster = ResponsiveMasterHOC(Comp, options);
  ResponsiveMaster = connect(
    () => {
      return {};
    },
    {
      onResponsiveUpdate: (responsiveStatusesDict, props) => {
        const {splitter,masterName} = options;
        let {appNameSpace} = options;
        appNameSpace = typeof appNameSpace === 'function' ? appNameSpace(props) : appNameSpace;
        appNameSpace = `${appNameSpace}${splitter}${masterName}`;
        return {
          name: appNameSpace,
          responsiveStatusesDict,
          type: 'UDATE_RESPONSIVE_STATUSES_DICT',
        };
      },
    },
    (stateProps, dispatchProps, ownProps) => {
      const originalOnResponsiveUpdate = dispatchProps.onResponsiveUpdate;
      const newDispatchProps = {
        ...dispatchProps,
        onResponsiveUpdate: (...args) => {
          originalOnResponsiveUpdate(...args, ownProps);
        },
      }
      return Object.assign({}, ownProps, stateProps, newDispatchProps);
    }
  )(ResponsiveMaster);

  return ResponsiveMaster;
}