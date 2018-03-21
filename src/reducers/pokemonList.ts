import { GET_DATA_DONE } from '../constants';
import { handleActions } from 'redux-actions';
import { Pokemon } from '../model/Pokemon';

type State = Array<Pokemon>

const initialState = []

const getDataDone = (state, action) => {
  return action.payload.results
};

export const pokemonList = handleActions<State, any> ({
  [GET_DATA_DONE]: getDataDone
}, initialState);
