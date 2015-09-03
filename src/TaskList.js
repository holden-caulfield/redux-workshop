import React from 'react';
import TaskCard from './TaskCard';

export default class TaskList extends React.Component {
  render() {
    let { title, tasks, onRemoveTask } = this.props;
    let taskCards = tasks.map( (task, index) =>
      <TaskCard key={index} task={task}
        onRemove={ () => this.props.onRemoveTask(task.id)} />
    );

    return <div className="taskList">
      <h2>{title}</h2>
      {taskCards}
    </div>;
  }

}
