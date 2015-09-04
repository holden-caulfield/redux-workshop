import 'babel-core/polyfill';
import './styles.styl';
import React from 'react';
import { compose, createStore, combineReducers } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import App from './App';
import Help from './Help';
import * as reducers from './reducers';

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

let root = document.getElementById('app');
let store = finalCreateStore(combineReducers(reducers));

React.render(
  <div>
    <Provider store={store}>
      { () => <App /> }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
    <Help />
  </div>,
  root);
