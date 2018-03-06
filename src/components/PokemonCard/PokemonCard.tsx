import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName } from './PokemonCard.s';

class PurePokemonCard extends React.Component <any, any> {

  handleButtonClick(id: number) {
    // console.log(id);
    const {getData} = this.props;
    getData(id);
  }

  render() {
    const {pokemon, id} = this.props;
    return (
            <Wrapper onClick={() => this.handleButtonClick(id)}>
                <PokemonCardContent>
                  <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                  </PokemonImageWrapper>
                  <PokemonName>
                      {pokemon.name}
                  </PokemonName>
                </PokemonCardContent>
            </Wrapper>
    )
    }

}

export const PokemonCard = connect<{}, {}, any>(null, {getData})(PurePokemonCard);
