// * 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

const pantalla = document.getElementById('pantalla')

for(i=1; i<=500; i++){
    if(!(i%4) && !(i%9)){
        pantalla.innerHTML+=i +" <span class='text-info'>(multiplo de 4 y 9)</span>"+"<br/>"
    }else if(!(i%4)){
         pantalla.innerHTML+=i +" <span class='text-info'>(multiplo de 4)</span>"+"<br/>"
    }else if(!(i%9)){
         pantalla.innerHTML+=i +" <span class='text-info'>(multiplo de 9)</span>"+"<br/>"
    }else if(!(i%5)){
         pantalla.innerHTML+=i+"<br/>"+"<span class='text-danger'>-------------------------------</span>"+"<br/>"
    }else{
         pantalla.innerHTML+=i +"<br/>" 
    }
}