import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routing from './Routing';
import configureStore from './configureStore';

const store = configureStore();
render(
  <Routing store={store} />,
  document.getElementById('root')
);
