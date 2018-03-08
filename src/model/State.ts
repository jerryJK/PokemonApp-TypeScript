export type StateType = Readonly<{
  pokemon: {
    isLoading: boolean,
    isError: boolean,
    pokemonList: object[],
    selectedPokemon: object | null
  }
}>
