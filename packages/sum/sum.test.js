/* eslint-disable */
// const sum = require('./sum');
import react from 'react';
import sum from 'sum';
import one from './one';
import two from 'sum/two/two';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(one(), 2)).toBe(3);
});