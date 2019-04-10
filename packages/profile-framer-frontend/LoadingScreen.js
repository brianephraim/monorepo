import React from 'react';
import PropTypes from 'prop-types';
import { appConnect } from './nameSpacedResponsive';
import styled from 'styled-components';
import styleConstants from './style-constants';

const StyledButtonWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  margin-top:32px;
  padding-top: ${styleConstants.appPad}em;
`;
const StyledButton = styled.button`
  ${styleConstants.mixins.button()};
  button& {
    width: auto;
    margin: 0 auto;
    background: green;
  }
`;
const StyledButtonInner = styled.span`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.red};
  padding: 0 ${styleConstants.appPad}em;
`;
const StyledText = styled.p`
  position: absolute;
  width: 100%;
  bottom: 50%;
  margin-bottom: 32px;
  text-align: center;
  padding: 1em;
  box-sizing: border-box;
`;

const StyledLoadingScreenWrap = styled.div`
  position:fixed;
  top:0;
  left:0;
  z-index:999;
  width: 100%;
  height: 100%;
  background: url("/images/spinner.gif") white no-repeat 50% 50%;
  &:before {
    content: '';
    display:block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: url("/images/literal-fade.png") transparent no-repeat left bottom;
  }
`;

function  LoadingScreen (props) {
  return (
    <StyledLoadingScreenWrap>
      {false && <StyledText>Loading: {props.loading || 'nothing'}</StyledText>}
      <StyledButtonWrap>
        <StyledButton
          className="button mainButton urlUploadizerDone"
          onClick={props.cancelLoading}
        >
          <StyledButtonInner>Cancel</StyledButtonInner>
        </StyledButton>
      </StyledButtonWrap>
    </StyledLoadingScreenWrap>
  );
}
LoadingScreen.propTypes = {
  cancelLoading: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
};
export default appConnect(
  (appState) => {
    return {
      loading: appState.loading,
    };
  },
  {
    cancelLoading: () => {
      return (dispatch) => {
        dispatch({
          type: "STOP_LOADING"
        });
      }
    },
  }
)(LoadingScreen);