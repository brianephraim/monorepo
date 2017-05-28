import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import DragAndTossable from 'DragAndTossable';
import styled from 'styled-components';

const Ball = styled(DragAndTossable)`
  width: 100px;
  height: 100px;
  background: red;
`;


class ToDoItem extends Component {
  constructor() {
    super();
    this.state = {
      extreme: false,
    };
  }
  render() {
    const { onClick, completed, text, assignedUser } = this.props;
    return (
      <div className="a">
        <div className="b">
          <Ball
            maybeResetAtEnd={(data) => {
              // stimulate({
              //   from: 5,
              //   to: 100,
              //   duration: 1000,
              //   frame: function(progress){
              //     console.log(progress.tweened)
              //   }
              // });
              return data.delta.x < 200;
            }}
            onDraggy={(data) => {
              if (data.delta.x > 200) {
                this.setState({
                  extreme: true,
                });
              } else {
                this.setState({
                  extreme: false,
                });
              }
            }}
          >
            <div> ||||||| </div>
          </Ball>
          <div
            onClick={onClick}
            style={{
              textDecoration: completed ? 'line-through' : 'none',
            }}
          >
            {text} - {assignedUser && assignedUser.name} {this.state.extreme ? '!' : ''}
          </div>
        </div>
      </div>
    );
  }
}

ToDoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  assignedUser: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  return {
    assignedUser: state.users.idDict[props.assignedUserId],
  };
};

ToDoItem = withRouter(connect(mapStateToProps)(ToDoItem));

export default ToDoItem;
