import {
  makeNameSpacedResponsiveHOC,
  makemakeNameSpacedResponsiveReduxMasterHOC,
} from '@defualt/responsive/nameSpaceResponsive';
import nameSpaceConnect from '@defualt/name-space-connect';
import { makeNamespacedReduxConnectHocForResponsiveStatusesDict } from '@defualt/responsive/responsiveRedux';
import apolloClientHoc from 'dev_env/apolloClientHoc';

import ancestorConstantsHoc from './ancestorConstantsHoc';

import subscribeConnect from './subscribeConnect';



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

const appApolloClientHoc = (gqlActions) => {
  const ApolloCliented = apolloClientHoc(gqlActions, (props) => {
    Object.keys(gqlActions).forEach((key) => {
      const item = gqlActions[key];
      item.options = item.options || {};
      item.options.variables = item.options.variables || {};
      item.options.variables.headers = item.options.variables.headers || {};
      item.options.variables.headers.appNameSpace = props.constants.appNameSpace;
    });
    return gqlActions;
  })
  return (...args) => {
    return ancestorConstantsHoc(ApolloCliented(...args));
  };

};

const appSubscribeConnect = (map) => {
  return subscribeConnect(map, appConnect);
}

export {
  ResponsiveHOC,
  ResponsiveReduxMasterHOC,
  ConnectResponsiveStatusesDictHOC,
  appConnect,
  appApolloClientHoc,
  appSubscribeConnect,
};

export default {
  ResponsiveHOC,
  ResponsiveReduxMasterHOC,
  ConnectResponsiveStatusesDictHOC,
  appConnect,
  appApolloClientHoc,
  appSubscribeConnect,
};
