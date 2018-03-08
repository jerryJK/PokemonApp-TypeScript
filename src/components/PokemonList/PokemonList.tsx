import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Wrapper } from './PokemonList.s';
import { StateType }  from '../../model/State';

type StateProps = {
  pokemonList: object[]
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
      return (
        <Wrapper>
          {this.props.pokemonList.map((pokemon: {name: string}, index: number) => {
              return (
                <PokemonCard key={pokemon.name} id={index + 1} pokemon={pokemon} />
              )
          })}
        </Wrapper>
      );
    }

}

function mapStateToProps(state: StateType) {
  const { pokemonList } = state.pokemon;
  return {
    pokemonList
  }
};

export const PokemonList = connect(mapStateToProps, {getData})(PokemonListPure);
