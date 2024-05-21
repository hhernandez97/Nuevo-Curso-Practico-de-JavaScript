const tipoDeSuscripcion = "Expert";

function verificarSuscripcion(tipoDeSuscripcion) {
    if (tipoDeSuscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        
    } else if (tipoDeSuscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 

    } else if (tipoDeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

    } else if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"); 
    } else {
        console.log("Por favor ingrese un tipo de suscripción válido");
    }
}

// Llamada a la función con la variable ya definida
verificarSuscripcion(tipoDeSuscripcion);

// Solo If

const tipoDeSuscripcion2 = "Expert";

function verificarSuscripcion(tipoDeSuscripcion2) {
    if (tipoDeSuscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis");
    }

    if (tipoDeSuscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }

    if (tipoDeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }

    if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }

    if (tipoDeSuscripcion !== "Free" && tipoDeSuscripcion !== "Basic" && tipoDeSuscripcion !== "Expert" && tipoDeSuscripcion !== "ExpertPlus") {
        console.log("Por favor ingrese un tipo de suscripción válido");
    }
}

// Llamada a la función con la variable ya definida
verificarSuscripcion(tipoDeSuscripcion2);




//Un solo If

// Definición de un objeto que mapea los tipos de suscripciones a Platzi con sus descripciones
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

// Definición de una función que imprime la descripción de un tipo de suscripción dado
function conseguirTipoSuscripcion(suscripcion) {
    // Verifica si el tipo de suscripción proporcionado existe en el objeto tiposDeSuscripciones
    if (tiposDeSuscripciones[suscripcion]) {
        // Si existe, imprime la descripción correspondiente en la consola
        console.log(tiposDeSuscripciones[suscripcion]);
        return; // Sale de la función después de imprimir la descripción
    }

    // Si el tipo de suscripción no existe, muestra una advertencia en la consola
    console.warn('Ese tipo de suscripción no existe');
}
