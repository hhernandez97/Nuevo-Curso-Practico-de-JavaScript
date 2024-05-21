const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#result");

// form.addEventListener('submit', presionarBoton);
// //event previene que se recargue la pagina automaticamente al enviar el formulario


// function presionarBoton(event){
//     console.log({event});
//     event.preventDefault();

//     console.log('click del boton')
//     console.log(input1.value + input2.value)

//     const suma = input1.value + input2.value;
//     pResultado.innerText = "Resultado: " + suma;
// }


btn.addEventListener('click', presionarBoton);

function presionarBoton(){
    console.log('click del boton')
    console.log(input1.value + input2.value)

    const suma = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + suma;

    this.style.backgroundColor = colorAleatorio();
}


btn.addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});

btn.addEventListener("mouseout", function() {
    btn.style.backgroundColor = "blue";
});



// Función para generar un color aleatorio
function colorAleatorio() {
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}