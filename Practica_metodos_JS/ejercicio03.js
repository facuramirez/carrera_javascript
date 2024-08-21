const numeros = [19, 5, 29, 32, -11, 25, 51, 46, -3, 36];
// 3- Dado el listado de "números", mapear el mismo devolviendo un nuevo listado con strings que digan "POSITIVO" o "NEGATIVO" según corresponda

const nuevoArreglo = numeros.map((numero) => {
  //   if (numero > 0) {
  //     return "POSITIVO";
  //   } else {
  //     return "NEGATIVO";
  //   }

  return numero > 0 ? "POSITIVO" : "NEGATIVO";
});

console.log(nuevoArreglo);
