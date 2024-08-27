const miForm = document.getElementById("miForm");

miForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(event.target);
  let myData = data.entries();
  myData = Object.fromEntries(myData);

  const { nombre, apellido, ingreso, lista } = myData;

  const verificarUL = document.getElementById("miUl");

  let ul;

  if (verificarUL === null) {
    ul = document.createElement("ul");
    ul.id = "miUl";
  } else {
    ul = verificarUL;
  }

  const li = document.createElement("li");
  li.id = nombre;
  li.textContent = `Nombre: ${nombre} - Apellido: ${apellido} - Ingreso: ${ingreso} - Cargo: ${lista}`;

  const button = document.createElement("button");
  button.textContent = "Eliminar";
  button.onclick = () => {
    const liAEliminar = document.getElementById(nombre);
    ul.removeChild(liAEliminar);
  };

  li.appendChild(button);
  ul.appendChild(li);

  document.body.appendChild(ul);
});
