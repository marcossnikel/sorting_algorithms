// Sort --> ORDENAÇÃO

const books = require ("./listbooks")
const lowerValue = require ("./lowervalue")


for(let actual = 0; actual < books.length -1; actual ++ ){
    let lower = lowerValue(books, actual)

    let actualBook = books[actual];
    console.log(`actual position :`, actual)
    console.log(`actual book :`, books[actual])
    //console.log('Actual Book is ', books[actual]) AQUI GARDAMOS INFORMAÇÕES , NAO DADOS
    let peachlessBook = books[lower]
    console.log(`lower price book: `, books[lower])
    
    books[actual] = peachlessBook 
    books[lower] = actualBook
}

console.log(books)