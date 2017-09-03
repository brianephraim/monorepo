import { connect } from 'react-redux';

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
