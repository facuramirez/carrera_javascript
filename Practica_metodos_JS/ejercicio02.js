const numeros = [19, 5, 29, 32, -11, 25, 51, 46, -3, 36, 8];

// 2- Dado el listado de "números", filtrar por aquellos numeros pares que sean mayores a 25
const nuevoArregloDeNumeros = numeros.filter((numero) => {
  //   if (numero % 2 === 0 && numero > 25) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return numero % 2 === 0 && numero > 25;
});

console.log(nuevoArregloDeNumeros);
