import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Pokemon }  from '../../model/Pokemon';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName, PokemonStarWrapper } from './PokemonCard.s';

type StateProps = {
  favoritesPokemons: Array<Pokemon>
}

type DispatchProps = {
  getData: (id: number) => void
}

type OwnProps = {
  pokemonParent: {
    name: string
  },
  id: number
}

type Props = StateProps & DispatchProps & OwnProps;

class PokemonCardPure extends React.Component <Props> {

  handleButtonClick(id: number) {
    this.props.getData(id);
  }

  checkFavorite = (id: number) => {
    const favorites  = this.props.favoritesPokemons;
    let idArray = [];
    favorites.forEach(elem => {
      idArray.push(elem.id);
    })
    return idArray.indexOf(id) !== -1;
  }

  render() {
    const pokemonParent = this.props.pokemonParent;
    const id = this.props.id;
    const isFavorite = this.checkFavorite(id);

    return (
            <Wrapper onClick={() => this.handleButtonClick(id)}>
                <PokemonCardContent>
                  <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                  </PokemonImageWrapper>
                  <PokemonName>
                      {pokemonParent.name}
                  </PokemonName>
                  <PokemonStarWrapper>
                    {isFavorite && <img src={`/img/star-fav.png`} />}
                  </PokemonStarWrapper>
                </PokemonCardContent>
            </Wrapper>
          )
    }

}

const mapStateToProps = (state: StateProps ) => {
  const favoritesPokemons = state.favoritesPokemons;

    return {
        favoritesPokemons
    }
};

const mapDispatchToProps = dispatch => ({
  getData: (id) => dispatch(getData(id))
})

export const PokemonCard = connect(mapStateToProps, mapDispatchToProps)(PokemonCardPure);
