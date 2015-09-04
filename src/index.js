import './styles.styl';
import 'babel-core/polyfill';
import React from 'react';
import App from './App';
import Help from './Help';
import * as reducers from './reducers';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let root = document.getElementById('app');
let store = createStore(combineReducers(reducers));

React.render(
  <div>
    <Provider store={store}>
      { () => <App /> }
    </Provider>
    <Help />
  </div>,
  root);
