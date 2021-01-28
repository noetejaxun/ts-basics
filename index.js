"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require("node-fetch");
class Pokemon {
    constructor(id) {
        this.id = id;
    }
    getPokemon() {
        const url = `https://lt-func.azurewebsites.net/api/customers?code=4a5vv8taDgGNUrA4iziN25sXZwtNP4MNueAwrR7N0VJFvNMshFBHCw==`;
        return fetch(url).then((data) => data)
            .catch(err => err);
    }
}
let pokemon = new Pokemon(1);
let data = pokemon.getPokemon();
let printPokemon = () => {
    data.then((it) => {
        console.log(it.body);
    });
};
printPokemon();
//# sourceMappingURL=index.js.map