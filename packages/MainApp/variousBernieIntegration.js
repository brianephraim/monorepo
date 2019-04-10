import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import React from 'react';
import integrateBernie from 'profile-framer-frontend/setup'
import makeStandardConstants from 'profile-framer-frontend/makeStandardConstants';
import RouteLinksList from './RouteLinksList';
import './reset.css';


// let actionTypeToComponentDict = {};

const routeDataAndActionTypeToComponentDict = [
  integrateBernie(makeStandardConstants('bernie',true)),
  integrateBernie(makeStandardConstants('boomer')),
  integrateBernie(makeStandardConstants('behemoth')),
  {
    routesMap:{
      ROUTELINKLIST: '/routes'
    },
    routeRootComponent: RouteLinksList,
  },
].reduce((accum, {routesMap,routeRootComponent,reducers}) => {
  if (routesMap && routeRootComponent) {
    const newRoutesActionTypeToComponentDict = Object.keys(routesMap).reduce((accum1,routeKey) => {
      accum1[routeKey] = routeRootComponent;
      return accum1;
    },{});
    accum.actionTypeToComponentDict = {...accum.actionTypeToComponentDict, ...newRoutesActionTypeToComponentDict};
  }
  accum.routeData.routesMap = {...accum.routeData.routesMap,...routesMap};
  accum.routeData.reducers = {...accum.routeData.reducers,...reducers};
  return accum;
},{
  routeData: {
    routesMap: {},
    reducers: {}
  },
  actionTypeToComponentDict: {}
});

const {routeData, actionTypeToComponentDict} = routeDataAndActionTypeToComponentDict


function RootComponent (props){
  const Comp = actionTypeToComponentDict[props.nameOfScreenComponent] || actionTypeToComponentDict.FALLBACK_ROUTE;
  return (<Comp />);
}
RootComponent.propTypes = {
  nameOfScreenComponent: PropTypes.string.isRequired,
};
routeData.routeRootComponent = connect(
  (state) => {
    return {
      nameOfScreenComponent: state.location.type,
    };
  }
)(RootComponent);

export default routeData.routeRootComponent;
export {routeData};