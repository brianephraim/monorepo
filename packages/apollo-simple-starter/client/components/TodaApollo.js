import React, {Component} from 'react';
import { gql, graphql, compose } from 'react-apollo';

import Form from './Form';
import List from './List';

function makeThing() {
  const todaApolloListQuery = gql`
    query todaApollos {
      todaApollos {
        id
        text
      }
    }
  `;

  // const gqlActions = {
  //   todaApolloListQuery: {
  //     gql: `
  //       query todaApollos {
  //         todaApollos {
  //           id
  //           text
  //         }
  //       }
  //     `
  //   }
  // };
  // gqlActions.todaApolloListQuery.gql

  class TodaApollo extends Component {
    constructor(){
      super()
      this.removeTodaApollo = this.removeTodaApollo.bind(this);
      this.addTodaApollo = this.addTodaApollo.bind(this);
    }
  	removeTodaApollo(todaApollo) {
  		return this.props.removeTodaApolloMutation({
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
  	}

  	addTodaApollo(text){
  		return this.props.addTodaApolloMutation({
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
  	}
    render() {
    	return (
        <div className="todaApollo">
          <Form onSubmit={this.addTodaApollo} />
          <List data={this.props.todaApolloListQuery.todaApollos} loading={this.props.todaApolloListQuery.loading} onClick={this.removeTodaApollo} />
        </div>
      );
    }
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

  return compose(
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
}

export default makeThing();
// export default graphql(removeTodaApolloMutation)(TodaApollo);
