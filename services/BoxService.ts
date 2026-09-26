import { readFile, writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon";

import { buscarPokemon } from "./PokeApiService";

export async function carregarPokemonBox(): Promise<PokemonResumo[]> {
    const dados = await readFile("pc_box.json", "utf-8");

    return JSON.parse(dados);
}

export async function salvarPokemonBox(box: PokemonResumo[]): Promise<void> {

    const dados = JSON.stringify(box, null, 4);

    await writeFile("pc_box.json", dados, "utf-8");
}

export async function adicionarPokemonBox(nomeOuId: string | number): Promise<void> {
    const pokemon = await buscarPokemon(nomeOuId);

    if (pokemon === null) {
        console.log("[AVISO] Pokémon não encontrado.");
        return;
    }

    const box = await carregarPokemonBox();

    const existe = box.some(function (item) {
        return item.id === pokemon.id;
    });

    if (existe) {
        console.log("[AVISO]", pokemon.nome, "já está na PC Box.");
        return;
    }

    box.push(pokemon);

    await salvarPokemonBox(box);

    console.log("[OK]", pokemon.nome, "adicionado à PC Box.");
}

export async function listarPokemonBox(): Promise<void> {
    const box = await carregarPokemonBox();

    if (box.length === 0) {
        console.log("[AVISO] PC Box vazia.");
        return;
    }

    box.forEach(function (pokemon) {
        console.log("ID:", pokemon.id);
        console.log("Nome:", pokemon.nome);
        console.log("Tipos:", pokemon.tipos);
        console.log("Altura:", pokemon.altura);
        console.log("Peso:", pokemon.peso);
        console.log("--------------------");
    });
}

export async function removerPokemon(id: number): Promise<void> {
    const box = await carregarPokemonBox();

    const existe = box.some(function (pokemon) {
        return pokemon.id === id;
    });

    if (!existe) {
        console.log("[AVISO] Pokémon não encontrado na PC Box.");
        return;
    }

    const boxAtualizada = box.filter(function (pokemon) {
        return pokemon.id !== id;
    });

    await salvarPokemonBox(boxAtualizada);

    console.log("[OK] Pokémon removido da PC Box.");
}