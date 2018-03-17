import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Wrapper } from './PokemonList.s';
import { Pokemon }  from '../../model/Pokemon';

type StateProps = {
  pokemon: {
    pokemonList: Array<Pokemon>
  }
}

type DispatchProps = {
  getData: () => object
}

type Props = StateProps & DispatchProps;

class PokemonListPure extends React.Component <Props> {

  componentDidMount() {
      this.props.getData();
  }

  render() {
      const pokemonList = this.props.pokemon.pokemonList;

      return (
        <Wrapper>
          {pokemonList.map((pokemon: {name: string}, index: number) => {
              return (
                <PokemonCard key={pokemon.name} id={index + 1} pokemonParent={pokemon} />
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

export const PokemonList = connect(mapStateToProps, {getData})(PokemonListPure);
