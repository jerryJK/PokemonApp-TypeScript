import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON } from '../constants';
import { StateType }  from '../model/State';
import { ActionsType }  from '../model/Actions';

const initialState = {
                      pokemon: {
                        isLoading: false,
                        isError: false,
                        pokemonList: [],
                        selectedPokemon: null
                      }
                     };

export const DataReducer = (state: StateType = initialState, action: ActionsType ) => {
    switch (action.type) {
        case GET_DATA_REQUESTED:
            return { ...state, pokemon: { ...state.pokemon, isLoading: true }};
        case GET_DATA_DONE:
            return { ...state, pokemon: { ...state.pokemon, pokemonList: action.payload.results, isLoading: false }};
        case GET_DATA_FAILED:
            return { ...state, pokemon: { ...state.pokemon, isLoading: false, isError: true }};
        case GET_POKEMON:
            return { ...state, pokemon: { ...state.pokemon, selectedPokemon: action.payload, isLoading: false }};
        default:
            return state;
    }
};
