import {makeNameSpacedResponsiveHOC, makemakeNameSpacedResponsiveReduxMasterHOC,makeNameSpacedResponsiveStatusesDictReducer} from '@defualt/responsive/nameSpaceResponsive';
import nameSpaceConnect from '@defualt/name-space-connect';
import {makeNamespacedReduxConnectHocForResponsiveStatusesDict} from '@defualt/responsive/responsiveRedux';

import ancestorConstantsHoc from './ancestorConstantsHoc';

import constantsX from './constants';

const ResponsiveHOC = (...args) => {
  return ancestorConstantsHoc(
    makeNameSpacedResponsiveHOC(({constants}) => {
      return constants.appNameSpace;
    })(...args)
  );
};;

const ResponsiveReduxMasterHOC = (...args) => {
  return ancestorConstantsHoc(
    makemakeNameSpacedResponsiveReduxMasterHOC(
      ({constants}) => {
        return constants.appNameSpace;
      }
    )(...args)
  );
};

const ConnectResponsiveStatusesDictHOC = (...args) => {
  return ancestorConstantsHoc(
    makeNamespacedReduxConnectHocForResponsiveStatusesDict(
      ({constants}) => {
        return constants.appNameSpace;
      }
    )(...args)
  );
};

console.log('nneed to wrap in ancestorConstantsHoc or somethings');
const appConnect = (...args) => {
  const nameSpacedConnect = nameSpaceConnect(
    (props) => {
      console.log('props',props);
      if (!props || !props.constants) {
        console.trace();
      }
      return props.constants.appNameSpace;
    }
  )(...args);
  return (...args2) => {
    return ancestorConstantsHoc(nameSpacedConnect(...args2));
  };

};
// const appConnect = () => {
//   return nameSpaceConnect(() => { return constantsX.appNameSpace; })();
// };
// const appConnect = (...args) => {
//   return ancestorConstantsHoc(
//     nameSpaceConnect(
//       (/*{constants}*/) => {
//         return constantsX.appNameSpace;
//         return constants.appNameSpace;
//       }
//     )(...args)
//   );
// };

const nameSpacedResponsiveStatusesDictReducer = makeNameSpacedResponsiveStatusesDictReducer(() => { return constantsX.appNameSpace; },'homeResponsive');

export {ResponsiveHOC, ResponsiveReduxMasterHOC,ConnectResponsiveStatusesDictHOC,appConnect,nameSpacedResponsiveStatusesDictReducer};

export default {ResponsiveHOC, ResponsiveReduxMasterHOC,ConnectResponsiveStatusesDictHOC,appConnect,nameSpacedResponsiveStatusesDictReducer};
