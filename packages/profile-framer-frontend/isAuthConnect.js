import { gql } from 'react-apollo';
import makeSubscriber, {quickSubscriber} from './makeSubscriber';

// export default makeSubscriber({
//   asdfasdf: {
//     determineStateKeyFromGql: true,
//     gql: gql`
//       query isAdmin {
//         user {
//           isAdmin
//         }
//       }
//     `,
//     parse: (state = false, payload) => {
//       if (payload && payload.user && typeof payload.user.isAdmin !== 'undefined') {
//         return payload.user.isAdmin
//       }
//       return state;
//     },
//   }
// });

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

