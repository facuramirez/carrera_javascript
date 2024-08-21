// 5- Dado el listado "personal", verificar si todos/as tienen al menos 18 años

const personal = [
  { id: 1, nombre: "Juana", edad: 35, ingreso: 2530684 },
  { id: 2, nombre: "Marcelo", edad: 41, ingreso: 2113942 },
  { id: 3, nombre: "Juan", edad: 29, ingreso: 2358068 },
  { id: 4, nombre: "Laura", edad: 19, ingreso: 1510123 },
  { id: 5, nombre: "Carlos", edad: 23, ingreso: 2834572 },
  { id: 6, nombre: "Juan Pablo", edad: 52, ingreso: 3268684 },
  { id: 7, nombre: "Noelia", edad: 15, ingreso: 2600000 },
  { id: 8, nombre: "Steven", edad: 20, ingreso: 1468276 },
];

const resultadoEvery = personal.every((persona) => {
  // if(persona.edad > 18) {
  //   return true
  // } else {
  //   return false
  // }

  return persona.edad > 18;
});

console.log(resultadoEvery);
