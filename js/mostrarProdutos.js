import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem) {
    const produtos = document.createElement("li");
    produtos.className = "card";
    produtos.innerHTML = `<img id="imagemRenderizada" src="${imagem}" alt="${nome}">
    <h2 class="produto">${nome}</h2>
    <p>R$${preco}</p>`

    return produtos;
}

async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.productName,
         elemento.items[0].sellers[0].commertialOffer.Price,
          elemento.items[0].images[0].imageUrl)))
}

listaProdutos();
