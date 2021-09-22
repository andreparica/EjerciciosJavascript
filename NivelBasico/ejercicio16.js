//DOM - Document  Object Model:
// Desde el JS puedo acceder al doc HTML. (DOM = Estructura del Doc. HTML)
// modificarla. El usuario modifica a su gusto en el HTML = Ejemplo RR.SS.
// JS, accede al DOM y a través de él, puede modificar la página, estilos CSS, eliminar o
//añadir elementos y atributos relacionados con la página.
//También reacciona a todos los eventos de la página.

//Este let está funcionando global = Se puede reemplazar
let datos = document.getElementById("datos");

//Función
const nombreUsuario = () => {
  let nombre = prompt("Ingresa tu nombre");
  alert("Tu nombre es" + nombre);
};

//Función vacía: Solo sirve para hacer este tipo de invocaciones
//Eventos (Onclick desde Javascript)
datos.onclick = function () {
  nombreUsuario();
};
