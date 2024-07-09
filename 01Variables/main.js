// variables de tipo let
let nombre = "Juan";
let edad = 30;
let ciudad = "Santiago de Querétaro";

console.log(nombre); // Imprime "Juan"
console.log(edad); // Imprime 30
console.log(ciudad); // Imprime "Santiago de Querétaro"
console.error("esto es un mensaje de error en la consola")


// variables de tipo const
const PI = 3.14159; // Constante para el valor de Pi
const gravedad = 9.81; // Constante para la aceleración de la gravedad

console.log(PI); // Imprime 3.14159
console.log(gravedad); // Imprime 9.81

// PI = 3.14; // Error: No se puede reasignar una constante


// pedirle info al usuario:
let fullName = prompt("¿Cuál es tu nombre?")
console.log("¡Hola " + fullName + "!")

let tema = prompt("¿Sobre qué tema te gustaría opinar?");
let opinion = prompt("Escribe tu opinión:");

console.log("Tema:", tema);
console.log("Opinión:", opinion);

