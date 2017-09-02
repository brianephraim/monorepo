import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';
import { payloadRefineAction } from './setup';
import { compositeImageIntoParams } from './compositeImage';

function BernieLink(props) {
  let to = props.to;
  if (to.compositeImageData) {
    const payload = compositeImageIntoParams(to.compositeImageData);
    if (to.bernieDynamicScreen) {
      payload.bernieDynamicScreen = to.bernieDynamicScreen;
    }
    to = {
      type: to.type,
      payload,
    };
  }
  return (
    <Link className={props.className} to={payloadRefineAction(to)}>
      {props.children}
    </Link>
  );
}
BernieLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
BernieLink.defaultProps = {
  className: '',
  bernieDynamicScreen: '',
};
export default BernieLink;
