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
      masterName: defaults.masterName,
      appNameSpace,
      splitter,
    })
  }
}

export function makemakeNameSpacedResponsiveReduxMasterHOC(appNameSpace) {
  return (Comp, masterName) => {
    return ResponsiveReduxMasterHOC(Comp, {appNameSpace,splitter,masterName})
  }
}

export function makeNameSpacedResponsiveStatusesDictReducer(appNameSpace){
  return (state = {}, action) => {
    appNameSpace = typeof appNameSpace === 'function' ? appNameSpace() : appNameSpace;
    if (
      action.type === 'UDATE_RESPONSIVE_STATUSES_DICT' &&
      action.name.indexOf(`${appNameSpace}${splitter}`) === 0
    ) {
      const actionNameSplit = action.name.split(splitter);
      const derivedMasterName = actionNameSplit[1];
      if (action.responsiveStatusesDict) {
        const existingProcessingState = state[derivedMasterName] && state[derivedMasterName].isProcessing;
        return {
          ...state,
          [derivedMasterName]: {
            isProcessing: !!existingProcessingState,
            ...action.responsiveStatusesDict
          },
        };
      }
      if (action.isStart || action.isEnd) {
        const existingResponsiveStatusesDict = state[derivedMasterName];
        const alreadyInitialized = existingResponsiveStatusesDict.initialized;
        return {
          ...state,
          [derivedMasterName]: {
            ...existingResponsiveStatusesDict,
            isProcessing: !!action.isStart,
            initialized: alreadyInitialized || action.isEnd,
          },
        };

      }
    }
    return state;
  };
}
