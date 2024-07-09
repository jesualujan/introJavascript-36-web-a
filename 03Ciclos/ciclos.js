//  ejemplo 1) hacer la tabla de multiplicar del número 9

console.log("tabla del 9: ")

for (let i = 0; i <= 10; i++ ) {
    const resultado = 9 * i
    //console.log (" 9 x " +  i + " igual a " + resultado)
    console.log(9, "x", i, "=", resultado)
}

// ejemplo 2) clasificar números entre rangos 
  // menor o igual que 10
  // entre 11 y 20
  // entre 21 y 30
  // mayor que 30

//lista de números

const numeros = [12,5,32,18,27,4,50] // arreglos / arrays

for(let i = 0; i < numeros.length; i++) {
     const numero = numeros[i]  
     //clasificar números entre rangos
     if(numero <= 10){
        console.log (numero, " --> Menor o igual que 10")
     } else if ( numero <= 20 ){
        console.log(numero, " --> Entre 11 y 20")
     } else if ( numero <= 21 && numero <= 30) {
        console.log(numero, " --> Entre 21 y 30")
     }else {
        console.log(numero, " --> Mayor que 30")
     }
}

// Simulación de un cajero automático que permite realizar retiros de efectivo 
// con las siguientes condiciones:

/* 
El saldo inicial de la cuenta es de $1000.
El usuario puede ingresar un monto a retirar.
Se verifica si el monto solicitado es menor o igual al saldo disponible.
Si el monto es válido, se realiza la transacción y se actualiza el saldo.
Se informa al usuario del nuevo saldo disponible.
Si el monto es mayor al saldo disponible, se informa al usuario que la operación 
no puede realizarse por falta de fondos.
 */

// saldo inicial
let saldo = 1000 

 // bucle principal para realizar retiros 
  while (true) {
// vamos hacer la lógica del cajero
 //vamos a mostrar un mensaje de bienvenida
console.log("\nBienvenido al cajero automático") // para dar un enter o salto de linea \n

// solicitar al usuario el monto de retiro
//  " INGRESE EL MONTO QUE DESEA RETIRAR, saldo inicial: $1000 "
 const montoRetiro = parseInt(prompt(`INGRESE EL MONTO QUE DESEA RETIRAR, saldo inicial: ${saldo} `))
 // validar si el monto es menor o igual al saldo disponible
   if (montoRetiro <= saldo){
        // realizar la transacción
        saldo -= montoRetiro // saldo = saldo - montoRetiro
        console.log("Retiro realizado con éxito, su nuevo saldo es de: $", saldo)
   }else {
    // informar al usuario que la operación no puede realizarse por falta de fondos
    console.error("saldo insuficiente, la operación no puede realizarse")
   }

    // solicitar al usuario si desea realizar otro retiro
    const realizarOtroRetiro = prompt("¿Deseas realizar otro retiro? (Si/No):  ").toLocaleLowerCase()

    if(realizarOtroRetiro === "si"){
      //continuar con el bucle para realizar otro retiro
    }else if (realizarOtroRetiro === "no"){
      console.log("gracias por utilizar el cajero automático")
      break // salimos o rompemos el bucle
    }else{
      console.error("Opción no valida, intente nuevamente 😠")
    }
  }