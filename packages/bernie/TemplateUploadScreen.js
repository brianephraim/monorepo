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

export default function TemplateUploadScreen() {
  return (
    <div className="modal designModal">
      <CloseButton />
      <div className="textContainer">
        <h2>Upload a template</h2>
        <p>Upload an image with the following specs.  Then you and other users can use it as a template to enhance selfies!</p>
        <p>Your template image must be:</p>
        <ul>
          <li>a .png or .jpg file</li>
          <li>a square (width and height are equal)</li>
          <li>smaller than 5mb</li>
        </ul>
        <p>TIP: Make your template a .png file with transparent areas so users can combine their photos with your template.</p>
      </div>
      <div className="inputContainer">
        <div className="button mainButton templateUploadizer">
          <span>Upload a template</span>
        </div>
      </div>
    </div>
  );
}