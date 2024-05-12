async function listaProdutos() {
    const conexao = await fetch("https://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=C:65&_from=1&_to=50" , {mode: 'cors'});
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos
}





