import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton';

import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';

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

const StyledH2 = ConnectResponsiveStatusesDictHOC(styled.h2`
  padding: ${styleConstants.appPad * 0.5}em ${styleConstants.appPad * 1.5}em;
  text-align: center;
  font-size: ${styleConstants.appPad * 2}em;
`);


const StyledTextContainer = ConnectResponsiveStatusesDictHOC(styled.div`
  padding:${styleConstants.appPad}em;
  box-sizing:border-box;
  @media (min-width: 500px){
    width:500px;
    margin:0 auto;
  }
`);

const StyledLi = ConnectResponsiveStatusesDictHOC(styled.li`
  list-style: square;
  list-style-position: inside;
  padding-left:${styleConstants.appPad}em;
  line-height: ${styleConstants.appPad * 1.5}em;
`);
const StyledP = ConnectResponsiveStatusesDictHOC(styled.p`
  line-height: ${styleConstants.appPad * 1.5}em;
  line-height: ${styleConstants.appPad * 1.5}em;
`);


export default function TemplateUploadScreen() {
  return (
    <div className="modal designModal">
      <CloseButton />
      <StyledTextContainer className="textContainer">
        <StyledH2>Upload a template</StyledH2>
        <StyledP>Upload an image with the following specs.  Then you and other users can use it as a template to enhance selfies!</StyledP>
        <StyledP>Your template image must be:</StyledP>
        <ul>
          <StyledLi>a .png or .jpg file</StyledLi>
          <StyledLi>a square (width and height are equal)</StyledLi>
          <StyledLi>smaller than 5mb</StyledLi>
        </ul>
        <StyledP>TIP: Make your template a .png file with transparent areas so users can combine their photos with your template.</StyledP>
      </StyledTextContainer>
      <StyledInputContainer className="inputContainer">
        <StyledButton className="button mainButton templateUploadizer">
          <StyledButtonInner>Upload a template</StyledButtonInner>
        </StyledButton>
      </StyledInputContainer>
    </div>
  );
}