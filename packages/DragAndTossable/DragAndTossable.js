import React, { Component } from 'react';
import DragAndTosserDataHOC from './DragAndTosserDataHOC';
import generateCssTransformVal from 'generateCssTransformVal';
import PropTypes from 'prop-types';

class DragAndTossable extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.onDragUp(() => {
      const stimulation = this.props.toss({
        startCoords: this.props.delta,
        velocity: this.props.velocity,
        gravity: 0.3,
      });

      stimulation.onFrame(() => {
        const msSinceStart = stimulation.timestamps.recentRaf - stimulation.timestamps.start;
        if (msSinceStart > 6000) {
          stimulation.stop(true);
        }
      });

      this.stimulation = stimulation;
    });

    this.props.onDraggerStart(() => {
      const cachedTossingCoords = this.props.tossingCoords && { ...this.props.tossingCoords };
      this.stimulation && this.stimulation.stop(true);
      this.props.setDelta(this.props.tossingCoords);
      this.props.setTossingCoords(null);
      delete this.stimulation;
      return cachedTossingCoords;
    });
  }

  render() {
    const style = {};
    const pertinentCoords = this.props.tossingCoords || this.props.delta;
    style.transform = generateCssTransformVal(pertinentCoords);
    style.WebkitTransform = style.transform;
    return (
      <div
        className={this.props.className}
        onTouchStart={this.props.onTouchStart}
        onMouseDown={this.props.onMouseDown}
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
}
DragAndTossable.propTypes = {
  children: PropTypes.object,
  delta: PropTypes.object,
  velocity: PropTypes.object,
  tossingCoords: PropTypes.object,
  onDragUp: PropTypes.func,
  onDraggerStart: PropTypes.func,
  onTouchStart: PropTypes.func,
  onMouseDown: PropTypes.func,
  setDelta: PropTypes.func,
  setTossingCoords: PropTypes.func,
  toss: PropTypes.func,
  className: PropTypes.string,
  // isTouching: PropTypes.bool,
  // startPoint: PropTypes.object,
};
DragAndTossable = DragAndTosserDataHOC(DragAndTossable);

export default DragAndTossable;
