



//QUEREMOS UM LOOPING
// UM  CLASSIDO DE LOOPING COM ++ 
// CRIAMOS VARIAVEIS do alimento MAIS BARATO DANDO SEUS PARAMETROS , DO alimetno QUE ESTA EM ANALISE E DO alimento MAIS BARATO

const receita = require("./lista")
const valores = require('./menor')

for(let alimento = 0; alimento < receita.length; alimento++){
    let alimentoMaisBarato = valores(receita,alimento)
    let alimentoEmAnalise = receita[alimento]
    let alimentoBarato = receita[alimentoMaisBarato]

    receita[alimento] = alimentoBarato
    receita[alimentoMaisBarato] = alimentoEmAnalise
}

console.log(receita)