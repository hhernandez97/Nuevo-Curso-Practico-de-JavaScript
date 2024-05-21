// Definir la función que recibe un array como parámetro
function imprimirPrimerElemento(array) {
    // Verificar que el array no esté vacío
    if (array.length > 0) {
      // Imprimir el primer elemento del array
      console.log(array[0]);
    } else {
      // Imprimir un mensaje de error
      console.log("El array está vacío");
    }
  }
  
  // Ejemplo de uso de la función con un array de números
  var miArray = [1, 2, 3, 4, 5];
  imprimirPrimerElemento(miArray); // Imprime 1
  


// Función en JavaScript que recibe cualquier array como parámetro e imprime todos sus elementos uno por uno

  function imprimirElementos(array) {
    array.forEach(function(elemento) {
        console.log(elemento);
    });
}


function impcarray (array) {
  for (let i = 0; i < array.length ; i++) {
    console.log(array[i]);
  }
}



// Ejemplo de uso:
var miArray = [1, 2, 3, 4, 5];
imprimirElementos(miArray);


//  Función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno


function imprimirElementos(objeto) {
    for (var clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            console.log(clave + ": " + objeto[clave]);
        }
    }
}

// Ejemplo de uso:
var miObjeto = {nombre: "Juan", edad: 30, ciudad: "Madrid"};
imprimirElementos(miObjeto);



//ej 2

function imprimirElementos(objeto) {
    var propiedades = Object.keys(objeto);
    for (var i = 0; i < propiedades.length; i++) {
        var clave = propiedades[i];
        console.log(clave + ": " + objeto[clave]);
    }
}

// Ejemplo de uso:
var miObjeto = {nombre: "Juan", edad: 30, ciudad: "Madrid"};
imprimirElementos(miObjeto);



//mio

var obj = {nombre: "Heberto", 
          edad: 26, 
          ciudad: "Venezuela",
          comidaFavorita : ["pizza","hamburguesa","sushi"]};

function imprimirobj (obj) {
  const array = Object.values(obj);
  for (let i = 0; i < array.length ; i++) {
    console.log(array[i]);
  }
}