function enviarFormulario(event) {
  // Evito el comportamiento por defecto de recargar la página
  event.preventDefault();

  // Uso la interfaz FormData para capturar los valores del formulario (captura el valor de las etiquetas que tengan el atributo "name" seteado)
  const formData = new FormData(event.target);

  // Accedo de forma individual a los valores capturados con FormData
  const getNombre = formData.get("nombre");
  const getApellido = formData.get("apellido");
  const getEdad = formData.get("edad");

  /* Aplico el método "entries()" el cual devuelve un objeto iterador para poder recorrer los pares clave/valor de los datos del formulario,
   es decir, las claves serían los "name" y los valores serían los colocados en los "inputs" (aunque tambien podrían ser checkboxs, selects, etc) */
  const formIterador = formData.entries();
  // formIterador.forEach((item) => {
  //   console.log(item);
  // });

  // Usamos el método Object.fromEntries()
  // CONTAMOS CON TODA LA INFORMACION DE NUESTRO FORMULARIO
  const formularioFinal = Object.fromEntries(formIterador);

  // Destructuración de valores de nuestro objeto con los datos del formulario
  const { nombre, apellido, edad } = formularioFinal;

  // Selección de etiquetas html para posterior manipulación de validaciones
  const nombreInput = document.getElementById("nombreInput");
  const nombreError = document.getElementById("error-nombre");

  // Validaciones dle input "nombre"
  if (nombre.length < 10) {
    nombreInput.style.backgroundColor = "red";
    nombreInput.focus();
    nombreError.style.color = "red";
    nombreError.textContent = "Este campo requiere al menos 10 caracteres";
  } else {
    nombreInput.style.backgroundColor = "white";
    nombreError.textContent = "";
  }

  // Manipulación de la etiqueta con ID "miAlerta" y anexo de clase css con animación
  const miAlerta = document.getElementById("miAlerta");
  miAlerta.classList.add("animacion-alerta");

  // Evento que se ejecuta al finalizar la animación
  miAlerta.addEventListener("animationend", function () {
    miAlerta.classList.remove("animacion-alerta");
  });
}

export default enviarFormulario;
