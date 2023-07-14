const filmes = require("./movielists")
const menorValor = require("./lowervalues")


for(let actual = 0; actual < filmes.length -1 ; actual++){
    let maisBarato = menorValor(filmes,actual)

    let filmeEmAnalise =  filmes[actual];

    let filmeMaisBarato = filmes[maisBarato];

    filmes[actual] = filmeMaisBarato
    filmes[maisBarato]= filmeEmAnalise
}


console.log(filmes)