import { connect } from 'react-redux';
import {appNameSpace} from './constants'

// monkey patch of connect
// namespacing
// every dispatched action gets an `appNameSpace` property.
// every mapStateToProps's state argument is crawled on level to the app name space
// so instead of `state` being passed, `state[appNameSpace]` is passed.
// can be used compositionally along with vanilla `connect`
// so `MyComponent = connect(a1,b1)(appConnect(a2,b2)(MyComponent))`

export default function appConnect (mapStateToProps,mapDispatchToProps,...args){
  const mapDispatchToPropsToPass = !mapDispatchToProps ? mapDispatchToProps : Object.keys(mapDispatchToProps).reduce((accum,key) => {
    const oldMakeSomeAction = mapDispatchToProps[key];
    const newMakeSomeAction = (...args) => {
      const oldSomeAction = oldMakeSomeAction(...args);
      if (typeof oldSomeAction === 'function'){
        return (dispatch,...args2) => {
          const newDispatch = (action,...args3) => {
            const newAction = {
              ...action,
              appNameSpace,
            };
            dispatch(newAction,...args3);
          };
          return oldSomeAction(newDispatch, ...args2)
        };
      }
      return oldSomeAction;
    };
    accum[key] = newMakeSomeAction;
    return accum;
  },{});

  const mapStateToPropsToPass = !mapStateToProps ? mapStateToProps : (state, ...args) => {
    return mapStateToProps(state[appNameSpace], ...args);
  };
  return connect(mapStateToPropsToPass, mapDispatchToPropsToPass, ...args);
}
