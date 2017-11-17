import { appSubscribeConnect,appConnect } from './nameSpacedResponsive';
import { get } from 'lodash';

// Not sure why, but in order for componet to have default reducer value after injectReducers,
// mapStateToProps needs a separate connect from mapDispatchToProps.  Some sort of race condition.
// Anyhow, this race condition is solved with this technique.
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
}

function parseGql(gql) {
  const dotPaths = {};
  const definitions = gql.definitions
  definitions.forEach((definition) => {
    function recurse(definition, dotPath = '',isInitial=true) {
      if (definition) {
        if (definition.selectionSet) {
          if (definition.selectionSet.selections) {
            if (!isInitial) {
              dotPath = dotPath ? `${dotPath}.` : dotPath;
              dotPath = `${dotPath}${definition.name.value}`;
            }
            definition.selectionSet.selections.forEach((definition2) => {
              recurse(definition2, dotPath,false);
            });
          }
        } else {
          dotPath = dotPath ? `${dotPath}.` : dotPath;
          dotPath = `${dotPath}${definition.name.value}`;
          dotPaths[definition.name.value] = dotPath;
        }
      }
    }
    recurse(definition);
  });
  return {dotPaths};
}

function appApolloSubscribeConnect(map) {
  return appSubscribeConnect(Object.keys(map).reduce((accum,key) => {
    const item = map[key];
    const parsedGql = parseGql(item.gql);
    const dotPaths = parsedGql.dotPaths;

    accum[key] = ({constants}) => {
      return (dispatch, getState, {client,injectReducers}) => {
        const defaultState = typeof item.defaultState !== 'undefined' ? item.defaultState : {};

        // Generic reducer.
        // state is just the apollo payload
        // remember to set a default state
        /* DEMO --------
          defaultState: {
            appNameSpace: 'bernie',
            user: {
              email: 'defaultstate@emial.com'
            }
          },
        */
        let reducer = (state = defaultState,action) => {
          if (action.type === `${constants.appNameSpace}.${key}`) {
            return action.payload
          }
          return state;
        };

        if (item.makeReducer) {
          // optionally define a reducer
          // default state is defined in reducer arguments
          /* DEMO --------
          makeReducer: (actionType) => {
            const defaultState = {
              appNameSpace: 'bernie',
              user: {
                email: 'makereducerdefault@email.ocm'
              }
            };
            return (state = defaultState,action) => {
              if (action.type === actionType) {
                return {
                  appNameSpace: 'bernie',
                  user: {
                    email: `~~${action.payload.user.email}`
                  }
                };
                // return action.payload;
              }
              return state;
            }
          },
          */
          reducer = item.makeReducer(`${constants.appNameSpace}.${key}`);
        } else if (item.parse) {
          // optionally define a reducer with some convenience
          // default state is defined in parse arguments
          /* DEMO --------
          parse: (state = { user: { email: 'parsedefault@email.com'}}, payload) => {
            if (payload && payload.user && payload.user.email) {
              return {
                appNameSpace: 'bernie',
                user: {
                  email: 'parse@email.com'
                }
              }
            }
            return state;
          },
          */
          reducer = (state,action) => {
            if (action.type === `${constants.appNameSpace}.${key}`) {
              return item.parse(state, action.payload);
            }
            return item.parse(state);
          };
        } else if (item.auto) {
          // optionally define a reducer automatically
          // take the leaves of your gql setting
          // use those leaves to extract properties from Apollo payload
          // set state as object with those leave, with those Apollo values.
          // Remember to set a default state.
          /* DEMO ------
            defaultState: {
              email: 'defaultstate@emial.com'
            },
            auto: true,
          */
          reducer = (state = defaultState,action) => {
            if (action.type === `${constants.appNameSpace}.${key}`) {
              return Object.keys(dotPaths).reduce((accum,key) => {
                const dotPath = dotPaths[key];
                accum[key] = get(action.payload,dotPath);
                return accum;
              },{});
            }
            return state;
          };           
        }

        injectReducers(`${constants.appNameSpace}.${key}`,reducer);
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
