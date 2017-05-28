import React, { Component } from 'react';
import StimulateHOC from 'StimulateHOC';

const TosserDataHOC = (ComponentToWrap) => {
  class TosserData extends Component {
    constructor() {
      super();
      this.toss = this.toss.bind(this);
    }
    propTypes: {
      stimulate: PropTypes.func,
    }
    toss({velocity, startCoords, gravity = 0, onFrame = () => {}}) {
      const currentVelocity = { ...velocity };

      const stimulation = this.props.stimulate({
        endless: true,
        noInit: true,
        // from: 5,
        // to: 100,
        // duration: 1000,
        frame: (progress) => {
          currentVelocity.y = currentVelocity.y + gravity;
          var updatedTossingCoords = {
            x: this.state.tossingCoords.x + currentVelocity.x,
            y: this.state.tossingCoords.y + currentVelocity.y
          };

          this.setState({
            tossingCoords: updatedTossingCoords
          });

          onFrame(updatedTossingCoords);
        }
      });

      this.setState({
        tossingCoords: Object.assign({}, startCoords)
      }, () => {
        stimulation.init();
      });
      return stimulation;
    }
    setTossingCoords(coords) {
      this.setState({
        tossingCoords: coords,
      });
    }
    render() {
      return (
        <ComponentToWrap
          {...this.props}
          {...this.state}
          toss={this.toss}
          setTossingCoords={this.setTossingCoords.bind(this)}
        >{this.props.children}</ComponentToWrap>
      );
    }
  }
  return StimulateHOC(TosserData);
}
export default TosserDataHOC;
