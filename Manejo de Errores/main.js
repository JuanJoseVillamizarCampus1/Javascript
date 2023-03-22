try {
    error;
    123;
    console.log("En el Try se agrega el codigo a evaluar");
} catch (error) {
    console.log("Cath,captura cualquier errror en el try");
    console.log(error);
}finally{
    console.log("El finally se ejecuara siempre al final de un bloque Try-catch");
}

try{
    let numero ="t";
    if (isNaN(numero)) {
    throw new Error("El caracter ingresado no es un numero")
    }
}catch(error){
console.log(`Se produjo el siguiente ${error}`);
}