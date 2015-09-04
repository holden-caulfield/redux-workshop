import React from 'react';

export default class AddTaskForm extends React.Component {
  _handleAdd() {
    const node = React.findDOMNode(this.refs.input);
    const text = node.value.trim();
    if (text) {
      this.props.onNewTask(text);
      node.value = "";
    }
  }

  render() {
    return <div className="addTaskForm">
      <input type="text" ref="input" placeholder="Escribe tu nueva tarea "/>
      <button onClick={this._handleAdd.bind(this)}>Agregar Tarea</button>
    </div>
  }
}
