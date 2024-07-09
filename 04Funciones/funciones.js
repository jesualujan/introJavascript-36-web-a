// crea una función en javascript
// que pida como parametro x , y 
// y guarda el resultado de la suma total de x+y


function sumaTotal (x,y) {
    // lógica de mi función
    // sumar dos números
    // declare variable de tipo let suma 
    let suma = x + y
   // return suma // devuelve 30
    console.log("La suma es: " + suma) //40 
}
// llamar a la función
sumaTotal(10,20)

function restaTotal (a,b) {
    // lógica de mi función
    // restar dos números
    let resta = a - b
    console.log(`La resta es:  ${resta}`) // template string de javascript
}

// llamar a la función
restaTotal(30,20)


function getAge(age){
    if(age >= 18) {
        console.log("Eres mayor de edad")
        return true
    } else if ( age < 0 ){
        console.log("Edad no valida") 
    }else if (isNaN(age)){
        console.log("Edad no valida, ingresa un número")
    }else{
        console.log("Eres menor de edad")
    }
}
getAge(18)


/*
3. Clasificar un triángulo:

Crea una función que reciba las longitudes de los 3 lados de un triángulo 
como parámetros y devuelva la clasificación del triángulo según sus lados:

Equilátero: si los 3 lados son iguales.
Isósceles: si 2 lados son iguales.
Escaleno: si los 3 lados son diferentes.
*/

function getClassification(ladoA, ladoB, ladoC){
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
    }else{
        return "Escaleno"
    }
}

console.log(getClassification(5,5,5)) // Imprime: Equilátero
console.log(getClassification(6,6,7)) // Imprime: Isósceles
console.log(getClassification(3,4,5)) // Imprime: Escaleno

//Simulación de un cajero automático que permite realizar retiros de efectivo 
//con las siguientes condiciones:

/* 
El saldo inicial de la cuenta es de $1000.
El usuario puede ingresar un monto a retirar.
Se verifica si el monto solicitado es menor o igual al saldo disponible.
Si el monto es válido, se realiza la transacción y se actualiza el saldo.
Se informa al usuario del nuevo saldo disponible.
Si el monto es mayor al saldo disponible, se informa al usuario que la operación 
no puede realizarse por falta de fondos.
*/

let saldoInicial = 1000; // Saldo inicial de la cuenta
let montoRetiro; // Monto que desea retirar el usuario

// Solicitar al usuario el monto a retirar
let ingresoValido = false;
do {
  montoRetiro = parseFloat(prompt("Ingrese el monto que desea retirar: $"));

  if (isNaN(montoRetiro) || montoRetiro <= 0) {
    console.log(`Error: Ingrese un monto válido mayor que cero.`);
  } else {
    ingresoValido = true;
  }
} while (!ingresoValido);

// Validación y ejecución de la transacción
if (montoRetiro <= saldoInicial) {
  saldoInicial -= montoRetiro;
  console.log(`Retiro realizado exitosamente. Su nuevo saldo disponible es: $${saldoInicial.toFixed(2)}`);
} else {
  console.log(`Lo sentimos, el monto solicitado ($${montoRetiro}) supera su saldo disponible. Su saldo actual es: $${saldoInicial.toFixed(2)}`);
}
