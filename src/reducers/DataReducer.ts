import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON } from '../constants';
// import { Pokemon } from '../model/Pokemon';

// type State = {
//   pokemon: {
//     isLoading: boolean,
//     isError: boolean,
//     pokemonList: Array<Pokemon> | object[],
//     selectedPokemon: Pokemon | null
//   }
// }

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

type Actions = Readonly<ActionGetDataDone | ActionGetDataFailed | ActionGetDataRequested | ActionGetPokemon>;

const initialState = {
                      pokemon: {
                        isLoading: false,
                        isError: false,
                        pokemonList: [],
                        selectedPokemon: null
                      }
                     };

export const DataReducer = (state: any = initialState, action: Actions ) => {
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
