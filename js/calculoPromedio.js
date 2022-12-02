const btnCalculate = document.querySelector('#btnCalculate');

btnCalculate.addEventListener('click', calculate);

function calculate() {
    
    const inputArea = document.querySelector('#inputArea').value;
    const inputAverage = document.querySelector('#inputAverage');
    const inputHalf = document.querySelector('#inputHalf');
    const inputFashion = document.querySelector('#inputFashion');

    if(!inputArea) {
        return alert("falta información")
    }

    const splitArray = Array.from(inputArea.split(','),Number);

    /*calcular promedio*/
    
    const calAverage = PlatziMath.calculateAverage(splitArray);
    inputAverage.innerText = calAverage.toFixed(2);

    
    /*calcular media*/

    const calHalf = PlatziMath.calculateHalf(splitArray);
    inputHalf.innerText = calHalf;


    /*calcular moda*/

    const calFashion = PlatziMath.calculateMode(splitArray);
    inputFashion.innerText = calFashion;

    console.log(splitArray)
}
