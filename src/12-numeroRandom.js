// * 12- Realiza un script que genere un número aleatorio entre 1 y 99

const pantalla = document.getElementById("pantalla");

let numRandom = Math.ceil(Math.random() * 99);

pantalla.innerHTML = `Número Random de 1 a 99: <span class='text-info'>${numRandom}</span>`;
