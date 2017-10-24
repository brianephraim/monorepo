import React from 'react';
// Import Apollo Client deps
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';

import TodaApollo from './TodaApollo';

const networkInterface = createNetworkInterface({ uri: '/graphql' });

const client = new ApolloClient({
	dataIdFromObject: result => result.id || null,
	networkInterface
});

// Import our components


// Wrap our App with ApolloProvider
export default () => (
	<ApolloProvider client={client}>
		<div className="app">
			<TodaApollo />
		</div>
	</ApolloProvider>
);

// export default () => {
// 	return <div>asdfasdf</div>
// }