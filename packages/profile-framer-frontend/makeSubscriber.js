import { appSubscribeConnect } from './nameSpacedResponsive';

export default function makeSubscriber(map) {
  return appSubscribeConnect(Object.keys(map).reduce((accum,key) => {
    const item = map[key];
    accum[key] = ({constants}) => {
      return (dispatch, getState, {client,injectReducers}) => {
        injectReducers(`${constants.appNameSpace}.${key}`,(state = {},action) => {
          if (action.type === `${constants.appNameSpace}.${key}`) {
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
              payload: response.data,
            });
          },
        });

        return subscription;
      }
    }
    return accum;
  },{}));
}