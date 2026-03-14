// * 13- Realiza un script que pida un texto y lo muestre en mayúsculaa
const textoMayusculas=prompt('Ingrese texto').toLocaleUpperCase()
const pantalla = document.getElementById('pantalla')

pantalla.innerHTML= `Texto ingresado en mayúscula: ${textoMayusculas}`

