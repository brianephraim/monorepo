import React from 'react';
import { gql, graphql, compose } from 'react-apollo';

import Form from './Form';
import List from './List';

const todaApolloListQuery = gql`
  query todaApollos {
    todaApollos {
      id
      text
    }
  }
`;

const TodaApollo = (props) => {
	const removeTodaApollo = todaApollo => {
		props.removeTodaApolloMutation({
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
				// Read the data from our cache for this query
				const data = store.readQuery({ query: todaApolloListQuery });
				// Remove our TodaApollo from the mutation to the end
				data.todaApollos.splice(data.todaApollos.findIndex(obj => obj.id === todaApollo.id), 1);
				// Write our data back to the cache.
				store.writeQuery({ query: todaApolloListQuery, data });
			}
		});
	};

	const addTodaApollo = text => {
		return props.addTodaApolloMutation({
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
			update: (store, { data: { addTodaApollo } }) => {
				// Read the data from our cache for this query
				const data = store.readQuery({ query: todaApolloListQuery });
				// Add our TodaApollo from the mutation to the end
				data.todaApollos.push(addTodaApollo);
				// Write our data back to the cache.
				store.writeQuery({ query: todaApolloListQuery, data });
			}
		})
	};

	return (
    <div className="todaApollo">
      <Form onSubmit={addTodaApollo} />
      <List data={props.todaApolloListQuery.todaApollos} loading={props.todaApolloListQuery.loading} onClick={removeTodaApollo} />
    </div>
  );
};


const removeTodaApolloMutation = gql`
	mutation removeTodaApollo($id: ID!) {
		removeTodaApollo(id: $id) {
			text
		}
	}
`;

const addTodaApolloMutation = gql`
	mutation addTodaApollo($text: String!) {
		addTodaApollo(text: $text) {
			id
			text
		}
	}
`;

export default compose(
  graphql(removeTodaApolloMutation, {
    name : 'removeTodaApolloMutation'
  }),
  graphql(addTodaApolloMutation, {
    name: 'addTodaApolloMutation'
  }),
  graphql(todaApolloListQuery, {
    name : 'todaApolloListQuery'
  }),
)(TodaApollo)

// export default graphql(removeTodaApolloMutation)(TodaApollo);
