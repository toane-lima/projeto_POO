let turma = [];


function listarAluno(){
   Interface.listar(turma);
}


function btnSalvar(){
  let a = Interface.salvar();
  turma.push(a);
}


function cadastroAluno(){
   Interface.cadastrar();
}

function editarNome(index) {
  let novoNome = prompt("Digite o novo nome do aluno:", turma[index].getNome());
  
  if (novoNome !== null && novoNome.trim() !== "") {
    turma[index].setNome(novoNome);
    listarAluno(); 
  }
}

function editarNota(index, numeroDaNota) {
  let notaAtual;
  if (numeroDaNota === 1) notaAtual = turma[index].getNota1();
  else if (numeroDaNota === 2) notaAtual = turma[index].getNota2();
  else if (numeroDaNota === 3) notaAtual = turma[index].getNota3();

  let novaNotaTexto = prompt("Digite o novo valor para a Nota " + numeroDaNota + ":", notaAtual);
  
  if (novaNotaTexto !== null && novaNotaTexto.trim() !== "") {
    let novaNota = Number(novaNotaTexto);
    
    if (numeroDaNota === 1) turma[index].setNota1(novaNota);
    else if (numeroDaNota === 2) turma[index].setNota2(novaNota);
    else if (numeroDaNota === 3) turma[index].setNota3(novaNota);
    
    let n1 = turma[index].getNota1();
    let n2 = turma[index].getNota2();
    let n3 = turma[index].getNota3();

    let novaMedia = turma[index].gerarMedia(n1, n2, n3);
    turma[index].gerarEstado(novaMedia);
    
    listarAluno(); 
  }
}