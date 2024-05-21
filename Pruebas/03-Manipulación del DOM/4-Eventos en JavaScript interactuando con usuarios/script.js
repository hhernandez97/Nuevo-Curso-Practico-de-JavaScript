const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#result");

function presionarBoton(){
    console.log('click del boton')
    console.log(input1.value + input2.value)

    const suma = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + suma;
}