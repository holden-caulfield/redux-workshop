import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from "./AddTaskForm";
import { createTask, removeTask } from "./actions";
import { Statuses } from "./constants";
import { connect } from 'react-redux';
import { Iterable } from 'immutable';

class App extends React.Component {
  render() {
    let { tasksByStatus, dispatch } = this.props;
    let statusList = Iterable.Keyed(Statuses).toList();
    let taskLists = statusList.map( (status, tasks)  =>
      <TaskList key={status}
        title={titleForStatus(status)}
        tasks={tasksByStatus.get(status, [])}
        onRemoveTask={
          key => dispatch(removeTask(key))
        }/>
    );

    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
      <AddTaskForm onNewTask={
          name => dispatch(createTask(name))
        }/>
      {taskLists}
    </div>;
  }
}

function select(state) {
  let keyedTasks = state.map( (task, key) => ( {key, ...task} ) );
  return { tasksByStatus: keyedTasks.groupBy( (task) => task.status ) };
}

function titleForStatus(status) {
  switch (status) {
    case Statuses.NOT_STARTED: return "Backlog";
    case Statuses.IN_PROGRESS: return "Working";
    case Statuses.DONE: return "Done";
  }
}

export default connect(select)(App);
