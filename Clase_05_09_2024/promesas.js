const obtenerResultado = (num1, num2) => {
  const promesa1 = new Promise((resolve, reject) => {
    const resultado = num1 / num2;
    
    if (resultado !== Infinity && !isNaN(resultado)) {
      resolve(resultado);
    } else {
      reject("La operacion no pudo ser realizada o los parametros son incorrectos");
    }
  });

  return promesa1;
};

obtenerResultado(12, "hola")
  .then((data) => {
    console.log(`Primer THEN: El resultado es ${data}`);
    return data;
  })
  .then((data2) => {
    console.log("Segundo THEN: MODIFICANDO OPERACION....");

    setTimeout(() => {
      console.log(data2 * 1000);
    }, 3000);
  })
  .catch((error) => {
    console.log("ENTRO EN CATCH");
    console.log(error);
  })
  .finally(() => {
    console.log(
      "Esto se ejecutara siempre por mas que el resultado sea exitoso o falle la promesa"
    );
  });
