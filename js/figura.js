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

// function calPerimetro() {
//     const input = document.getElementById("inputCuadrado");
//     const value = input.value;

//     const perimetro = perimetroCuadrado(value)
//     alert(perimetro);;
// }

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
    const input1 = document.getElementById("inputIzquierdo").value;
    const input2 = document.getElementById("inputCentro").value;
    const input3 = document.getElementById("inputDerecho").value;
    const result = document.getElementById("resultTriangulo");
   
    const lado1 = parseInt(input1); 
    const base = parseInt(input2)
    const lado2 = parseInt(input3)

    const area = areaTriangulo(base, lado2);
    const perimetro = perimetroTriangulo(lado1, base, lado2);
    // alert(`area ${area} perimetro ${perimetro}`);
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

function isocelesAP(lado1, lado2, base){
    if(lado1==lado2 && lado1!=base){
        const altura = Math.sqrt(lado1**2-base**2/4)
        alert("Aún estamos trabajando, disculpe"+ altura)
    }else{
        alert("Aún estamos trabajando, disculpe")
    }
}s