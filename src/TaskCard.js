import React from 'react';
import ButtonBar from './ButtonBar';
import { Statuses } from './constants';

export default class TaskCard extends React.Component {
  render() {
    let { task, onRemove, onSetStatus } = this.props;
    return <div className="taskCard">
      <button className="close" onClick={onRemove}>x</button>
      <h3>{ task.name }</h3>
      <ButtonBar buttons={buttonsForStatus(task.status)}
        onButtonClicked={onSetStatus} />
    </div>;
  }
}

function buttonsForStatus(status) {
  switch (status) {
    case Statuses.NOT_STARTED:
      return [
        {label: "Comenzar", className:"forward", data: Statuses.IN_PROGRESS}
      ];
    case Statuses.IN_PROGRESS:
      return [
        {label: "Parar", className:"backwards", data: Statuses.NOT_STARTED},
        {label: "Terminar", className:"forward", data: Statuses.DONE}
      ];
    case Statuses.DONE:
      return [
        {label: "Reiniciar", className:"backwards", data: Statuses.IN_PROGRESS}
      ];
    default: return [];
  }
}
