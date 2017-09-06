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

export function ResponsiveReduxMasterHOC(Comp, nameSpace) {

  let ResponsiveMaster = ResponsiveMasterHOC(Comp, nameSpace);
  ResponsiveMaster = connect(
    () => {
      return {};
    },
    {
      onResponsiveUpdate: responsiveStatusesDict => {
        return {
          name: nameSpace,
          responsiveStatusesDict,
          type: 'UDATE_RESPONSIVE_STATUSES_DICT',
        };
      },
    }
  )(ResponsiveMaster);

  return ResponsiveMaster;
}