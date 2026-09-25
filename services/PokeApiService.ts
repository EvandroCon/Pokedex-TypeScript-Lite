import {
    PokemonResumo,
    PokemonApiResponse
} from "../models/Pokemon";

export async function buscarPokemon(
    nomeOuId: string | number
): Promise<PokemonResumo | null> {

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`
        );

        if (!resposta.ok) {
            return null;
        }

        const dados: PokemonApiResponse = await resposta.json();

        const pokemon: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map(function (item) {
                return item.type.name;
            }),
            altura: dados.height,
            peso: dados.weight
        };

        return pokemon;

    } catch (erro) {
        console.log("Erro ao buscar pokemon:", erro);
        return null;
    }
}