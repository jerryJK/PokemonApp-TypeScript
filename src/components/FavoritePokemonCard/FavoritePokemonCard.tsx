import * as React from 'react';
import { connect } from 'react-redux';
import { deleteFavPokemon } from '../../actions';
import { Wrapper, FavoritePokemonCardContent, PokemonImageWrapper, PokemonName, DeleteButtonWrapper, Image } from './FavoritePokemonCard.s';

type ParentProps = {
  pokemon: {
    name: string,
    id: number
  }
}

type DispatchProps = {
  deleteFavPokemon: (id: number) => {
    type: 'DELETE_FAV_POKEMON',
    payload: number
  }
}

type Props = ParentProps & DispatchProps;

class FavoritePokemonCardPure extends React.Component <Props> {

  handleDeleteButtonClick = (id: number) => {
    this.props.deleteFavPokemon(id);
  }

  render() {
    const pokemon = this.props.pokemon;
    return (
            <Wrapper>
                <FavoritePokemonCardContent>
                  <PokemonImageWrapper>
                      <img src={`/img/${pokemon.id}.png`} />
                  </PokemonImageWrapper>
                  <PokemonName>
                      {pokemon.name}
                  </PokemonName>
                  <DeleteButtonWrapper onClick={() => this.handleDeleteButtonClick(pokemon.id)}>
                    <Image src={`/img/x-button.png`} />
                  </DeleteButtonWrapper>
                </FavoritePokemonCardContent>
            </Wrapper>
    )
    }

}

export const FavoritePokemonCard = connect(null, {deleteFavPokemon})(FavoritePokemonCardPure);
