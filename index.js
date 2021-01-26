"use strict";
exports.__esModule = true;
var fetch = require("node-fetch");
var Pokemon = /** @class */ (function () {
    function Pokemon(id) {
        this.id = id;
    }
    Pokemon.prototype.getPokemon = function () {
        var url = "https://pokeapi.co/api/v2/pokemon/" + this.id + "/";
        return fetch(url).then(function (data) { return data; })["catch"](function (err) { return err; });
    };
    return Pokemon;
}());
var pokemon = new Pokemon(1);
var data = pokemon.getPokemon();
var printPokemon = function () {
    data.then(function (it) {
        console.log(it);
    });
};
printPokemon();
