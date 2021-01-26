import * as fetch from 'node-fetch';

class Pokemon {
    id: number;

    constructor(id : number) {
        this.id = id;
    }

    getPokemon(): Promise<Object> {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.id}/`;
        return fetch(url).then((data) => data)
                         .catch(err => err);
    }
}

let pokemon = new Pokemon(1);

let data = pokemon.getPokemon();

let printPokemon = () => {
    data.then((it) => {
        console.log(it);
    });

}

printPokemon();
