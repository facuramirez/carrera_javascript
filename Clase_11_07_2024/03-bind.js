// MÉTODO BIND
// Crea una nueva función (no la invoca como en los métodos call y apply) fijando el valor de THIS y los parámetros en caso de existir.
// Luego podremos invocarla como cualquier otra función en cualquier lugar ya que el valor de THIS se encuentra fijo.

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

// Creo una nueva función con fijando el valor de THIS y lo guardo en la constante "miNuevaFuncion"
const miNuevaFuncion = persona1.descripcion.bind(
  persona2,
  "este es el parametro de ejemplo",
  "soy parametro 2",
  "soy parametro 3"
);

// Llamo a la función creada recientemente y lo que retorne lo guardo en la constante "resultado"
const resultado = miNuevaFuncion();
