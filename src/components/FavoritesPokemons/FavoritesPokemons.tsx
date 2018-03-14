import * as React from 'react';
import { FavoritesPokemonsList } from '../FavoritesPokemonsList/FavoritesPokemonsList';
import { Wrapper, Header, Title, Logo, Nav, NavItemFavorites, NavLink } from './FavoritesPokemons.s';

class FavoritesPokemonsPure extends React.Component <{}> {

  render() {
    return (
      <Wrapper>
          <Header>
            <Title>Favorites Pokemons</Title>
            <Logo src={`/img/favorites-logo.png`} alt="logo" />
            <Nav>
              <NavItemFavorites>
                <img src={`/img/star-fav.png`} />
                <NavLink to={`/`}>Home</NavLink>
              </NavItemFavorites>
            </Nav>
          </Header>
          <FavoritesPokemonsList />
      </Wrapper>
    );
  }
}

export const FavoritesPokemons = FavoritesPokemonsPure;
