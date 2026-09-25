import { readFile } from "node:fs/promises";
import { PokemonResumo } from "../models/Pokemon";

export async function carregarPokemonBox(): Promise<PokemonResumo[]> {
    const dados = await readFile("pc_box.json", "utf-8");

    return JSON.parse(dados);
}