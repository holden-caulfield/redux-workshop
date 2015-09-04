import React from 'react';

export default class TaskStats extends React.Component {
  render() {
    let total = this.props.stats.reduce((accum, stat) => accum + stat.count, 0);
    let stats = this.props.stats.map( (stat) => ({...stat, avg: percent(stat.count, total) }) );
    let statsLegend = stats.map( stat =>
      (stat.label + ": " + stat.count + " (" + stat.avg + "%)")).join(". ");

    return <div className="taskStats">
      <ul className="statsGraph">
      {stats.filter(stat => stat.count > 0).map( (stat, index) =>
        <li key={index} className={stat.label.toLowerCase()} style={{width: (stat.avg*.9)+"%"}}>
          &nbsp;
        </li>
      )}
      </ul>
      <div>
        <strong>{total}</strong> tareas.&nbsp;
        <span>{ statsLegend }</span>
      </div>
    </div>
  }
}

function percent(piece, total) {
  let ratio = piece / total;
  return (ratio * 100).toFixed(2);
}
