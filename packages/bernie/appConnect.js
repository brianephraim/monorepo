import { connect } from 'react-redux';
import {appNameSpace} from './constants'

// const normalConnected = connect((state /* , { params }*/) => {
//   return {
//     images: state.bernie.facebookPhotos,
//   };
// })(appConnected);

// const normalConnected = appConnect((appObject /* , { params }*/) => {
//   return {
//     images: appObject.facebookPhotos,
//   };
// })(appConnected);

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
