// * 6- Realiza un script que escriba una pirámide del 1 al 30

const pantalla = document.getElementById("pantalla");
let lineas;
for (let i = 1; i <= 30; i++) {
  for (let j = 1; j <= i; j++) {
    pantalla.innerHTML += i;
  }
  pantalla.innerHTML += "<br/>";
}

