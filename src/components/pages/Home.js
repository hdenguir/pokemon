import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { createStructuredSelector } from 'reselect';

import {
  selectPokemonsItems,
  selectPokemonsCount,
  selectPokemonsLoading,
  selectError,
  selectPokemonSingle,
  selectLikes
} from '../../store/pokemon/pokemon.selectors';
import {
  fetchPokemons,
  fetchPokemonItem,
  toggleLikes
} from '../../store/pokemon/pokemon.actions';

import PokemonList from '../pokemons/PokemonList';

import Modal from '../ui/Modal';

window.React = React;
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      offset: 0,
      limit: 20,
      show: false
    };
  }
  componentDidMount() {
    this.props.fetchPokemons(0, 20);
  }

  handlePageClick = (data) => {
    const { offset, limit } = this.state;
    let newOffset = Math.ceil(data.selected * limit);
    this.setState({ offset: newOffset }, () => {
      this.props.fetchPokemons(offset, limit);
    });
  };

  handleShowModal = (e, pokemonName) => {
    e.preventDefault();
    this.setState({ show: true });
    this.props.fetchPokemonItem(pokemonName);
  };

  handleHideModal = (e) => {
    e.preventDefault();
    this.setState({ show: false });
  };

  render() {
    const {
      results,
      count,
      loading,
      error,
      pokemon,
      likes,
      toggleLikes
    } = this.props;

    if (error) return <h1 className="text-center">{error}</h1>;

    return (
      <>
        {results.length > 0 ? (
          <>
            <PokemonList
              results={results}
              handleShowModal={this.handleShowModal}
            />
            <Modal
              show={this.state.show}
              likes={likes}
              pokemon={pokemon}
              handleHideModal={this.handleHideModal}
              onToggleLikes={toggleLikes}
              loading={loading}
            />
            <ReactPaginate
              previousLabel={'Précédent'}
              nextLabel={'Suivant'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={count / this.state.limit}
              marginPagesDisplayed={3}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              previousClassName="page-item"
              nextClassName="page-item"
            />
          </>
        ) : (
          <h1 className="text-center">No results</h1>
        )}
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  results: selectPokemonsItems,
  count: selectPokemonsCount,
  loading: selectPokemonsLoading,
  error: selectError,
  pokemon: selectPokemonSingle,
  likes: selectLikes
});
export default connect(mapStateToProps, {
  fetchPokemons,
  fetchPokemonItem,
  toggleLikes
})(Home);
