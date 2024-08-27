export const agregarInputNombre = () => {
  const inputNombre = document.createElement("input");
  const dataList = document.createElement("datalist");
  dataList.id = "listado";

  inputNombre.type = "search";
  inputNombre.list = dataList;
  inputNombre.name = "inputBusqueda";
  inputNombre.style.position = "fixed";
  inputNombre.style.top = "260px";
  inputNombre.style.position = "150px";

  document.body.appendChild(inputNombre);
};
