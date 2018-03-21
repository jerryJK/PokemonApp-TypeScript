import { GET_DATA_DONE, GET_DATA_FAILED, GET_DATA_REQUESTED, GET_POKEMON } from '../constants';
import { handleActions } from 'redux-actions';

type State = boolean;

const initialState = false;

const setLoadingTrue = (state, action) => {
  return true;
};

const setLoadingFalse = (state, action) => {
  return false;
};

export const isLoading = handleActions<State, any> ({
  [GET_DATA_REQUESTED]: setLoadingTrue,
  [GET_DATA_DONE]: setLoadingFalse,
  [GET_DATA_FAILED]: setLoadingFalse,
  [GET_POKEMON]: setLoadingFalse
}, initialState);
