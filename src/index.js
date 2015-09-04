import 'babel-core/polyfill';
import './styles.styl';
import React from 'react';
import App from './App';
import Help from './Help';
import * as reducers from './reducers';
import { compose, createStore, combineReducers } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const finalCreateStore = compose(
  devTools(),
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
