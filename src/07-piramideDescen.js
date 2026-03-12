// * 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).


const pantalla = document.getElementById("pantalla");
let salida= true
while(salida===true){
    const numPiram= parseInt(prompt('Ingrese numero para formar piramide'))
if(numPiram<=50){
for (let i = numPiram; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    pantalla.innerHTML += i;
  }
  pantalla.innerHTML += "<br/>";
  salida=false
}
}else{
    alert('La acción no es valida o el numero no puder ser mayor a 50, intente nuevamente')
    salida=true
}

}




