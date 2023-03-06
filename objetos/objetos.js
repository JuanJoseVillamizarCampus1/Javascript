const juan={
    nombre:"Juan",
    edad :23,
    soltero:true,
    contacto :{
        phoneNumber:310293899,
        email:"juanjvs345@gmail.com",
        direccion:"Enrrique Segoviano"
    },
    comidaFAvorita:["hamburguesa","lagsaña","empanadas"],
    saludar:function(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años `);
    }
    
};
console.log(juan);
console.log(juan["nombre"]);
console.log(juan["comidaFAvorita"][1]);
console.log(juan["contacto"]["email"]);
console.log(juan.edad);
console.log(juan.soltero);
console.log(juan.contacto.phoneNumber);
juan.saludar();

console.log(Object.keys(juan));
console.log(Object.values(juan));
console.log(juan.hasOwnProperty("nombre"))