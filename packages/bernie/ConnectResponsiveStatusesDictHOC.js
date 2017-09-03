import {appNameSpace} from './constants'
import {makeNamespacedReduxConnectHocForResponsiveStatusesDict} from '@defualt/responsive/responsiveRedux';

export default makeNamespacedReduxConnectHocForResponsiveStatusesDict(appNameSpace);

// import {makeNamespacedReduxConnectHocForResponsiveStatusesDict} from '@defualt/responsive/responsiveRedux';
// const ConnectResponsiveStatusesDictHOC = makeNamespacedReduxConnectHocForResponsiveStatusesDict('bernie');