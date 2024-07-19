export class Empresa {
  nombre;
  personal = [];

  constructor(nombre) {
    this.nombre = nombre;
  }

  listarPersonal() {
    return this.personal;
  }

  agregarPersona(nuevaPersona) {
    this.personal.push(nuevaPersona);
  }
}

export class Gerente {
  rut;
  nombre;
  apellido;
  ingreso;
  cargo;

  constructor({ rut, nombre, apellido, ingreso, cargo }) {
    (this.rut = rut),
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.ingreso = ingreso),
      (this.cargo = cargo);
  }
}

export class Empleado {
  rut;
  nombre;
  apellido;
  ingreso;
  cargo;

  constructor({ rut, nombre, apellido, ingreso, cargo }) {
    (this.rut = rut),
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.ingreso = ingreso),
      (this.cargo = cargo);
  }
}
