import React from 'react';
import Markdown2HTML from 'react-markdown-to-html';

var Help = React.createClass({
  getInitialState: function() {
    return {visibility: 'hidden'};
  },

  showHelp: function() {
    this.setState({visibility: 'shown'});
  },

  hideHelp: function() {
    this.setState({visibility: 'hidden'});
  },

  render: function() {
    return <div className={"helpPanel " + this.state.visibility}>
      <a onClick={this.showHelp} className="show">Ayuda!</a>
      <a onClick={this.hideHelp} className="hide">Cerrar</a>
      <div className="contents">
        <Markdown2HTML src="README.md" />
      </div>
    </div>
  }
});

export default Help;
