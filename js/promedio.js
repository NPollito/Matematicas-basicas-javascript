const promedioAritmetica = lista => lista.reduce((a, b) => a + b) / lista.length;  //promedio

function esPar(numero) {     //Es par o impar
    if(numero % 2 === 0) {
        return true;
    }else {
        return false;
    }
};

// Promedio

function calPromedio() {

    const botPromedio = document.getElementById("botPromedio");
    const texto = document.getElementById("texto");

    const inputPromedio = document.getElementById("inputPromedio").value;
    const separaArray = Array.from(inputPromedio.split(','),Number);
    
    // const parsePromedio = parseInt(inputPromedio);
    const calcPromedio = promedioAritmetica(separaArray).toFixed(2);
    texto.innerText = `El promedio es: ${calcPromedio}`
    
}


// Mediana

function calMedia() {

    const botMedia = document.getElementById("botMedia");
    const texto = document.getElementById("texto");

    const inputMedia = document.getElementById("inputMedia").value;
    const separaArray = Array.from(inputMedia.split(','),Number);
    const ordenarArray = separaArray.sort((a,b) => a - b);

    const mitadArray = parseInt(ordenarArray.length / 2);

    let mediana;

    if(esPar(ordenarArray.length)) {
        const elemento1 = ordenarArray[mitadArray - 1];
        const elemento2 = ordenarArray[mitadArray];

        const calc = promedioAritmetica([elemento1, elemento2]);

        mediana = calc;

    }else {
        mediana = ordenarArray[mitadArray];
    }

    texto.innerText = `La media es: ${mediana}`

}

// const lista1 = [120, 45, 50, 250, 300];
// const ordenarLista = lista1.sort((a,b) => a - b);

// const mitadLista = parseInt(ordenarLista.length / 2);



// //Es par

// let mediana;

// if(esPar(ordenarLista.length)) {
//     const elemento1 = ordenarLista[mitadLista - 1];
//     const elemento2 = ordenarLista[mitadLista];

//     const calc = promedioAritmetica([elemento1, elemento2]);

//     mediana = calc;

// }else {
//     mediana = ordenarLista[mitadLista];
// }