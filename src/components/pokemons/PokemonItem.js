import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonItem = ({ pokemon: { name, sprites } }) => (
  <div className="card-body">
    <h5 className="card-title">
      <Link className="btn btn-outline-info" to={`/pokemon/${name}`}>
        {name}
      </Link>
    </h5>
  </div>
);
export default PokemonItem;
