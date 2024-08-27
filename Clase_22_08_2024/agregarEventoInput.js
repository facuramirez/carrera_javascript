export const agregarEventoInput = (miEmpresa) => {
  const inputSearch = document.getElementById("inputSearch");
  inputSearch.addEventListener("input", function (evento) {
    const { value } = evento.target;

    const personal = miEmpresa.listarPersonal();
    const personalFiltrado = personal.filter((persona) => {
      if (inputRadio === "nombre ") {
        if (persona.nombre.includes(value)) {
          return true;
        } else {
          return false;
        }
      } else if (inputRadio === "apellido") {
        if (persona.apellido.includes(value)) {
          return true;
        } else {
          return false;
        }
      } else if (inputRadio === "ingreso") {
        if (persona.ingreso.includes(value)) {
          return true;
        } else {
          return false;
        }
      }
    });

    const myBody = document.getElementById("my-body");
    myBody.innerHTML = "";

    personalFiltrado.forEach((persona) => {
      const tr = document.createElement("tr");

      const td1 = document.createElement("td");
      td1.textContent = persona.rut;

      const td2 = document.createElement("td");
      td2.textContent = persona.nombre;

      const td3 = document.createElement("td");
      td3.textContent = persona.apellido;

      const td4 = document.createElement("td");
      td4.textContent = persona.ingreso;

      const td5 = document.createElement("td");
      td5.textContent = persona.cargo;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      myBody.appendChild(tr);
    });
  });
};
