import React, {Component} from 'react';
import { connect } from 'react-redux';
import integrateApollo from './integrateApollo';
import { appConnect, appSubscribeConnect } from './nameSpacedResponsive';
import { gql } from 'react-apollo';

class Form extends Component {
  constructor(props) {
    super(props);

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { text: '' };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text).then(res => {
      this.setState({ text: '' });
    });
      
  }

  onInput(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.text} onInput={this.onInput} />
        <button> Submit </button>
      </form>
    );
  }
}

function List({ onClick, data, loading }) {
  return (
    <div>
      {loading &&
        <div>
          LOADING...
        </div>
      }

      {!loading && data.length === 0 &&
        <div> AWE NO RESULTS </div>
      }

      {!loading && data.map(item => (
        <div key={item.id} >
          <button  onClick={() => onClick(item)}>x</button>
          {item.text}
        </div>
      ))}
    </div>
  );
}


class TodrApollo extends Component {
  render() {
    const props = this.props;
    const email = props.loggedUser && props.loggedUser.email;
    const userTemplates = props.userTemplatesQuery.userTemplates;
    return (
      <div className="todrApollo">
        <p>... {props.currentlyLoading && props.currentlyLoading.length}</p>
        <p>email1: {email}</p>
        <Form onSubmit={props.addTodrApolloMutation} />
        <List data={props.todrApollos2} loading={props.todrApolloListQuery.loading} onClick={props.removeTodrApolloMutation} />
      </div>
    );
  }
}




const Connected = connect((state) => {
  return {
    currentlyLoading: state.currentlyLoading.bernie
  }
})(TodrApollo);


const AppConnected = appConnect(
  (appState) => {
    return {
      loggedUser: appState.loggedUser,
      // userQuery: {user:{email:'someemail@emadsf.com'}},
      userTemplatesQuery: {userTemplates: []},
      todrApolloListQuery: {todrApollos:[]},
      todrApollos2: appState.todrApollos
    }
  },
  {
    addTodrApolloMutation: (text) => {
      function generateMutationObject(text) {
        return {
          mutation: gql`
            mutation addToduApollo($text: String!) {
              addToduApollo(text: $text) {
                id
                text
              }
            }
          `,
          variables: {
            text
          },
          refetchQueries:[`toduApollos`]
        };
      }
      return (dispatch, getState, client) => {
        return client.mutate(generateMutationObject(text));
      }
    },
    removeTodrApolloMutation: (toduApollo) => {
      function generateMutationObject(toduApollo) {
        return {
          mutation: gql`
            mutation removeToduApollo($id: ID!) {
              removeToduApollo(id: $id) {
                text
              }
            }
          `,
          variables: {
            id: toduApollo.id
          },
          refetchQueries:[`toduApollos`]
        };
      }
      return (dispatch, getState, client) => {
        return client.mutate(generateMutationObject(toduApollo));
      }
    },
  }
)(
  Connected
);

const SubscribedTodrApollos = appSubscribeConnect({
  todrApollos: () => {
    return (dispatch, getState, client) => {
      const observableQuery =client.watchQuery({
        query: gql`
          query toduApollos {
            toduApollos {
              id
              text
            }
          }
        `,
      });
      const subscription = observableQuery.subscribe({
        next: (response) => {           
          if (
            response &&
            response.data &&
            response.data.toduApollos
          ) {
            dispatch({
              type: 'FETCH_TODR',
              response,
            });
          }
        },
      });

      return subscription;
    }
  }
})(AppConnected);

function makeSubscribedUser(Comp) {
  return appSubscribeConnect({
    // the key `userQuery` below does 2 things
    //  - if there is appState property of `userQuery`, then makes its value available to component as props.userQuery
    //  - registers a subscription identified as `userQuery` in the system.  If subscription already exists, no new subscription created
    //    ( unsubscribe called only when last component subscribing to `userQuery` is destroyed.  )
    userQuery: () => {
      return (dispatch, getState, client) => {
        const observableQuery =client.watchQuery({
          query: gql`
            query user {
              user {
                email
                isAdmin
              }
            }
          `,
        });
        const subscription = observableQuery.subscribe({
          next: (response) => {    
            console.log('response',response);       
            if (
              response &&
              response.data &&
              response.data.user
            ) {
              dispatch({
                type: 'SET_LOGGED_USER',
                user: response.data.user,
              });
            }
          },
        });

        return subscription;
      }
    }
  })(Comp);
}

const SubscribedUser1 = makeSubscribedUser(SubscribedTodrApollos);
const SubscribedUser = makeSubscribedUser(SubscribedUser1);

export default SubscribedUser;
