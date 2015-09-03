import React from 'react';

export default class AddTaskForm extends React.Component {
  _handleAdd() {
  }

  render() {
    return <div className="addTaskForm">
      <input type="text" ref="input" placeholder="Escribe tu nueva tarea "/>
      <button onClick={this._handleAdd.bind(this)}>Agregar Tarea</button>
    </div>
  }
}
