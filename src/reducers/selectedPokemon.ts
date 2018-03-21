import { GET_POKEMON } from '../constants';
import { handleActions } from 'redux-actions';
import { Pokemon } from '../model/Pokemon';

type State = Pokemon;

const initialState = null;

const getPokemon = (state, action) => {
  return action.payload;
};

export const selectedPokemon = handleActions<State, any> ({
  [GET_POKEMON]: getPokemon
}, initialState);
