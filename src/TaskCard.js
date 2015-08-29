import React from 'react';

export default class TaskCard extends React.Component {
  render() {
    let {name, status}  = this.props.task;
    return <div className="taskCard">
      <h3>{name}</h3>
    </div>;
  }

}
