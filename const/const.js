let a; //Podemos dejar variables abiertas
const PI = 3.141516;
console.log(PI);
// //PI =2456; no se le puede dar otro valor a una constante si la constante es tipo velor primitivo como : string, number, boolean, null, undefined, NaN 
// // const Nueve; *-esto es un error, no se pueden dejar constantes abiertas-*
a = "Hola ya tengo valor";
// console.log(a);
//Esto es un objeto
let objeto = {nombre:"Juan", apellido:"Villamizar"};
//Esto es un array
let colores =["azul","verde","blanco"];

console.log(objeto);
console.log(colores);

//Agregando valores a los objetos
objeto.edad="23";
//Agregando valores a los arrays
colores.push("rojo");

//Imprimiendo despues de agregar las cosas
console.log(objeto);
console.log(colores);

/*Si un objeto o un array es constante si permite cambiar su valor ya que es un tipo de dato compuesto tal como :
object = {}
array = []
function () { }
Class {}
*/
console.log("------------ Arreglos y objetos con const ------------");

const objeto1 = {nombre:"Juan", apellido:"Villamizar"};
//Esto es un array
const colores1 =["azul","verde","blanco"];

console.log(objeto1);
console.log(colores1);

//Agregando valores a los objetos
objeto1.edad="23";
//Agregando valores a los arrays
colores1.push("rojo");

//Imprimiendo despues de agregar las cosas
console.log(objeto1);
console.log(colores1);