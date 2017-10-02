import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { appConnect } from './nameSpacedResponsive';
import { formUrl } from './deriveUrlInfo';


function HtmlHeadInjection(props) {
  const constants = props.constants;
  const compositeImageUrl = props.compositeImageUrl;
  let metaOgUrl = `${props.serverClientOrigin}${props.constants.urlAppNameSpace}/${formUrl(props.compositeImageData)}`;
  if (`${props.serverClientOrigin}${props.constants.urlAppNameSpace}` === `${props.serverClientUrl}`) {
    metaOgUrl = props.serverClientUrl;
  }

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
      <title>{constants.headTitle}</title>
      <meta name="description" content={constants.headDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <link href={`https://fonts.googleapis.com/css?family=${constants.googleFonts}`} rel='stylesheet' type='text/css' />

      <meta property="og:title" content={constants.headMetaOgTitle} />
      <meta property="og:site_name" content={constants.headMetaOgSiteName} />
      <meta property="og:url" content={metaOgUrl} />
      <meta property="og:description" content={constants.headMetaOgDescription} />
      <meta property="fb:app_id" content={constants.headMetaFbAppId} />
      <meta property="og:type" content={constants.headMetaOgType} />
      <meta property="og:locale" content={constants.headMetaOgLocale} />
      <meta property="og:image" content={compositeImageUrl} />
      <meta property="og:image:width" content={constants.headMetaOgImageWidth} />
      <meta property="og:image:height" content={constants.headMetaOgImageHeight} />

      <meta name="twitter:card" content={constants.headMetaTwitterCard} />
      <meta name="twitter:site" content={constants.headMetaTwitterSite} />
      <meta name="twitter:creator" content={constants.headMetaTwitterCreator} />
      <meta name="twitter:title" content={constants.headMetaTwitterTitle} />
      <meta name="twitter:description" content={constants.headMetaTwitterDescription} />
      <meta name="twitter:image" content={props.compositeImageUrl} />
    </Helmet>
  );
};
HtmlHeadInjection.propTypes = {
  constants: PropTypes.object.isRequired,
  compositeImageData: PropTypes.object.isRequired,
  compositeImageUrl: PropTypes.string.isRequired,
  serverClientOrigin: PropTypes.string.isRequired,
  serverClientUrl: PropTypes.string.isRequired,
};
HtmlHeadInjection.defaultProps = {
  serverClientOrigin: '',
  serverClientUrl: '',
};
export default connect(
  (state) => {
    return {
      serverClientUrl: state.serverClientUrl,
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
)(HtmlHeadInjection));

