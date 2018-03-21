import { combineReducers } from 'redux';
import { pokemonList } from './pokemonList';
import { selectedPokemon } from './selectedPokemon';
import { favoritesPokemons } from './favoritesPokemons';
import { isLoading } from './isLoading';

export const Reducer = combineReducers({
    pokemonList,
    selectedPokemon,
    favoritesPokemons,
    isLoading
})
