import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON } from '../constants';

const initialState = {
                      isLoading: false,
                      isError: false,
                      data: [],
                      selectedPokemon: null
                     };

export default (state: any = initialState, action: any) => {
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
