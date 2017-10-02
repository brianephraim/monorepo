import React from 'react';
import PropTypes from 'prop-types';

function WeakHider(props) {
  const style = !props.when ? {} : {
    overflow: 'hidden',
    height: 0,
    position: 'relative',
  };
  return (
    <div style={style}>
      {props.children}
    </div>
  );
}
WeakHider.propTypes = {
  when: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
WeakHider.defaultProps = {
  when: false
};
export default WeakHider;
