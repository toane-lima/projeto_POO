class Aluno {
  #matricula;
  #nome;
  #nota1;
  #nota2;
  #nota3;
  estado;
  media;

  constructor(matricula, nome, nota1, nota2, nota3) {
    this.#matricula = matricula;
    this.#nome = nome;
    this.#nota1 = nota1;
    this.#nota2 = nota2;
    this.#nota3 = nota3;
  }

  gerarMedia(nota1, nota2, nota3) {
    let m = (nota1 + nota2 + nota3) / 3;
    this.media = m;
    return m;
  }

  gerarEstado(media) {
    let est;
    if (media >= 6) {
      est = 'Aprovado';
    } else if (media >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.estado = est;
    return est;
  }

  getNome() { return this.#nome; }
  getMatricula() { return this.#matricula; }
  setNome(nome) { this.#nome = nome; }
  setNota1(n1) { this.#nota1 = n1; }
  setNota2(n2) { this.#nota2 = n2; }
  setNota3(n3) { this.#nota3 = n3; }
  
  // Novos Getters para as notas privadas
  getNota1() { return this.#nota1; }
  getNota2() { return this.#nota2; }
  getNota3() { return this.#nota3; }
}