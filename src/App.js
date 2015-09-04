import React from 'react';
import TaskList from './TaskList';
import { Statuses } from "./constants";

export default class App extends React.Component {
  render() {
    let tasks = this.props.tasks;
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
