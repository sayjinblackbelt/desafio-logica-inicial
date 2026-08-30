// Desafio — Análise de notas

const notas = [8, 7, 9, 6, 10];

let soma = 0;

for (const nota of notas) {
  soma += nota;
}

const media = soma / notas.length;

console.log("Notas:", notas);
console.log("Média:", media.toFixed(2));

if (media >= 7) {
  console.log("Resultado geral: aprovado.");
} else {
  console.log("Resultado geral: revisar os estudos.");
}
