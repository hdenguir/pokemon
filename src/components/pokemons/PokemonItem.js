import React from 'react';

export const PokemonItem = ({
  pokemon: { name },
  handleShowModal
}) => (
  <div className="card-body">
    <h5 className="card-title">
      <button
        onClick={(e) => handleShowModal(e, name)}
        className="btn btn-outline-info btn-block"
      >
        {name}
      </button>
    </h5>
  </div>
);
export default PokemonItem;
