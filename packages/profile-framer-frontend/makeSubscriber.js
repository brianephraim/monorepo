// import React, {Component} from 'react';
import { appSubscribeConnect,appConnect } from './nameSpacedResponsive';

// Not sure why, but in order for componet to have default reducer value after injectReducers,
// mapStateToProps needs a separate connect from mapDispatchToProps.
const mapToBasicMapStateToPropsConnect = (map) => {
  const connectToUse = appConnect;
  const mapStateToProps = (state) => {
    const a =  Object.keys(map).reduce((accum, key) => {
      accum[key] = state[key];
      return accum;
    },{});
    return a;
  };
  const connected = connectToUse(
    mapStateToProps,
  );
  return connected;
  // return (Comp) => {
  //   class Wrapper extends Component {
  //     render() {
  //       return <Comp {...this.props} />
  //     }
  //   }
  //   return connected(Wrapper);
  // };
}

function appApolloSubscribeConnect(map) {
  return appSubscribeConnect(Object.keys(map).reduce((accum,key) => {
    const item = map[key];
    accum[key] = ({constants}) => {
      return (dispatch, getState, {client,injectReducers}) => {
        const defaultState = typeof item.defaultState !== 'undefined' ? item.defaultState : {};
        injectReducers(`${constants.appNameSpace}.${key}`,(state = defaultState,action) => {
          if (action.type === `${constants.appNameSpace}.${key}`) {
            if (item.parse) {
              return item.parse(action.payload);
            }
            return action.payload
          }
          return state;
        });
        const observableQuery =client.watchQuery({
          query: item.gql,
        });
        const subscription = observableQuery.subscribe({
          next: (response) => {
            dispatch({
              type: `${constants.appNameSpace}.${key}`,
              payload:response.data,
            });
          },
        });

        return subscription;
      }
    };

    return accum;
  },{}),{onlyMapDispatchToProps:true});
}

function makeSubscriber (map) {
  return (Comp) => {
    const basicMapStateToPropsConnected = mapToBasicMapStateToPropsConnect(map)(Comp);
    const y = appApolloSubscribeConnect(map)(basicMapStateToPropsConnected);
    return y;
  };
}

export default makeSubscriber;
