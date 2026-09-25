"use strict";
async function buscarPokemon(nomeOuId) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
        if (!resposta.ok) {
            console.log("[AVISO] Pokémon não encontrado.");
            return null;
        }
        const dados = await resposta.json();
        const pokemon = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map(function (item) {
                return item.type.name;
            }),
            altura: dados.height,
            peso: dados.weight
        };
        return pokemon;
    }
    catch (erro) {
        console.log("[ERRO] Não foi possível buscar o Pokémon.");
        return null;
    }
}
buscarPokemon("pikachu").then(function (pokemon) {
    if (pokemon !== null) {
        adicionarAoCatalogo(catalogo, pokemon);
        listarCatalogo(catalogo);
        removerDoCatalogo(catalogo, 25);
    }
});
let catalogo = [];
function adicionarAoCatalogo(catalogo, pokemon) {
    const existe = catalogo.some(function (item) {
        return item.id === pokemon.id;
    });
    if (existe) {
        console.log("[AVISO]", pokemon.nome, "já está no catalogo.");
    }
    else {
        catalogo.push(pokemon);
        console.log("[OK]", pokemon.nome, "adcionado ao catalogo.");
    }
    return catalogo;
}
function listarCatalogo(catalogo) {
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
function removerDoCatalogo(catalogo, id) {
    const existe = catalogo.some(function (pokemon) {
        return pokemon.id === id;
    });
    if (!existe) {
        console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
        return catalogo;
    }
    const catalogoAtualizado = catalogo.filter(function (pokemon) {
        return pokemon.id !== id;
    });
    console.log("[OK] Pokémon removido do catálogo.");
    return catalogoAtualizado;
}
