// pedirle a un usuario que nos diga su edad y saber 
// si es mayor o menor de edad

let edad = window.prompt ("¿CUÁNTOS AÑOS TIENES?")

if(edad >= 18) {
console.log("Eres mayor de edad")
    alert("Eres mayor de edad")
}
else {
console.log("Eres menor de edad")
    alert("Eres menor de edad")
}

// Convertimos la entrada a entero con parseInt
let edad = parseInt(window.prompt("¿CUÁNTOS AÑOS TIENES?")); 

if (edad >= 18) {
    console.log("Eres mayor de edad");
    alert("Eres mayor de edad");
} else if (edad < 0) {
    console.log("Edad no válida. Ingresa un número positivo.");
} else if (isNaN(edad)) {
    console.log("Edad no válida. Ingresa un número.");
} else {
    console.log("Eres menor de edad");
    alert("Eres menor de edad");
}

// en este caso hacemos lo mismo, solo que lanzamos un mensaje
// si el usuario ingresa una edad no valida

// Convertimos la entrada a entero
let edad = parseInt(window.prompt("CUANTOS AÑOS TIENES?"));

if (edad >= 18) {
    console.log("Eres mayor de edad");
    // alert("Eres mayor de edad");
} else if (edad < 0) {
    console.log("Edad no válida. Ingresa un número positivo.");
} else if (isNaN(edad)) {
    console.log("Edad no válida. Ingresa un número.");
} else {
    console.log("Eres menor de edad");
    // alert("Eres menor de edad");
}

let edad = 27;
let pais = "Ecuador";

if (edad >= 18) {
    if (pais == "Mexico") {
        console.log("Eres mayor de edad y vives en Mexico");
    } else {
        console.log("Eres mayor de edad, pero no vives en Mexico");
    }
} else {
    console.log("Eres menor de edad");
}


// ejercicio de imprimir fizzbuzz
let numero = 15;

if (numero % 3 === 0) {
  if (numero % 5 === 0) {
    console.log("El número es divisible por 3 y 5 (fizzbuzz).");
  } else {
    console.log("El número es divisible por 3 (fizz).");
  }
} else if (numero % 5 === 0) {
  console.log("El número es divisible por 5 (buzz).");
} else {
  console.log("El número no es divisible por 3 ni 5.");
}

// seleccionar una opción:
let opcion = prompt("Elige una opción:\n1. Ver perfil\n2. Editar perfil\n3. Cerrar sesión");

if (opcion === "1") {
  console.log("Mostrando perfil...");
} else if (opcion === "2") {
  console.log("Editando perfil...");
} else if (opcion === "3") {
  console.log("Cerrando sesión...");
} else {
  console.log("Opción no válida.");
}
