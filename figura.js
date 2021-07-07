//Codigo del cuadrado
console.group('Cuadrado');

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm');

function perimetroCuadrado(lado) {
    return lado * 4;
};

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log('El área del cuadrado es: ' + areaCuadrado + 'cm');

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//codigo del triangulo
console.group('Triángulo');

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     'Los lados del triángulo miden: '
//     + ladoTriangulo1
//     + 'cm, '
//     + ladoTriangulo2
//     + 'cm, '
//     + baseTriangulo
//     + 'cm y la altura es '
//     + alturaTriangulo
//     + 'cm'
// );

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log('El perimetro del triángulo es: ' + perimetroTriangulo + 'cm');

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log('El área del triángulo es: ' + areaTriangulo + 'cm');
// console.groupEnd();

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}

//Codigo del circulo
console.group('Círculo');

// const radioCirculo = 4;
// console.log('El radio del círculo es ' + radioCirculo + 'cm');

// const diametroCirculo = radioCirculo * 2;
// console.log('El diametro del círculo es ' + diametroCirculo + 'cm');

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log('Pi es ' + PI);

// const perimetroCirculo = diametroCirculo * PI;
// console.log('El perimetro del círculo es ' + perimetroCirculo + 'cm');

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo)*PI;
// console.log('El área del círculo es ' + areaCirculo + 'cm^2');

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();