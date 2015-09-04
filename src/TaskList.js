import React from 'react';
import TaskCard from './TaskCard';

export default class TaskList extends React.Component {
  render() {
    let { title, tasks, onRemoveTask, onSetTaskStatus } = this.props;
    let taskCards = tasks.map( (task, index) =>
      <TaskCard key={index} task={task}
        onRemove={ () => onRemoveTask(task.id)}
        onSetStatus= { status => onSetTaskStatus(task.id, status)} />
    );

    return <div className="taskList">
      <h2>{title}</h2>
      {taskCards}
    </div>;
  }

}
