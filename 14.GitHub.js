const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){ // Para que esta funcion se ejecute, se debe cambiar el type en la etiqueta boton en HTML
    event.preventDefault();
    const sumaInputs = input1.value + " " + input2.value;
    pResult.innerText = 'Resultado: ' +  sumaInputs;
}

/*btn.addEventListener('click',sumarInputValues );

function sumarInputValues(){
    const sumaInputs = input1.value + " " + input2.value;
    pResult.innerText = 'Resultado: ' +  sumaInputs;
}

btn.addEventListener('click',btnOnclick); 

function btnOnclick(){
    const sumaInputs = input1.value + " " + input2.value;
    pResult.innerText = 'Resultado: ' +  sumaInputs;
}*/
