import * as React from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../actions';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName, PokemonSkills, PokemonStarWrapper, Image } from './SelectedPokemon.s';
import { Pokemon }  from '../../model/Pokemon';

type StateProps = {
  selectedPokemon: Pokemon,
  favorites: Array<Pokemon>

}

type DispatchProps = {
  addToFavorites: (obj: object) => {
      type: 'ADD_TO_FAVORITES',
      payload: Pokemon
  }
}

type Props = StateProps & DispatchProps;

class SelectedPokemonPure extends React.Component<Props> {

  handleStarClick(id: number, name: string, height: number, weight: number) {
    const {addToFavorites} = this.props;
    if (!this.checkFavorite(id)) {
      addToFavorites({name, id, height, weight});
    }
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
    const {name, id, height, weight} = this.props.selectedPokemon;
    let isFavorite = this.checkFavorite(id);

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
                    <PokemonStarWrapper onClick={() => this.handleStarClick(id, name, height, weight)}>
                      <Image src={(isFavorite) ? `/img/star-fav.png` : `/img/star-empty.png`} />
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

export const SelectedPokemon = connect(mapStateToProps, {addToFavorites})(SelectedPokemonPure);
