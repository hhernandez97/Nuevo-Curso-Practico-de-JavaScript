// Primer ciclo for
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

// Segundo ciclo for
i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}




// Función para comprobar la respuesta del usuario
function comprobarRespuesta() {
  // Preguntar al usuario cuánto es 2 + 2
  let respuesta = prompt("¿Cuánto es 2 + 2?");

  // Verificar si la respuesta es correcta
  if (respuesta === "4") {
      // Si la respuesta es correcta, mostrar un mensaje de felicitaciones
      alert("¡Felicidades! Has respondido correctamente.");
  } else {
      // Si la respuesta es incorrecta, mostrar un mensaje y llamar nuevamente a la función
      alert("Respuesta incorrecta. Por favor, intenta de nuevo.");
      comprobarRespuesta();
  }
}

// Llamar a la función para iniciar el proceso
comprobarRespuesta();


//ejemplo 2 

let userAnswer;

do {
  userAnswer = prompt(
    "Hola, ¿cuánto es 2 + 2? \n Hint: La respuesta no es pez"
  );
} while (userAnswer !== "4");

alert("You Finally answered correctly");