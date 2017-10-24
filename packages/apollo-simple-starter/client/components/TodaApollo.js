import React from 'react';
import { gql, graphql } from 'react-apollo';

import TodaApolloForm from './TodaApolloForm';
import TodaApolloList from './TodaApolloList';

import { todaApolloListQuery } from './TodaApolloList';

const TodaApollo = ({ mutate }) => {
	const removeTodaApollo = todaApollo => {
		// Update DB
		mutate({
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

	return (
		<div className="todaApollo">
			<TodaApolloForm />
			<TodaApolloList removeTodaApollo={removeTodaApollo} />
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

export default graphql(removeTodaApolloMutation)(TodaApollo);
