import './nav.js'
import '../css/lista-tarefas.css'

const inputNovaTarefa = document.querySelector('#input-nova-tarefa');
const btnAdicionar = document.querySelector('#btn-adicionar');
const listaTarefas = document.querySelector('#lista-tarefas');

btnAdicionar.addEventListener('click', () => {
    let descricaoTarefa = inputNovaTarefa.value
    const li = document.createElement("li");
    li.className = 'tarefa';
    li.innerHTML = `
    <div>${descricaoTarefa} </div>
    
       `;
    listaTarefas.appendChild(li);
    //criar elemento
    let btnExcluir = document.createElement('button');
    btnExcluir.setAttribute('id', 'btn--Excluir');
    btnExcluir.className = 'btn-excluir';
    btnExcluir.textContent = 'Excluir';


    li.appendChild(btnExcluir);

    btnExcluir.addEventListener('click', () => {
        let tarefa = btnExcluir.parentElement
        listaTarefas.removeChild(tarefa)


    })

})




