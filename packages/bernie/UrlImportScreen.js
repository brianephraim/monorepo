import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalScreen from './ModalScreen';
import styleConstants from './style-constants';

const StyledButtonWrap = styled.div`
  padding-left: ${styleConstants.appPad}em;
  padding-right: ${styleConstants.appPad}em;
`;
const StyledButton = styled.div`
  ${styleConstants.mixins.button()}
`;
const StyledButtonInner = styled.span`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.red};
`;

const StyledInputContainer = styled.div`
  padding: ${styleConstants.appPad}em;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: ${styleConstants.appPad / 2}em;
  font-size: ${styleConstants.appPad * 2}em;
  margin-bottom: ${styleConstants.appPad}em;
`;

export default function UrlImportScreen() {
  return (
    <ModalScreen hasCloseButton headerText="Enter the URL to an Image">
      <StyledInputContainer className="inputContainer">
        <StyledInput className="textInput urlInput" />
      </StyledInputContainer>
      <StyledButtonWrap>
        <StyledButton className="button mainButton urlUploadizerDone">
          <StyledButtonInner>Done</StyledButtonInner>
        </StyledButton>
      </StyledButtonWrap>
    </ModalScreen>
  );
}