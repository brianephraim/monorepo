import React, { Component } from 'react';
import processXY from 'processXY';
import docListeners from 'docListeners';
import bind_here from 'bind_here';
import getCoordsFromEvent from 'getCoordsFromEvent';
import { raf } from 'stimulate';

const DraggerDataHOC = (ComponentToWrap) => {
  class DraggerData extends Component {
    constructor() {
      super();
      this.state = {
        delta: {
          x: 0,
          y: 0,
        },
        velocity: {
          x: 0,
          y: 0,
        },
      };
      this.methodsBoundHere = bind_here(this, [
        'onTouchStart',
        'onTouchMove',
        'onTouchEnd',
        'onDragUp',
        'onDraggerStart',
        'onDragMove',
        'setDelta',
      ]);
      this.methodsBoundHere.onMouseDown = this.methodsBoundHere.onTouchStart;
      Object.assign(this, this.methodsBoundHere);
    }

    componentWillUnmount() {
      this.removeDocListeners();
    }

    onTouchStart(e) {
      e.preventDefault();
      const offset = this.onDraggerStartCb && this.onDraggerStartCb();
      const eventCoords = getCoordsFromEvent(e);
      const startPoint = processXY((xOrY) => {
        return offset ? eventCoords[xOrY] - offset[xOrY] : eventCoords[xOrY];
      });
      const stateSetting = {
        startPoint,
      };
      this.addDocListeners();

      this.setState(stateSetting);
    }
    onTouchMove(e) {
      e.preventDefault();
      const coords = getCoordsFromEvent(e);
      const wasTouching = !!this.state.startPoint;

      if (!this.rafOccupied) {
        this.rafOccupied = true;
        raf(() => {
          const isTouching = !!this.state.startPoint;
          if (isTouching && wasTouching) {
            const updatedDelta = processXY((xOrY) => {
              return coords[xOrY] - this.state.startPoint[xOrY];
            });

            const data = {
              velocity: processXY((xOrY) => {
                return updatedDelta[xOrY] - this.state.delta[xOrY];
              }),
              delta: updatedDelta,
            };
            this.setState(data);
            this.props.onDraggy && this.props.onDraggy(data);
            this.onDragMoveCb && this.onDragMoveCb(data);
          }

          this.rafOccupied = false;
        });
      }
    }
    onTouchEnd() {
      if (this.state.startPoint) {
        const nextState = {
          startPoint: null,
        };
        // if (this.props.maybeResetAtEnd && this.props.maybeResetAtEnd(this.state)) {
          // nextState.delta = {
          //   x: 0,
          //   y: 0
          // };
        // }
        this.setState(nextState);
        this.onDragUpCb && this.onDragUpCb();
      }
      this.removeDocListeners();
    }
    onDragUp(cb) {
      this.onDragUpCb = cb;
    }
    onDraggerStart(cb) {
      this.onDraggerStartCb = cb;
    }
    onDragMove(cb) {
      this.onDragMoveCb = cb;
    }

    setDelta(coords) {
      coords && this.setState({ delta: coords });
    }
    removeDocListeners() {
      docListeners('remove',
        ['touchmove', this.onTouchMove],
        ['mousemove', this.onTouchMove],
        ['touchend', this.onTouchEnd],
        ['mouseup', this.onTouchEnd]
      );
    }
    addDocListeners() {
      this.removeDocListeners();
      docListeners('add',
        ['touchmove', this.onTouchMove],
        ['mousemove', this.onTouchMove],
        ['touchend', this.onTouchEnd],
        ['mouseup', this.onTouchEnd]
      );
    }

    render() {
      return (
        <ComponentToWrap
          {...this.methodsBoundHere}
          {...this.state}
          {...this.props}
        >
          {this.props.children}
        </ComponentToWrap>
      );
    }
  }

  return DraggerData;
};
export default DraggerDataHOC;
