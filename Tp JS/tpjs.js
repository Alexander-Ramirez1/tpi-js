var cantidad=0;

let seleccionar = document.querySelector('select');

seleccionar.addEventListener('change', seleccionarCategoria);

function seleccionarCategoria() {
    let eleccion = seleccionar.value;

    if (eleccion === '1') {
        ((cantidad*80)/100)
    } else if (eleccion === '2') {
        ((cantidad*50)/100)
    } else (eleccion === '3') {
        ((cantidad*15)/100)
    }
}

let resultado = seleccionarCategoria();
document.getElementById("pago").innerHTML= ("Total a pagar $ {resultado} ");