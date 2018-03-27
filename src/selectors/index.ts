import { createSelector } from 'reselect';

const inputSelectorPokemonList = (state) => state.pokemon.pokemonList;
const inputSelectorVisibilityFilter = (state) => state.pokemon.visibilityFilter;

export const getFilteredPokemons = createSelector(
  inputSelectorPokemonList,
  inputSelectorVisibilityFilter,
  (list, filter) => {
    switch (filter) {
        case 'SHOW_0-25':
            return list.slice(0, 25)
        case 'SHOW_26-50':
            return list.slice(25, 50)
        case 'SHOW_51-75':
            return list.slice(50, 75)
        case 'SHOW_76-100':
            return list.slice(75, 100)
       default:
         return list
    }
  }
)
