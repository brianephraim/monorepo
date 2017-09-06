import {makeNameSpacedResponsiveHOC, makemakeNameSpacedResponsiveReduxMasterHOC} from '@defualt/responsive/nameSpaceResponsive';
import constants from './constants';
import {makeNamespacedReduxConnectHocForResponsiveStatusesDict} from '@defualt/responsive/responsiveRedux';
import nameSpaceConnect from '@defualt/name-space-connect';

const ConnectResponsiveStatusesDictHOC = makeNamespacedReduxConnectHocForResponsiveStatusesDict(constants.appNameSpace);

const ResponsiveHOC = makeNameSpacedResponsiveHOC(constants.appNameSpace);
const ResponsiveReduxMasterHOC = makemakeNameSpacedResponsiveReduxMasterHOC(constants.appNameSpace);

const appConnect = nameSpaceConnect(constants.appNameSpace);



export {ResponsiveHOC, ResponsiveReduxMasterHOC,ConnectResponsiveStatusesDictHOC,appConnect};


export default {ResponsiveHOC, ResponsiveReduxMasterHOC,ConnectResponsiveStatusesDictHOC,appConnect};