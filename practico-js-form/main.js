import {validaNombre, validaPeso, validaObjeto} from "./validaciones.js";
import {Gato, Perro, Hamster, arregloAnimales} from "./clases.js";
import {addSelectForm, addChangeEvent, addSelectOption} from "./funciones.js";

const formCurso = document.getElementById('formAnimales');

addSelectForm();
addChangeEvent('selectAnimales');

formCurso.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const datos = new FormData(evento.target);

    let infoMascotas = datos.entries();

    infoMascotas = Object.fromEntries(infoMascotas);
    
    if(!validaObjeto(infoMascotas)){
      console.log("Existen elementos del formulario sin información.");
      return;
    }
    
    const {
            idMascota, 
            tipoMascota, 
            nombreMascota, 
            pesoMascota
          } = infoMascotas;

    if( !validaNombre(nombreMascota) ){
      console.log("Nombre de mascota no valido.")
      return;
    }
    
    if( !validaPeso(pesoMascota) ){
      console.log("Peso de la mascota no es numérico")
      return;
    }
 
    if( tipoMascota === "perro"){
      const newPerro = new Perro(idMascota, tipoMascota, nombreMascota, pesoMascota);
      arregloAnimales.registar(newPerro);
    }

    if( tipoMascota === "gato"){
      const newGato = new Gato(idMascota, tipoMascota, nombreMascota, pesoMascota);
      arregloAnimales.registar(newGato);
    }

    if( tipoMascota === "hamster"){
      const newHamster = new Hamster(idMascota, tipoMascota, nombreMascota, pesoMascota);
      arregloAnimales.registar(newHamster);
    }

    addSelectOption(nombreMascota, 'selectAnimales');
}
);