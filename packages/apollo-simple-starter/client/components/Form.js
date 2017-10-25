import React, {Component} from 'react';

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

export default Form;
