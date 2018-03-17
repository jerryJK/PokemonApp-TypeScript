import * as React from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../actions';
import { Wrapper, PokemonCardContent, PokemonImageWrapper, PokemonName, PokemonSkills, PokemonStarWrapper, Image } from './SelectedPokemon.s';
import { Pokemon }  from '../../model/Pokemon';

type StateProps = {
  pokemon: {
    favorites: Array<Pokemon>
  }
}

type DispatchProps = {
  addToFavorites: (obj: Pokemon) => {
    type: 'ADD_TO_FAVORITES',
    payload: Pokemon
  }
}

type ParentProps = {
  selectedPokemon: Pokemon
}

type Props = StateProps & DispatchProps & ParentProps;

class SelectedPokemonPure extends React.Component<Props> {

  handleStarClick(id: number, name: string, height: number, weight: number) {
    const addToFavorites = this.props.addToFavorites;
    if (!this.checkFavorite(id)) {
      addToFavorites({name, id, height, weight});
    }
  }

  checkFavorite = (id) => {
    const favorites = this.props.pokemon.favorites;
    let idArray = [];
    favorites.forEach(elem => {
      idArray.push(elem.id);
    })
    return idArray.indexOf(id) !== -1;
  }

  render() {
    const name = this.props.selectedPokemon.name;
    const id = this.props.selectedPokemon.id;
    const height = this.props.selectedPokemon.height;
    const weight = this.props.selectedPokemon.weight;
    const isFavorite = this.checkFavorite(id);

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
                      <Image isFavorite={isFavorite} />
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

export const SelectedPokemon = connect(mapStateToProps, {addToFavorites})(SelectedPokemonPure);
