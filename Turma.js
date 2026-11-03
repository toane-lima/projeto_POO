class Turma {
    #professor;
    #nomeCurso;
    #alunos;
  
    constructor(professor, nomeCurso) {
      this.#professor = professor;
      this.#nomeCurso = nomeCurso;
      this.#alunos = [];
    }
  
    getProfessor() { return this.#professor; }
    getNomeCurso() { return this.#nomeCurso; }
    getAlunos() { return this.#alunos; }
  
    adicionarAluno(aluno) {
      this.#alunos.push(aluno);
    }
  }