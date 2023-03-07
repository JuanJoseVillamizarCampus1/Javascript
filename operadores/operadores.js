//Operadores
//Aritmeticos + - / * % ** ++ -- 

let operadores = 5+3*2;
let operadores1 = 5-3/2;
let operadores2 = 2**3;
let modulo = 10%2;
let modulo1 = 10%7;

console.log(operadores);
console.log(operadores1);
console.log(operadores2);
console.log(modulo);
console.log(modulo1);

//Relacionales

console.log(8>9);
console.log(9>8);
console.log(9>=9);

/* 1 = es asignacion
2 == es comparacion de valor
3 === compara el tipo de dato y valor
*/
console.log(3==2);
console.log(3==3);
console.log(3=="3");
console.log(3==="3");

//Incremento Decremento

let i =1;

i=i+2;

let x=4;
x+=2;

//Operador unario
let z=7;
z++;

console.log(i);
console.log(x);
console.log(z);

//Operaores Logicos
/*
!--not
||--or
&& --and
*/
console.log(!true);
console.log(!false);
console.log("comparando",(9==="9" || 9==9))
console.log("comparando",(9==="9" && 9==9))