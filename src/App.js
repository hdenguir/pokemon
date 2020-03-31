import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectPokemonsItems,
  selectPokemonsCount,
  selectPokemonsLoading,
  selectError
} from './store/pokemon/pokemon.selectors';
import { fetchPokemons } from './store/pokemon/pokemon.actions';

import PokemonList from './components/pokemons/PokemonList';
import Pagination from './components/ui/Pagination';
import Spinner from './components/ui/Spinner';

import './App.css';

function App({
  results,
  count,
  loading,
  error,
  fetchPokemons,
  match
}) {
  const [currentPage, setCurrentPage] = useState(match.params.page);
  const [limit] = useState(20);

  useEffect(() => {
    const { page } = match.params;
    if (typeof page !== 'undefined' && !isNaN(page)) {
      const offset = (page - 1) * limit;
      fetchPokemons(offset, limit);
      setCurrentPage(+page);
    } else {
      setCurrentPage(1);
      fetchPokemons(currentPage, limit);
    }
  }, [match.params, fetchPokemons, limit, currentPage]);

  if (loading) return <Spinner />;

  if (error) return <h1 className="text-center">{error}</h1>;

  return (
    <>
      {results.length > 0 ? (
        <>
          <PokemonList results={results} />
          <Pagination
            count={count}
            limit={limit}
            currentPage={currentPage}
          />
        </>
      ) : (
        <h1 className="text-center">No results</h1>
      )}
    </>
  );
}
const mapStateToProps = createStructuredSelector({
  results: selectPokemonsItems,
  count: selectPokemonsCount,
  loading: selectPokemonsLoading,
  error: selectError
});
export default connect(mapStateToProps, { fetchPokemons })(App);
