export const agregarRut = () => {
  const select = document.createElement("select");
  select.id = "ruts";
  select.name = "selectRuts";
  select.style.position = "fixed";
  select.style.top = "180px";
  select.style.right = "120px";

  const option1 = document.createElement("option");
  option1.value = "todos";
  option1.textContent = "Todos";

  select.appendChild(option1);

  document.body.appendChild(select);
};
