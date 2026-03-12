// * 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

let salida = true;
const pantalla = document.getElementById("pantalla");

while (salida === true) {
  let numPiram = parseInt(prompt("Ingrese numero a piramidar"));
  if (!isNaN(numPiram)) {
    if (numPiram <= 50) {
      for (let i = 1; i <= numPiram; i++) {
        for (let j = 1; j <= i; j++) {
          ((pantalla.innerHTML += j), j + 1);
        }
        pantalla.innerHTML += "<br/>";
        salida = false;
      }
    } else {
      alert(
        "Ingreso de dato no válido, por favor ingrese un numero menor a 51",
      );
      salida = true;
    }
  } else {
    alert("Ingreso de dato no válido, por favor ingrese un numero");
    salida = true;
  }
}
