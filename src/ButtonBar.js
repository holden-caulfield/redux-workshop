import React from 'react';

export default class ButtonBar extends React.Component {
  render() {
    let buttons = this.props.buttons.map( (btn, index) =>
      <button key={index} className={btn.className}
        onClick={(e) => this.props.onButtonClicked(btn.data) }>
        {btn.label}
      </button>
    );
    return <div className="buttonBar">
      {buttons}
    </div>
  }
}
