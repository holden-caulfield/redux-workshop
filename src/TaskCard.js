import React from 'react';

export default class TaskCard extends React.Component {
  render() {
    let { task, onRemove } = this.props;
    return <div className="taskCard">
      <button className="close" onClick={onRemove}>x</button>
      <h3>{ task.name }</h3>
    </div>;
  }
}
