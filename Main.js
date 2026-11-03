let turmas = [];

function btnSalvarTurma() {
  let t = Interface.salvarTurma();
  if (t !== null) {
    turmas.push(t);
    Interface.carregarTurmasNoSelect(turmas);
    
    document.getElementById('professor').value = '';
    document.getElementById('curso').value = '';
  }
}

function listarAluno() {
  Interface.listar(turmas); 
}

function btnSalvar() {

  if (turmas.length === 0) {
    alert("Erro: Nenhuma turma cadastrada. Cadastre uma turma primeiro.");
    return;
  }
  
  let a = Interface.salvar();
  
  let indiceTurmaEscolhida = document.getElementById('select-turma').value;
  
  turmas[indiceTurmaEscolhida].adicionarAluno(a);
}

function cadastroAluno(){
   Interface.cadastrar();
}

function editarNome(indiceTurma, indiceAluno) {
  let aluno = turmas[indiceTurma].getAlunos()[indiceAluno];
  let novoNome = prompt("Digite o novo nome do aluno:", aluno.getNome());
  
  if (novoNome !== null && novoNome.trim() !== "") {
    aluno.setNome(novoNome);
    listarAluno(); // Atualiza a tela
  }
}

function editarNota(indiceTurma, indiceAluno, numeroDaNota) {
  let aluno = turmas[indiceTurma].getAlunos()[indiceAluno];
  let notaAtual;
  
  if (numeroDaNota === 1) notaAtual = aluno.getNota1();
  else if (numeroDaNota === 2) notaAtual = aluno.getNota2();
  else if (numeroDaNota === 3) notaAtual = aluno.getNota3();

  let novaNotaTexto = prompt("Digite o novo valor para a Nota " + numeroDaNota + ":", notaAtual);
  
  if (novaNotaTexto !== null && novaNotaTexto.trim() !== "") {
    let novaNota = Number(novaNotaTexto);
    
    if (numeroDaNota === 1) aluno.setNota1(novaNota);
    else if (numeroDaNota === 2) aluno.setNota2(novaNota);
    else if (numeroDaNota === 3) aluno.setNota3(novaNota);
    
    let n1 = aluno.getNota1();
    let n2 = aluno.getNota2();
    let n3 = aluno.getNota3();
    
    // Recalcula média e estado
    let novaMedia = aluno.gerarMedia(n1, n2, n3);
    aluno.gerarEstado(novaMedia);
    
    listarAluno(); // Atualiza a tela
  }
}