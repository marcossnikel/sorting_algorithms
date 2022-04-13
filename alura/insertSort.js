const books = require ("./listbooks")
const trade = require ("./trade")

function Ordenação(lista){

    for(atual = 0; atual < lista.length ; atual++){
        let analise = atual;

        while(analise > 0 && lista[analise].price < lista[analise -1 ].price ){
            trade(lista, analise);
            analise --
        }
    }
    console.log(lista)
}


Ordenação(books);