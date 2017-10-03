import React from 'react';
import PropTypes from 'prop-types';
import { appConnect } from './nameSpacedResponsive';
import {
  HomeLayoutWithUploadCallback,
} from './routingComponents';
import WeakHider from './WeakHider';
import HtmlHeadInjection from './HtmlHeadInjection';
import LoadingScreen from './LoadingScreen';

function AppScreens (props) {
  const isLoading = !!props.loading.length;
  const hideHome = isLoading || props.activeAppScreen !== 'HOME_PROFILE_FRAMER';
  return (
    <div>
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
    </div>
  );
}

AppScreens.propTypes = {
  loading: PropTypes.string.isRequired,
  activeAppScreen: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default appConnect(
  (appState) => {
    return {
      activeAppScreen: appState.activeAppScreen,
      loading: appState.loading,
    };
  },
)(AppScreens);
