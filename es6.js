//definicion de variables
"use strict" // permite que una variable, se debe definir previamente
// si no se define la variable plenamente no funciona la variable 
// las variables let son tipo bloque
var salario = 3500000;
var salario = 4500000;
let nombre = "el nopmbre";
console.log(salario);
console.log(nombre);
//comillas invertidas `` para teclado en español control + alt + simbolo raro c con una costa abajo
//definir las variables con let es una buena practica
console.log(`el nobre es : ${nombre} y el salario es : ${salario}`);

const IVA = 19/100;
let a;
a = 1500;
console.log(a);

// ámbito o alcance (scope) de variables
let s = "Cualquier cosa";
if (a > 1400){
    let s = "finalizado";
    console.log(s)
}
console.log(s)

let estado = false;
//////////////////
if (!estado){
    console.log("NO Disponible")
}
else{
    console.log("Disponible")
}

//operador ternario 
let disponible = !estado ? "No disponible":"Disponible";
console.log(disponible);
///////////////////////
console.log(a > 1400 && estado ? "Tiene derechos" : "No tiene derechos");

// funciones 
function operar(a,b,oper){
    let resultado
    switch(oper)
    {
        case "+":
            resultado = a+b;
            break;
        case "-":
            resultado = a-b;
            break;
        case "*":
            resultado = a*b;
            break;
                
        case "/":
            resultado = a/b;
            break;
    }
    return resultado;
}
let miresulta = operar(5,6,"+");
console.log(miresulta);

//funciones anonimas (arrow funtions - anonymous function)
//son funciones muy puntuales muy cortas
let mensaje = function(){
    console.log("Hola, desde funciones anónimas o flecha");
}
//llamr la funcion 
mensaje();

let mensaje1 = function(){return "hola mensaje 1"};
//llamado de la funcion
console.log(mensaje1());

let mensaje2 = function(mensaje){return mensaje};
//llamado de la funcion
console.log(mensaje2("estamos practicando ES-6"));

//funciones flecha
let salario1 = () => 2100000 * 2;
console.log(salario1())

let salario2 = (salario) => {return salario * 2 }
let msalario2 = salario2(1000000);
console.log(msalario2); 

// arrays
let arraynros = [10,20,30,40];
for(let i = 0; i <= arraynros.length-1;i++){
    console.log(arraynros[i])
}

// iteradores forEach
arraynros.forEach(function(nro){
    console.log(`el numero es: ${nro}`)
})

// iteradores forEach y funcion flecha
arraynros.forEach((nro)=>{
    console.log(`el dato es: ${nro}`)
})
//array de objetos
let adatosCiudad = [
    {nombre: "Medellin", poblacion:3000000},
    {nombre: "Bello", poblacion:536000},
    {nombre: "Bogota", poblacion:5000000},
]
adatosCiudad.forEach((ciudad)=>{
    console.log(`${ciudad.nombre} -> ${ciudad.poblacion}`);
})