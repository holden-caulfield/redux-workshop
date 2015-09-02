import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from "./AddTaskForm";
import TaskStats from "./TaskStats";
import { createTask, removeTask, setTaskStatus } from "./actions";
import { Statuses } from "./constants";
import { connect } from 'react-redux';
import 'babel-core/polyfill';

class App extends React.Component {
  render() {
    let { tasksByStatus, dispatch } = this.props;
    let taskLists = tasksByStatus.map( (item)  =>
      <TaskList key={item.status}
        title={titleForStatus(item.status)}
        tasks={item.tasks}
        onRemoveTask={
          key => dispatch(removeTask(key))
        }
        onSetTaskStatus={
          (key, status) => dispatch(setTaskStatus(key, status))
        }
        />
    );
    let taskStats = tasksByStatus.map( (item) =>
      ({  label: titleForStatus(item.status),
          count: item.tasks.length,
          className: titleForStatus(item.status).toLowerCase()
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
  let keyedTasks = state.tasks.map( (task, key) => ( {key, ...task} ) );
  let statusesMap = Object.keys(Statuses).map( status => ({status, tasks: []}) );

  let groupTasks = function(map, task) {
    let index = map.findIndex( mapItem => mapItem.status == task.status);
    return [ ...map.slice(0, index),
            { status: task.status, tasks: [...map[index].tasks, task] },
            ...map.slice(index+1)]
  }

  return { tasksByStatus: keyedTasks.reduce(groupTasks, statusesMap) };
}

function titleForStatus(status) {
  switch (status) {
    case Statuses.NOT_STARTED: return "Backlog";
    case Statuses.IN_PROGRESS: return "Working";
    case Statuses.DONE: return "Done";
  }
}

export default connect(select)(App);
