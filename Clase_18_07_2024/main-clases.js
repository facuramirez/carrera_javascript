import { Empresa, Gerente, Empleado } from "./clases.js";

const miEmpresa = new Empresa("e-Contact");

const dispararEvento = document.createElement("button");
dispararEvento.style.position = "fixed";
dispararEvento.style.top = "50px";
dispararEvento.style.right = "10px";
dispararEvento.textContent = "Aumentar ingresos";
dispararEvento.style.fontSize = "20px";
document.body.appendChild(dispararEvento);

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
    const { nombre, apellido } = persona;
    const tag = document.createElement("h4");
    tag.textContent = `${nombre} - ${apellido}`;

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

  const { rut, nombre, apellido, ingreso, lista } = myData;

  if (lista === "empleado") {
    const nuevoEmpleado = new Empleado({
      rut,
      nombre,
      apellido,
      ingreso,
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
});
