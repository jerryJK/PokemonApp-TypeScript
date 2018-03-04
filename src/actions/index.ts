import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON } from '../constants';
import * as fetch from 'isomorphic-fetch';

export function getPokemon(data: number) {
  console.log(data);
  return {
    type: GET_POKEMON,
    payload: data
  };
}

export function getDataDone(data: any) {
  return {
    type: GET_DATA_DONE,
    payload: data
  };
}

export function getDataRequested() {
  return {
    type: GET_DATA_REQUESTED
  };
}

export function getDataFailed(error: any) {
  return {
    type: GET_DATA_FAILED,
    payload: error
  };
}

export function getData(id: number): any {
  return (dispatch: any) => {
    if (id) {
        dispatch(getDataRequested());
        fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
          .then(res => res.json())
          .then(data => {
            // set state for success
            dispatch(getPokemon(data));
          })
          .catch(error => {
            // set state for error
            dispatch(getDataFailed(error));
          })
    } else {
        dispatch(getDataRequested());
        fetch('http://pokeapi.co/api/v2/pokemon?limit=100')
          .then(res => res.json())
          .then(data => {
          console.log(data);
          // set state for success
          dispatch(getDataDone(data));
          })
          .catch(error => {
            dispatch(getDataFailed(error));
          })
    }
  }
}
