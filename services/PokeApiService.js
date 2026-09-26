"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPokemon = void 0;
const buscarPokemon = async (nomeOuId) => {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
        if (!resposta.ok) {
            console.log("[AVISO] Pokémon não encontrado.");
            return null;
        }
        const dados = await resposta.json();
        const pokemon = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => {
                return item.type.name;
            }),
            altura: dados.height,
            peso: dados.weight
        };
        return pokemon;
    }
    catch (erro) {
        console.log("[ERRO] Não foi possível buscar o Pokémon.");
        return null;
    }
};
exports.buscarPokemon = buscarPokemon;
