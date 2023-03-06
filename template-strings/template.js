let nombre = "Juan"
let apellido = "Villamizar"

//Concatenacion
let saludo1 ="Hola mi nombre es "+ nombre+ " "+apellido+"."
console.log(saludo1)

//Interpolacion de variables
//Template String
let saludo = `Hola mi nombre es: ${nombre} ${apellido}.`
console.log(saludo)
//Con template String``podemos identar el codigo tipo html
let ul =`<ul>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Primavera</li>
</ul>`;
console.log(ul)

let ul1 ="<ul> <li>Verano</li> <li>Otoño</li> <li>Primavera</li> </ul>";


let ul2 = "<ul>";
ul2 +="<li>Verano</li>";
ul2 +="<li>Otoño</li>";
ul2 +="<li>Primavera</li>";
ul2 +="</ul>";
    
    
console.log(ul1)
console.log(ul2)