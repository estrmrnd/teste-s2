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


function prepareCarousel(selector) {
    $(selector).slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}

export const mostrarProduto = {
    listaProdutos,
    prepareCarousel
}