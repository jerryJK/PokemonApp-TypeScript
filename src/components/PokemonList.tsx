import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import PokemonCard from './PokemonCard';
import { PokemonsWrapper } from '../styles';

class PokemonList extends React.Component <any, any> {

  componentDidMount() {
      this.props.getData();
  }

  render() {
      console.log(this.props.data)
      return (
        <div>
        <PokemonsWrapper>
          {this.props.data.map((pokemon: any, index: number) => {
              return (
                <PokemonCard key={pokemon.name} id={index + 1} pokemon={pokemon} />
              )
          })}
        </PokemonsWrapper>
        </div>
      );
    }

}

function mapStateToProps(state: any) {
  const {data} = state;
  return {data}
};

export default connect(mapStateToProps, {getData})(PokemonList);
