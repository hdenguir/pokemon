import { createSelector } from 'reselect';

const selectPokemons = (state) => state.pokemons;

export const selectPokemonsItems = createSelector(
  [selectPokemons],
  (pokemon) => pokemon.results
);

export const selectPokemonsCount = createSelector(
  [selectPokemons],
  (pokemon) => pokemon.count
);

export const selectPokemonsLoading = createSelector(
  [selectPokemons],
  (pokemon) => pokemon.loading
);

export const selectPokemonSingle = createSelector(
  [selectPokemons],
  (pokemon) => pokemon.pokemon
);

export const selectLikes = createSelector(
  [selectPokemons],
  (pokemon) => pokemon.likes
);
export const selectError = createSelector(
  [selectPokemons],
  (pokemon) => pokemon.error
);
