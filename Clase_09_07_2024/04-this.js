// THIS EN DIFERENTES ESCENARIOS
// THIS en un contexto global => undefined
// THIS en una función tradicional (no en un objeto) => undefined
// THIS en un método de un objeto (función tradicional)  => apunta al mismo objeto
// THIS en un método de un objeto (arrow function) => hereda el THIS del contexto en el que se encuentra definida la arrow function

// LLamo al this desde el contexto global esto me da UNDEFINED
console.log(this);

// LLamo al this desde una function tradicional esto me da UNDEFINED
function saludar() {
  console.log(this);
}

// La siguiente función se está usando como método de los objetos persona1, persona2 y persona 3
function obtenerDescripcion() {
  return `Mi nombre es ${this.color}`;
}

// Campo descripción: tiene asignado como valor una funcion tradicional por lo tanto el THIS apunta al mismo objeto
// Campo descripcionConFuncionFlecha1: tiene asignado como valor una función flecha por lo tanto hereda el THIS del contexto en el cual se encuentra definido (en este caso el objeto global)
// Campo descripcionConFuncionFlecha2: tiene asignado como valor una función tradicional por lo tanto el THIS apunta al mismo objeto. Dentro de esta, tenemos una función flecha por lo tanto esta hereda el THIS del contexto en el que se encuentra definida, es decir, la función tradicional que la engloba
const persona1 = {
  nombre: "Manuel",
  deportista: true,
  altura: 180,
  descripcion: obtenerDescripcion,
  descripcionConFuncionFlecha1: () => {
    return `Mi nombre es ${this.nombre} y mi altura es ${this.altura}`;
  },
  descripcionConFuncionFlecha2: function () {
    const funcionFlecha = () => {
      return `Mi nombre es ${this.nombre} y mi altura es ${this.altura}`;
    };

    return funcionFlecha();
  },
};

const persona2 = {
  nombre: "Laura",
  deportista: true,
  altura: 180,
  descripcion: obtenerDescripcion,
  descripcionConFuncionFlecha1: () => {
    return `Mi nombre es ${this.nombre} y mi altura es ${this.altura}`;
  },
  descripcionConFuncionFlecha2: function () {
    const funcionFlecha = () => {
      return `Mi nombre es ${this.nombre} y mi altura es ${this.altura}`;
    };

    return funcionFlecha();
  },
};

const persona3 = {
  nombre: "Juan Pablo",
  deportista: true,
  altura: 180,
  descripcion: obtenerDescripcion,
  descripcionConFuncionFlecha1: () => {
    return `Mi nombre es ${this.nombre} y mi altura es ${this.altura}`;
  },
  descripcionConFuncionFlecha2: function () {
    const funcionFlecha = () => {
      return `Mi nombre es ${this.nombre} y mi altura es ${this.altura}`;
    };

    return funcionFlecha();
  },
};

const resultado1 = persona1.descripcion();
const resultado2 = persona2.descripcion();
const resultado3 = persona3.descripcion();

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
