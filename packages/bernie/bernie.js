import React from 'react';
import { ResponsiveReduxMasterHOC } from '@defualt/responsive/responsiveRedux';
import Routing from './Routing';
import './app.scss';

const ResponsiveMaster = ResponsiveReduxMasterHOC(Routing, 'bernie');

function Bernie() {
  return (
    <ResponsiveMaster />
  );
}

export default Bernie;
