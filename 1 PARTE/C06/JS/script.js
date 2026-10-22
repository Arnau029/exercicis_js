var c = 30;
var numeroRandom;
var minInterval;
function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bstart() {
    document.getElementById("bstart").style.display = "none";
    document.getElementById("juego").style.display = "block";
    numeroRandom = numerorandom(1, 10);
    console.log("Número del 1 al 10:", numeroRandom);
    minInterval = setInterval(contador, 1000);
}

function contador() {

    if (c > 0) {
        c--;
        document.getElementById("contador").innerHTML ="Faltan " + c + " segundos!";
    } else {
        document.getElementById("juego").innerHTML ="<h3>Has perdido!</h3>";
        clearInterval(minInterval)
    }
}

function rannumero() {
    console.log("Comprobando....");
    let intento = document.getElementById("ranumero").value;
    if (numeroRandom == intento) {
        console.log("Correcto");
        clearInterval(minInterval)
        document.getElementById("juego").innerHTML="<h3>Winner</h3>";
    } else {
        console.log("Incorrecto");
    }
}