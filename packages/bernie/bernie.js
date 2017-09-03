/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { ResponsiveMasterHOC } from '@defualt/responsive';
import { connect } from 'react-redux';
import Routing from './Routing';
import './app.scss';

let MyResponsiveMaster = class extends Component {
  // componentWillReceiveProps(nextProps){
  //   nextProps.onResponsiveUpdate(nextProps.activeStatusesDict);

  // }
  render() {
    return (
      <div className={this.props.className + ' findme'}>
        {this.props.children}
      </div>
    );
  }
};

let ResponsiveMaster = ResponsiveMasterHOC(MyResponsiveMaster);
ResponsiveMaster = connect(
  () => {
    return {};
  },
  {
    onResponsiveUpdate: responsiveStatusesDict => {
      return {
        name: 'bernie',
        responsiveStatusesDict,
        type: 'UDATE_RESPONSIVE_STATUSES_DICT',
      };
    },
  }
)(ResponsiveMaster);

function Bernie(props) {
  return (
    <ResponsiveMaster name="bernie">
      <Routing {...props} />
    </ResponsiveMaster>
  );
}

export default Bernie;
