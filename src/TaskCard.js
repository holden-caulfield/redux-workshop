import React from 'react';

export default class TaskCard extends React.Component {
  render() {
    let {name, status}  = this.props.task;
    return <div className="taskCard">
      <button className="close" onClick={this.props.onRemove}>X</button>
      <h3>{name}</h3>
    </div>;
  }

}
