// 7- Dado el listado "personal", filtrar el mismo por aquellos trabajadores que tengan un ingreso menor a 2500000 y que tengan mas de 30 años
const personal = [
  { id: 1, nombre: "Juana", edad: 35, ingreso: 2530684 },
  { id: 2, nombre: "Marcelo", edad: 41, ingreso: 2113942 },
  { id: 3, nombre: "Juan", edad: 29, ingreso: 2358068 },
  { id: 4, nombre: "Laura", edad: 19, ingreso: 1510123 },
  { id: 5, nombre: "Carlos", edad: 23, ingreso: 2834572 },
  { id: 6, nombre: "Juan Pablo", edad: 52, ingreso: 3268684 },
  { id: 7, nombre: "Noelia", edad: 31, ingreso: 2600000 },
  { id: 8, nombre: "Steven", edad: 50, ingreso: 1468276 },
];

const nuevoArreglo = personal.filter((persona) => {
  return persona.ingreso < 2500000 && persona.edad > 30;
});

const miFuncion = (num1, num2) => {
  return num1 + num2;
};

const miFuncionCorta = (num1, num2) => num1 + num2;

const resultado = miFuncionCorta(3, 15);
console.log(resultado);
