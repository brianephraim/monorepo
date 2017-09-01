/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { ResponsiveMasterHOC } from '@defualt/responsive';
import { connect } from 'react-redux';
import Routing from './Routing';
import './app.scss';

let MyResponsiveMaster = class extends Component {
  // componentWillReceiveProps(nextProps){
  //   nextProps.doThing(nextProps.activeStatusesDict);

  // }
  render() {
    return (
      <div className={this.props.className}>
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
    doThing: responsiveStatusesDict => {
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
      {/*
        The wrapping element below exists because its el had a class of 'bodyInner'
        and this was affected by:
        `var modalManager = bs.setupNewModalManager($('.bodyInner'));``
        This is a refactor remnant and we should consider removing.
      */}
      <div className="homeScreen">
        <Routing {...props} />
      </div>
    </ResponsiveMaster>
  );
}

export default Bernie;
