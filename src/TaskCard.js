import React from 'react';
import { Statuses } from './constants';
import ButtonBar from './ButtonBar';

export default class TaskCard extends React.Component {
  render() {
    let {key, name, status}  = this.props.task;
    return <div className="taskCard">
      <button className="close" onClick={this.props.onRemove}>x</button>
      <h3>{name}</h3>
      <ButtonBar buttons={buttonsForStatus(status)}
        onButtonClicked={this.props.onSetStatus} />
    </div>;
  }
}

function buttonsForStatus(status) {
  switch(status) {
    case Statuses.NOT_STARTED:
      return [{label:"Comenzar", className: "forward", data: Statuses.IN_PROGRESS}];
    case Statuses.IN_PROGRESS:
      return [
        {label:"Parar", className: "backwards", data: Statuses.NOT_STARTED},
        {label:"Finalizar", className: "forward", data: Statuses.DONE}
      ];
    case Statuses.DONE:
      return [{label:"Reiniciar", className: "backwards", data: Statuses.IN_PROGRESS}];
    default:
      return [];
  }
}
