import React from 'react';
import { gql } from 'react-apollo';

import Form from './Form';
import List from './List';
import apolloClientHoc from 'dev_env/apolloClientHoc';

function TodaApollo(props) {
  return (
    <div className="todaApollo">
      <Form onSubmit={props.addTodaApolloMutation} />
      <List data={props.todaApolloListQuery.todaApollos} loading={props.todaApolloListQuery.loading} onClick={props.removeTodaApolloMutation} />
    </div>
  );
}

const gqlActions = {
  todaApolloListQuery: {
    gql: gql`
      query todaApollos {
        todaApollos {
          id
          text
        }
      }
    `
  },
  removeTodaApolloMutation: {
    gql: gql`
      mutation removeTodaApollo($id: ID!) {
        removeTodaApollo(id: $id) {
          text
        }
      }
    `,
    configMethod: function configMethod(todaApollo){
      return {
        variables: {
          id: todaApollo.id
        },
        optimisticResponse: {
          removeTodaApollo: {
            __typename: 'TodaApollo',
            text: todaApollo.text
          }
        },
        update: (store, { data: { removeTodaApollo } }) => {
          console.log('remove')
          // Read the data from our cache for this query
          const data = store.readQuery({ query: gqlActions.todaApolloListQuery.gql });
          // Remove our TodaApollo from the mutation to the end
          data.todaApollos.splice(data.todaApollos.findIndex(obj => obj.id === todaApollo.id), 1);
          // Write our data back to the cache.
          store.writeQuery({ query: gqlActions.todaApolloListQuery.gql, data });
        }
      };
    },
  },
  addTodaApolloMutation: {
    gql: gql`
      mutation addTodaApollo($text: String!) {
        addTodaApollo(text: $text) {
          id
          text
        }
      }
    `,
    configMethod: function configMethod(text){
      return {
        variables: {
          text
        },
        optimisticResponse: {
          addTodaApollo: {
            __typename: 'TodaApollo',
            id: Math.random(),
            text
          }
        },
        update:  (store, { data: { addTodaApollo } }) => {
          console.log('add')
          // Read the data from our cache for this query
          const data = store.readQuery({ query: gqlActions.todaApolloListQuery.gql });
          // Add our TodaApollo from the mutation to the end
          data.todaApollos.push(addTodaApollo);
          // Write our data back to the cache.
          store.writeQuery({ query: gqlActions.todaApolloListQuery.gql, data });
        }
      };
    },
  },
};

export default apolloClientHoc(TodaApollo, gqlActions);
// export default graphql(removeTodaApolloMutation)(TodaApollo);
