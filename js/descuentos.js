const precioDescuento = (precio, descuento) => precio * (100-descuento)/100; 

const generarCupon = () => {
    const inputCupon = document.getElementById("inputCupon").value;
    // const cuponParse = parseInt(inputCupon);

    if(inputCupon == 15) {
        return 15;
    }else if(inputCupon == 25) {
        return 25;
    }else if(inputCupon == 35) {
        return 35;
    }else {
        return 0;
    }
}

function generarDescuento() {
    const inputPrecio = document.getElementById("inputPrecio").value;
    const inputDescuento = document.getElementById("inputDescuento").value;
    const btnCalcular = document.getElementById("btnCalcular");
    const pTexto = document.getElementById("texto");

    const generar = precioDescuento(inputPrecio, inputDescuento);
    const generaCupon = generarCupon();
    const cuponGenerado = precioDescuento(generar, generaCupon);

    pTexto.innerText = `Su descuento del ${inputDescuento}% es: ${generar} sol. 
                        y con cupon es ${cuponGenerado} sol`;
}
 


