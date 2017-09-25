/* eslint-disable import/no-mutable-exports */
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {appConnect} from './nameSpacedResponsive';
import { formUrl } from './deriveUrlInfo';


function shareUrlHoc(CompToEnhance) {
  function Comp(props){
    const shareUrl = `${props.serverClientOrigin}${props.constants.urlAppNameSpace}/${formUrl(props.compositeImageData)}`;
    return (
      <CompToEnhance {...props} shareUrl={shareUrl} />
    );
  }
  Comp.propTypes = {
    serverClientOrigin: PropTypes.string.isRequired,
    constants: PropTypes.object.isRequired,
    compositeImageData: PropTypes.object.isRequired,
  };
  return connect(
    (state) => {
      return {
        serverClientOrigin: state.serverClientOrigin,
      };
    }
  )(appConnect(
    (appState) => {
      return {
        compositeImageData: appState.compositeImageData,
        compositeImageUrl: appState.compositeImageData.compositeImageUrl,
        constants: appState.constants
      };
    }
  )(Comp));
}
export default shareUrlHoc;