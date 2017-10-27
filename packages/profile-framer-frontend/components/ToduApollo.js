import React from 'react';
import { gql } from 'react-apollo';

import Form from './Form';
import List from './List';
import apolloClientHoc from 'dev_env/apolloClientHoc';

function ToduApollo(props) {
  const email = props.userQuery && props.userQuery.user && props.userQuery.user.email;
  return (
    <div className="toduApollo">
      <p>email: {email}</p>
      <Form onSubmit={props.addToduApolloMutation} />
      <List data={props.toduApolloListQuery.toduApollos} loading={props.toduApolloListQuery.loading} onClick={props.removeToduApolloMutation} />
    </div>
  );
}

const gqlActions = {
  userQuery: {
    gql: gql`
      query user {
        user {
          email
        }
      }
    `
  },
  toduApolloListQuery: {
    gql: gql`
      query toduApollos {
        toduApollos {
          id
          text
        }
      }
    `
  },
  removeToduApolloMutation: {
    gql: gql`
      mutation removeToduApollo($id: ID!) {
        removeToduApollo(id: $id) {
          text
        }
      }
    `,
    configMethod: function configMethod(toduApollo){
      return {
        variables: {
          id: toduApollo.id
        },
        optimisticResponse: {
          removeToduApollo: {
            __typename: 'ToduApollo',
            text: toduApollo.text
          }
        },
        update: (store, { data: { removeToduApollo } }) => {
          console.log('remove')
          // Read the data from our cache for this query
          const data = store.readQuery({ query: gqlActions.toduApolloListQuery.gql });
          // Remove our ToduApollo from the mutation to the end
          data.toduApollos.splice(data.toduApollos.findIndex(obj => obj.id === toduApollo.id), 1);
          // Write our data back to the cache.
          store.writeQuery({ query: gqlActions.toduApolloListQuery.gql, data });
        }
      };
    },
  },
  addToduApolloMutation: {
    gql: gql`
      mutation addToduApollo($text: String!) {
        addToduApollo(text: $text) {
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
          addToduApollo: {
            __typename: 'ToduApollo',
            id: Math.random(),
            text
          }
        },
        update:  (store, { data: { addToduApollo } }) => {
          console.log('add')
          // Read the data from our cache for this query
          const data = store.readQuery({ query: gqlActions.toduApolloListQuery.gql });
          // Add our ToduApollo from the mutation to the end
          data.toduApollos.push(addToduApollo);
          // Write our data back to the cache.
          store.writeQuery({ query: gqlActions.toduApolloListQuery.gql, data });
        }
      };
    },
  },
};

export default apolloClientHoc(ToduApollo, gqlActions);
// export default graphql(removeToduApolloMutation)(ToduApollo);
