import { ResponsiveReduxMasterHOC } from './responsiveRedux';
import ResponsiveHOC from './responsive';

const splitter = '_$#%nameSpacedResponsive%#$_';

export function makeNameSpacedResponsiveHOC(appNameSpace) {
  return (Comp, defaults) => {
    if (!defaults || !defaults.masterName) {
      throw new Error('second argument must be object with a `masterName` property ');
    }
    return ResponsiveHOC(Comp, {
      ...defaults,
      masterName: `${appNameSpace}${splitter}${defaults.masterName}`
    })
  }
}

export function makemakeNameSpacedResponsiveReduxMasterHOC(appNameSpace) {
  return (Comp, masterName) => {
    return ResponsiveReduxMasterHOC(Comp, `${appNameSpace}${splitter}${masterName}`)
  }
}

export function makeNameSpacedResponsiveStatusesDictReducer(appNameSpace,masterName){
  return (state = {}, action) => {
    if (
      action.type === 'UDATE_RESPONSIVE_STATUSES_DICT' &&
      action.name === `${appNameSpace}${splitter}${masterName}`
    ) {
      return { ...action.responsiveStatusesDict };
    }
    return state;
  };
}
