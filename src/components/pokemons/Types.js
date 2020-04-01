import React from 'react';

const Types = ({ types }) => (
  <div className="list-group">
    <button className="list-group-item list-group-item-action active">
      Types
    </button>
    {types.map(({ type, slot }) => (
      <button
        href={type.url}
        target="_blank"
        rel="noopener noreferrer"
        className="list-group-item list-group-item-action"
        key={type.name}
      >
        Name: {type.name} - Slot: {slot}
      </button>
    ))}
  </div>
);
export default Types;
