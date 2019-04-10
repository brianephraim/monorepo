import React, { Component } from 'react';
import Board from './Board';
import { compose1DArrayInto2DGrid, compose2DGridArrayInto1DAndWidth } from './gridUtils';
import Link from 'redux-first-router-link'

class ReactiveBoard extends Board {
  constructor(...args) {
    super(...args);
    this.onUpdateCbs = [];
  }
  onUpdate(cb) {
    this.onUpdateCbs.push(cb);
  }
  update(...args) {
    super.update(...args);
    this.onUpdateCbs.forEach((cb) => {
      cb();
    });
  }
}

class Battleship extends Component {
  constructor() {
    super();
    this.state = {
      placementLog: [],
    };
  }
  componentWillMount() {
    this.board = new ReactiveBoard(10, 10);
    this.board.onUpdate(() => {
      this.setState({
        stringGrid: this.board.getStringGrid(),
        gridAsArray: this.board.gridAsArray,
        width: this.board.width,
      });
    });

    const placementAttempts = [
      // good
      this.board.place([
        {
          col: 2,
          row: 4,
          content: {
            size: 3,
            value: '#',
          },
          isHorizontal: false,
        },
        {
          col: 3,
          row: 4,
          content: ['&', '&', '&', '&'],
          isHorizontal: true,
        },
      ]),

      // overlap error
      this.board.place([
        {
          col: 2,
          row: 5,
          content: ['#', '#', '#'],
          isHorizontal: true,
        },
      ]),

      // too far right error
      this.board.place([
        {
          col: 8,
          row: 0,
          content: ['#', '#', '#'],
          isHorizontal: true,
        },
      ]),

      // too far down error
      this.board.place([
        {
          col: 0,
          row: 8,
          content: {
            size: 3,
            value: '#',
          },
          isHorizontal: false,
        },
      ]),
    ];

    const placementLog = placementAttempts.reduce((log, status) => {
      return log.concat([status.success ? 'success' : status.error]);
    }, []);

    this.setState({
      placementLog: this.state.placementLog.concat(placementLog),
    });

    this.board.update();
  }
  render() {
    return (
      <div>
        <Link
          to='todos/all'
        >
          todos
        </Link>
        <Link
          to='/boomer/ut/original-21313-1402070821-131504902837890/354_161_305_305_1200_1200/c2kkzyyg92seahxcoml1'
        >
          BOOMER
        </Link>
        <h2>Battleship</h2>
        <pre>{this.state.stringGrid}</pre>
        <h4>gridAsArray</h4>
        <p>{JSON.stringify(this.state.gridAsArray)}</p>
        <h4>
          gridAsArray -
          compose1DArrayInto2DGrid (is array of cols)
        </h4>
        <p>{
          this.state.gridAsArray && JSON.stringify(
            compose1DArrayInto2DGrid(this.state.width, this.state.gridAsArray)
          )
        }</p>
        <h4>
          gridAsArray -
          compose1DArrayInto2DGrid (is array of cols) -
          compose2DGridArrayInto1DAndWidth
        </h4>
        <p>{
          this.state.gridAsArray && JSON.stringify(
            compose2DGridArrayInto1DAndWidth(
              compose1DArrayInto2DGrid(this.state.width, this.state.gridAsArray)
            )
          )
        }</p>
        <h4>
          gridAsArray -
          compose1DArrayInto2DGrid (is array of rows)
        </h4>
        <p>{
          this.state.gridAsArray && JSON.stringify(
            compose1DArrayInto2DGrid(this.state.width, this.state.gridAsArray, true)
          )
        }</p>
        <h4>
          gridAsArray -
          compose1DArrayInto2DGrid (is array of rows) -
          compose2DGridArrayInto1DAndWidth
        </h4>
        <p>{
          this.state.gridAsArray && JSON.stringify(
            compose2DGridArrayInto1DAndWidth(
              compose1DArrayInto2DGrid(this.state.width, this.state.gridAsArray, true),
              true
            )
          )
        }</p>
        <h4>Placement log</h4>
        <p>{JSON.stringify(this.state.placementLog)}</p>
      </div>
    );
  }
}
Battleship.propTypes = {};
export default Battleship;
