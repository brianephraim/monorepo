/* eslint-disable */
// const sum = require('./sum');

import sum from 'sum';
import one from './one';
import two from 'sum/two';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(one(), 2)).toBe(3);
});