import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { PokemonListCard, PokemonCardContent, PokemonImageWrapper, PokemonName } from './PokemonCard.s';

class PokemonCard extends React.Component <any, any> {

  handleButtonClick(id: number) {
    // console.log(id);
    const {getData} = this.props;
    getData(id);
  }

  render() {
    const {pokemon, id} = this.props;
    return (
            <PokemonListCard onClick={() => this.handleButtonClick(id)}>
                <PokemonCardContent>
                  <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                  </PokemonImageWrapper>
                  <PokemonName>
                      {pokemon.name}
                  </PokemonName>
                </PokemonCardContent>
            </PokemonListCard>
    )
    }

}

export default connect<{}, {}, any>(null, {getData})(PokemonCard);
