// Desafio Integrador 03 — Jogo de adivinhação

const numeroSecreto = 7;
const tentativas = [3, 10, 7];

let acertou = false;

for (const tentativa of tentativas) {
  console.log("Tentativa:", tentativa);

  if (tentativa === numeroSecreto) {
    console.log("🎉 Você acertou!");
    acertou = true;
    break;
  }

  if (tentativa < numeroSecreto) {
    console.log("O número secreto é maior.");
  } else {
    console.log("O número secreto é menor.");
  }
}

if (!acertou) {
  console.log("Fim das tentativas.");
}
