import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  selectPokemonSingle,
  selectPokemonsLoading,
  selectLikes,
  selectError
} from '../../store/pokemon/pokemon.selectors';
import {
  fetchPokemonItem,
  toggleLikes
} from '../../store/pokemon/pokemon.actions';

import Spinner from '../ui/Spinner';
import Abilities from './Abilities';
import Types from './Types';
import Stats from './Stats';
import LikeButton from './LikeButton';

const PokemonSingle = ({
  pokemon,
  likes,
  fetchPokemonItem,
  toggleLikes,
  loading,
  match,
  error
}) => {
  useEffect(() => {
    fetchPokemonItem(match.params.pokemonName);
  }, [match.params.pokemonName, fetchPokemonItem]);

  if (loading) return <Spinner />;

  if (error)
    return (
      <>
        <h1 className="text-center">{error}</h1>
        <Link className="btn btn-primary btn-sm" to="/" role="button">
          Stay At Home
        </Link>
      </>
    );

  if (pokemon === null) return null;

  const { id, name, sprites, types, abilities, stats } = pokemon;

  return (
    <div className="card">
      {sprites.front_default && (
        <img
          src={sprites.front_default}
          className="card-img-top"
          alt={name}
        />
      )}

      <div className="card-header">
        <h4 className="card-title float-left">{name}</h4>
        <LikeButton
          onToggleLikes={toggleLikes}
          pokemonId={id}
          likes={likes}
        />
      </div>
      <div className="card-body">
        {abilities && <Abilities abilities={abilities} />}
        <hr className="my-4" />
        {types && <Types types={types} />}
        <hr className="my-4" />
        {stats && <Stats stats={stats} />}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  pokemon: selectPokemonSingle,
  loading: selectPokemonsLoading,
  likes: selectLikes,
  error: selectError
});

export default connect(mapStateToProps, {
  fetchPokemonItem,
  toggleLikes
})(PokemonSingle);
