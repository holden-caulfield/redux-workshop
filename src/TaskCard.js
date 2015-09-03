import React from 'react';

export default class TaskCard extends React.Component {
  render() {
    let { task } = this.props;
    return <div className="taskCard">
      <h3>{ task.name }</h3>
    </div>;
  }
}
