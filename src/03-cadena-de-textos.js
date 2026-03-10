// *  3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// let resultado =confirm('esta seguro que sea cancelar la introduccion de candena de cararteres? ')

let salida = true;
const pantalla = document.getElementById("pantalla");
let conctCadena = " --   ";
while (salida === true) {
  let cadena = prompt("ingrese cadena de caracteres");
  conctCadena += `${cadena} -`;
  if (confirm("Desea introducir otra cadena de texto?")) {
    salida = true;
  } else {
    alert("mostrando la concatenacion");
    salida = false;
    pantalla.innerHTML =
      "<span class='text-secundary'>CONCATENACIÓN DE CADENAS DE CARACTERES INTRODUCIDOS:</span>" +
      "<span class='text-light'>" +
      conctCadena +
      "-</span>";
  }
}
