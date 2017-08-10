/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  ResponsiveMaster,
} from '@defualt/responsive';
import Routing from './Routing'
import './app.scss';

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

export default Bernie
