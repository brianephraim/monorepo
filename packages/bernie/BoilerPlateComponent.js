import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';

const StyledButton = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.button()} position:absolute;
  right: 0;
  width: ${styleConstants.appPad * 3}em;
`);
const StyledButtonInnerSpan = ConnectResponsiveStatusesDictHOC(styled.span`
  ${styleConstants.mixins.buttonInner()} background: ${styleConstants.colors
      .red};
  width: ${styleConstants.appPad * 3}em;
`);

class Asdf extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
Asdf.propTypes = {
  children: PropTypes.node.isRequired,
};

function Qwer(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
