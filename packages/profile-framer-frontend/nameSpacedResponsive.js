import {
  makeNameSpacedResponsiveHOC,
  makemakeNameSpacedResponsiveReduxMasterHOC,
} from '@defualt/responsive/nameSpaceResponsive';
import nameSpaceConnect from '@defualt/name-space-connect';
import { makeNamespacedReduxConnectHocForResponsiveStatusesDict } from '@defualt/responsive/responsiveRedux';

import ancestorConstantsHoc from './ancestorConstantsHoc';

const ResponsiveHOC = (...args) => {
  return ancestorConstantsHoc(
    makeNameSpacedResponsiveHOC(({ constants }) => {
      return constants.appNameSpace;
    })(...args)
  );
};

const ResponsiveReduxMasterHOC = (...args) => {
  return ancestorConstantsHoc(
    makemakeNameSpacedResponsiveReduxMasterHOC(({ constants }) => {
      return constants.appNameSpace;
    })(...args)
  );
};

const ConnectResponsiveStatusesDictHOC = (...args) => {
  return ancestorConstantsHoc(
    makeNamespacedReduxConnectHocForResponsiveStatusesDict(({ constants }) => {
      return constants.appNameSpace;
    })(...args)
  );
};

const appConnect = (...args) => {
  const connected = nameSpaceConnect(({ constants }) => {
    return constants.appNameSpace;
  })(...args);
  return (...args2) => {
    return ancestorConstantsHoc(connected(...args2));
  };
};

export {
  ResponsiveHOC,
  ResponsiveReduxMasterHOC,
  ConnectResponsiveStatusesDictHOC,
  appConnect,
};

export default {
  ResponsiveHOC,
  ResponsiveReduxMasterHOC,
  ConnectResponsiveStatusesDictHOC,
  appConnect,
};
