// Funcion declarada

function funcion1(){
console.log("uno")
console.log("dos")
console.log("tres")

}
funcion1();

function saludo(nombre,edad){
    console.log(`Hola mi nombre ${nombre} y tengo ${edad} años.`);
}
saludo();
saludo("Juan","23")

console.log("..............funcion declarada vs funcion expresada..............")

funcionDeclarada();

function funcionDeclarada(){
console.log("Esto es una funcion declarada y se puede invocar en cualquier parte del codigo, incluso antes de que la funcion sea declarada")
}


//funcion anonima
const funcionExpresada = function (){
console.log("ESto es una funcion expresada, una funcion que se le ha asignado como valor a una variable, si invocamos la funcion antes de su definicion nos devuelve error")
}
funcionExpresada();