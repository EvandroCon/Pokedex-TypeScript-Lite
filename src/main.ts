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
    
    if (pokemon !== null) {
        adicionarAoCatalogo(catalogo, pokemon);
        listarCatalogo(catalogo);
    }
});

let catalogo: PokemonResumo[] = [];

function adicionarAoCatalogo(catalogo: PokemonResumo[], pokemon: PokemonResumo): PokemonResumo[] {
    const existe = catalogo.some(function (item) {
        return item.id === pokemon.id;
    });

    if (existe) {
        console.log("[AVISO]", pokemon.nome, "já está no catalogo.");
    } else {
        catalogo.push(pokemon);
        console.log("[OK]", pokemon.nome, "adcionado ao catalogo.");
    }

    return catalogo;
}



function listarCatalogo(catalogo: PokemonResumo[]): void {

    if (catalogo.length === 0) {
        console.log("[AVISO] Catálogo vazio.");
        return;
    }

    catalogo.forEach(function (pokemon) {
        console.log("ID:", pokemon.id);
        console.log("Nome:", pokemon.nome);
        console.log("Tipos:", pokemon.tipos);
        console.log("Altura:", pokemon.altura);
        console.log("Peso:", pokemon.peso);
        console.log("--------------------");
    });
}



//REMOVER
//A função deverá:
//receber o catálogo;
//receber o ID;
//verificar se o Pokémon existe;
//remover o Pokémon, se existir;
//retornar o catálogo atualizado;
//exibir mensagem clara no terminal.

//function removerDoCatalogo(catalogo: PokemonResumo[], id: number): PokemonResumo[]{

//}
