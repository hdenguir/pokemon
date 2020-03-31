import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ results }) => (
  <div className="container-flex">
    {results.map((pokemon) => (
      <PokemonItem key={pokemon.name} pokemon={pokemon} />
    ))}
  </div>
);

export default PokemonList;
