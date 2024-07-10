/* Las importaciones por defecto van primero y sin llaves */
/* Las importaciones nombradas van entre llaves separadas por comas */

import funcionSaludar, { deporte, profesion } from "./02-A-export";

console.log(deporte);
console.log(profesion);

const resultado = funcionSaludar();
console.log(resultado);
