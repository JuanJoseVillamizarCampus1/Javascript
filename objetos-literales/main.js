let nombre="Sacha"
    edad= 11

const perro = {
    nombre:nombre,
    edad:edad,
    raza:"Beagle",
    ladrar: function() {
        console.log("Guau guau");
    }
}
console.log(perro);

const dog={
    nombre,
    edad,
    raza:"Beagle",
    ladrar(){
        console.log("Guau guau guau");
    }
}
console.log(dog);
dog.ladrar()
perro.ladrar()