const promedioAritmetica = (lista) => lista.reduce((a, b) => a + b) / lista.length;  //promedio

const lista1 = [120, 45, 50, 250, 300];
const ordenarLista = lista1.sort((a,b) => a - b);

const mitadLista = parseInt(ordenarLista.length / 2);

function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    }else {
        return false;
    }
};

//Es par

let mediana;

if(esPar(ordenarLista.length)) {
    const elemento1 = ordenarLista[mitadLista - 1];
    const elemento2 = ordenarLista[mitadLista];

    const calc = promedioAritmetica([elemento1, elemento2]);

    mediana = calc;

}else {
    mediana = ordenarLista[mitadLista];
}