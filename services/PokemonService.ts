import { PokemonResumo } from "../models/Pokemon";

export const adicionarAoCatalogo = (
    catalogo: PokemonResumo[], 
    pokemon: PokemonResumo
): PokemonResumo[] => {
    const existe = catalogo.some((item) => {
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

export const listarCatalogo = (
    catalogo: PokemonResumo[]
): void => {

    if (catalogo.length === 0) {
        console.log("[AVISO] Catálogo vazio.");
        return;
    }

    catalogo.forEach((pokemon) => {
        console.log("ID:", pokemon.id);
        console.log("Nome:", pokemon.nome);
        console.log("Tipos:", pokemon.tipos);
        console.log("Altura:", pokemon.altura);
        console.log("Peso:", pokemon.peso);
        console.log("--------------------");
    });
};

export const removerDoCatalogo = (
    catalogo: PokemonResumo[], id: number
): PokemonResumo[] => {
    const existe = catalogo.some(function (pokemon) {
        return pokemon.id === id;
    });

    if (!existe) {
        console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
        return catalogo;
    }

    const catalogoAtualizado = catalogo.filter(
        (pokemon) => pokemon.id !== id
    );

    console.log("[OK] Pokémon removido do catálogo.");

    return catalogoAtualizado;
}