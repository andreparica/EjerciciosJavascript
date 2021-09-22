/*LET se usa para que funcione solo en un bloque de código y que en caso de que se
pueda reemplazar, sea dentro del mismo. Es más usado y recomendado porque es seguro a la 
hora de que mis datos no puedan ser reemplazadaos libremente en todo el código.
Esto es algo que VAR podría reemplazar en cualquier parte de mi código.
/*LET no deja declarar 2 veces o más
- Como desarrolladores, controlamos donde se puede cambiar y donde no, a través de funciones.
*/

let nombre = "Pepa";
nombre = "Pepita";

console.log (nombre)