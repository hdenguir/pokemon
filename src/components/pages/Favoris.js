import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  selectLikes,
  selectPokemonsLoading,
  selectPokemonSingle
} from '../../store/pokemon/pokemon.selectors';
import {
  toggleLikes,
  fetchPokemonItem
} from '../../store/pokemon/pokemon.actions';
import { createStructuredSelector } from 'reselect';

import Modal from '../ui/Modal';

export const Favoris = ({
  likes,
  toggleLikes,
  fetchPokemonItem,
  pokemon,
  loading
}) => {
  const [show, setShow] = useState(false);
  const handleShowModal = (e, pokemonName) => {
    e.preventDefault();
    setShow(true);
    fetchPokemonItem(pokemonName);
  };
  const handleHideModal = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <div className="container-flex">
      {likes &&
        likes.map((like) => (
          <div className="card-body" key={like}>
            <h5 className="card-title">
              <button
                onClick={(e) => handleShowModal(e, like)}
                className="btn btn-outline-info btn-block"
              >
                {like}
              </button>
            </h5>
          </div>
        ))}

      <Modal
        show={show}
        likes={likes}
        pokemon={pokemon}
        handleHideModal={handleHideModal}
        onToggleLikes={toggleLikes}
        loading={loading}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  likes: selectLikes,
  loading: selectPokemonsLoading,
  pokemon: selectPokemonSingle
});

export default connect(mapStateToProps, {
  toggleLikes,
  fetchPokemonItem
})(Favoris);
