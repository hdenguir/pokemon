import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ results, handleShowModal }) => (
  <div className="container-flex">
    {results.map((pokemon) => (
      <PokemonItem
        key={pokemon.name}
        pokemon={pokemon}
        handleShowModal={handleShowModal}
      />
    ))}
  </div>
);

export default PokemonList;
