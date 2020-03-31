import React from 'react';

export const Stats = ({ stats }) => (
  <div className="list-group">
    <button className="list-group-item list-group-item-action active">
      Stats
    </button>
    {stats.map(({ stat, effort }) => (
      <a
        href={stat.url}
        target="_blank"
        rel="noopener noreferrer"
        className="list-group-item list-group-item-action"
        key={stat.name}
      >
        Name: {stat.name} - Base Stat: {stat.base_stat} - Effort:
        {effort}
      </a>
    ))}
  </div>
);

export default Stats;
