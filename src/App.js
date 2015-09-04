import React from 'react';
import TaskList from './TaskList';
import { Statuses } from "./constants";
import AddTaskForm from "./AddTaskForm";
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    let { tasksByStatus } = this.props;

    let taskLists = tasksByStatus.map( (item, index) =>
      <TaskList key={index}
        title={titleForStatus(item.status)}
        tasks={item.tasks} />
    );

    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
      <AddTaskForm />
      {taskLists}
    </div>;
  }
}

function select(state) {
  let baseTaskMap = Object.keys(Statuses).map(status => ({status, tasks:[]}));
  return {tasksByStatus: state.tasks.reduce(groupTasks, baseTaskMap)};
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
