import { Empresa, Gerente, Empleado } from "./clases.js";
import { evento } from "./clases.js";

const miEmpresa = new Empresa("e-Contact");

const montoAumento = document.createElement("input");
montoAumento.style.position = "fixed";
montoAumento.style.top = "90px";
montoAumento.style.right = "10px";
montoAumento.style.fontSize = "20px";
montoAumento.id = "idDeaumento";
document.body.appendChild(montoAumento);

const dispararEvento = document.createElement("button");
dispararEvento.style.position = "fixed";
dispararEvento.style.top = "50px";
dispararEvento.style.right = "10px";
dispararEvento.textContent = "Aumentar ingresos";
dispararEvento.style.fontSize = "20px";
document.body.appendChild(dispararEvento);
dispararEvento.onclick = () => {
  const inputAumento = document.getElementById("idDeaumento");
  const value = inputAumento.value;

  const nuevoEvento = new CustomEvent("aumentar-ingreso", {
    detail: parseInt(value),
  });
  evento.dispatchEvent(nuevoEvento);

  const personal = miEmpresa.listarPersonal();
  const listadoPersonal = document.getElementById("listado-personal");
  listadoPersonal.innerHTML = "";

  personal.forEach((persona) => {
    const { nombre, apellido, ingreso } = persona;
    const tag = document.createElement("h4");
    tag.textContent = `${nombre} - ${apellido} - ${ingreso}`;

    listadoPersonal.appendChild(tag);
  });
};

const botonListarPersonal = document.createElement("button");
botonListarPersonal.textContent = "Listar personal";
botonListarPersonal.style.position = "fixed";
botonListarPersonal.style.top = "10px";
botonListarPersonal.style.right = "10px";
botonListarPersonal.style.fontSize = "20px";
botonListarPersonal.onclick = () => {
  const personal = miEmpresa.listarPersonal();
  const listadoPersonal = document.getElementById("listado-personal");
  listadoPersonal.innerHTML = "";

  personal.forEach((persona) => {
    const { nombre, apellido, ingreso, cargo } = persona;
    const tag = document.createElement("h4");
    tag.textContent = `${nombre} - ${apellido} - ${ingreso} - ${cargo}`;

    listadoPersonal.appendChild(tag);
  });
};

document.body.appendChild(botonListarPersonal);

const miForm = document.getElementById("miForm");

miForm.addEventListener("input", function (event) {
  const { value, name } = event.target;

  const etiqueta = document.getElementById(name);
  if (etiqueta !== null) {
    etiqueta.textContent = value;
  }

  // if (name === "rut") {
  //   const rutDinamico = document.getElementById("rutDinamico");
  //   rutDinamico.textContent = value;
  // } else if (name === "nombre") {
  //   const nombreDinamico = document.getElementById("nombreDinamico");
  //   nombreDinamico.textContent = value;
  // } else if (name === "apellido") {
  //   const apellidoDinamico = document.getElementById("apellidoDinamico");
  //   apellidoDinamico.textContent = value;
  // }
});

miForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(event.target);
  let myData = data.entries();
  myData = Object.fromEntries(myData);

  const { rut, nombre, apellido, ingreso, lista } = myData;

  if (lista === "empleado") {
    const nuevoEmpleado = new Empleado({
      rut,
      nombre,
      apellido,
      ingreso: parseInt(ingreso),
      cargo: lista,
    });
    miEmpresa.agregarPersona(nuevoEmpleado);
  } else {
    const nuevoGerente = new Gerente({
      rut,
      nombre,
      apellido,
      ingreso,
      cargo: lista,
    });
    miEmpresa.agregarPersona(nuevoGerente);
  }

  alert("Registro exitoso");

  //* Agregamos un RUT a nuesta lista desplegable
  const optionRut = document.createElement("option");
  optionRut.value = rut;
  optionRut.textContent = rut;
  const listadoRuts = document.getElementById("lista-ruts");
  listadoRuts.appendChild(optionRut);

  //* Agregamos un CARGO a nuesta lista desplegable

  const listadoCargos = document.getElementById("lista-cargos");

  const miSet = new Set();
  miEmpresa.listarPersonal().forEach((persona) => {
    const tipo = persona.constructor.name;
    miSet.add(tipo);
  });

  //* Limpiamos el select
  listadoCargos.innerHTML = "";

  //* Agregamos la opcion "Todos"
  const opcionTodos = document.createElement("option");
  opcionTodos.value = "todos";
  opcionTodos.textContent = "Todos";
  listadoCargos.appendChild(opcionTodos);

  //* Agregamos las opciones cargadas en nuestra estructura Set a nuestro select
  for (const valor of miSet) {
    const opcionCargo = document.createElement("option");
    opcionCargo.value = valor;
    opcionCargo.textContent = valor;
    listadoCargos.appendChild(opcionCargo);
  }

  //* Listamos nuestro personal automaticamente
  const personal = miEmpresa.listarPersonal();
  const listadoPersonal = document.getElementById("listado-personal");
  listadoPersonal.innerHTML = "";

  personal.forEach((persona) => {
    const { nombre, apellido, ingreso, cargo } = persona;
    const tag = document.createElement("h4");
    tag.textContent = `${nombre} - ${apellido} - ${ingreso} - ${cargo}`;

    listadoPersonal.appendChild(tag);
  });
});

const limpiarPersonal = document.createElement("button");
limpiarPersonal.id = "boton-limpiar";
limpiarPersonal.textContent = "Eliminar personal";
limpiarPersonal.style.position = "fixed";
limpiarPersonal.style.top = "150px";
limpiarPersonal.style.right = "10px";
limpiarPersonal.style.fontSize = "20px";
limpiarPersonal.onclick = () => {
  const personal = document.getElementById("listado-personal");
  personal.innerHTML = "";
  miEmpresa.eliminarPersonal();
};

document.body.appendChild(limpiarPersonal);

const listadoRuts = document.createElement("select");
const opcionPorDefecto = document.createElement("option");
listadoRuts.id = "lista-ruts";
listadoRuts.style.position = "fixed";
listadoRuts.style.top = "210px";
listadoRuts.style.right = "60px";
listadoRuts.style.fontSize = "20px";
listadoRuts.style.width = "150px";

opcionPorDefecto.value = "todos";
opcionPorDefecto.textContent = "Todos";
listadoRuts.appendChild(opcionPorDefecto);

document.body.appendChild(listadoRuts);

const labelRuts = document.createElement("label");
labelRuts.textContent = "Ruts:";
labelRuts.style.position = "fixed";
labelRuts.style.top = "210px";
labelRuts.style.right = "230px";
labelRuts.style.fontSize = "20px";

document.body.appendChild(labelRuts);

const listadoCargos = document.createElement("select");
listadoCargos.id = "lista-cargos";
listadoCargos.style.position = "fixed";
listadoCargos.style.top = "260px";
listadoCargos.style.right = "60px";
listadoCargos.style.fontSize = "20px";
listadoCargos.style.width = "150px";
const cargoPorDefecto = document.createElement("option");

cargoPorDefecto.value = "todos";
cargoPorDefecto.textContent = "Todos";
listadoCargos.appendChild(cargoPorDefecto);

document.body.appendChild(listadoCargos);

const labelCargos = document.createElement("label");
labelCargos.textContent = "Cargos:";
labelCargos.style.position = "fixed";
labelCargos.style.top = "260px";
labelCargos.style.right = "230px";
labelCargos.style.fontSize = "20px";

document.body.appendChild(labelCargos);

const listaRuts = document.getElementById("lista-ruts");
listaRuts.addEventListener("change", function (event) {
  const { name, value } = event.target;
  // console.log(name);
  console.log(value);
});
