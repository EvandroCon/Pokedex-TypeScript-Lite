"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function buscarPokemon(nomeOuId) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
        const dados = await resposta.json();
        const pokemon = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types[0].type.name,
            altura: dados.height,
            peso: dados.weight
        };
        return pokemon;
    }
    catch (erro) {
        console.log("Erro ao buscar pokemon:", erro);
        return null;
    }
}
buscarPokemon("pikachu").then(function (pokemon) {
    console.log(pokemon);
});
