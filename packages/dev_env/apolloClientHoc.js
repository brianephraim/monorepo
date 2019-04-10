import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';

function apolloClientHoc(gqlActions, parseWithProps = () => null) {

  return (Comp) => {
    class Wrapper extends Component {
      constructor(props){
        super();
        
        this.methods = Object.keys(props.gqlActions).reduce((accum,actionKey) => {
          const gqlAction = props.gqlActions[actionKey];
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

    class Composer extends Component {
      constructor(props){
        super();
        this.gqlActions = parseWithProps(props) || gqlActions;
        
        this.composed = compose(
          ...(Object.keys(gqlActions).reduce((accum,actionKey) => {
            const gqlAction = gqlActions[actionKey];
            accum.push(graphql(gqlAction.gql, {
              name: actionKey,
              options: gqlAction.options,
            }))
            return accum;
          },[]))
        )
      }

      render() {
        const Composed = this.composed(Wrapper)
        return (
          <Composed {...this.props} gqlActions={this.gqlActions} />
        );
      }
    };

    return Composer;
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