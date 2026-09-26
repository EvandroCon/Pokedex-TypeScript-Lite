"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPokemon = buscarPokemon;
async function buscarPokemon(nomeOuId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
            return null;
        }
        const dados = await resposta.json();
        const pokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name),
            altura: dados.height,
            peso: dados.weight,
        };
        console.log(`[OK] Pokémon encontrado: ${pokemonResumo.nome}`);
        return pokemonResumo;
    }
    catch (erro) {
        console.log(`[ERRO] Não foi possível buscar o Pokémon: ${nomeOuId}`);
        return null;
    }
}
