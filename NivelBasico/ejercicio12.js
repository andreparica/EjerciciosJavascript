/* Condicionales Swicht
Funcionan similar a las condicionales, solo se diferencia de la condicional normal IF ELSE
La condicional SWICTH solo se puede validar una sola condición entre varios cases y es utilizada 
cuando no necesitamos comparar, igualar o negar una condición y otra.
*/

let nombre = prompt ("Ingresa tu nombre");
let edad = prompt ("Ingresa tu edad")



switch (edad) {
    case "18":
        alert ("Tienes acceso al catálogo");
        break;

         case "25":
        alert ("Tienes acceso al catálogo");
        break;
    

         case "35":
        alert ("Tienes acceso al catálogo");
        break;


    default:
        alert ("Debes ser mayor a 18 años para acceder")
        break;
}