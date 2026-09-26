import { readFile, writeFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon";

export async function carregarPokemonBox(): Promise<PokemonResumo[]> {
    const dados = await readFile("pc_box.json", "utf-8");

    return JSON.parse(dados);
}

export async function salvarPokemonBox(box: PokemonResumo[]): Promise<void> {

    const dados = JSON.stringify(box, null, 4);

    await writeFile("pc_box.json", dados, "utf-8");
}

export async function adicionarPokemon(pokemon: PokemonResumo): Promise<void> {

    const box = await carregarPokemonBox();

    const existe = box.some(function (item) {
        return item.id === pokemon.id;
    });

    if (existe) {
        console.log(
            "[AVISO]",
            pokemon.nome,
            "já está na PC Box."
        );
        return;
    }

    box.push(pokemon);

    await salvarPokemonBox(box);

    console.log(
        "[OK]",
        pokemon.nome,
        "adicionado à PC Box."
    );
}