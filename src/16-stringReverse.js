// * 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const pantalla = document.getElementById("pantalla");
const string = prompt("Ingrese una cadena de texto a revertir");
let letterString = string.split("").reverse().join("");
pantalla.innerHTML =
  "<span class='text-secundary'>Cadena ingresada: </span>" +
  "<span class='text-warning'>" +
  string +
  "</span>" +
  " <br/>" +
  "<span class='text-secundary'>Cadena revertida: </span>" +
  "<span class='text-warning'>" +
  letterString +
  "</span>";
