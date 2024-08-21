// 4- Dado el listado "personal", verificar si existe al menos uno/a que tenga ingresos mayores a 2600000

const personal = [
  { id: 1, nombre: "Juana", edad: 35, ingreso: 2530684 },
  { id: 2, nombre: "Marcelo", edad: 41, ingreso: 2113942 },
  { id: 3, nombre: "Juan", edad: 29, ingreso: 2358068 },
  { id: 4, nombre: "Laura", edad: 19, ingreso: 1510123 },
  { id: 5, nombre: "Carlos", edad: 23, ingreso: 2834572 },
  { id: 6, nombre: "Juan Pablo", edad: 52, ingreso: 3268684 },
  { id: 7, nombre: "Noelia", edad: 31, ingreso: 2600000 },
  { id: 8, nombre: "Steven", edad: 20, ingreso: 1468276 },
];

const valorBooleano = personal.some((persona) => {
  //   if (persona.ingreso > 2600000) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return persona.ingreso > 2600000;
});

console.log(valorBooleano);
