import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName } from './PokemonCard.s';

type StateProps = {
  pokemon: {
    name: string
  },
  id: number
}

type DispatchProps = {
  getData: (id: number) => object
}

type Props = StateProps & DispatchProps;

class PokemonCardPure extends React.Component <Props> {

  handleButtonClick(id: number) {
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

export const PokemonCard = connect<{}, {}, any>(null, {getData})(PokemonCardPure);
