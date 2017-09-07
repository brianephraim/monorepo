import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import CloseButton from './CloseButton';

const StyledWrap = styled.div`
  color: black;
  position: absolute;
  top: 0;
  background: red;
  height: 100%;
  width: 100%;
  z-index: 3;
`;

const StyledH2 = styled.h2`
  padding: ${styleConstants.appPad * 0.5}em ${styleConstants.appPad * 1.5}em;
  text-align: center;
  font-size: ${styleConstants.appPad * 2}em;
`;

const StyledButtonInnerSpan = styled.span`
  ${styleConstants.mixins.buttonInner()} background: ${styleConstants.colors
      .red};
  width: ${styleConstants.appPad * 3}em;
  ${styleConstants.mixins.button()} position:absolute;
  right: 0;
  width: ${styleConstants.appPad * 3}em;
`;

export default function ModalScreen(props) {
  return (
    <StyledWrap>
      {props.hasCloseButton && <CloseButton />}
      {props.headerText &&
        <StyledH2>
          {props.headerText}
        </StyledH2>}
      {props.children}
    </StyledWrap>
  );
}
