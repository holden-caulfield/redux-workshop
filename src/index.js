import './styles.styl';
import 'babel-core/polyfill';
import React from 'react';
import App from './App';
import Help from './Help';
import sampleTasks from './sampleTasks';
import * as reducers from './reducers';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let root = document.getElementById('app');

React.render(
  <div>
    <App tasks={sampleTasks} />
    <Help />
  </div>,
  root);
