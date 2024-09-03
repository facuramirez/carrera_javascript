import { arregloAnimales } from "./clases.js";

export function addSelectForm(){
    const myDocument = document.body; 
    
    const newSelect = document.createElement('select');
    newSelect.setAttribute('id', 'selectAnimales');
    newSelect.setAttribute('class', 'selectItem');

    const newOption = document.createElement('option');
    newOption.value = "Todos";
    newOption.textContent = "Todos";

    newSelect.appendChild(newOption);
    myDocument.appendChild(newSelect);
}

export function addChangeEvent(idElemento){
    const selectItem = document.getElementById(idElemento);

    selectItem.addEventListener('change', onChangeElements);
}

export function addSelectOption(nombre, idElemento){
    const selectItem = document.getElementById(idElemento);

    const newOption = document.createElement('option');
    newOption.value = nombre;
    newOption.textContent = nombre;

    selectItem.appendChild(newOption);
}

function onChangeElements(evento){
  const nombre = evento.target.value;
  console.log(arregloAnimales.listar());

  console.log(arregloAnimales.listar().filter((elemento) => {
    if( elemento.nombre === nombre ){
        return elemento;
    }
  }));
  
}
