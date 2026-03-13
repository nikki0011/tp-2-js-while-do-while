// * 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt("Ingrese el número de filas"));
const columnas = parseInt(prompt("Ingrese el número de columnas"));
const pantalla = document.getElementById("pantalla");
// let salida = true

if (!(isNaN(filas) && filas !== 0) || !(!isNaN(columnas) && columnas !== 0)) {
  document.writeln('<table class="table table-striped text-center"><tbody">') 
  let contador= 35
      for(let i=0; i<filas; i++){
          document.writeln("<tr>")
          
          for(let j=0; j<columnas; j++){
              document.writeln(`<td>${contador}</td>`)
              contador--
          }
           document.writeln("</tr>")
      }
    
  document.writeln("</tbody></table>")

  }else{
      alert('Algún dato es inválido: Recuerde que los valors deben ser numéricos y distintos de 0')
}
