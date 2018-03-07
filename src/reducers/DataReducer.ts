import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON } from '../constants';

interface ActionGetDataDone {
    type: 'GET_DATA_DONE';
    payload: {
      results: object[]
    }
}

interface ActionGetDataFailed {
    type: 'GET_DATA_FAILED';
    payload: object
}

interface ActionGetDataRequested {
    type: 'GET_DATA_REQUESTED';
}

interface ActionGetPokemon {
    type: 'GET_POKEMON';
    payload: object
}

type Action = ActionGetDataDone | ActionGetDataFailed | ActionGetDataRequested | ActionGetPokemon;

type State = {
  isLoading: boolean,
  isError: boolean,
  data: object[],
  selectedPokemon: null | object
}

const initialState = {
                      isLoading: false,
                      isError: false,
                      data: [],
                      selectedPokemon: null
                     };

export const DataReducer = (state: State = initialState, action: Action ) => {
    switch (action.type) {
        case GET_DATA_REQUESTED:
            return { ...state, isLoading: true };
        case GET_DATA_DONE:
            return { ...state, isLoading: false, data: action.payload.results};
        case GET_DATA_FAILED:
            return { ...state, isLoading: false, isError: true };
        case GET_POKEMON:
            return { ...state, isLoading: false, selectedPokemon: action.payload};
        default:
            return state;
    }
};
