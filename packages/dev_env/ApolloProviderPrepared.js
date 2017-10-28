import React, {Component} from 'react';
// Import Apollo Client deps
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';


class ApolloProviderPrepared extends Component {
  constructor() {
    super();
    const networkInterface = createNetworkInterface({
      uri: '/graphql',
      opts: {
        credentials: 'same-origin',
      },
    });

    this.client = new ApolloClient({
      dataIdFromObject: result => result.id || null,
      networkInterface
    });
  }
  
  render() {
    window.tt = this.props.store;
    return (
      <ApolloProvider client={this.props.client || this.client} store={this.props.store}>
        {this.props.children}
      </ApolloProvider>
    );
  }
};

export default ApolloProviderPrepared;
