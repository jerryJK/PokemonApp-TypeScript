import * as fetch from 'isomorphic-fetch';

class DataApiPure {
    urlPokemonAll: string;
    urlPokemon: string;

    constructor() {
        this.urlPokemonAll = 'http://pokeapi.co/api/v2/pokemon?limit=100';
        this.urlPokemon = 'http://pokeapi.co/api/v2/pokemon/'
    }

    getPokemonAll = () => {
        return fetch(this.urlPokemonAll)
                .then(response => response.json())
                .catch(error => console.log(error));
    }

    getPokemon = (id: number | string ) => {
        return fetch(`${this.urlPokemon}${id}`)
                .then(response => response.json())
                .catch(error => console.log(error));
    }

  }

  export const DataApi = DataApiPure;
