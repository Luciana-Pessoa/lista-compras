import { verificarListaComprados } from "./verificarListaComprados";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if(confirmacao) {
        elemento.remove();

        verificarListaComprados(lista-comprados);
        verificarListaVazia(lista-de-compras);
    }
}

export {excluirItem };