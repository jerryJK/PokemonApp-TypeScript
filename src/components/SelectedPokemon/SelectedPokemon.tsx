import * as React from 'react';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName, PokemonSkills } from './SelectedPokemon.s';
import { SelectedPokemonType }  from '../../model/SelectedPokemon';

type Props = {
  selectedPokemon: SelectedPokemonType
}

class SelectedPokemonPure extends React.Component<Props> {

  render() {
    const {name, id, height, weight} = this.props.selectedPokemon;

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
