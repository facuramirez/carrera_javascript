export function validaNombre (inputNombre){
  if( !inputNombre )
    return false;
    
  if( inputNombre.length < 4 )
    return false;
    
  return true;
}

export function validaPeso (inputPeso) {
  if( isNaN(inputPeso) )
    return false;
  else
    return true;
}

export function validaObjeto (inputObj) {
  return Object.values(inputObj).every(elemento => {
    return elemento.length > 0;
  });
}