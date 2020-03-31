import * as actionTypes from './pokemon.types';
import { toggleLikes } from '../../utils/utils';

const initState = {
  count: 0,
  results: [],
  pokemon: null,
  loading: false,
  error: null,
  likes: JSON.parse(localStorage.getItem('likes')) || []
};

export const pokemonReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.POKEMON_START_FETCH:
      return {
        ...state,
        loading: true
      };
    case actionTypes.POKEMONS_SUCCESS_FETCH:
      return {
        ...state,
        results: payload.results,
        count: payload.count,
        loading: false,
        error: null
      };
    case actionTypes.POKEMON_SUCCESS_FETCH:
      return {
        ...state,
        pokemon: payload,
        loading: false
      };
    case actionTypes.POKEMON_FAIL_FETCH:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case actionTypes.POKEMON_LIKE_TOGGLE:
      return {
        ...state,
        likes: toggleLikes([...state.likes], payload)
      };
    default:
      return state;
  }
};
