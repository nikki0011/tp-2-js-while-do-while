// * 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const pantalla = document.getElementById("pantalla");
const palabraVocales = prompt("Ingrese texto").toLowerCase();
const vocales = "aeiouáéíóú";
let primeraVocal = "";

for (let i = 0; i < palabraVocales.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (palabraVocales[i] === vocales[j]) {
      primeraVocal += palabraVocales[i];
    }
  }
}

primeraVocal = primeraVocal.charAt(0);
let posicionPrimeraVocal = palabraVocales.indexOf(primeraVocal);
pantalla.innerHTML =
  "<span class='text-secundary'>Texto ingresado: " +
  "<span class='text-warning'>" +
  palabraVocales +
  "</span>" +
  "</span>" +
  "<br/>" +
  "<span class='text-secundary'>La vocal '" +
  primeraVocal +
  "' esta en la posición: " +
  "<span class='text-warning'>" +
  posicionPrimeraVocal +
  "</span>" +
  "</span>";
