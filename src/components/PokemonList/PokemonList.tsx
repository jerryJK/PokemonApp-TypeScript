import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Wrapper } from './PokemonList.s';

class PokemonListPure extends React.Component <any, any> {

  componentDidMount() {
      this.props.getData();
  }

  render() {
      console.log(this.props.data)
      return (
        <Wrapper>
          {this.props.data.map((pokemon: any, index: number) => {
              return (
                <PokemonCard key={pokemon.name} id={index + 1} pokemon={pokemon} />
              )
          })}
        </Wrapper>
      );
    }

}

function mapStateToProps(state: any) {
  const {data} = state;
  return {data}
};

export const PokemonList = connect(mapStateToProps, {getData})(PokemonListPure);
