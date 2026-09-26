"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokeApiService_1 = require("../services/PokeApiService");
const PokemonService_1 = require("../services/PokemonService");
async function main() {
    let catalogo = [];
    const pikachu = await (0, PokeApiService_1.buscarPokemon)("pikachu");
    if (pikachu !== null) {
        catalogo = (0, PokemonService_1.adicionarAoCatalogo)(catalogo, pikachu);
    }
    const charmander = await (0, PokeApiService_1.buscarPokemon)("charmander");
    if (charmander !== null) {
        catalogo = (0, PokemonService_1.adicionarAoCatalogo)(catalogo, charmander);
    }
    const pikachuDuplicado = await (0, PokeApiService_1.buscarPokemon)("pikachu");
    if (pikachuDuplicado !== null) {
        catalogo = (0, PokemonService_1.adicionarAoCatalogo)(catalogo, pikachuDuplicado);
    }
    await (0, PokeApiService_1.buscarPokemon)("pokemon-inexistente");
    (0, PokemonService_1.listarCatalogo)(catalogo);
    catalogo = (0, PokemonService_1.removerDoCatalogo)(catalogo, 25);
    (0, PokemonService_1.listarCatalogo)(catalogo);
}
main();
