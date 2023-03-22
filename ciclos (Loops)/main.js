let x = 0
while (x<10) {
    x++
    console.log("While"+x);
}
let z =0
do {
    z++
    console.log("Do while" + z);
} while (z<10);

const diasSemana= ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"
]

for (let i = 0; i < diasSemana.length; i++) {
    console.log(diasSemana[i]);
    
}

let contador = 10;
for (let j = 0; j < contador; j++) {
    
    console.log("For" +" " +j);
}

const datos={
    nombre:"Juan",
    edad:23,
    cel:3102938999
}

for (const propiedad in datos) {
    console.log(`${propiedad} :${datos[propiedad]}`);
}
for (const iterator of diasSemana) {
    console.log(iterator);
}

for (const inter of datos.nombre) {
    console.log(inter);
}