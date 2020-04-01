import React from 'react';

export const LikeButton = ({ onToggleLikes, likes, pokemonId }) => (
  <button
    style={{ marginLeft: 'auto' }}
    onClick={() => onToggleLikes(pokemonId)}
    className={`btn  btn-sm ${
      likes.indexOf(pokemonId) > -1
        ? 'btn-primary'
        : 'btn-outline-primary'
    }`}
  >
    Like
  </button>
);

export default LikeButton;
