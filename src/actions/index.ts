import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON } from '../constants';
import { DataApi } from '../api/DataApi';
import { createAction } from 'redux-actions';

export const getPokemon = createAction(GET_POKEMON,
    payload => payload
);

export const getDataDone = createAction(GET_DATA_DONE,
    payload => payload
);

export const getDataRequested = createAction(GET_DATA_REQUESTED);

export const getDataFailed = createAction(GET_DATA_FAILED,
    payload => payload
);

// export function getPokemon(data: object) {
//   return {
//     type: GET_POKEMON,
//     payload: data
//   };
// }
//
// export function getDataDone(data: object[]) {
//   return {
//     type: GET_DATA_DONE,
//     payload: data
//   };
// }
//
// export function getDataRequested() {
//   return {
//     type: GET_DATA_REQUESTED
//   };
// }
//
// export function getDataFailed(error: object) {
//   return {
//     type: GET_DATA_FAILED,
//     payload: error
//   };
// }

export function getData(id: number): object {
  return (dispatch: any) => {
    const api = new DataApi();
    if (id) {
        dispatch(getDataRequested());
          api.getPokemon(id)
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
          api.getPokemonAll()
          .then(data => {
          console.log(data);
          // set state for success
          dispatch(getDataDone(data));
          })
          .catch(error => {
            // set state for error
            dispatch(getDataFailed(error));
          })
    }
  }
}
