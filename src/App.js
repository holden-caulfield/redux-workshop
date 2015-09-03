import React from 'react';
import TaskList from './TaskList';
import { Statuses } from "./constants";
import 'babel-core/polyfill';
import { connect } from 'react-redux';

export default class App extends React.Component {
  render() {
    let tasks = this.props.tasks;
    let baseTaskMap = Object.keys(Statuses).map(status => ({status, tasks:[]}));
    let tasksByStatus = tasks.reduce(groupTasks, baseTaskMap);

    let taskLists = tasksByStatus.map( (item, index) =>
      <TaskList key={index}
        title={titleForStatus(item.status)}
        tasks={item.tasks} />
    );

    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
      {taskLists}
    </div>;
  }
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
