// * 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

const age1=parseInt(prompt('Ingrese su edad')) 
const name1=prompt('Ahora su nombre')
const age2=parseInt(prompt('Ingrese su edad')) 
const name2=prompt('Ahora su nombre')
const age3=parseInt(prompt('Ingrese su edad')) 
const name3=prompt('Ahora su nombre')
const pantalla = document.getElementById('pantalla')

let mayorEdad= Math.max(age1,age2,age3)
// else if(mayorEdad === age1 && mayorEdad === age2 && mayorEdad === age3){
//     pantalla.innerHTML = `De ${name1}, ${name2} y ${name3}: <span class="text-info">${name2}, ${name2}, ${name3} </span> tienen la misma edad `
// }

if(mayorEdad === age1 && mayorEdad === age2 && mayorEdad === age3){
    pantalla.innerHTML = `<span class="text-info">${name2}, ${name2}, ${name3} </span> tienen la misma edad `
}else if(mayorEdad === age1 && mayorEdad === age2){
    pantalla.innerHTML = `De ${name1}, ${name2} y ${name3}: <span class="text-info">${name1} y ${name1} </span> son mas grandes `
}else if(mayorEdad === age1 && mayorEdad === age3){
    pantalla.innerHTML = `De ${name1}, ${name2} y ${name3}: <span class="text-info">${name1} y ${name3} </span> son mas grandes `
}else if(mayorEdad === age2 && mayorEdad === age3){
    pantalla.innerHTML = `De ${name1}, ${name2} y ${name3}: <span class="text-info">${name2} y ${name3} </span> son mas grandes `
}else{
 if(mayorEdad === age1){
    pantalla.innerHTML = `De ${name1}, ${name2} y ${name3}:  <span class="text-info">${name1}</span> es mas grande `
}else if(mayorEdad === age2){
    pantalla.innerHTML = `De ${name1}, ${name2} y ${name3}:  <span class="text-info">${name2}</span> " " es mas grande `
}else if(mayorEdad === age3){
    pantalla.innerHTML = `De ${name1}, ${name2} y ${name3}: <span class="text-info">${name3}</span> es mas grande `
}
}




