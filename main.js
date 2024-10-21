// Ejercicio 1: Introducción a JavaScript
function ejecutarIntroduccionJS() {
  console.log("==========1. Introducción a JavaScript==========");
  let a = 5;
  let b = 10;
  let c = a + b;
  console.log("El valor de a es: " + a);
  console.log("El valor de b es: " + b);
  console.log("La suma de a y b (c) es: " + c);
  
  let nombre = prompt("Por favor, ingresa tu nombre:");
  console.log("Hola, " + nombre + "!");
}
// Ejercicio 2: Operadores Lógicos y Funcionales
function ejecutarOperadoresLogicos() {
  console.log("==========2. Operadores Lógicos y Funcionales==========");
  let a = 8;
  let b = 10;
  let c = (a > b) ? a : b;
  console.log("a= "+a);
  console.log("b= "+b);
  console.log("El mayor valor entre a y b es: " + c);

  let numeroIngresado = prompt("Ingresa un número y te diré si es par o impar:");
  numeroIngresado = Number(numeroIngresado);
  if (numeroIngresado % 2 === 0) {
    console.log("El número " + numeroIngresado + " es par.");
  } else {
    console.log("El número " + numeroIngresado + " es impar.");
  }
}
  
// Ejercicio 3: Operadores de Asignación y Bucles
function ejecutarOperadoresAsignacion() {
  console.log("==========3. Operadores de Asignación y Bucles==========");
  let numero = 10;
  while (numero >= 0) {
    console.log("El valor de la variable es: " + numero);
    numero--;
  }

  let numero2;
  do {
    numero2 = prompt("Ingresa un número mayor a 100:");
    numero2 = Number(numero2);
  } while (numero2 <= 100);
  console.log("Ingresaste un número mayor a 100: " + numero2);
}
  
// Ejercicio 4: Funciones
function ejecutarFunciones() {
  console.log("==========4. Funciones en JavaScript==========");
  function esPar(numero) {
    return "El número " + numero + " es par: " + (numero % 2 === 0);
  }
  console.log(esPar(8));
  console.log(esPar(7));

  function convertirCelsiusAFahrenheit(celsius) {
    return celsius + "°C son equivalentes a " + (celsius * 1.8 + 32) + "°F";
  }
  console.log(convertirCelsiusAFahrenheit(30));
}
  
// Ejercicio 5: Objetos en JavaScript
function ejecutarObjetos() {
  console.log("==========5. Objetos en JavaScript==========");
  let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Buenos Aires",
    cambiarCiudad: function (nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
  console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
  persona.cambiarCiudad("Mendoza");
  console.log(`Actualizado -> Persona: ${persona.nombre}, Ciudad: ${persona.ciudad}`);

  let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
    esAntiguo: function () {
      let añoActual = new Date().getFullYear();
      return (añoActual - this.año) > 10;
    }
  };
  console.log(`El libro "${libro.titulo}" es antiguo: ${libro.esAntiguo()}`);
}
  
// Ejercicio 6: Arrays
function ejecutarArrays() {
  console.log("==========6. Arrays==========");
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Numeros originales: "+ numeros.join(","));
  let numerosMultiplicados = numeros.map(n => n * 2);
  console.log("Números multiplicados por 2: " + numerosMultiplicados.join(","));

  let pares = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) pares.push(i);
  }
  console.log("Primeros 10 números pares: " + pares.join(","));
}  

//Introduccion al DOM
//Ejercicio 1
function cambiarColor() {
    console.log("==========7. Introducción al DOM==========")
    // Selecciona todos los elementos <p>
    const parrafos = document.querySelectorAll('p');
    // Cambia el color de cada párrafo a azul
    parrafos.forEach(parrafo => {
        parrafo.style.color = 'blue'
        parrafo.style.fontWeight = 'bold';
    })
    console.log("Se cambio el color correctamente");
}

//Ejercicio2
function mostrarAlerta() {
    console.log("==========7. Introducción al DOM==========")
    // Obtiene el valor del campo de texto
    const campoTexto = document.getElementById('campoTexto').value;
    console.log("El texto a mostrar es: "+campoTexto)
    // Muestra una alerta con el valor ingresado
    alert("Has ingresado: "+campoTexto);
}

//Eventos en DOM
//Ejercicio 1
// Selecciona todos los elementos <li> dentro de la lista <ul> con id "miLista"
const lista = document.getElementById('miLista');
const elementos = lista.querySelectorAll('li');
//const elementos = document.querySelectorAll('#miLista li');

// Agrega un evento click a cada elemento <li>
elementos.forEach(elemento => {
    elemento.addEventListener('click', () => {
        // Muestra el texto del elemento <li> en la consola
        console.log(elemento.textContent);
    });
});

//Ejercicio 2
function deshabilitarCampo() {
    const campoTexto = document.getElementById('campoTexto2');
    campoTexto.disabled = true;
    campoTexto.placeholder = "";
}

function habilitarCampo() {
    const campoTexto = document.getElementById('campoTexto2');
    campoTexto.disabled = false;
    campoTexto.placeholder = "Ingrese algo";
}

//Local Storage
//Ejercicio1
// Seleccionamos los elementos del DOM
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const emailDisplay = document.getElementById('emailDisplay');
const deleteButton = document.getElementById('deleteEmail');

// Función para mostrar el correo en el DOM si está almacenado
function displayStoredEmail() {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
        emailDisplay.textContent = `Correo guardado: ${storedEmail}`;
        deleteButton.style.display = 'inline'; // Mostrar el botón de eliminar
    } else {
        emailDisplay.textContent = ''; // Ocultar el texto si no hay email
        deleteButton.style.display = 'none'; // Ocultar el botón de eliminar
    }
}

// Escuchar el evento de envío del formulario
emailForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío del formulario
    const email = emailInput.value;

    // Guardar el correo en localStorage
    localStorage.setItem('email', email);

    // Mostrar el correo en el DOM
    displayStoredEmail();
});

// Eliminar el correo de localStorage
deleteButton.addEventListener('click', function() {
    localStorage.removeItem('email');
    displayStoredEmail();
});

// Mostrar el correo guardado al cargar la página
document.addEventListener('DOMContentLoaded', displayStoredEmail);