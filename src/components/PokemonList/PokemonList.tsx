import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Wrapper } from './PokemonList.s';
import { Pokemon }  from '../../model/Pokemon';
import { getFilteredPokemons } from '../../selectors';

type StateProps = {
  pokemonList: Array<Pokemon>
}

type DispatchProps = {
  getData: () => void
}

type Props = StateProps & DispatchProps;

class PokemonListPure extends React.Component <Props> {

  componentDidMount() {
      this.props.getData();
  }

  render() {
      const pokemonList = this.props.pokemonList;
      console.log(pokemonList);

      return (
        <Wrapper>
          {
            pokemonList.map((pokemon, index) => {
              return (
                <PokemonCard key={pokemon.name} pokemonParent={pokemon} />
              )
            })
          }
        </Wrapper>
      );
    }

}

const mapStateToProps = (state): StateProps => ({
  pokemonList: getFilteredPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
})

export const PokemonList = connect(mapStateToProps, mapDispatchToProps)(PokemonListPure);
