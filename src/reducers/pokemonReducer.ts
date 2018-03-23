import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON, ADD_TO_FAVORITES, DELETE_FAV_POKEMON } from '../constants';
import { handleActions } from 'redux-actions';
import { Pokemon } from '../model/Pokemon';

type State = {
    isLoading: boolean,
    isError: boolean,
    pokemonList: Array<Pokemon>,
    selectedPokemon: Pokemon | null,
    favoritesPokemons: Array<Pokemon>
};

const initialState = {
    isLoading: false,
    isError: false,
    pokemonList: [],
    selectedPokemon: null,
    favoritesPokemons: []
};

 const deletePokemonFav = (favorites, id) => {
     let newFavorites = favorites.filter(elem => {
         return (
             elem.id !== id
         )
     });
     return newFavorites;
 };

 const getDataDone = (state, action) => {
   return {
     ...state,
     pokemonList: action.payload.results,
     isLoading: false
   };
 };

 const getDataRequested = (state, action) => {
   return {
     ...state,
     isLoading: true
   };
 };

 const getDataFailed = (state, action) => {
   return {
     ...state,
     isLoading: false,
     isError: true
   };
 };

 const getPokemon = (state, action) => {
   return {
     ...state,
     selectedPokemon: action.payload,
     isLoading: false
   };
 };

 const addToFavorites = (state, action) => {
   return {
     ...state,
     favoritesPokemons: [ ...state.favoritesPokemons, action.payload]
   };
 };

 const deleteFavPokemon = (state, action) => {
   return {
     ...state,
     favoritesPokemons: deletePokemonFav(state.favoritesPokemons, action.payload)
   };
 };

export const pokemon = handleActions<State, any> ({
  [GET_DATA_DONE]: getDataDone,
  [GET_DATA_REQUESTED]: getDataRequested,
  [GET_DATA_FAILED]: getDataFailed,
  [GET_POKEMON]: getPokemon,
  [ADD_TO_FAVORITES]: addToFavorites,
  [DELETE_FAV_POKEMON]: deleteFavPokemon
}, initialState);
