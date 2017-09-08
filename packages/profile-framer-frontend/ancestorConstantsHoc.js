import React from 'react';
import PropTypes from 'prop-types';

export default function ancestorConstantsHoc (Comp) {
  function HasContextConstantsAsProps (props, context) {
    const constants = context.constants;
    const propsIncludingConstants = {
      ...props,
      constants,
    };
    return <Comp {...propsIncludingConstants} />
  }
  HasContextConstantsAsProps.contextTypes = {
    constants: PropTypes.object,
  };
  return HasContextConstantsAsProps;
}
