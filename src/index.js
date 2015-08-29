import './styles.styl';
import React from 'react';
import App from './App';
import sampleTasks from "./sampleTasks";

let root = document.getElementById('app');

React.render(
  <App tasks={sampleTasks} />,
  root);
