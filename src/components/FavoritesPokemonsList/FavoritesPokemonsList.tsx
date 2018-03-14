import * as React from 'react';
import { connect } from 'react-redux';
// import { getData } from '../../actions';
import { FavoritePokemonCard } from '../FavoritePokemonCard/FavoritePokemonCard';
import { Wrapper } from './FavoritesPokemonsList.s';
import { Pokemon }  from '../../model/Pokemon';

type StateProps = {
  favorites: Array<Pokemon>
}

type Props = StateProps;

class FavoritesPokemonsListPure extends React.Component <Props> {

  render() {
      const { favorites } = this.props;
      return (
        <Wrapper>
          {favorites.map((pokemon: {name: string, id: number}, index: number) => {
              return (
                <FavoritePokemonCard key={pokemon.name} pokemon={pokemon} />
              )
          })}
        </Wrapper>
      );
    }

}

function mapStateToProps(state: {pokemon: { favorites: Array<Pokemon> }}) {
  console.log(state);
  const { favorites } = state.pokemon;
  return {
    favorites
  }
};

export const FavoritesPokemonsList = connect(mapStateToProps, {})(FavoritesPokemonsListPure);
