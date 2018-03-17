import * as React from 'react';
import { connect } from 'react-redux';
// import { getData } from '../../actions';
import { FavoritePokemonCard } from '../FavoritePokemonCard/FavoritePokemonCard';
import { Wrapper } from './FavoritesPokemonsList.s';
import { Pokemon }  from '../../model/Pokemon';

type StateProps = {
  pokemon: {
    favorites: Array<Pokemon>
  }
}

type Props = StateProps;

class FavoritesPokemonsListPure extends React.Component <Props> {

  render() {
      const favorites = this.props.pokemon.favorites;
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

function mapStateToProps(state: StateProps) {
  const pokemon = state.pokemon;
  return {
    pokemon
  }
};

export const FavoritesPokemonsList = connect(mapStateToProps, {})(FavoritesPokemonsListPure);
