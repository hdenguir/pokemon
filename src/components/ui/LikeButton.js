import React from 'react';

export const LikeButton = ({ onToggleLikes, likes, name }) => (
  <button
    style={{ marginLeft: 'auto' }}
    onClick={() => onToggleLikes(name)}
    className={`btn  btn-sm ${
      likes.indexOf(name) > -1 ? 'btn-primary' : 'btn-outline-primary'
    }`}
  >
    Like
  </button>
);

export default LikeButton;
