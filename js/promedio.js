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

//Moda

function calModa() {
    
    const botModa = document.getElementById("botModa");
    const texto = document.getElementById("texto");

    const inputModa = document.getElementById("inputModa").value;
    const separaArray = Array.from(inputModa.split(','),Number);

    //convertir de array a objeto
    const arrayObjeto = {};
    separaArray.map(function(elemento) {
        if(arrayObjeto[elemento]) {
            arrayObjeto[elemento] += 1;
        }else {
            arrayObjeto[elemento] = 1;
        }
    });

    //convertir de objeto a array
    const objetoArray = Object.entries(arrayObjeto).sort((a,b) => a-b);
    const ultimaArray = Object.entries(arrayObjeto).sort((a,b) => a[1] - b[1]);
    const moda = ultimoArray[ultimoArray.length - 1];

    texto.innerText = `La moda es: ${moda}`
}
