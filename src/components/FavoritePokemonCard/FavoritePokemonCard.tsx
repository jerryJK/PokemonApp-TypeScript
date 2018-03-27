import * as React from 'react';
import { connect } from 'react-redux';
import { deleteFavPokemon } from '../../actions';
import { Wrapper, FavoritePokemonCardContent, PokemonImageWrapper, PokemonName, DeleteButtonWrapper, Image, PokemonId } from './FavoritePokemonCard.s';

type OwnProps = {
  pokemon: {
    name: string,
    id: number
  }
}

type DispatchProps = {
  deleteFavPokemon: (id: number) => void
}

type Props = OwnProps & DispatchProps;

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
                  <PokemonId>
                      {`id: ${pokemon.id}`}
                  </PokemonId>
                  <DeleteButtonWrapper>
                    <Image onClick={() => this.handleDeleteButtonClick(pokemon.id)} src={`/img/x-button.png`} />
                  </DeleteButtonWrapper>
                </FavoritePokemonCardContent>
            </Wrapper>
    )
    }

}

const mapDispatchToProps = dispatch => ({
  deleteFavPokemon: (id) => dispatch(deleteFavPokemon(id)),
})

export const FavoritePokemonCard = connect(null, mapDispatchToProps)(FavoritePokemonCardPure);
