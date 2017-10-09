import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import React from 'react';
import integrateBernie from 'profile-framer-frontend/setup'
import makeStandardConstants from 'profile-framer-frontend/makeStandardConstants';
import integrateToDoApp from 'todo_app/mainAppIntegration'
import integrateBattleship from 'battleship/mainAppIntegration'
import RouteLinksList from './RouteLinksList';
import './reset.css';





let actionTypeToComponentDict = {};

function RootComponent (props){
  const Comp = actionTypeToComponentDict[props.nameOfScreenComponent] || actionTypeToComponentDict.FALLBACK_ROUTE;
  return (<Comp />);
}
RootComponent.propTypes = {
  nameOfScreenComponent: PropTypes.string.isRequired,
};
export default connect(
  (state) => {
    return {
      nameOfScreenComponent: state.location.type,
    };
  }
)(RootComponent);

const routeData = [
  integrateBernie(makeStandardConstants('bernie',true)),
  integrateBernie(makeStandardConstants('boomer')),
  integrateBernie(makeStandardConstants('behemoth')),
  integrateToDoApp(),
  integrateBattleship(),
  {
    routesMap:{
      FALLBACK_ROUTE: '/doesnt-matter-bacause-key-is-FALLBACK_ROUTED-which-is-special'
    },
    routeRootComponent: RouteLinksList,
  },
].reduce((accum, {routesMap,routeRootComponent,reducers}) => {
  if (routesMap && routeRootComponent) {
    const newRoutesActionTypeToComponentDict = Object.keys(routesMap).reduce((accum1,routeKey) => {
      accum1[routeKey] = routeRootComponent;
      return accum1;
    },{});
    actionTypeToComponentDict = {...actionTypeToComponentDict, ...newRoutesActionTypeToComponentDict};
  }

  accum.routesMap = {...accum.routesMap,...routesMap};
  accum.allReducers = {...accum.allReducers,...reducers};
  return accum;
},{});

export {routeData};


