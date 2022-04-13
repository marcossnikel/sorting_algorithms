const books = require("./listbooks")
const trade = require('./trade')

function Ordenation(lista){
    for(let  atual = 0; atual < lista.length ; atual ++){
        let analise = atual;

        while( analise > 0 && lista[analise].price < lista[analise -1].price){
           trade(lista , analise);
            analise --
        }
    }
    console.log(lista)
}



Ordenation(books)
