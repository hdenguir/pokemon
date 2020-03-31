import { combineReducers } from 'redux';

import { pokemonReducer } from './pokemon/pokemon.reducer';

export const rootReducer = combineReducers({
  pokemons: pokemonReducer
});
