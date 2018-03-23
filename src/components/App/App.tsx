import * as React from 'react';
import  ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { SearchBar } from  '../SearchBar/SearchBar';
import { SelectedPokemon }  from '../SelectedPokemon/SelectedPokemon';
import { PokemonList } from '../PokemonList/PokemonList';
import { Wrapper, Header, Title, Logo, Nav, NavItemFavorites, NavLink, LoadingWrapper } from './App.s';
import { Pokemon }  from '../../model/Pokemon';

type StateProps = {
    selectedPokemon: Pokemon,
    isLoading: boolean
}

type Props = StateProps;

class AppPure extends React.Component <Props> {

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

export const App = connect(mapStateToProps, {})(AppPure);
