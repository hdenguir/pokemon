import React from 'react';

import Abilities from '../pokemons/Abilities';
import Types from '../pokemons/Types';
import Stats from '../pokemons/Stats';
import LikeButton from './LikeButton';
import Spinner from './Spinner';

export const Modal = ({
  pokemon,
  show,
  handleHideModal,
  onToggleLikes,
  likes,
  loading
}) => {
  if (loading) return <Spinner />;

  if (!show) return null;
  const { id, name, sprites, types, abilities, stats } = pokemon;
  return (
    <div className="modal-open">
      <div className="modal-backdrop fade show" />
      <div className={`modal fade show`} id="exampleModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {name}
              </h5>{' '}
              <LikeButton
                onToggleLikes={onToggleLikes}
                pokemonId={id}
                likes={likes}
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={(e) => handleHideModal(e)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {sprites.front_default && (
                <img
                  src={sprites.front_default}
                  className="card-img-top"
                  alt={name}
                  style={{
                    maxWidth: '100px',
                    margin: 'auto',
                    display: 'block'
                  }}
                />
              )}
              {abilities && <Abilities abilities={abilities} />}
              <hr className="my-1" />
              {types && <Types types={types} />}
              <hr className="my-1" />
              {stats && <Stats stats={stats} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
