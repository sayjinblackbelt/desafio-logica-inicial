// Desafio Integrador 01 — Calculadora

function calcular(numero1, numero2, operacao) {
  switch (operacao) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      return numero2 !== 0
        ? numero1 / numero2
        : "Erro: divisão por zero.";
    default:
      return "Operação inválida.";
  }
}

console.log("10 + 5 =", calcular(10, 5, "+"));
console.log("10 - 5 =", calcular(10, 5, "-"));
console.log("10 * 5 =", calcular(10, 5, "*"));
console.log("10 / 5 =", calcular(10, 5, "/"));
