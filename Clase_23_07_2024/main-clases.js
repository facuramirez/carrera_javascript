import { Empresa, Gerente, Empleado } from "./clases.js";
import { evento } from "./clases.js";

const miEmpresa = new Empresa("e-Contact");
miEmpresa.addEventListener("evento", () => {
  console.log("hola");
});

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

miForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(event.target);
  let myData = data.entries();
  myData = Object.fromEntries(myData);
  console.log(myData);
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
