import { getDataDone, getDataRequested, getDataFailed, getPokemon, addToFavorites, deleteFavPokemon } from '../actions';
import { Pokemon } from '../model/Pokemon';
import { handleActions } from 'redux-actions';

type State = {
  pokemon: {
    isLoading: boolean,
    isError: boolean,
    pokemonList: Array<Pokemon>,
    selectedPokemon: Pokemon | null,
    favorites: Array<Pokemon>
  }
}

type ActionGetDataDone = {
    type: 'GET_DATA_DONE',
    payload: {
      results: object[]
    }
}

type ActionGetDataFailed = {
    type: 'GET_DATA_FAILED',
    payload: object
}

type ActionGetDataRequested = {
    type: 'GET_DATA_REQUESTED',
}

type ActionGetPokemon = {
    type: 'GET_POKEMON',
    payload: object
}

type ActionAddToFavorites = {
    type: 'ADD_TO_FAVORITES',
    payload: Pokemon
}

type ActionDeleteFavPokemon = {
    type: 'DELETE_FAV_POKEMON',
    payload: number
}

const deletePokemonFav = (favorites, id) => {
    let newFavorites = favorites.filter(elem => {
        return (
            elem.id !== id
        )
    });
    return newFavorites;
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

export const DataReducer = handleActions ({
  [getDataDone as any](state: State, payload: ActionGetDataDone) {
    return { ...state, pokemon: { ...state.pokemon, pokemonList: payload.payload.results, isLoading: false }};
  },
  [getDataRequested as any](state: State, payload: ActionGetDataRequested) {
    return { ...state, pokemon: { ...state.pokemon, isLoading: true }};
  },
  [getDataFailed as any](state: State, payload: ActionGetDataFailed) {
    return { ...state, pokemon: { ...state.pokemon, isLoading: false, isError: true }};
  },
  [getPokemon as any](state: State, payload: ActionGetPokemon) {
    return { ...state, pokemon: { ...state.pokemon, selectedPokemon: payload.payload , isLoading: false}};
  },
  [addToFavorites as any](state: State, payload: ActionAddToFavorites) {
    return { ...state, pokemon: { ...state.pokemon, favorites: [ ...state.pokemon.favorites, payload.payload]} };
  },
  [deleteFavPokemon as any](state: State, payload: ActionDeleteFavPokemon) {
    return { ...state, pokemon: { ...state.pokemon, favorites: deletePokemonFav(state.pokemon.favorites, payload.payload)} };
  }
}, initialState);

// export const DataReducer = (state: State = initialState, action: Actions ) => {
//     switch (action.type) {
//         case GET_DATA_REQUESTED:
//             return { ...state, pokemon: { ...state.pokemon, isLoading: true }};
//         case GET_DATA_DONE:
//             return { ...state, pokemon: { ...state.pokemon, pokemonList: action.payload.results, isLoading: false }};
//         case GET_DATA_FAILED:
//             return { ...state, pokemon: { ...state.pokemon, isLoading: false, isError: true }};
//         case GET_POKEMON:
//             return { ...state, pokemon: { ...state.pokemon, selectedPokemon: action.payload, isLoading: false }};
//         default:
//             return state;
//     }
// };
