"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPokemon = buscarPokemon;
async function buscarPokemon(nomeOuId) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
        if (!resposta.ok) {
            return null;
        }
        const dados = await resposta.json();
        const pokemon = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map(function (item) {
                return item.type.name;
            }),
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
