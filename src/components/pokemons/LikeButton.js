import React from 'react';

export const LikeButton = ({ onToggleLikes, likes, pokemonId }) => (
  <button
    onClick={() => onToggleLikes(pokemonId)}
    className={`btn  btn-sm float-right ${
      likes.indexOf(pokemonId) > -1
        ? 'btn-primary'
        : 'btn-outline-primary'
    }`}
  >
    Like
  </button>
);

export default LikeButton;
