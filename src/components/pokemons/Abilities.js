import React from 'react';

export const Abilities = ({ abilities }) => (
  <div className="list-group">
    <button className="list-group-item list-group-item-action active">
      Abilities
    </button>
    {abilities.map(({ ability, slot }) => (
      <button
        href={ability.url}
        target="_blank"
        rel="noopener noreferrer"
        className="list-group-item list-group-item-action"
        key={ability.name}
      >
        Name: {ability.name} - Slot: {slot}
      </button>
    ))}
  </div>
);

export default Abilities;
