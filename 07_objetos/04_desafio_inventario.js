// Desafio — Inventário simples

const personagem = {
  nome: "Aventureiro",
  inventario: ["Espada", "Poção"]
};

console.log("Inventário inicial:", personagem.inventario);

personagem.inventario.push("Escudo");

console.log("Inventário atualizado:", personagem.inventario);

console.log(`${personagem.nome} possui ${personagem.inventario.length} itens.`);
