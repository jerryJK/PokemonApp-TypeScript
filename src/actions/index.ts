import { GET_DATA_DONE, GET_DATA_REQUESTED, GET_DATA_FAILED, GET_POKEMON, ADD_TO_FAVORITES, DELETE_FAV_POKEMON } from '../constants';
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

export const addToFavorites = createAction(ADD_TO_FAVORITES,
    payload => payload
);

export const deleteFavPokemon = createAction(DELETE_FAV_POKEMON,
    payload => payload
);

export const getData = (id?: number | string): any => {
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
