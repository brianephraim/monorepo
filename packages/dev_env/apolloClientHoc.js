import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';

function apolloClientHoc(gqlActions) {

  

  const composed = compose(
    ...(Object.keys(gqlActions).reduce((accum,actionKey) => {
      const gqlAction = gqlActions[actionKey];
      accum.push(graphql(gqlAction.gql, {
        name: actionKey,
      }))
      return accum;
    },[]))
  )

  return (Comp) => {
    class Wrapper extends Component {
      constructor(){
        super();
        
        this.methods = Object.keys(gqlActions).reduce((accum,actionKey) => {
          const gqlAction = gqlActions[actionKey];
          if (gqlAction.configMethod) {
            const configMethod = gqlAction.configMethod.bind(this)
            accum[actionKey] = (...args) => {
              return this.props[actionKey](configMethod(...args));
            };
          }
          return accum;
        },{})
      }

      render() {
        return (
          <Comp {...this.props} {...this.methods} />
        );
      }
    };

    return composed(Wrapper)
  };
  // return compose(
  //   graphql(gqlActions.removeTodaApolloMutation.gql, {
  //     name : 'removeTodaApolloMutation'
  //   }),
  //   graphql(gqlActions.addTodaApolloMutation.gql, {
  //     name: 'addTodaApolloMutation'
  //   }),
  //   graphql(gqlActions.todaApolloListQuery.gql, {
  //     name : 'todaApolloListQuery'
  //   }),
  // )(Wrapper)
}
export default apolloClientHoc;