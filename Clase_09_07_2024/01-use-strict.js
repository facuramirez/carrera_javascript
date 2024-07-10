/* Resúmen características del uso estricto:
  1- Presenta errores (lanza una excepción) en casos donde el modo "no estricto" no lo hace.
  2- Obliga a definir variables colocando var, const o let adelante de la misma (var no se usa mas pero no está deprecado)
  3- Impide crear variables globales no definidas (var, const o let) por accidente, es decir, impide insertarlas en el objeto global window
  4- No deja repetir argumentos en las funciones
*/

"use strict";

// La variable definida con "var" se inserta en el objeto global window, lo cual no se debe hacer
var color = "verde";
const nombre = "Carlos";
let edad = 20;

// La siguiente linea lanza una excepción porque no se encuentra bien declarada
altura = 165;

// Al congelar (freeze) el objeto persona y luego modificarlo nos lanza una excepción en modo estricto
const persona = {
  nombre: "Carlos",
  edad: 30,
};

Object.freeze(persona);
persona.nombre = "Juan";

// Lanza una excepción porque la función recibe 2 argumentos con el mismo nombre
function obtenerEdad(edad, edad) {
  return edad;
}
