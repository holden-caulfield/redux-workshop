import 'babel-core/polyfill';
import './styles.styl';
import React from 'react';
import App from './App';
import Help from './Help';
import sampleTasks from './sampleTasks';

let root = document.getElementById('app');

React.render(
  <div>
    <App tasks={sampleTasks} />
    <Help />
  </div>,
  root);
