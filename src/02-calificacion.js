// * 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

let salida = true;

do {
  const nota = parseInt(prompt("Ingrese nota a calificar"));
  if (nota >= 0 && nota <= 2) {
    alert("Muy deficiente");
    let aux = prompt("Desea introducir otra nota").toLowerCase();
    if (aux === "si") {
      salida = true;
    } else {
      salida = false;
    }
  } else if (nota > 2 && nota < 5) {
    alert("Insuficiente");
    let aux = prompt("Desea introducir otra nota").toLowerCase();
    if (aux === "si") {
      salida = true;
    } else {
      salida = false;
    }
  } else if (nota >= 5 && nota < 7) {
    alert("Suficiente");
    let aux = prompt("Desea introducir otra nota").toLowerCase();
    if (aux === "si") {
      salida = true;
    } else {
      salida = false;
    }
  } else if (nota === 7) {
    alert("Bien");
    let aux = prompt("Desea introducir otra nota").toLowerCase();
    if (aux === "si") {
      salida = true;
    } else {
      salida = false;
    }
  } else if (nota > 7 && nota < 10) {
    alert("Notable");
    let aux = prompt("Desea introducir otra nota").toLowerCase();
    if (aux === "si") {
      salida = true;
    } else {
      salida = false;
    }
  } else if (nota === 10) {
    alert("Sobresaliente");
    let aux = prompt("Desea introducir otra nota").toLowerCase();
    if (aux === "si") {
      salida = true;
    } else {
      salida = false;
    }
  } else if (isNaN(nota)) {
    alert("Introduce un número válido");
    salida = true;
  } else if (nota > 10) {
    alert("Número erróneo");
    salida = true;
  }
} while (salida === true);
