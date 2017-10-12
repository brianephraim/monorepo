import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import React from 'react';
import integrateBernie from 'profile-framer-frontend/setup'
import makeStandardConstants from 'profile-framer-frontend/makeStandardConstants';
import RouteLinksList from './RouteLinksList';
import './reset.css';


let actionTypeToComponentDict = {};

const routeData = [
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
    actionTypeToComponentDict = {...actionTypeToComponentDict, ...newRoutesActionTypeToComponentDict};
  }

  accum.routesMap = {...accum.routesMap,...routesMap};
  accum.reducers = {...accum.reducers,...reducers};
  return accum;
},{});


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

routeData.routesMap = {
  ...routeData.routesMap,
  TODOS: '/todos/:filter',
  BATTLESHIP: '/battleship',
};

routeData.pageMap = {
  ...(Object.keys(routeData.routesMap).reduce((accum, key) => {
    accum[key] = 'MainApp';
    return accum;
  },{})),
  BATTLESHIP: 'Battleship',
  TODOS: 'Todos',
};

export default routeData;
