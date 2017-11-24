// Passthrough
import generateGiantSquareDetails from './generateGiantSquareDetails';

export { generateGiantSquareDetails };

// Module deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { makeResponsive, registerResponsiveRefresh } from './responsiveService';
import { connect } from 'react-redux';



const ResponsiveHOC = (ComponentToWrap, defaults) => {
  if (!defaults || !defaults.masterName) {
    throw new Error('second argument must be object with a `masterName` property ');
  }
  class Responsive extends Component {
    constructor() {
      super();
      this.state = {
      };
      this.unregisters = [];
    }
    componentDidMount() {
      const splitter = defaults.splitter || '';
      const appNameSpace = typeof defaults.appNameSpace === 'function' ? defaults.appNameSpace(this.props) : (defaults.appNameSpace || '');
      const masterName = `${appNameSpace}${splitter}${defaults.masterName}`;
      const turns = this.props.turns || defaults.turns;
      turns.forEach((turn) => {
        const instance = makeResponsive(
          masterName, turn.priority, this.el, turn.statusIncrementsRoundUp,
          (updateDetails) => {
            if (updateDetails.style) {
              this.setState({
                style: updateDetails.style,
              });
            }
          },
          turn.magicSquareName
        );
        this.unregisters.push(instance.unregisterResponsiveAssessment);
      });
    }
    componentWillUnmount() {
      this.unregisters.forEach((cb) => {
        cb();
      });
    }
    render() {
      return (
        <ComponentToWrap
          responsiveRef={(el) => { this.el = el; }}
          style={this.state.style}
        >
          {this.props.children}
        </ComponentToWrap>
      );
    }
  }
  Responsive.propTypes = {
    children: PropTypes.array,
    priority: PropTypes.number,
    statusIncrementsRoundUp: PropTypes.object,
    turns: PropTypes.arrayOf(PropTypes.shape({
      priority: PropTypes.number,
      magicSquareName: PropTypes.func,
      statusIncrementsRoundUp: PropTypes.object,
    }).isRequired),
  };
  return Responsive;
};
export default ResponsiveHOC;

/* eslint-disable react/no-multi-comp */
function ResponsiveMasterHOC(Comp, options) {
  
  class ResponsiveMaster extends Component {
    constructor() {
      super();
      // this.initComponentInternalState(props);
    }
    componentWillMount() {
      this.initComponentInternalState(this.props);
    }
    componentDidMount() {
      let {appNameSpace} = options;
      const {splitter,masterName} = options;
      appNameSpace = typeof appNameSpace === 'function' ? appNameSpace(this.props) : appNameSpace;
      const name = `${appNameSpace}${splitter}${masterName}`;
      this.unregisterResponsiveRefresh = registerResponsiveRefresh({
        name,
        updateMasterClasses: (...args) => { return this.updateMasterClasses(...args); },
        nukeActiveStatusRegistryOnMaster: () => {
          this.initComponentInternalState(this.props);
        },
        onStart: () => {
          this.props.onStart();
        },
        onEnd: () => {
          this.props.onEnd();
        },
      });
    }
    componentWillUnmount() {
      this.unregisterResponsiveRefresh();
    }
    initComponentInternalState(props) {
      this.state = {
        activeStatuses: [],
        activeStatusRegistry: {},
        activeStatusesDict: {},
        realClassNameYall: '',
      };
      props.onResponsiveUpdate({});
    }
    updateMasterClasses(idPriority, activeStatusRegistry) {
      const objectComplexUpdate = {
        ...this.state.activeStatusRegistry,
        [idPriority]: activeStatusRegistry,
      };

      const toReturn = {};
      Object.keys(objectComplexUpdate).forEach((priority) => {
        const priorityClassNames = objectComplexUpdate[priority];
        Object.keys(priorityClassNames).forEach((name) => {
          if (priorityClassNames[name]) {
            toReturn[name] = true;
          }
        });
      });

      const realClassNameYall = Object.keys(toReturn).reduce((c, n) => {
        return `${c} responsive_${n}`;
      }, '');
      this.setState({
        realClassNameYall,
        activeStatusRegistry: objectComplexUpdate,
        activeStatuses: Object.keys(toReturn),
        activeStatusesDict: toReturn,
      });
      this.props.onResponsiveUpdate(toReturn);
      return toReturn;
    }
    render() {
      return (<Comp className={`${this.state.realClassNameYall}`} activeStatuses={this.state.activeStatuses} activeStatusesDict={this.state.activeStatusesDict} >{this.props.children}</Comp>);
    }
  }
  ResponsiveMaster.propTypes = {
    children: PropTypes.node,
    onResponsiveUpdate: PropTypes.func,
    onStart: PropTypes.func,
    onEnd: PropTypes.func,
  };
  ResponsiveMaster.defaultProps = {
    onResponsiveUpdate: () => {},
    children: null,
    onStart: () => { },
    onEnd: () => { },
  };
  return ResponsiveMaster
  // return ResponsiveMaster;
}

export { ResponsiveMasterHOC };
