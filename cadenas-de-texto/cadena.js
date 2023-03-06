let name1= "Juan"
let last_name='Villamizar'
let saludo= new String("Hola ¿que tal?");

console.log(last_name,name1,saludo)

//Propiedad lenght
console.log(
    name1.length,
    saludo.length,
    last_name.length
);
console.log("----------------metodos.()-------------------")
//Convirtiendo name a MAYUSCULA y lastname a minuscula
console.log(
    name1.toUpperCase(),
    last_name.toLowerCase()

);
console.log("----------------metodos  .includes()-------------------")
//Buscando coincidencias en una cadena de texto true false
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique error iure architecto? A excepturi nemo maiores. Enim ad corrupti neque modi. Quibusdam ducimus explicabo, modi natus soluta reprehenderit architecto!"
console.log(lorem)
console.log(
    lorem.includes("lit"),
    lorem.includes("juan")
)