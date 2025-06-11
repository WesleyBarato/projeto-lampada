let lampada = document.getElementById("imagemLampada");
let button = document.getElementById("ligaDesliga");

let acender = false;

function ligarDesligar() {
  if (!acender) {
    lampada.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    button.textContent = "desligar";
    button.style.backgroundColor = "red";
    acender = true;
  } else {
    lampada.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    button.textContent = "Ligar";
    acender = false;
    button.style.backgroundColor = "#2e9008";
  }
}
