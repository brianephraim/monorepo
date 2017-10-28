import React, {Component} from 'react';
import integrateApollo from './integrateApollo';

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


function ToduApollo(props) {
  const email = props.userQuery && props.userQuery.user && props.userQuery.user.email;
  const userTemplates = props.userTemplatesQuery.userTemplates;
  console.log('userTemplates',userTemplates);
  return (
    <div className="toduApollo">
      <p>email: {email}</p>
      <Form onSubmit={props.addToduApolloMutation} />
      <List data={props.toduApolloListQuery.toduApollos} loading={props.toduApolloListQuery.loading} onClick={props.removeToduApolloMutation} />
    </div>
  );
}

export default integrateApollo(ToduApollo);
// export default graphql(removeToduApolloMutation)(ToduApollo);
