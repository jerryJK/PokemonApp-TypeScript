import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Pokemon }  from '../../model/Pokemon';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName, PokemonStarWrapper, PokemonId } from './PokemonCard.s';

type StateProps = {
  favoritesPokemons: Array<Pokemon>
}

type DispatchProps = {
  getData: (id: number) => void
}

type OwnProps = {
  pokemonParent: {
    name: string,
    id: number
  }
}

type Props = StateProps & DispatchProps & OwnProps;

class PokemonCardPure extends React.Component <Props> {

  handleButtonClick(id: number) {
    this.props.getData(id);
  }

  checkFavorite = (id: number) => {
    const favorites  = this.props.favoritesPokemons;
    let idArray = favorites.map(favorite => favorite.id);
    return idArray.indexOf(id) !== -1;
  }

  render() {
    const pokemonParent = this.props.pokemonParent;
    const isFavorite = this.checkFavorite(pokemonParent.id);

    return (
            <Wrapper onClick={() => this.handleButtonClick(pokemonParent.id)}>
                <PokemonCardContent>
                  <PokemonImageWrapper>
                      <img src={`/img/${pokemonParent.id}.png`} />
                  </PokemonImageWrapper>
                  <PokemonName>
                      {pokemonParent.name}
                  </PokemonName>
                  <PokemonId>
                      {`id: ${pokemonParent.id}`}
                  </PokemonId>
                  <PokemonStarWrapper>
                    {isFavorite && <img src={`/img/star-fav.png`} />}
                  </PokemonStarWrapper>
                </PokemonCardContent>
            </Wrapper>
          )
    }

}

const mapStateToProps = (state): StateProps => ({
    favoritesPokemons: state.pokemon.favoritesPokemons
});

const mapDispatchToProps = dispatch => ({
  getData: (id) => dispatch(getData(id))
})

export const PokemonCard = connect(mapStateToProps, mapDispatchToProps)(PokemonCardPure);
