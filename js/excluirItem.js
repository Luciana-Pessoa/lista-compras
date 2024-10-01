import { verificarListaComprados } from "./verificarListaComprados";

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if(confirmacao) {
        elemento.remove();

        verificarListaComprados();
        verificarListaVazia();
    }
}