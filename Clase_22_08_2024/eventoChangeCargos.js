export const agregarEventoChangeCargos = (miEmpresa) => {
  const selectCargos = document.getElementById("cargos");

  selectCargos.addEventListener("change", function (evento) {
    const { value } = evento.target;

    const personal = miEmpresa.listarPersonal();

    const personalFiltrado = personal.filter((persona) => {
      if (value === "todos") return true;

      //   if (persona.cargo === value) {
      //     return true;
      //   } else {
      //     return false;
      //   }

      return persona.cargo === value;
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
