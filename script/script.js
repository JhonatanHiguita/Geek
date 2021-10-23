let boton = document.getElementById('Buttom_Suma');
let boton2 = document.getElementById('Buttom_Resta');
let boton3 = document.getElementById('Buttom_Multiplicacion');
let boton4 = document.getElementById('Buttom_Division');

boton.addEventListener('click',capturaSuma);
boton2.addEventListener('click',capturaResta);
boton3.addEventListener('click',capturaMultiplicacion);
boton4.addEventListener('click',capturaDivision);

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
function capturaMultiplicacion(){
    let numero1 = Number(document.querySelector('#num1').value);
    let numero2 = Number(document.querySelector('#num2').value);


    let Multiplicacion = numero1 * numero2
    
    console.log(Multiplicacion)
}
function capturaDivision(){
    let numero1 = Number(document.querySelector('#num1').value);
    let numero2 = Number(document.querySelector('#num2').value);


    let Division = numero1 / numero2
    
    console.log(Division)
    
}