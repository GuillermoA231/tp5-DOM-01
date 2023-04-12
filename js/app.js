/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */
const form = document.querySelector("#form");
const numMagico = document.querySelector("#numeroMagico");
const btnMagico = document.querySelector("#btnMagico");

function random() {
  return parseInt(Math.floor(Math.random() * 10) + 1);
}

function resultadoJuego(input, numeroMagico) {
  console.log(input + " " + numeroMagico);
  let resultado =
    numeroMagico == input
      ? "adivino el número magico!"
      : numeroMagico > input
      ? "El número magico es mayor"
      : numeroMagico < input
      ? "El número magico es menor"
      : "Ingrese un número valido";
  return alert(resultado);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let numeroGenerado = random();
  let inputUsuario = document.querySelector("#inputUsuario");
  resultadoJuego(inputUsuario.value, numeroGenerado);
});