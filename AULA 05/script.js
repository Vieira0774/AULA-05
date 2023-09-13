
console.log("funciona xablauzera")


const entrada = document.getElementById("entrada");

const btn = document.getElementById("btn");

const saida = document.getElementById("saida");

let erro = 0
let numSecreto = 100*Math.random();
numSecreto = Math.floor(numSecreto)


btn.addEventListener("click", function(){
   
    if (entrada.value > numSecreto) {
        saida.innerHTML = "O numero secreto é menor";
        erro = erro + 1;
        
    } else if (entrada.value < numSecreto){
        saida.innerHTML = "O numero secreto é maior";
        erro = erro + 1;

    } else {
        saida.innerHTML = "Correto";
        }

})
    
