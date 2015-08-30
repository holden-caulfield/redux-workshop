import React from 'react';
import TaskList from './TaskList';
import { Statuses } from "./constants.js";
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    let taskLists = this.props.tasksByStatus.map( (tasks, status)  =>
      <TaskList key={status} title={titleForStatus(status)} tasks={tasks} />
    );

    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
      {taskLists}
    </div>;
  }
}

function select(state) {
  return { tasksByStatus: state.groupBy( (task) => task.status ) };
}

function titleForStatus(status) {
  switch (status) {
    case Statuses.NOT_STARTED: return "Backlog";
    case Statuses.IN_PROGRESS: return "Working";
    case Statuses.DONE: return "Done";
  }
}

export default connect(select)(App);
