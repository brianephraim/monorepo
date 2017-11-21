import React from 'react';
import PropTypes from 'prop-types';
import { appConnect } from './nameSpacedResponsive';
import styled from 'styled-components';
import { connect } from 'react-redux';
import styleConstants from './style-constants';
import {
  HomeLayoutWithUploadCallback,
} from './routingComponents';
import WeakHider from './WeakHider';
import HtmlHeadInjection from './HtmlHeadInjection';
import LoadingScreen from './LoadingScreen';

const StyledAppEverythingWrap = styled.div`
  font-size:16px;
  color: ${styleConstants.colors.blue};
  font-family: ${styleConstants.font2};
`;

function AppScreens (props) {
  const isLoading = !!props.loading.length/* || !!props.currentlyLoading.length*/;
  const hideHome = isLoading || props.activeAppScreen !== 'HOME_PROFILE_FRAMER';
  return (
    <StyledAppEverythingWrap>
      <HtmlHeadInjection />
      <WeakHider when={hideHome} >
        <HomeLayoutWithUploadCallback />
      </WeakHider>
      <WeakHider when={isLoading} >
        {props.children}
      </WeakHider>
      {isLoading && (
        <LoadingScreen />
      )}
    </StyledAppEverythingWrap>
  );
}

AppScreens.propTypes = {
  loading: PropTypes.string.isRequired,
  activeAppScreen: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default connect((state) => {
  return {
    currentlyLoading: state.currentlyLoading
  }

})(appConnect(
  (appState) => {
    return {
      activeAppScreen: appState.activeAppScreen,
      loading: appState.loading,
    };
  },
)(AppScreens));
