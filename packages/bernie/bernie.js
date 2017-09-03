/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { ResponsiveMasterHOC } from '@defualt/responsive';
import { connect } from 'react-redux';
import Routing from './Routing';
import './app.scss';

let ResponsiveMaster = ResponsiveMasterHOC(Routing);
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

function Bernie() {
  return (
    <ResponsiveMaster name="bernie" />
  );
}

export default Bernie;
