//Var genera variables globales y let variables de bloque



console.log("----------------LET----------------")
let musica="Rock" //Definimos la variable musica con let
console.log("La musica antes del bloque es: ",musica)

//Inicimaos un bloque
{
let musica ="Pop"
console.log("La musica dentro del bloque es: ",musica)
}

console.log("La musica despues del bloque es: ",musica)

console.log("----------------VAR----------------")

var musica1 = "Rock" //Definimos la variable musica con var
console.log("La musica antes del bloque es: ",musica1)

{
    var musica1= "Pop"
    console.log("La musica dentro del bloque es: ",musica1)
}
console.log("La musica despues del bloque es: ",musica1)

