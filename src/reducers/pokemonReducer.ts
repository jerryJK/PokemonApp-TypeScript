import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON, DELETE_FAV_POKEMON, ADD_TO_FAVORITES } from '../constants';
import { handleActions } from 'redux-actions';
import { Pokemon } from '../model/Pokemon';
import { combineReducers } from 'redux';

type pokemonList = Array<Pokemon>;
type isError = boolean;
type isLoading = boolean;
type selectedPokemon = Pokemon | null;
type favoritesPokemons = Array<Pokemon>

const initialState = {
    pokemonList: [],
    isLoading: false,
    isError: false,
    selectedPokemon: null,
    favoritesPokemons: []
}

const updateFavorites = (favorites, id) => {
    let newFavorites = favorites.filter(elem => {
        return (
            elem.id !== id
        )
    });
    return newFavorites;
};

const getPokemonList = (state, action) => {
   return action.payload.results
};

const setLoadingTrue = (state, action) => {
   return true;
};

const setLoadingFalse = (state, action) => {
   return false;
};

const setErrorTrue = (state, action) => {
   return true;
};

const getPokemon = (state, action) => {
   return action.payload;
};

const addToFavorites = (state, action) => {
   return [...state, action.payload ]
};

const deleteFavPokemon = (state, action) => {
   return updateFavorites(state, action.payload)
};

const pokemonList = handleActions<pokemonList, any> ({
  [GET_DATA_DONE]: getPokemonList
}, initialState.pokemonList)

const isLoading = handleActions<isLoading, any> ({
  [GET_DATA_REQUESTED]: setLoadingTrue,
  [GET_DATA_DONE]: setLoadingFalse,
  [GET_DATA_FAILED]: setLoadingFalse,
  [GET_POKEMON]: setLoadingFalse
}, initialState.isLoading)

const isError = handleActions<isError, any> ({
  [GET_DATA_FAILED]: setErrorTrue,
}, initialState.isError)

const selectedPokemon = handleActions<selectedPokemon, any> ({
  [GET_POKEMON]: getPokemon
}, initialState.selectedPokemon);

const favoritesPokemons = handleActions<favoritesPokemons, any> ({
  [ADD_TO_FAVORITES]: addToFavorites,
  [DELETE_FAV_POKEMON]: deleteFavPokemon
}, initialState.favoritesPokemons);

export const pokemon = combineReducers({
    isLoading,
    isError,
    pokemonList,
    selectedPokemon,
    favoritesPokemons
})
