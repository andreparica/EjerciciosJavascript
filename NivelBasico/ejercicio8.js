//Tipos de Datos
// Variables primitivas - Básicas

let nombre = "Pepa"; //String: con comillas.
let edad = 25; //Entero-Int
let sueldo = 25.5; //Float - decimal
let hijos = false; //Boolean
let cedula = "12345678"; //String, porque no se hacen operaciones matemáticas. String pesan menos que los ENTEROS.
let celular = "12345679";
//camelCase
let fechaRegistro = new Date(); //Saca la fecha completa d/m/a - hora.
//new saca la fecha de manera real, en el momento.

//El + más permite concatenar = Unir

console.log(
  " Hola " + 
    nombre + 
     " tu edad es: " +
    edad +
     " tu sueldo es: " +
    sueldo +
     " tienes hijos " +
    hijos , fechaRegistro
);


