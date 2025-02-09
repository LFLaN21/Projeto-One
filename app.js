function adicionar(id) {
    //recuperar o valor nome do amigo
    let amigo = document.getElementById('nome-amigo').value;

    //adicionar ele na lista de amigos incluidos.
    let lista = document.getElementById('lista-amigos');

    if(lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }

    document.getElementById('nome-amigo').value = '';
}