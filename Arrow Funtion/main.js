const saludar = ()=>{
    console.log("Hola");
}
saludar();

const saludo = nombre => console.log(`HOla ${nombre}`);
saludo("Irma")


//Simplificando funciones con Arrow Funtion

// const sumar = function(a,b){
//     return a+b;
// }

const sumar = (a,b)=>a+b;
console.log(sumar(3,6));

const numeros = [1,2,3,4,5];

numeros.forEach((elemento,index)=>  console.log(`${elemento} esta en la posicion ${index}`));