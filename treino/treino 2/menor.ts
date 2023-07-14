const compras = require('./lista')

function ordemDeValoresDaCompra (produto, inicio){
    let maisBarato = inicio
    
    for(let atualProdutoEmAnalise = inicio; atualProdutoEmAnalise <produto.length; atualProdutoEmAnalise++){
        //SE O PREÇO DO VALRO ATUAL  E MENOR (MAIS BARATO ) QUE O PREÇO DO PRODUTO QUE É CONSIDERADO O MAIS BARATO
        // O VALOR ATUAL DO PRODUTO SE TORNAO  MAIS BARATO E RETORNA
        if(produto[atualProdutoEmAnalise].price < produto[maisBarato].price){
            maisBarato = atualProdutoEmAnalise;
        }
    }
    return maisBarato;
}

module.exports = ordemDeValoresDaCompra;