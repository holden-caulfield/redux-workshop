import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from "./AddTaskForm";
import TaskStats from "./TaskStats";
import { Statuses } from "./constants";
import { createTask, removeTask, setTaskStatus } from "./actions";
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    let { tasksByStatus, dispatch } = this.props;

    let taskLists = tasksByStatus.map( (item, index) =>
      <TaskList key={index}
        title={titleForStatus(item.status)}
        tasks={item.tasks}
        onRemoveTask={
          id => dispatch(removeTask(id))
        }
        onSetTaskStatus={
          (id, status) => dispatch(setTaskStatus(id, status))
        }/>
    );

    let stats = tasksByStatus.map( item => ({
        label: titleForStatus(item.status),
        count: item.tasks.length
      })
    );

    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
      <AddTaskForm onNewTask={
          (name) => dispatch(createTask(name))
        }/>
      {taskLists}
      <TaskStats stats={stats} />
    </div>;
  }
}

function select(state) {
  let baseTaskMap = Object.keys(Statuses).map(status => ({status, tasks:[]}));
  let keyedTasks = state.tasks.map( (task, id) => ({id, ...task}) );
  return {tasksByStatus: keyedTasks.reduce(groupTasks, baseTaskMap)};
}

function groupTasks(taskMap, task) {
  let index = taskMap.findIndex( item => item.status == task.status);
  return [...taskMap.slice(0, index),
    { ...taskMap[index], tasks: [...taskMap[index].tasks, task] },
    ...taskMap.slice(index + 1)
  ];
}

function titleForStatus(status) {
  switch (status) {
    case Statuses.NOT_STARTED: return "Backlog";
    case Statuses.IN_PROGRESS: return "Working";
    case Statuses.DONE: return "Done";
  }
}

export default connect(select)(App);
