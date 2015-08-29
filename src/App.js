import React from 'react';
import TaskList from './TaskList';
import { Statuses } from "./constants.js"

export default class App extends React.Component {
  render() {
    let tasksByStatus = this.props.tasks.groupBy( (task) => task.status );
    let taskLists = tasksByStatus.map( (tasks, status)  =>
      <TaskList key={status} title={titleForStatus(status)} tasks={tasks} />
    );

    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
      {taskLists}
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
