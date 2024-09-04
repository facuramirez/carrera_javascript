import { arregloAnimales } from "./clases.js";

export function addSelectForm() {
  const myDocument = document.body;

  const newSelect = document.createElement("select");
  newSelect.setAttribute("id", "selectAnimales");
  newSelect.setAttribute("class", "selectItem");

  const newOption = document.createElement("option");
  newOption.value = "Todos";
  newOption.textContent = "Todos";

  newSelect.appendChild(newOption);
  myDocument.appendChild(newSelect);
}

export function addChangeEvent(idElemento) {
  const selectItem = document.getElementById(idElemento);

  selectItem.addEventListener("change", onChangeElements);
}

export function addSelectOption(nombre, idElemento) {
  const selectItem = document.getElementById(idElemento);

  const newOption = document.createElement("option");
  newOption.value = nombre;
  newOption.textContent = nombre;

  selectItem.appendChild(newOption);
}

function onChangeElements(evento) {
  const nombre = evento.target.value;
  console.log(arregloAnimales.listar());

  const miTabla = document.getElementById("mi-tabla");
  miTabla.innerHTML = "";

  let filtroMascotas = [];

  if (nombre === "Todos") {
    filtroMascotas = arregloAnimales.listar();
  } else {
    filtroMascotas = arregloAnimales.listar().filter((elemento) => {
      if (elemento.nombre === nombre) {
        return true;
      }
    });
  }

  for (const mascota of filtroMascotas) {
    console.log(mascota);
    const Mascota = {
      idMascota: mascota.id,
      tipoMascota: mascota.tipo,
      nombreMascota: mascota.nombre,
      pesoMascota: mascota.peso,
    };
    addRow(Mascota);
  }
}

export function addRow(mascota) {
  console.log(mascota);
  const miTabla = document.getElementById("mi-tabla");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${mascota.idMascota}</td>
                      <td>${mascota.tipoMascota}</td>
                      <td>${mascota.nombreMascota}</td>
                      <td>${mascota.pesoMascota}</td>`;
  miTabla.appendChild(newRow);
}
