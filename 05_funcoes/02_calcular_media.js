// 02 — Função com parâmetros e retorno

function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

const media = calcularMedia(8, 7, 9);

console.log("Média:", media.toFixed(2));
