async function buscarPokemon() {
    try {
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        const dados = await resposta.json();
        console.log("Id: ", dados.id);
        console.log("Nome: ", dados.name);
        console.log("Tipo: ", dados.types[0].type.name);
        console.log("Altura: ", dados.height);
        console.log("Peso: ", dados.weight);
        const pokemon = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types[0].type.name,
            altura: dados.height,
            peso: dados.weight
        };
        return pokemon;
    }
    catch (erro) {
        console.log("Erro ao buscar pokemon:", erro);
        return null;
    }
}
buscarPokemon();
export {};
