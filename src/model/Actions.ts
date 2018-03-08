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

export type ActionsType = Readonly<ActionGetDataDone | ActionGetDataFailed | ActionGetDataRequested | ActionGetPokemon>;
