import { gql } from 'react-apollo';
import {quickSubscriber} from './makeSubscriber';

export default quickSubscriber({
  gql: gql`
    query isAdmin {
      user {
        isAdmin
      }
    }
  `,
  parse: (state = false, payload) => {
    if (payload && payload.user && typeof payload.user.isAdmin !== 'undefined') {
      return payload.user.isAdmin
    }
    return state;
  },
});
