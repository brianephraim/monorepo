import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import { payloadRefineAction } from './setup';
import { compositeImageIntoParams } from './compositeImage';
import ancestorConstantsHoc from './ancestorConstantsHoc';

function AppReduxLink(props) {
  let to = props.to;
  if (to.compositeImageData) {
    const payload = compositeImageIntoParams(to.compositeImageData);
    if (to.dynamicScreen) {
      payload.dynamicScreen = to.dynamicScreen;
    }
    to = {
      type: to.type,
      payload,
    };
  }
  return (
    <Link
      className={props.className}
      to={payloadRefineAction(to, props.constants.appNameSpace)}
    >
      {props.children}
    </Link>
  );
}
AppReduxLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  constants: PropTypes.object.isRequired,
};
AppReduxLink.defaultProps = {
  className: '',
  dynamicScreen: '',
};
export default ancestorConstantsHoc(AppReduxLink);
