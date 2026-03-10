// *1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let salida = true;

do {
  const edad = parseInt(prompt("Ingrese su edad"));

  if (!isNaN(edad)) {
    if (edad >= 18 && salida === true) {
      alert("Ya tienes edad para conducir");
      let aux = prompt(
        "Desea introducir otra edad? Precione SI para agregar la siguente edad O cualquier TECLA para salir",
      ).toLowerCase();
      if (aux === "si") {
        salida = true;
      } else {
        salida = false;
      }
    } else {
      alert("No tienes edad para conducir");
      let aux = prompt(
        "Desea introducir otra edad? Precione SI para agregar la siguente edad O cualquier TECLA para salir",
      ).toLowerCase();
      if (aux === "si") {
        salida = true;
      } else {
        salida = false;
      }
    }
  } else {
    alert("El dato introducido no es valido, introduzca un numero");
    let aux = prompt(
        "Desea introducir otra edad? Precione SI para agregar la siguente edad O cualquier TECLA para salir",
      ).toLowerCase();
  }
} while (salida === true);
