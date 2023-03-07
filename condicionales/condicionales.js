let edad = 22;

if (edad<=17.9){
    console.log("Eres menor de edad")
}
else{
    console.log("Eres mayor de edad");
}

let hora=18;

if (hora>=0 && hora <6){
    console.log("Dejame dormir");
}
    else if(hora>=6 && hora<=11){
        console.log("Buenos dias");
}
    else if(hora>=12 && hora<=18){
        console.log("Buenas tardes");
    }
    else if(hora>=19 && hora<=24){
        console.log("Buenas noches");
}

//operador tenario
console.log("Operador tenario");
let tenario =(edad>=18)
?"Eres mayor de edad"
:"eres menor de edad";
console.log(tenario);

//switch-case
/*
domingo-0
lunes-1
martes-2
miercoles-3
jueves-4
viernes-5
sabado-6
*/
let dia= 6;
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;  
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;                 
    default:
        console.log("Eldia no existe");
        break;
}