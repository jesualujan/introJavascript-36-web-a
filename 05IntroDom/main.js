// IMPLEMENTAR EL DOM: 
   // 1) SELECCIONAR ELEMENTO
   // 2) MODIFICAR O MANIPULAR ELEMENTO 


   // seleccionar nuestros elementos html
   const opcionJugador = document.querySelectorAll('.opcion')
   const resultadoMensaje = document.getElementById('mensaje')

   // voy a definir una lista 
   const opciones = ['piedra', 'papel' , 'tijera']

   // función para jugar el juego 
function jugar(opcionSeleccionada) {
    // hacer que la computadora elija una opción de manera aleatoria
    const opcionComputadora =  opciones [Math.floor(Math.random() * 3)]

    // determinar al ganador
    let resultado = ''
    if(opcionSeleccionada === opcionComputadora) {
        resultado = 'Empate'
    } else if (
        (opcionSeleccionada === 'piedra' && opcionComputadora === 'tijera') ||
        (opcionSeleccionada === 'papel' && opcionComputadora === 'piedra') ||
        (opcionSeleccionada === 'tijera' && opcionComputadora === 'papel')
    ) {
        resultado = 'Ganaste'
    }else {
        resultado = 'Perdiste'
    }
    // actulizar el resultado del mensaje 
    resultadoMensaje.textContent = `Elegiste ${opcionSeleccionada}, la máquina eligio ${opcionComputadora} . ${resultado} `
}

// agregar un AddEventListener para cada oción del buton 
 // recorrer el arreglo o lista llamada opciones
    opcionJugador.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const opcionSeleccionada = opcion.dataset.opcion 
            jugar(opcionSeleccionada)
        })
    })
