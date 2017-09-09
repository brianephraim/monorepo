import { connect } from 'react-redux';

// monkey patch of connect
// namespacing
// every dispatched action gets an `appNameSpace` property.
// every mapStateToProps's state argument is crawled on level to the app name space
// so instead of `state` being passed, `state[appNameSpace]` is passed.
// can be used compositionally along with vanilla `connect`
// so `MyComponent = connect(a1,b1)(appConnect(a2,b2)(MyComponent))`
export default function nameSpaceConnect(appNameSpace) {
  function appConnect (mapStateToProps,mapDispatchToProps,mergeProps,...args){
    console.log('mapDispatchToProps',mapDispatchToProps);
    const mapDispatchToPropsToPass = !mapDispatchToProps ? mapDispatchToProps : Object.keys(mapDispatchToProps).reduce((accum,key) => {
      console.log('x');
      const oldMakeSomeAction = mapDispatchToProps[key];
      const newMakeSomeAction = (...args0) => {
        console.log(args0);
        const oldSomeAction = oldMakeSomeAction(...args0);
        if (typeof oldSomeAction === 'function'){
          return (dispatch,getState,...args2) => {
            console.log('getState()',getState())
            console.log('args2',args2);
            const newDispatch = (action,...args3) => {
              appNameSpace = typeof appNameSpace === 'function' ? appNameSpace() : appNameSpace;
              const newAction = {
                ...action,
                appNameSpace,
              };
              dispatch(newAction,...args3);
            };
            return oldSomeAction(newDispatch, getState, ...args2)
          };
        }
        return oldSomeAction;
      };
      accum[key] = newMakeSomeAction;
      return accum;
    },{});

    const mapStateToPropsToPass = !mapStateToProps ? mapStateToProps : (state, props, ...args) => {
      appNameSpace = typeof appNameSpace === 'function' ? appNameSpace(props) : appNameSpace;
      return mapStateToProps(state[appNameSpace], ...args);
    };

    const mergePropsToPass = (stateProps, dispatchProps, ownProps) => {
      let newDispatchProps = dispatchProps;
      if (dispatchProps) {
        newDispatchProps = Object.keys(dispatchProps).reduce((accum,key) => {
          accum[key] = (...args) => {
            return dispatchProps[key](...args,ownProps);
          }
          return accum;
        }, {});
      }
      if (mergeProps) {
        return  mergeProps(stateProps, newDispatchProps, ownProps);
      }
      return Object.assign({}, ownProps, stateProps, newDispatchProps);

      // const newDispatchProps = {
      //   ...dispatchProps,
      //   setBackground: (...args) => {
      //     originalSetBackground(...args, ownProps.constants);
      //   },
      // }

    };
    return connect(mapStateToPropsToPass, mapDispatchToPropsToPass, mergePropsToPass, ...args);
  }
  return appConnect;
}
