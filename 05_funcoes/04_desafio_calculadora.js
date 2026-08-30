// Desafio — Calculadora simples

function calcular(numero1, numero2, operacao) {
  if (operacao === "+") return numero1 + numero2;
  if (operacao === "-") return numero1 - numero2;
  if (operacao === "*") return numero1 * numero2;
  if (operacao === "/") {
    if (numero2 === 0) {
      return "Erro: divisão por zero.";
    }
    return numero1 / numero2;
  }

  return "Operação inválida.";
}

console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "-"));
console.log(calcular(10, 5, "*"));
console.log(calcular(10, 5, "/"));
