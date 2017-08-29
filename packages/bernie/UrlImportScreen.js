import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalScreen from './ModalScreen';

import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';

const StyledButtonWrap = ConnectResponsiveStatusesDictHOC(styled.div`
  padding-left: ${styleConstants.appPad}em;
  padding-right: ${styleConstants.appPad}em;
`);
const StyledButton = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.button()}
`);
const StyledButtonInner = ConnectResponsiveStatusesDictHOC(styled.span`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.red};
`);

const StyledInputContainer = ConnectResponsiveStatusesDictHOC(styled.div`
  padding: ${styleConstants.appPad}em;
`);

const StyledInput = ConnectResponsiveStatusesDictHOC(styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: ${styleConstants.appPad / 2}em;
  font-size: ${styleConstants.appPad * 2}em;
  margin-bottom: ${styleConstants.appPad}em;
`);

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