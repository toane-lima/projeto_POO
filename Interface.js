class Interface{


constructor(){


}   
static salvar() {
 let matricula = document.getElementById('matricula').value;
 let nome = document.getElementById('nome').value;
 let n1 = Number(document.getElementById('n1').value);
 let n2 = Number(document.getElementById('n2').value);
 let n3 = Number(document.getElementById('n3').value);
 let a1 = new Aluno(matricula, nome, n1, n2, n3);
 let m = a1.gerarMedia(n1, n2, n3);
 a1.gerarEstado(m);
 //turma[turma.length] = a1;
 alert('aluno cadastrado');
 return a1;
}

static listar(turmas) { // Agora recebe 'turmas' (no plural)
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');
  const btnCadastrarTurma = document.getElementById('btn-cadastrar-turma');
  const tabCadastrarTurma = document.getElementById('tab-cadastrar-turma');

  // Ativa a aba de listagem
  btnListar.classList.add('active');
  tabListar.classList.add('active');

  // Desativa a aba de Aluno
  btnCadastrar.classList.remove('active');
  tabCadastrar.classList.remove('active');

  // Desativa a aba de Turma
  btnCadastrarTurma.classList.remove('active');
  tabCadastrarTurma.classList.remove('active');

  let htmlFinal = '';

  if (turmas.length === 0) {
    htmlFinal = '<p>Nenhuma turma cadastrada ainda.</p>';
  } else {
    // Percorre todas as turmas cadastradas
    for (let t = 0; t < turmas.length; t++) {
      let turmaAtual = turmas[t];
      let alunos = turmaAtual.getAlunos(); // Pega a lista de alunos desta turma

      // Cria um título para identificar a turma
      htmlFinal += '<h3>Curso: ' + turmaAtual.getNomeCurso() + ' | Prof: ' + turmaAtual.getProfessor() + '</h3>';

      if (alunos.length === 0) {
        htmlFinal += '<p>Nenhum aluno nesta turma.</p><br>';
      } else {
        // Cria a tabela de alunos especificamente para esta turma
        htmlFinal += '<table>';
        htmlFinal += '<tr><th>Matricula</th><th>Nome</th> <th>Nota 1</th> <th>Nota 2</th> <th>Nota 3</th> <th>Média</th> <th>Situação</th></tr>';
        
        for (let i = 0; i < alunos.length; i++) {
          htmlFinal +=
            "<tr>"+
            "<td>"+alunos[i].getMatricula() +"</td>"+
            // Passamos o 't' (índice da turma) e o 'i' (índice do aluno) para as funções de editar
            "<td>"+alunos[i].getNome() + " <button onclick='editarNome(" + t + ", " + i + ")'>✏️</button></td>"+
            "<td>"+alunos[i].getNota1() + " <button onclick='editarNota(" + t + ", " + i + ", 1)'>✏️</button></td>"+
            "<td>"+alunos[i].getNota2() + " <button onclick='editarNota(" + t + ", " + i + ", 2)'>✏️</button></td>"+
            "<td>"+alunos[i].getNota3() + " <button onclick='editarNota(" + t + ", " + i + ", 3)'>✏️</button></td>"+
            "<td>"+alunos[i].media.toFixed(2) +"</td>"+
            "<td>"+alunos[i].estado +"</td>" +
            "</tr>";
        }
        htmlFinal += "</table><br>";
      }
    }
  }
  
  // Insere todo o HTML gerado na tela
  document.getElementById('alunos').innerHTML = htmlFinal;
}


static cadastrar() {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');
  const btnCadastrarTurma = document.getElementById('btn-cadastrar-turma');
  const tabCadastrarTurma = document.getElementById('tab-cadastrar-turma');
 
  btnListar.classList.remove('active');
  btnCadastrarTurma.classList.remove('active');

  btnCadastrar.classList.add('active');
 
  tabListar.classList.remove('active');
  tabCadastrarTurma.classList.remove('active');
  tabCadastrar.classList.add('active');
 }

 static cadastrarTurma() {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');
  const btnCadastrarTurma = document.getElementById('btn-cadastrar-turma');
  const tabCadastrarTurma = document.getElementById('tab-cadastrar-turma');
 

  btnCadastrarTurma.classList.add('active');
  tabCadastrarTurma.classList.add('active');
 
  btnCadastrar.classList.remove('active');
  tabCadastrar.classList.remove('active');
 
  btnListar.classList.remove('active');
  tabListar.classList.remove('active');
 }

 static salvarTurma() {
  let professor = document.getElementById('professor').value;
  let curso = document.getElementById('curso').value;
  
  if (professor === "" || curso === "") {
    alert("Preencha o nome do professor e do curso.");
    return null; // Cancela a operação se estiver vazio
  }
  
  let novaTurma = new Turma(professor, curso);
  alert('Turma cadastrada com sucesso!');
  return novaTurma;
 }

 static carregarTurmasNoSelect(turmas) {
  let select = document.getElementById('select-turma');
  select.innerHTML = ""; // Limpa as opções antigas
  
  for (let i = 0; i < turmas.length; i++) {
    // Cria uma opção mostrando o curso e o professor. O 'value' é a posição (índice) da turma na lista.
    select.innerHTML += "<option value='" + i + "'>" + turmas[i].getNomeCurso() + " - Prof: " + turmas[i].getProfessor() + "</option>";
  }
 }
}//fim da classe