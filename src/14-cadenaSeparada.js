// * 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const pantalla = document.getElementById("pantalla");
const cadenaString = prompt("Ingrese una cadena de texto a separar");

// let letterString = cadenaString.split("").join("-");
// pantalla.innerHTML =
//   "<span class='text-secundary'>Cadena separada en caracteres: </span>" +
//   letterString;

let lettersString = "";

for (let i = 0; i < cadenaString.length; i++) {
  if (cadenaString[i] === cadenaString[cadenaString.length - 1]) {
    lettersString += cadenaString.charAt(i);
  }else if (cadenaString[i] === " " )  {
    lettersString = lettersString
  } else {
    lettersString += cadenaString.charAt(i) + " - ";
  }
  pantalla.innerHTML =
    "<span class='text-secundary'>Cadena separada en caracteres: </span>" +
    lettersString;
}
