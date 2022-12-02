const btnCalculate = document.querySelector('.btnCalculate');
const btnCoupon = document.querySelector('.btnCoupon');
const inputPrice = document.querySelector('#inputPrice');
const inputDiscount = document.querySelector('#inputDiscount');

const inputCheck = document.querySelector('#inputCheck');

btnCalculate.addEventListener('click', generatePorcentage);
/*btnCoupon.addEventListener('click', generateCoupon);*/
inputCheck.addEventListener('change', activeInput);

const couponList = [];
couponList.push({
    name: "javascript",
    discount: 5
});
couponList.push({
    name: "nilton",
    discount: 15
});
couponList.push({
    name: "platzi",
    discount: 25
});
couponList.push({
    name: "kio",
    discount: 35
});



/*Funciones*/

const priceDiscount = (price, discount) => price * (100-discount)/100; 

function generatePorcentage() {
    
    const price = Number(inputPrice.value)
    const discount = Number(inputDiscount.value)
    const paragraph = document.querySelector('#paragraph');

    /*llamando a la funcion priceDiscount*/
    const calculate = priceDiscount(price, discount);

    if(!price || !discount) {
        paragraph.innerText = 'Ingrese informacion!!'
        return;
    };

    if(discount > 99) {
        paragraph.innerText = `Los porcentajes son menores
        de 100`;
        return
    };

    paragraph.innerText = `Su Porcentaje de ${price} es: ${calculate}`;
}

function generateCoupon() {
    const price = Number(inputPrice.value);
    const coupon = document.querySelector('#inputCoupon').value.toLowerCase(); 
    const paragraph = document.querySelector('#paragraph');
    
    if(!price || !coupon) {
        paragraph.innerText = 'Ingrese informacion!!'
        return
    }

    let discounts;

    const couponInArray = couponList.filter((value) => {
        return value.name == coupon;
    });

    
    
    if(couponInArray.length > 0) {
        discounts = couponInArray[0].discount
    }else {
        paragraph.innerText = `El cupon no es valido,
        Hoy estas de suerte prueba con
        (javascript)`
        return;
    }

    const newPrice = priceDiscount(price, discounts);
    paragraph.innerText = `Felicidades tienes un ${couponInArray[0].discount}% de
    descuento ahora pagaras ${newPrice}`;
}

function activeInput() {
        
    if(inputCheck.checked) {
        inputCoupon.removeAttribute("disabled")
        inputDiscount.setAttribute("disabled", "")
        btnCalculate.className = "btnCoupon"
        btnCalculate.setAttribute("onclick", "generateCoupon()")
    }
    else {
        inputCoupon.setAttribute("disabled", "");
        inputDiscount.removeAttribute("disabled");
        btnCalculate.className = "btnCalculate"
        btnCalculate.removeAttribute("onclick")
    }
}