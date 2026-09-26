import { PokemonResumo } from "../models/Pokemon";

export function adicionarAoCatalogo(catalogo: PokemonResumo[], pokemon: PokemonResumo): PokemonResumo[] {
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

export function listarCatalogo(catalogo: PokemonResumo[]): void {

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