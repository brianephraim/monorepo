import { connect } from 'react-redux';
import {ResponsiveMasterHOC} from './responsive'

export function makeNamespacedReduxConnectHocForResponsiveStatusesDict(appNameSpace) {
  return connect((state /* , { params }*/) => {
    appNameSpace = typeof appNameSpace === 'function' ? appNameSpace() : appNameSpace;
    return {
      responsiveStatusesDict: state[appNameSpace].responsiveStatusesDict,
    };
  });
}
// ResponsiveReduxMasterHOC(Comp, `${appNameSpace}${splitter}${masterName}`,appNameSpaceOriginal,splitter,masterName)
export function ResponsiveReduxMasterHOC(Comp, options) {
  let ResponsiveMaster = ResponsiveMasterHOC(Comp, options);
  ResponsiveMaster = connect(
    () => {
      return {};
    },
    {
      onResponsiveUpdate: responsiveStatusesDict => {
        const {splitter,masterName} = options;
        let {appNameSpace} = options;
        appNameSpace = typeof appNameSpace === 'function' ? appNameSpace() : appNameSpace;
        appNameSpace = `${appNameSpace}${splitter}${masterName}`;
        return {
          name: appNameSpace,
          responsiveStatusesDict,
          type: 'UDATE_RESPONSIVE_STATUSES_DICT',
        };
      },
    }
  )(ResponsiveMaster);

  return ResponsiveMaster;
}