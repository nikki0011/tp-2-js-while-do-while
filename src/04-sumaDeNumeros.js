// * 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let salida = true;
const pantalla = document.getElementById("pantalla");
let sumNums = 0;
while (salida === true) {
  const num = parseInt(prompt("ingrese numero a sumar"));
  if (!isNaN(num)) {
    sumNums += num;
    if (confirm("Desea introducir otro numero?")) {
      salida = true;
    } else {
      alert("mostrando la concatenacion");
      salida = false;
      pantalla.innerHTML =
        "<span class='text-secundary'>SUMA TOTAL DE NÚMEROS INGRESADOS: </span>" +
        "<span class='text-light fw-bold'>" +
        sumNums +
        "</span>";
    }
  } else {
    alert("Dato ingresado no valido, click en aceptar e introduzca un valor numérico");
    salida = true;
  }
}
