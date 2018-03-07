import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Wrapper } from './PokemonList.s';

type StateProps = {
  data: object[]
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
      console.log('data' + this.props.data)
      return (
        <Wrapper>
          {this.props.data.map((pokemon: {name: string}, index: number) => {
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
