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
static listar(turma) {
 const btnCadastrar = document.getElementById('btn-cadastrar');
 const tabCadastrar = document.getElementById('tab-cadastrar');
 const btnListar = document.getElementById('btn-listar');
 const tabListar = document.getElementById('tab-listar');


 btnListar.classList.add('active');
 btnCadastrar.classList.remove('active');


 // Ajusta o conteúdo visível
 tabListar.classList.add('active');
 tabCadastrar.classList.remove('active');
 let lista = '<table>';
 lista += '<tr><th>Matricula</th><th>Nome</th> <th>Nota 1</th> <th>Nota 2</th> <th>Nota 3</th> <th>Média</th> <th>Situação</th></tr>';
 for (let i = 0; i < turma.length; i++) {
    lista +=
      "<tr>"+
      "<td>"+turma[i].getMatricula() +"</td>"+
      "<td>"+turma[i].getNome() +"</td>"+
      "<td>"+turma[i].getNota1() +"</td>"+
      "<td>"+turma[i].getNota2() +"</td>"+
      "<td>"+turma[i].getNota3() +"</td>"+
      "<td>"+turma[i].media.toFixed(2) +"</td>"+
      "<td>"+turma[i].estado +"</td>" +
      "</tr>";
  }
  lista += "</table>";
  document.getElementById('alunos').innerHTML = lista;
}


static cadastrar() {
 const btnCadastrar = document.getElementById('btn-cadastrar');
 const tabCadastrar = document.getElementById('tab-cadastrar');
 const btnListar = document.getElementById('btn-listar');
 const tabListar = document.getElementById('tab-listar');


 btnListar.classList.remove('active');
 btnCadastrar.classList.add('active');


 // Ajusta o conteúdo visível
 tabListar.classList.remove('active');
 tabCadastrar.classList.add('active');
 //document.getElementById("media").innerHTML = m;
}
}//fim da classe