// 03 — Objeto personagem com comportamento

const personagem = {
  nome: "Herói",
  nivel: 1,
  experiencia: 0,

  ganharExperiencia(valor) {
    this.experiencia += valor;

    if (this.experiencia >= 100) {
      this.nivel++;
      this.experiencia = 0;
      console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    }
  }
};

personagem.ganharExperiencia(100);
console.log(personagem);
