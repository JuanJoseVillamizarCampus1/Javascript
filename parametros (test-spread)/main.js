function sumar(a,b,...c) {
    let resultado = a+b;
    c.forEach(function(n){
        resultado +=n
    })
    return resultado;
}
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,5));
console.log(sumar(1,2,3,5,10));
console.log(sumar(1,2,3,5,10,4));

const dias1=["Lunes","Martes"];
const dias2=["Miercoles","Jueves"];
console.log(dias1,dias2);

const dias3 = [dias1,dias2]; // Me guarda un array con dos arrays dentro
console.log(dias3);

const dias4= [...dias1,...dias2] //Me une los dos arrays en uno solo.
console.log(dias4);