import { PokemonResumo } from "../models/Pokemon";

export function adicionarAoCatalogo(catalogo: PokemonResumo[], pokemon: PokemonResumo): PokemonResumo[] {
  
  const jaExiste = catalogo.some((item) => item.id === pokemon.id);

  if (jaExiste) {
    console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
    return catalogo;
  }

  console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  return [...catalogo, pokemon];
}

