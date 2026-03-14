// *15- Realiza un script que cuente el número de vocales que tiene un texto.

const pantalla = document.getElementById("pantalla");
const palabraVocales = prompt("Ingrese texto");
const vocales = "aeiouáéíóú";
let cantVocales = 0;

for (let i = 0; i < palabraVocales.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (palabraVocales[i] === vocales[j]) {
      cantVocales++;
    }
  }
}
pantalla.innerHTML =
  "<span class='text-secundary'>Texto ingresado: " +
  "<span class='text-warning'>" +
  palabraVocales +
  "</span>" +
  "</span>" +
  "<br/>" +
  "<span class='text-secundary'>Cantidad de vocales: " +
  "<span class='text-warning'>" +
  cantVocales +
  "</span>" +
  "</span>";
