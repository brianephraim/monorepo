import React, {Component} from 'react';
import { gql, graphql } from 'react-apollo';
import { todaApolloListQuery } from './TodaApolloList';

class TodaApolloForm extends Component {
	constructor(props) {
		super(props);

		this.onTodaApolloInput = this.onTodaApolloInput.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = { text: '' };
	}

	onFormSubmit(e) {
		e.preventDefault();

		// Update DB
		this.props
			.mutate({
				variables: {
					text: this.state.text
				},
				optimisticResponse: {
					addTodaApollo: {
						__typename: 'TodaApollo',
						id: Math.random(),
						text: this.state.text
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
			.then(res => {
				this.setState({ text: '' });
			});
	}

	onTodaApolloInput(e) {
		e.preventDefault();

		this.setState({ text: e.target.value });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" value={this.state.text} onInput={this.onTodaApolloInput} />
				<button> Submit </button>
			</form>
		);
	}
}

const addTodaApolloMutation = gql`
	mutation addTodaApollo($text: String!) {
		addTodaApollo(text: $text) {
			id
			text
		}
	}
`;

export default graphql(addTodaApolloMutation)(TodaApolloForm);
