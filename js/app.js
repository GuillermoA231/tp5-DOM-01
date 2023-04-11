/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */
/*

    <main>
        <input type="number" id="inputUsuario">
      <button class="btn btn-outline-danger" id="empezarJuego">comenzar el juego</button>
        <h2 id ="resultado"></h2>
    </main>
     */
function randomNumber() {
  let random = Math.floor(Math.random() * 10) + 1;
  return random;
}

function resultadoJuego(inputUsuario) {
  numeroAleatorio = randomNumber();
  numeroAleatorio == inputUsuario
    ? "adivino el número magico!"
    : numeroAleatorio > input
    ? "El número magico es mayor"
    : numeroAleatorio < input
    ? "El número magico es menor"
    : "Ingrese un número valido";
}
document.querySelector("#inputUsuario").onclick();
