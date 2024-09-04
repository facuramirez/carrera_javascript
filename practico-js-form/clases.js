export class Perro {
  constructor(id, tipo, nombre, peso) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.peso = peso;
  }
}

export class Hamster {
  constructor(id, tipo, nombre, peso) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.peso = peso;
  }
}

export class Gato {
  constructor(id, tipo, nombre, peso) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.peso = peso;
  }
}

export class Animales {
  #cantidad = 0;
  #registros = [];

  constructor() {}

  getRecords() {
    return this.#cantidad;
  }

  listar() {
    return this.#registros;
  }

  registar(objetoAnimal) {
    this.#registros.push(objetoAnimal);
    this.#cantidad = this.#registros.length;
  }

  limpiar() {
    this.#registros = [];
    this.#cantidad = 0;
  }
}

export const arregloAnimales = new Animales();
