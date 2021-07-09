//Perimetro y área de un cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
}


//Perimetro y área de un triángulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}


//Perimetro y área de un circulo

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log('Pi es ' + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}




//Conectando Html y JavaScript

function calPerimetro() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calArea() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}