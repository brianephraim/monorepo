import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import CloseButton from './CloseButton';

const StyledWrap = styled.div`
  color: black;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  background: ${styleConstants.colors.white};
`;

const StyledH2 = styled.h2`
  padding: ${styleConstants.appPad * 0.5}em ${styleConstants.appPad * 1.5}em;
  text-align: center;
  font-size: ${styleConstants.appPad * 2}em;
`;

export default function ModalScreen(props) {
  return (
    <StyledWrap>
      {props.hasCloseButton && <CloseButton />}
      {props.headerContent && props.headerContent}
      {props.headerText &&
        <StyledH2>
          {props.headerText}
        </StyledH2>}
      {props.children}
    </StyledWrap>
  );
}
ModalScreen.propTypes = {
  hasCloseButton: PropTypes.bool,
  children: PropTypes.node,
  headerText: PropTypes.string,
  headerContent: PropTypes.node,
};
ModalScreen.defaultProps = {
  hasCloseButton: false,
  headerText: '',
  children: null,
  headerContent:null,
};
