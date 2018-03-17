import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Pokemon }  from '../../model/Pokemon';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName, PokemonStarWrapper } from './PokemonCard.s';

type StateProps = {
  pokemon: {
    favorites: Array<Pokemon>
  }
}

type DispatchProps = {
  getData: (id: number) => object
}

type ParentProps = {
  pokemonParent: {
    name: string
  },
  id: number
}

type Props = StateProps & DispatchProps & ParentProps;

class PokemonCardPure extends React.Component <Props> {

  handleButtonClick(id: number) {
    this.props.getData(id);
  }

  checkFavorite = (id: number) => {
    const favorites  = this.props.pokemon.favorites;
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

function mapStateToProps(state: StateProps) {
  const pokemon = state.pokemon;
  return {
    pokemon
  }
};

export const PokemonCard = connect(mapStateToProps, {getData})(PokemonCardPure);
