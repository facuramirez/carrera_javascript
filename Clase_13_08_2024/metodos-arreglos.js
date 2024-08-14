const numeros = [4, 9, 15, -4, 25, 32, 18, 200, 500, 900];

//* FOR EACH: recorrer todas las posiciones de mi arreglo
numeros.forEach((numero, index, array) => {
  // console.log(numero);
});

//* FILTER: filtrar arreglo segun condicion establecida. No modifica los valores de cada posicion
const numerosFiltrados = numeros.filter((value, index, array) => {
  if (value < 20) {
    return true;
  } else {
    return false;
  }
});

//* MAP: sirve para modificar los valores del arreglo. No modifica el largo del arreglo.
const numerosMapeados = numeros.map((value) => {
  if (value < 100) {
    return value * 3;
  } else {
    return "Soy una de las ultimas 3 posiciones";
  }
});

//* SOME: Devuelve un true si al menos un valor cumple con la condicion establecida, sino devuelve false.
const resultadoSome = numeros.some((value) => {
  if (value > 45400) {
    return true;
  }
});

//* EVERY: Devuelve true si todos los valores cumplen con la condicion establecida, sino devuelve false.
const resultadoEvery = numeros.every((value) => {
  if (value < 134300) {
    return true;
  }
});

//* === EJEMPLO SOME SIMULANDO VALORES VALIDACIONES DEL FORMULARIO (gerentes y empleados)
const formulario = [true, true, true, true];
const resultadoFormularioSome = formulario.some((value) => {
  if (value === false) {
    return true;
  }
});

//* === EJEMPLO EVERY SIMULANDO VALORES VALIDACIONES DEL FORMULARIO (gerentes y empleados)
const resultadoEvery2 = formulario.every((value) => {
  if (value === true) {
    return true;
  }
});

if (resultadoEvery2 === true) {
  console.log("VOY A REGISTRAR A MI PERSONA");
} else {
  console.log("EL FORMULARIO NO CUMPLE CON LAS VALIDACIONES CORRESPONDIENTES");
}

//* OTRO EJEMPLO CON MÉTODO SOME
const personas = ["Facundo", "Mario", "Juana", "Ana", "Francisco"];
const resultado5 = personas.some((value) => {
  if (value.length > 20) {
    return true;
  }
});

//* MÉTODO FIND: BUSCA UN VALOR DETERMINADO DEL ARREGLO BASADO EN UNA CONDICIÓN ESTABLECIDA.
//* ...SI LO ENCUENTRA, RETORNA EL VALOR DE LA ITERACIÓN ACTUAL, SINO RETORNA UNDEFINED.
const resultado = personas.find((value) => {
  if (value === "Nombre inválido") {
    return true;
  }
  return false;
});

//* OTRO EJEMPLO CON MÉTODO FIND.

const familia = [
  {
    nombre: "Daniel",
    edad: 50,
    tipo: "padre",
  },
  {
    nombre: "Laura",
    edad: 42,
    tipo: "madre",
  },
  {
    nombre: "Marcelo",
    edad: 25,
    tipo: "hijo",
  },
];

const resultadoFamilia = familia.find((value) => {
  if (value.tipo === "hija") {
    return true;
  }

  return false;
});
