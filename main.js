const form = document.getElementById('form-atividade');
const atividades = [];
let linhas = '';



form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
    marcarTarefa();

});


function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
    atividades.push(inputNomeAtividade.value);


    let linha = '<tr>';
    linha += `<ul><li>${inputNomeAtividade.value}</li></ul>`;

    linha += `</ul>`;
    
    linhas += linha;
    }
    marcarTarefa();
    inputNomeAtividade.value = '';

}
    
function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
}

function marcarTarefa() {
    $('ul').on('click', 'li', function() {
        $(this).addClass("feito");
    });

    $('ul').on('dblclick', 'li', function() {
        $(this).addClass("desfeito");
    });
}


