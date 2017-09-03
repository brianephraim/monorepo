import { connect } from 'react-redux';
import {ResponsiveMasterHOC} from './responsive'

const existingComponents = {};
export function makeNamespacedReduxConnectHocForResponsiveStatusesDict(nameSpace) {
  if (!existingComponents[nameSpace]){
    existingComponents[nameSpace] = connect((state /* , { params }*/) => {
      return {
        responsiveStatusesDict: state[nameSpace].responsiveStatusesDict,
      };
    });
  }
  return existingComponents[nameSpace];
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