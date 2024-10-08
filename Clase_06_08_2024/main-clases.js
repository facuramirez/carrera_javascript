import { Empresa, Gerente, Empleado } from "./clases.js";
import { evento } from "./clases.js";
import { validarFormulario } from "./validaciones.js";

const miEmpresa = new Empresa("e-Contact");
// miEmpresa.addEventListener("evento", () => {
//   console.log("hola");
// });

miEmpresa.dispatchEvent(new CustomEvent("evento", { detail: { msg: "hola" } }));
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

const validaciones = {
  rut: false,
  nombre: false,
  apellido: false,
  ingreso: false,
};

const validarFormulario = {
  rut: "",
};

miForm.addEventListener("input", function (event) {
  const { name, value } = event.target;
  let resultado;

  if (name === "rut") {
    resultado = /^([0-9])*$/.test(value);
    const errorRut = document.getElementById("errorRut");
    if (resultado === true) {
      errorRut.textContent = "";
      // validaciones.rut = true;
    } else {
      errorRut.textContent = "Este campo admite solo números";
      // validaciones.rut = false;
    }

    // validaciones[name] = resultado;
  }

  if (name === "nombre") {
    const errorNombre = document.getElementById("errorNombre");
    resultado = value.length > 4;
    if (resultado === true) {
      errorNombre.textContent = "";
      // validaciones.nombre = true;
    } else {
      errorNombre.textContent = "El nombre debe tener al menos 4 caracteres";
      // validaciones.nombre = false;
    }
    // validaciones[name] = resultado;
  }

  if (name === "apellido") {
    const errorApellido = document.getElementById("errorApellido");
    resultado = value.length > 6;
    if (resultado === true) {
      errorApellido.textContent = "";
      // validaciones.apellido = true;
    } else {
      errorApellido.textContent =
        "El apellido debe tener al menos 6 caracteres";
      // validaciones.apellido = false;
    }
    // validaciones[name] = resultado;
  }

  if (name === "ingreso") {
    resultado = /^([0-9])*$/.test(value);
    const errorIngreso = document.getElementById("errorIngreso");
    if (resultado === true) {
      errorIngreso.textContent = "";
      // validaciones.ingreso = true;
    } else {
      errorIngreso.textContent = "Este campo admite solo números";
      // validaciones.ingreso = false;
    }
    // validaciones[name] = resultado;
  }

  validaciones[name] = resultado;

  // const etiqueta = document.getElementById(name);
  // if (etiqueta !== null) {
  //   etiqueta.textContent = value;
  // }

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

const listo = true;

miForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const resultadoFormulario = validarFormulario(validaciones);

  if (resultadoFormulario === false) {
    alert("El formulario contiene errores");
    return;
  }

  const data = new FormData(event.target);
  let myData = data.entries();
  myData = Object.fromEntries(myData);

  const { rut, nombre, apellido, ingreso, lista } = myData;

  const resultado = miEmpresa.listarPersonal().some((persona) => {
    if (rut === persona.rut) {
      return true;
    }
    return false;
  });

  if (resultado === true) {
    alert("Ese rut ya se encuentra registado");
    return;
  }

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

  // const personal = miEmpresa.listarPersonal();
  // const listadoPersonal = document.getElementById("listado-personal");
  // listadoPersonal.innerHTML = "";

  // personal.forEach((persona) => {
  //   const { nombre, apellido, ingreso, cargo } = persona;
  //   const tag = document.createElement("h4");
  //   tag.textContent = `${nombre} - ${apellido} - ${ingreso} - ${cargo}`;

  //   listadoPersonal.appendChild(tag);
  // });
  const fila = document.createElement("tr");
  fila.id = rut;
  const dataRut = document.createElement("td");
  const dataNombre = document.createElement("td");
  const dataApellido = document.createElement("td");
  const dataIngreso = document.createElement("td");
  const dataCargo = document.createElement("td");

  dataRut.textContent = rut;
  dataNombre.textContent = nombre;
  dataApellido.textContent = apellido;
  dataIngreso.textContent = ingreso;
  dataCargo.textContent = lista;

  fila.appendChild(dataRut);
  fila.appendChild(dataNombre);
  fila.appendChild(dataApellido);
  fila.appendChild(dataIngreso);
  fila.appendChild(dataCargo);

  const myBody = document.getElementById("my-body");

  myBody.appendChild(fila);
});
