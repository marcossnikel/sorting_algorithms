// We got on gift-card with the value of $50 and we want to spent in programming courses, we found on the library site some options of courses
// JS; PHP; JAVA ; ELIXIR; GO; PYTHON


//PREÇOS DOS LIVROS !!! -- >> ORDENAÇÃO JS
//Ordem aleatorio
// ''Variáveis Mentais''
// let acutalBook =0;


const books = require("./listbooks");



function lowerValue (arrProducts , initialPosition){
    let peachless= initialPosition;

    for(let actual = initialPosition; actual < arrProducts.length ; actual++){
        if(arrProducts[actual].price< arrProducts[peachless].price) {
            peachless = actual
        }
    }
    return peachless;
}


module.exports = lowerValue;

