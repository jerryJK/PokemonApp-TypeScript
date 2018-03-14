import * as React from 'react';
import  ReactLoading from 'react-loading';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { SearchBar } from  '../SearchBar/SearchBar';
import { SelectedPokemon }  from '../SelectedPokemon/SelectedPokemon';
import { PokemonList } from '../PokemonList/PokemonList';
import { getData } from '../../actions';
import { Wrapper, Header, Title, Logo, LoadingWrapper, Nav, NavItemFavorites, NavLink } from './App.s';
import { Pokemon }  from '../../model/Pokemon';

type StateProps = {
  isLoading: boolean,
  selectedPokemon: Pokemon
}

type DispatchProps = {
  getData: (id: number) => object
}

type Props = StateProps & DispatchProps;

class AppPure extends React.Component <Props> {

  render() {
    const {isLoading, selectedPokemon } = this.props;

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

function mapStateToProps(state: {pokemon: {isLoading: boolean, selectedPokemon: Pokemon }}) {
    const { isLoading, selectedPokemon } = state.pokemon;
    return {
        isLoading,
        selectedPokemon
    }
};

export const App = connect(mapStateToProps, {getData})(AppPure);
