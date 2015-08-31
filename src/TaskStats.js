import React from 'react';

export default class TaskStats extends React.Component {
  render() {
    let total = this.props.stats.reduce((accum, stat) => accum + stat.count, 0);
    let stats = this.props.stats.map( (stat) => ({...stat, avg: percent(stat.count, total) }) );

    return <div className="taskStats">
      <ul className="statsGraph">
      {stats.map( stat =>
        <li key={stat.status} className={stat.label.toLowerCase()} style={{width: stat.avg+"%"}}>
          &nbsp;
        </li>
      )}
      </ul>
      <div>
        <strong>{total}</strong> tareas.&nbsp;
        { stats.map( stat =>
          (stat.label + ": " + stat.count + " (" + stat.avg + "%)")).join(". ")
        }
      </div>
    </div>
  }
}

function percent(piece, total) {
  let ratio = piece / total;
  return (ratio * 90).toFixed(2);
}
