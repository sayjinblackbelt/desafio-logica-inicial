// 03 — Percorrendo um array

const numeros = [2, 4, 6, 8, 10];

for (let indice = 0; indice < numeros.length; indice++) {
  console.log(`Índice ${indice}: ${numeros[indice]}`);
}

console.log("--- for...of ---");

for (const numero of numeros) {
  console.log(numero);
}
