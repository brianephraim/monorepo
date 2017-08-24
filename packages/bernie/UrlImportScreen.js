import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton';

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

const StyledH2 = ConnectResponsiveStatusesDictHOC(styled.h2`
  padding: ${styleConstants.appPad * 0.5}em ${styleConstants.appPad * 1.5}em;
  text-align: center;
  font-size: ${styleConstants.appPad * 2}em;
`);

export default function UrlImportScreen() {
  return (
    <div className="modal designModal">
      <CloseButton />
      <StyledH2>Enter the URL to an Image</StyledH2>
      <StyledInputContainer className="inputContainer">
        <StyledInput className="textInput urlInput" />
      </StyledInputContainer>
      <StyledButtonWrap>
        <StyledButton className="button mainButton urlUploadizerDone">
          <StyledButtonInner>Done</StyledButtonInner>
        </StyledButton>
      </StyledButtonWrap>
    </div>
  );
}