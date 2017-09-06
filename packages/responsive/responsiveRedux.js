import { connect } from 'react-redux';
import {ResponsiveMasterHOC} from './responsive'

const existingComponents = {};
export function makeNamespacedReduxConnectHocForResponsiveStatusesDict(appNameSpace) {
  appNameSpace = typeof appNameSpace === 'function' ? appNameSpace() : appNameSpace;
  if (!existingComponents[appNameSpace]){
    existingComponents[appNameSpace] = connect((state /* , { params }*/) => {
      return {
        responsiveStatusesDict: state[appNameSpace].responsiveStatusesDict,
      };
    });
  }
  return existingComponents[appNameSpace];
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