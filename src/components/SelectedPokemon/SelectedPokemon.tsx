import * as React from 'react';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName, PokemonSkills } from './SelectedPokemon.s';

class SelectedPokemonPure extends React.Component<any, any> {

  render() {
    const {name, id, height, weight} = this.props.pokemon;

    return (
              <Wrapper>
                  <PokemonCardContent>
                    <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                    </PokemonImageWrapper>
                    <PokemonName>
                      {name}
                    </PokemonName>
                    <PokemonSkills>
                      {`id: ${id} height: ${height} weight: ${weight}`}
                    </PokemonSkills>
                  </PokemonCardContent>
              </Wrapper>
    )
  }
}

export const SelectedPokemon = SelectedPokemonPure;
