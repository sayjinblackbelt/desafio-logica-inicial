// 03 — Operadores lógicos

const temConta = true;
const senhaCorreta = true;
const contaBloqueada = false;

const podeEntrar = temConta && senhaCorreta && !contaBloqueada;

console.log("Pode acessar o sistema?", podeEntrar);

const acessoAlternativo = false;
console.log("Tem alguma forma de acesso?", podeEntrar || acessoAlternativo);
