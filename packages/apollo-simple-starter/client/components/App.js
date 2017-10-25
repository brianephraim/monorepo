import React from 'react';
// Import Apollo Client deps
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';

import TodaApollo from './TodaApollo';

const networkInterface = createNetworkInterface({
	uri: '/graphql',
	opts: {
    credentials: 'same-origin',
  },
});

const client = new ApolloClient({
	dataIdFromObject: result => result.id || null,
	networkInterface
});

export default () => (
	<ApolloProvider client={client}>
		<TodaApollo />
	</ApolloProvider>
);
