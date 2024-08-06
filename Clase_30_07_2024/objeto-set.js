const miSet = new Set();

miSet.add("Facundo");
miSet.add(4);
miSet.add(true);
miSet.add("Facundo");
miSet.add("Facundo Ramirez");

// miSet.clear();
// console.log(miSet.size);

// miSet.delete("Facundo");

// console.log(miSet.has(465));
console.log(miSet);

// miSet.forEach(function (value, index, array) {
//   console.log(value);
// });

// for (const value of miSet) {
//   console.log(value);
// }

const numeros = [5, 8, 2, 15, 8, 2, 65, 90, 83, 8, 2, 105];

const nuevoSet = new Set(numeros);

const sinRepetidos = [...nuevoSet];

const setUno = new Set("ManzAna");

const miArreglo = ["Facundo", true, false, 4, 90, "Carlos"];

miArreglo.push("Laura");

console.log(miArreglo.includes("asdasdasd"));
