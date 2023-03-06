const arreglo =[]
console.log(arreglo);
const b = [34,false,"Hello",[1,2,"a","b"]]
console.log(b);
console.log(b[2]);
console.log(b[3][0]);

const c =Array.of ("X","Y",1,5,"Hola")
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const colores = ["Amarillo", "Azul", "Rojo"];
colores.push("Blanco");
console.log(colores)

colores.pop();
console.log(colores);

colores.forEach(function(el){
console.log(`<li>${el}</li>`);
});