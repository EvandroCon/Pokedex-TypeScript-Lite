import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

export const buscarPokemon = async (
    nomeOuId: string | number
): Promise<PokemonResumo | null> => {

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`
        );

        if (!resposta.ok) {
            console.log("[AVISO] Pokémon não encontrado.");
            return null;
        }

        const dados: PokemonApiResponse = await resposta.json();

        const pokemon: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => {
                return item.type.name;
            }),
            altura: dados.height,
            peso: dados.weight
        };

        return pokemon;

    } catch (erro) {
        console.log("[ERRO] Não foi possível buscar o Pokémon.");
        return null;
    }
}