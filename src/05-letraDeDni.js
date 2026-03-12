// * 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// *El algoritmo para calcular la letra del dni es el siguiente :

// *El número debe ser entre 0 y 99999999
// *Debemos calcular el resto de la división entera entre el número y el número 23.
// *Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// *Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// *Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let salida = true;
const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
const pantalla = document.getElementById("pantalla");

while (salida === true) {
  const numDni = parseInt(prompt("Ingrese su numero de DNI"));
  console.log(numDni);
  if (!isNaN(numDni)) {
    if (numDni > 0 && numDni < 100000000) {
      const restoDivNumDni = parseInt(numDni % 23);
      console.log(restoDivNumDni);
      const letraDeNum = letras.charAt(restoDivNumDni);
      alert(
        "DNI INGRESADO: " +
          numDni +
          "\n" +
          "LETRAS CORRESPODIENTE A NUMERO: " +
          letraDeNum,
      );
      if (
        confirm(
          'Para introducir nuevo número precione "Aceptar", de lo contrario preciones "cancelar"',
        )
      ) {
        salida = true;
      } else {
        salida = false;
      }
      pantalla.innerHTML =
        "<span>DNI INGRESADO: </span>" +
        numDni +
        "</br>" +
        "<span>LETRAS CORRESPODIENTE A NUMERO: </span>" +
        letraDeNum;
    } else {
      alert(
        "Rango de numero erróneo, intente nuevamente haciendo clik en aceptar",
      );
    }
  } else {
    alert("Dato ingresado no válido, acepte e ingrese nuevamente un número");
    salida = true;
  }
}
