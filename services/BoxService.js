"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carregarPokemonBox = carregarPokemonBox;
const promises_1 = require("node:fs/promises");
async function carregarPokemonBox() {
    const dados = await (0, promises_1.readFile)("pc_box.json", "utf-8");
    return JSON.parse(dados);
}
