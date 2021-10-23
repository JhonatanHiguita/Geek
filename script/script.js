let boton = document.getElementById('Buttom_Suma');
let boton2 = document.getElementById('Buttom_Resta');

boton.addEventListener('click',capturaSuma);
boton2.addEventListener('click',capturaResta);

let form = document.getElementById('form');

form.addEventListener('submit',formSumbit);

function formSumbit(e){
    e.preventDefault();
}

function capturaSuma(){
    let numero1 = Number(document.querySelector('#num1').value);
    let numero2 = Number(document.querySelector('#num2').value);


    let suma = numero1 + numero2
    
    console.log(suma)
    
}
function capturaResta(){
    let numero1 = Number(document.querySelector('#num1').value);
    let numero2 = Number(document.querySelector('#num2').value);


    let Resta = numero1 - numero2
    
    console.log(Resta)
    
}