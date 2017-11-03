import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';

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

export default client;