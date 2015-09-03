import React from 'react';
import TaskList from './TaskList';
import { Statuses } from "./constants";
import 'babel-core/polyfill';

export default class App extends React.Component {
  render() {
    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
    </div>;
  }
}

function titleForStatus(status) {
  switch (status) {
    case Statuses.NOT_STARTED: return "Backlog";
    case Statuses.IN_PROGRESS: return "Working";
    case Statuses.DONE: return "Done";
  }
}
