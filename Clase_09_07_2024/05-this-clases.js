// THIS en las clases apunta a la misma instancia de clase
class Persona {
  nombre;
  edad;
  altura;

  constructor(nombre, edadDePersona, altura) {
    this.nombre = nombre;
    this.edad = edadDePersona;
    this.altura = altura;
  }

  obtenerDatos() {
    return `Hola mi nombre es ${this.nombre}, mi edad es ${this.edad} y mido ${this.altura}`;
  }
}

const persona1 = new Persona("Pedro", 50, 171);
const persona2 = new Persona("Marcelo", 38, 190);
const persona3 = new Persona("Atilio", 40, 165);

console.log(persona1.obtenerDatos());
console.log(persona2.obtenerDatos());
console.log(persona3.obtenerDatos());
