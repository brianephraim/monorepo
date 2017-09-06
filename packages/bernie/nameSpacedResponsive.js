import {makeNameSpacedResponsiveHOC, makemakeNameSpacedResponsiveReduxMasterHOC} from '@defualt/responsive/nameSpaceResponsive';
import constants from './constants';
import {makeNamespacedReduxConnectHocForResponsiveStatusesDict} from '@defualt/responsive/responsiveRedux';
import nameSpaceConnect from '@defualt/name-space-connect';

const ResponsiveHOC = makeNameSpacedResponsiveHOC(() => { return constants.appNameSpace; });

const ResponsiveReduxMasterHOC = makemakeNameSpacedResponsiveReduxMasterHOC(() => { return constants.appNameSpace; });

const ConnectResponsiveStatusesDictHOC = makeNamespacedReduxConnectHocForResponsiveStatusesDict(() => { return constants.appNameSpace; });

const appConnect = nameSpaceConnect(() => { return constants.appNameSpace; });

export {ResponsiveHOC, ResponsiveReduxMasterHOC,ConnectResponsiveStatusesDictHOC,appConnect};

export default {ResponsiveHOC, ResponsiveReduxMasterHOC,ConnectResponsiveStatusesDictHOC,appConnect};
