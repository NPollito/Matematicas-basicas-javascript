const buttonCalculateSquare = document.querySelector('#buttonCalculateSquare');
const buttonCalculateTriangle = document.querySelector('#buttonCalculateTriangle')
const buttonCalculateCircle = document.querySelector('#buttonCalculateCircle');
const buttonCalculateIsosceles = document.querySelector('#buttonCalculateIsosceles');
const buttonCalculateEscaleno = document.querySelector('#buttonCalculateEscaleno');


//Perimetro y área de un cuadrado
buttonCalculateSquare.addEventListener('click', calcularSquare);

function calcularSquare(lado) {
    
    lado = document.querySelector('#inputSquare').value;
    const resultSquare = document.querySelector('#resultSquare');

    if(!lado) {
        resultSquare.innerText = "Introduce el lado"
        return;
    }

    return resultSquare.innerText = `El area del cuadrado es: ${lado ** 2}cm
    El perimetro es: ${lado * 4}cm`
};


//Perimetro y área de un triángulo
buttonCalculateTriangle.addEventListener('click', calcularTriangle);

function calcularTriangle(lado1, lado2, base, altura) {
    lado1 = Number(document.querySelector('#inputTriangleLeft').value);
    lado2 = Number(document.querySelector('#inputTriangleRight').value);
    base = Number(document.querySelector('#inputTriangleBase').value);
    altura = Number(document.querySelector('#inputTriangleAltura').value);
    const resultTriangle = document.querySelector('#resultTriangle');

    const height = (base * altura) / 2;
    const perimetro = lado1 + lado2 + base;

    if(!lado1 || !lado2 || !base) {
        resultTriangle.innerText = "Falta valores"
        return
    } 

    if(!altura) {
        resultTriangle.innerText = `Para saber la altura de un
        triangulo digite la altura`
        return
    }

    resultTriangle.innerText = `El área del triángulo es: ${height}cm
    El perimetro es: ${perimetro}cm`
}


//Perimetro y área de un circulo
buttonCalculateCircle.addEventListener('click', calcularCircle);

function calcularCircle(radio) {

    radio = Number(document.querySelector('#inputCircle').value);
    const resultCircle = document.querySelector('#resultCircle');

    const PI = Math.PI
    const diametro = radio * 2;
    const perimetro = (2 * PI) * radio;
    const altura = (radio * radio) * PI;

    if(!radio) {
        resultCircle.innerText = "Introduce el radio"
        return;
    } 
    
    return resultCircle.innerText = `El diametro del circulo es: ${diametro}cm
    El área es: ${altura.toFixed(3)}cm
    El perimetro es: ${perimetro.toFixed(3)}cm`

}


//Altura de un triangulo isoceles
buttonCalculateIsosceles.addEventListener('click', calcularAlturaTriangulo)

function calcularAlturaTriangulo(lado1, base) {

    lado1 = Number(document.querySelector('#inputIsoscelesLeft').value);
    base = Number(document.querySelector('#inputIsoscelesBase').value);
    const resultIsosceles = document.querySelector('#resultIsosceles');

    const altura = Math.sqrt( (lado1 ** 2) - ( (base ** 2) )/4);

    if(lado1 == base) {
        resultIsosceles.innerText = `Este no es un triangulo 
        Isosceles`
        return;
    }

    resultIsosceles.innerText = `La altura es ${altura.toFixed(3)}cm`
}


//Altura de un triangulo escaleno
buttonCalculateEscaleno.addEventListener('click', calcularAlturaEscaleno);

function calcularAlturaEscaleno(base, lado1, lado2) {

    base = Number(document.querySelector('#inputEscalenoBase').value);
    lado1 = Number(document.querySelector('#inputEscalenoLeft').value);
    lado2 = Number(document.querySelector('#inputEscalenoRight').value);
    const resultEscaleno = document.querySelector('#resultEscaleno');

    const semiPerimetro = (base + lado1 + lado2) / 2;
    const sum = (semiPerimetro - base) * (semiPerimetro - lado1) * (semiPerimetro - lado2);
    const altura = (2 / base) * (Math.sqrt( semiPerimetro * ( sum )));

    if(base == lado1 || lado1 == lado2 || lado2 == base) {
        resultEscaleno.innerText = `Este no es un triangulo 
        Escaleno`
        return;
    }

    resultEscaleno.innerText = `La altura es ${altura.toFixed(3)}`;
}
