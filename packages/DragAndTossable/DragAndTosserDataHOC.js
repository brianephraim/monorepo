import React, { Component } from 'react';
import DraggerDataHOC from './DraggerDataHOC';
import TosserDataHOC from './TosserDataHOC';
import PropTypes from 'prop-types';  
const DragAndTosserDataHOC = (ComponentToWrap) => {
  class DragAndTosserData extends Component { 
    render() {
      return (
        <ComponentToWrap
          {...this.props}
        >{this.props.children}
        </ComponentToWrap>
      );
    }
  }
  DragAndTosserData.propTypes = {
    children: PropTypes.object,
  };
  return DraggerDataHOC(TosserDataHOC(DragAndTosserData));
};

export default DragAndTosserDataHOC;
