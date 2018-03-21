import { ADD_TO_FAVORITES, DELETE_FAV_POKEMON } from '../constants';
import { handleActions } from 'redux-actions';
import { Pokemon } from '../model/Pokemon';

type State = Array<Pokemon>;

const initialState = [];

const updateFavorites = (favorites, id) => {
    let newFavorites = favorites.filter(elem => {
        return (
            elem.id !== id
        )
    });
    return newFavorites;
};

const addToFavorites = (state, action) => {
  return [...state, action.payload ]
};

const deleteFavPokemon = (state, action) => {
  return updateFavorites(state, action.payload)
};

export const favoritesPokemons = handleActions<State, any> ({
  [ADD_TO_FAVORITES]: addToFavorites,
  [DELETE_FAV_POKEMON]: deleteFavPokemon
}, initialState);
