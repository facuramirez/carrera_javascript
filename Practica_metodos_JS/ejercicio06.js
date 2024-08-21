// 6- Dado el listado "personal", mapear el mismo y devolver uno similiar pero con un aumento de los ingresos en un 50% de cada trabajador

const personal = [
  { id: 1, nombre: "Juana", edad: 35, ingreso: 2530684 },
  { id: 2, nombre: "Marcelo", edad: 41, ingreso: 2113942 },
  { id: 3, nombre: "Juan", edad: 29, ingreso: 2358068 },
  { id: 4, nombre: "Laura", edad: 19, ingreso: 1510123 },
  { id: 5, nombre: "Carlos", edad: 23, ingreso: 10 },
  { id: 6, nombre: "Juan Pablo", edad: 52, ingreso: 60 },
  { id: 7, nombre: "Noelia", edad: 31, ingreso: 2600000 },
  { id: 8, nombre: "Steven", edad: 20, ingreso: 1468276 },
];

const nuevoArreglo = personal.map((persona) => {
  const { id, nombre, edad, ingreso } = persona;
  const nuevoIngreso = ingreso * 1.5;
  return {
    id,
    nombre,
    edad,
    ingreso: nuevoIngreso,
  };
});

console.log(nuevoArreglo);
