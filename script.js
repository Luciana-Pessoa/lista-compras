const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()

     const itemDaLista = document.createElement("li");
     const containerItemLista = document.createElement("div");
     containerItemLista.classList.add("lista-item-container");
     
     const containerNomeDoItem = document.createElement("div");
     const nomeDoItem = document.createElement("p");
     nomeDoItem.innerText = item.value;
     containerNomeDoItem.appendChild(nomeDoItem)
     
     const containerBotoes = document.createElement("div");
     const botaoRemover = document.createElement("button");
     botaoRemover.classList.add("item-lista-button");
        
     itemDaLista.appendChild(containerItemLista);

     const imagemRemover = document.createElement("img");
     imagemRemover.src = "img/delete.svg";
     imagemRemover.alt = "Remover";
      
      itemDaLista.appendChild(containerItemLista);
 
      botaoRemover.appendChild(imagemRemover);
      containerBotoes.appendChild(botaoRemover);
         
      itemDaLista.appendChild(containerItemLista);
 }