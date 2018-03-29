import * as React from 'react';
import  ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { SearchBar } from  '../SearchBar/SearchBar';
import { SelectedPokemon }  from '../SelectedPokemon/SelectedPokemon';
import { PokemonList } from '../PokemonList/PokemonList';
import { Wrapper, Header, Title, Logo, Nav, NavItemFavorites, NavLink, LoadingWrapper, FilterButton } from './App.s';
import { Pokemon }  from '../../model/Pokemon';
import { filterPokemon } from '../../actions';

type StateProps = {
    selectedPokemon: Pokemon,
    isLoading: boolean
}

type DispatchProps = {
  filterPokemon: (filter: string) => void
}

type Props = StateProps & DispatchProps;

class AppPure extends React.Component <Props> {

  handleFilterClickAll = () => {
    this.props.filterPokemon('SHOW_All')
  }

  handleFilterClick25 = () => {
    this.props.filterPokemon('SHOW_0-25')
  }

  handleFilterClick50 = () => {
    this.props.filterPokemon('SHOW_26-50')
  }

  handleFilterClick75 = () => {
    this.props.filterPokemon('SHOW_51-75')
  }

  handleFilterClick100 = () => {
    this.props.filterPokemon('SHOW_76-100')
  }

  render() {
    const selectedPokemon = this.props.selectedPokemon;
    const isLoading = this.props.isLoading;

    return (
      <Wrapper>
          <Header>
            <Title>Get Your Pokemon</Title>
            <Logo src={`/img/pokemon.png`} alt="logo" />
            <Nav>
              <NavItemFavorites>
                <img src={`/img/star-fav.png`} />
                <NavLink to={`/favorites`}>Favorites pokemons</NavLink>
              </NavItemFavorites>
            </Nav>
          </Header>
          <SearchBar />
          <FilterButton onClick={this.handleFilterClickAll}>All</FilterButton>
          <FilterButton onClick={this.handleFilterClick25}>0-25</FilterButton>
          <FilterButton onClick={this.handleFilterClick50}>26-50</FilterButton>
          <FilterButton onClick={this.handleFilterClick75}>51-75</FilterButton>
          <FilterButton onClick={this.handleFilterClick100}>76-100</FilterButton>
          {isLoading &&
            <LoadingWrapper>
                <ReactLoading type="bubbles" color="#4444" />
            </LoadingWrapper>
          }
          <div>
              {selectedPokemon &&
                <SelectedPokemon selectedPokemon={selectedPokemon} />
              }
          </div>
          <PokemonList />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state): StateProps => ({
    selectedPokemon: state.pokemon.selectedPokemon,
    isLoading: state.pokemon.isLoading
});

const mapDispatchToProps = dispatch => ({
  filterPokemon: (filter) => dispatch(filterPokemon(filter))
})

export const App = connect(mapStateToProps, mapDispatchToProps)(AppPure);
