
//Ejercio 1

AskDistance = prompt("¿Cuantos metros tenes que recorrer?")
    
    if 	(AskDistance<999){
        document.write('Pie');
    }else{
        if (AskDistance<9999){
            document.write('Bici');
    }else{
        if  (AskDistance<99999){
            document.write('Auto');
    }else{
        if  (AskDistance>100000){
            document.write('Avion');
    }}}}

//Ejercicio 2

let miArray = [1,3,5,11,7,9,]
let numero = 0 
for (i=0;i<miArray.length;i++){
    if (numero<miArray[i])numero = miArray[i];
console.log(numero)
    
}