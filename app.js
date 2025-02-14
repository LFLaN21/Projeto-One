let listaAmigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    let listaNomes = document.getElementById('lista-amigos');
    listaAmigos.push(nome.value);

    if (listaNomes.textContent === '' || listaNomes.textContent === null) {
        listaNomes.textContent = nome.value;
    } else {
        listaNomes.textContent = listaNomes.textContent + ', ' + nome.value;
    }
    
    nome.value = '';
    atualizarSorteio()
    atualizarLista();
}


function sortearAmigo() {
    embaralhar(listaAmigos); 
    let sorteio = document.getElementById('lista-sorteio');

    for (let index = 0; index < listaAmigos.length; index++) {
        if (index == listaAmigos.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[index] + ' --> ' + listaAmigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[index] + ' --> ' + listaAmigos[index+1] + '<br/>';
        }
        
    }
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}



function reiniciar() {
    let botaoreiniciar = document.querySelector('a');
    botaoreiniciar.innerHTML;
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}


function excluirAmigo() {
    listaAmigos.splice(index, 1);
    atualizarSorteio();
    atualizarLista();
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML;
}


function atualizarLista() {
    let listaNomes = document.getElementById('lista-amigos');
    listaNomes.innerHTML;

    for (let i = 0; i < amigos.length; i++) {      
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        
        lista.appendChild(paragrafo);
    }
}

let lista1 = [];
lista1.push(1,2,2,3);

let lista2 = [];
lista2.push(4,5,6,6);

let lista3 = lista1.concat(lista2);

lista3.pop();
console.log(lista3);


function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  lista3 = embaralharArray(lista3);
  console.log(lista3)


  function removerDuplicatas(array) {
    return [...new Set(array)];
  }

  let lista4NoDuplicatas = removerDuplicatas(lista3);
  console.log(lista4NoDuplicatas);