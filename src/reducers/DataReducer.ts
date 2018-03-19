import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON, ADD_TO_FAVORITES, DELETE_FAV_POKEMON } from '../constants';
import { handleActions } from 'redux-actions';
import { Pokemon } from '../model/Pokemon';

type State = {
    pokemon: {
        isLoading: boolean,
        isError: boolean,
        pokemonList: Array<Pokemon>,
        selectedPokemon: Pokemon | null,
        favorites: Array<Pokemon>
    }
};

const initialState = {
    pokemon: {
        isLoading: false,
        isError: false,
        pokemonList: [],
        selectedPokemon: null,
        favorites: []
    }
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
    pokemon: { ...state.pokemon, pokemonList: action.payload.results, isLoading: false }
  };
};

const getDataRequested = (state, action) => {
  return {
    ...state,
    pokemon: { ...state.pokemon, isLoading: true }
  };
};

const getDataFailed = (state, action) => {
  return {
    ...state,
    pokemon: { ...state.pokemon, isLoading: false, isError: true }
  };
};

const getPokemon = (state, action) => {
  return {
    ...state,
    pokemon: { ...state.pokemon, selectedPokemon: action.payload, isLoading: false }
  };
};

const addToFavorites = (state, action) => {
  return {
    ...state,
    pokemon: { ...state.pokemon, favorites: [ ...state.pokemon.favorites, action.payload]}
  };
};

const deleteFavPokemon = (state, action) => {
  return {
    ...state,
    pokemon: { ...state.pokemon, favorites: deletePokemonFav(state.pokemon.favorites, action.payload)}
  };
};

export const DataReducer = handleActions<State, any> ({
  [GET_DATA_DONE]: getDataDone,
  [GET_DATA_REQUESTED]: getDataRequested,
  [GET_DATA_FAILED]: getDataFailed,
  [GET_POKEMON]: getPokemon,
  [ADD_TO_FAVORITES]: addToFavorites,
  [DELETE_FAV_POKEMON]: deleteFavPokemon
}, initialState);
