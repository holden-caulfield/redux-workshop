import './styles.styl';
import React from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { tasks } from './reducers';

let root = document.getElementById('app');
let store = createStore(tasks);

React.render(
  <Provider store={store}>
      { () => <App /> }
  </Provider>,
  root);
