// this is for route whatever.com/apollostarter

import React from 'react';
import TodaApollo from './TodaApollo';
import ApolloProviderPrepared from './ApolloProviderPrepared';

export default () => (
	<ApolloProviderPrepared>
		<TodaApollo />
	</ApolloProviderPrepared>
);
