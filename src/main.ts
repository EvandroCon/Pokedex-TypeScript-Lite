export interface PokemonResumo {
    id: number;
    nome: string;
    tipos: string[];
    altura: number;
    peso: number;
}

async function buscarPokemon(nomeOuId: string | number): Promise<PokemonResumo | null> {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);

        const dados = await resposta.json();

        const pokemon: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types[0].type.name,
            altura: dados.height,
            peso: dados.weight
        };

        return pokemon;

    } catch (erro) {
        console.log("Erro ao buscar pokemon:", erro);
        return null;
    }
}

buscarPokemon("pikachu").then(function (pokemon) {
    console.log(pokemon);
});