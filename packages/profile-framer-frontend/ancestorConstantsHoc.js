import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ancestorConstantsHoc(Comp) {
  function HasContextConstantsAsProps(props, context) {
    const constants = context.constants;
    const propsIncludingConstants = {
      ...props,
      constants,
    };
    return <Comp {...propsIncludingConstants} />;
  }
  HasContextConstantsAsProps.contextTypes = {
    constants: PropTypes.object,
  };
  return HasContextConstantsAsProps;
}

export function setAncestorConstantsHoc(Comp, constantsInjection) {
  class ConstantsAncestorSetter extends Component {
    getChildContext() {
      return {
        constants: constantsInjection,
      };
    }
    render() {
      console.log(this.props);
      return <Comp />;
    }
  }
  ConstantsAncestorSetter.propTypes = {};
  ConstantsAncestorSetter.childContextTypes = {
    constants: PropTypes.object,
  };
  return ConstantsAncestorSetter;
}
