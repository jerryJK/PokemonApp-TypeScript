import * as React from 'react';
import { PokemonListCard, PokemonCardContent, PokemonImageWrapper, PokemonName } from '../styles';

class SelectedPokemon extends React.Component<any, any> {

  render() {
    const {name, id, height, weight} = this.props.pokemon;

    return (
              <PokemonListCard className="col-sm-8 mx-auto">
                  <PokemonCardContent>
                    <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                    </PokemonImageWrapper>
                    <PokemonName>
                      <h3>{name}</h3>
                    </PokemonName>
                    <div className="text-center">
                      {`id: ${id} height: ${height} weight: ${weight}`}
                    </div>
                  </PokemonCardContent>
              </PokemonListCard>
    )
    }
}

export default SelectedPokemon;
