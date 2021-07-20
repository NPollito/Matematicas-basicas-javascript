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
// console.log('Pi es ' + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

//Altura de un triangulo isoceles

function alturaIsosceles(lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base) {
        // const altura = Math.sqrt(lado1**2 - base**2 / 4).toFixed(2);
        const altura = Math.sqrt((base / 2)**2 + lado1**2).toFixed(2);
        return altura;
    }else {
        alert("Recuerda que un triángulo isósceles tienen lados iguales")
    }
}


//funciones
function cuadradoAP() {
    const input = document.getElementById("inputCuadrado").value;
    const result = document.getElementById("resultCuadrado");
    // const value = input.value;

    const area = areaCuadrado(input);
    const perimetro = perimetroCuadrado(input);
    result.innerText = `El Área es: ${area} cm
                        El Perimetro es: ${perimetro} cm`;
}

function trianguloAP() {
    const inputIzquierdo = document.getElementById("inputIzquierdo").value;
    const inputBase = document.getElementById("inputBase").value;
    const inputAltura = document.getElementById("inputAltura").value;
    const inputDerecho = document.getElementById("inputDerecho").value;
    const result = document.getElementById("resultTriangulo");
   
    const lado1 = parseInt(inputIzquierdo); 
    const base = parseInt(inputBase);
    const altura = parseInt(inputAltura);
    const lado2 = parseInt(inputDerecho);

    const area = areaTriangulo(base, altura);
    const perimetro = perimetroTriangulo(lado1, base, lado2);
    
    result.innerText = `El Área es: ${area} cm
                        El Perimetro es: ${perimetro} cm`;
}


function circuloAP() {
    const input = document.getElementById("inputCirculo").value;
    const result = document.getElementById("resultCirculo");

    const area = areaCirculo(input).toFixed(3);
    const perimetro = perimetroCirculo(input).toFixed(3);
    const diametro = diametroCirculo(input).toFixed(3);
    // document.write(`area ${area} perimetro ${perimetro}`);
    result.innerText = `El Área es: ${area} cm
                        El Perimetro es: ${perimetro} cm
                        El Diametro es: ${diametro} cm`;
}


function isoscelesAP(){
    const inputIz = document.getElementById("inputIz").value;
    const inputBas = document.getElementById("inputBas").value;
    const inputDer = document.getElementById("inputDer").value;
    const result = document.getElementById("resultIsoceles");

    const lado1 = parseInt(inputIz);
    const lado2 = parseInt(inputDer);
    const base = parseInt(inputBas);

    const altura = alturaIsosceles(lado1, lado2, base);

    result.innerText = `La altura es ${altura} cm`;
}