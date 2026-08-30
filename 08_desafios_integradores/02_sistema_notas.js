// Desafio Integrador 02 — Sistema de notas

const aluno = {
  nome: "Aluno Exemplo",
  notas: [8, 7, 9, 6]
};

function calcularMedia(notas) {
  let soma = 0;

  for (const nota of notas) {
    soma += nota;
  }

  return soma / notas.length;
}

const media = calcularMedia(aluno.notas);

let situacao;

if (media >= 7) {
  situacao = "Aprovado";
} else if (media >= 5) {
  situacao = "Recuperação";
} else {
  situacao = "Reprovado";
}

console.log("Aluno:", aluno.nome);
console.log("Notas:", aluno.notas);
console.log("Média:", media.toFixed(2));
console.log("Situação:", situacao);
