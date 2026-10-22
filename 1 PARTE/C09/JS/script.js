let selectorColor = document.getElementById("selectorColor");
let colorGuardado = localStorage.getItem("colorFondo");

if (colorGuardado) {
    document.body.style.backgroundColor = colorGuardado;
    selectorColor.value = colorGuardado;
}

function cambiarColor() {
    let color = selectorColor.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("colorFondo", color);
}

let sizeguardar = localStorage.getItem("sizeletra");

if (sizeguardar) {
    document.getElementById("tituloLetra").style.fontSize = sizeguardar + "px";
    document.getElementById("tituloFondo").style.fontSize = sizeguardar + "px";
}

function cambiarletra() {
    let letrasize = document.getElementById("sizeletra").value;
    document.getElementById("tituloLetra").style.fontSize = letrasize + "px";
    document.getElementById("tituloFondo").style.fontSize = letrasize + "px";

    localStorage.setItem("sizeletra", letrasize);
}

let fontguardar = localStorage.getItem("fontfa")

if(fontguardar){
    document.getElementById("tituloLetra").style.fontFamily = fuente;
    document.getElementById("tituloFondo").style.fontFamily = fuente;
}
function cambiarfuente(){
    let fuente = document.getElementById("fontf").value;
    document.getElementById("tituloLetra").style.fontFamily = fuente;
    document.getElementById("tituloFondo").style.fontFamily = fuente;

    localStorage.setItem("fontfa",fuente);
}

let fuentecolor = document.getElementById("colorletra");

function cambiarletracolor() {

    let colorh2 = fuentecolor.value;

    document.getElementById("tituloFondo").style.color = colorh2;
    document.getElementById("tituloLetra").style.color = colorh2;

    localStorage.setItem("leatracolor", colorh2);
}


// Recuperar el color guardado
let letracguardar = localStorage.getItem("leatracolor");

if (letracguardar) {

    document.getElementById("tituloFondo").style.color = letracguardar;
    document.getElementById("tituloLetra").style.color = letracguardar;

    fuentecolor.value = letracguardar;
}