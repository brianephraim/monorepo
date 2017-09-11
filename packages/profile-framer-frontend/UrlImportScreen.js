import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import setBackgroundHoc from './setBackgroundHoc';

const StyledButtonWrap = styled.div`
  padding-left: ${styleConstants.appPad}em;
  padding-right: ${styleConstants.appPad}em;
`;
const StyledButton = styled.button`${styleConstants.mixins.button()};`;
const StyledButtonInner = styled.span`
  ${styleConstants.mixins.buttonInner()} background: ${styleConstants.colors
      .red};
`;

const StyledInputContainer = styled.div`padding: ${styleConstants.appPad}em;`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: ${styleConstants.appPad / 2}em;
  font-size: ${styleConstants.appPad * 2}em;
  margin-bottom: ${styleConstants.appPad}em;
`;

class UrlImportScreen extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.inputRef = this.inputRef.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    this.props.setBackground({ src: this.input.value });
    this.input.value = '';
  }
  inputRef(node) {
    this.input = node;
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <StyledInputContainer className="inputContainer">
          <StyledInput
            className="textInput urlInput"
            innerRef={this.inputRef}
          />
        </StyledInputContainer>
        <StyledButtonWrap>
          <StyledButton
            className="button mainButton urlUploadizerDone"
            type="submit"
          >
            <StyledButtonInner>Done</StyledButtonInner>
          </StyledButton>
        </StyledButtonWrap>
      </form>
    );
  }
}
UrlImportScreen.propTypes = {
  setBackground: PropTypes.func.isRequired,
};

export default setBackgroundHoc(UrlImportScreen);
