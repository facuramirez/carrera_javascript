// MÉTODO CALL:
// Permite llamar a una función cambiando el valor del THIS.

// PARÁMETROS
// 1°: el valor de THIS
// 2°, 3°, 4°, ..., n°: Parámetros de la función invocada

function obtenerDescripcion(textoDeEjemplo, parametroDos, parametroTres) {
  return `Mi nombre es ${this.nombre}. Y el texto de ejemplo es ${textoDeEjemplo}. PARAMETRO 2: ${parametroDos}. PARAMETRO 3: ${parametroTres}`;
}

const persona1 = {
  nombre: "Manuel",
  deportista: true,
  altura: 180,
  descripcion: obtenerDescripcion,
};

const persona2 = {
  nombre: "Laura",
  deportista: true,
  altura: 180,
  descripcion: obtenerDescripcion,
};

const persona3 = {
  nombre: "Juan Pablo",
  deportista: true,
  altura: 180,
  descripcion: obtenerDescripcion,
};

// Llamo a la función descripción modificando hacia donde apunta THIS (en este caso cambiamos su dirección hacia el objeto "persona3")
// El 2°, 3°, y 4° parámetro pasados a "call" son los argumentos que recibe la función "descripcion"
const resultado = persona1.descripcion.call(
  persona3,
  "este es el parametro de ejemplo",
  "soy parametro 2",
  "soy parametro 3"
);
