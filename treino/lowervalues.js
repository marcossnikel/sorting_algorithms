const movies = require("./movielists");

function menorValor (produto, posicaoInicial){

    let maisBarato = posicaoInicial;

    for(let actual = posicaoInicial ; actual < produto.length ; actual ++ ){
        if(produto[actual].price < produto[maisBarato].price){
            maisBarato = actual
        }
    } 
    return maisBarato
}

module.exports = menorValor;