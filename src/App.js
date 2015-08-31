import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from "./AddTaskForm";
import TaskStats from "./TaskStats";
import { createTask, removeTask, setTaskStatus } from "./actions";
import { Statuses } from "./constants";
import { connect } from 'react-redux';
import { Iterable, List } from 'immutable';

class App extends React.Component {
  render() {
    let { tasksByStatus, dispatch } = this.props;
    let statusList = Iterable.Keyed(Statuses).toList();
    let taskLists = statusList.map( (status)  =>
      <TaskList key={status}
        title={titleForStatus(status)}
        tasks={tasksByStatus.get(status, [])}
        onRemoveTask={
          key => dispatch(removeTask(key))
        }
        onSetTaskStatus={
          (key, status) => dispatch(setTaskStatus(key, status))
        }
        />
    );
    let taskStats = statusList.map( (status) =>
      ({  label: titleForStatus(status),
          count:tasksByStatus.get(status, List([])).size,
          className: status.toLowerCase()
      })
    );

    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
      <AddTaskForm onNewTask={
          name => dispatch(createTask(name))
        }/>
      {taskLists}
      <TaskStats stats={taskStats} />
    </div>;
  }
}

function select(state) {
  let keyedTasks = List(state.tasks).map( (task, key) => ( {key, ...task} ) );
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
