const persona = {
  nombre: "Carlos",
  altura: 191,
  deportista: true,
  edad: 45,
};

//* DOT NOTATION: Notación de puntos
console.log("DOT NOTATION");
console.log(persona.nombre);
console.log(persona.altura);
console.log(persona.deportista);

//* BRACKET NOTATION: Notación de corchetes
console.log("BRACKET NOTATION");
console.log(persona["nombre"]);
console.log(persona["altura"]);
console.log(persona["deportista"]);

//* BRACKET NOTATION "CON VARIABLES"
console.log("BRACKET NOTATION CON VARIABLES");
const campoNombre = "noExisteEsteCampo";
console.log(persona[campoNombre]);
console.log(persona["noExisteEsteCampo"]);
