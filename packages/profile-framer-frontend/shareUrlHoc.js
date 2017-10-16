/* eslint-disable import/no-mutable-exports */
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {appConnect} from './nameSpacedResponsive';
import { formUrl } from './deriveUrlInfo';


function ensureTrailingSlash(str) {
  return str.replace(/\/?$/, '/');
}

function shareUrlHoc(CompToEnhance) {
  function Comp(props){
    let metaOgUrl = `${props.serverClientOrigin}${props.constants.urlAppNameSpace}/${formUrl(props.compositeImageData)}`;
    if (ensureTrailingSlash(`${props.serverClientOrigin}${props.constants.urlAppNameSpace}`) === ensureTrailingSlash(`${props.serverClientUrl}`)) {
      metaOgUrl = ensureTrailingSlash(props.serverClientUrl);
    }
    const shareUrl = `${props.serverClientOrigin}${props.constants.urlAppNameSpace}/${formUrl(props.compositeImageData)}`;
    return (
      <CompToEnhance {...props} shareUrl={shareUrl} metaOgUrl={metaOgUrl} />
    );
  }
  Comp.propTypes = {
    serverClientOrigin: PropTypes.string.isRequired,
    constants: PropTypes.object.isRequired,
    compositeImageData: PropTypes.object.isRequired,
    serverClientUrl: PropTypes.string.isRequired,
  };
  return connect(
    (state) => {
      return {
        serverClientOrigin: state.serverClientOrigin,
        serverClientUrl: state.serverClientUrl,
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


/*
    function ensureTrailingSlash(str) {
      return str.replace(/\/?$/, '/');
    }

    function HtmlHeadInjection(props) {
      const constants = this.props.constants;
      const compositeImageUrl = props.compositeImageUrl;
      let metaOgUrl = `${props.serverClientOrigin}${props.constants.urlAppNameSpace}/${formUrl(props.compositeImageData)}`;
      if (ensureTrailingSlash(`${props.serverClientOrigin}${props.constants.urlAppNameSpace}`) === ensureTrailingSlash(`${props.serverClientUrl}`)) {
        metaOgUrl = ensureTrailingSlash(props.serverClientUrl);
      }
*/