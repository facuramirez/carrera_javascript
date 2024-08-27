export const validarFormulario = (validacionesFormulario) => {
  const valores = Object.values(validacionesFormulario);

  const validacionFormulario = valores.every((value) => {
    if (value === true) {
      return true;
    }
    return false;
  });

  return validacionFormulario;

  //   if (validacionFormulario === false) {
  //     alert("El formulario contiene errores");
  //     return;
  //   }
};
