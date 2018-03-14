import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Pokemon }  from '../../model/Pokemon';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName, PokemonStarWrapper } from './PokemonCard.s';

type StateProps = {
  pokemon: {
    name: string
  },
  id: number,
  favorites: Array<Pokemon>
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

  checkFavorite = (id) => {
    const { favorites } = this.props;
    let idArray = [];
    favorites.forEach(elem => {
      idArray.push(elem.id);
    })
    if (idArray.indexOf(id) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {pokemon, id} = this.props;
    let isFavorite = this.checkFavorite(id);
    return (
            <Wrapper onClick={() => this.handleButtonClick(id)}>
                <PokemonCardContent>
                  <PokemonImageWrapper>
                      <img src={`/img/${id}.png`} />
                  </PokemonImageWrapper>
                  <PokemonName>
                      {pokemon.name}
                  </PokemonName>
                  <PokemonStarWrapper>
                    {isFavorite && <img src={`/img/star-fav.png`} />}
                  </PokemonStarWrapper>
                </PokemonCardContent>
            </Wrapper>
    )
    }

}

function mapStateToProps(state: {pokemon: { favorites: Array<Pokemon> }}) {
  const { favorites } = state.pokemon;
  return {
    favorites
  }
};

export const PokemonCard = connect(mapStateToProps, {getData})(PokemonCardPure);
