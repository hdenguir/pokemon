import http from '../../utils/http';
import * as actionTypes from './pokemon.types';

export const fetchPokemons = (offset = 0, limit = 20) => {
  return async (dispatch) => {
    const url = `/pokemon?offset=${offset}&limit=${limit}`;

    dispatch({ type: actionTypes.POKEMON_START_FETCH });
    try {
      const {
        data: { results, count }
      } = await http.get(url);

      dispatch({
        type: actionTypes.POKEMONS_SUCCESS_FETCH,
        payload: { results, count }
      });
    } catch (error) {
      dispatch({
        type: actionTypes.POKEMONS_FAIL_FETCH,
        payload: error.message
      });
    }
  };
};

export const fetchPokemonItem = (name) => {
  return async (dispatch) => {
    const url = `/pokemon/${name}`;

    dispatch({ type: actionTypes.POKEMON_START_FETCH });
    try {
      const { data } = await http.get(url);

      dispatch({
        type: actionTypes.POKEMON_SUCCESS_FETCH,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.POKEMON_FAIL_FETCH,
        payload: error.message
      });
    }
  };
};

export const toggleLikes = (payload) => (dispatch) =>
  dispatch({ type: actionTypes.POKEMON_LIKE_TOGGLE, payload });
