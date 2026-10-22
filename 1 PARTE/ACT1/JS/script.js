let userp = "arnau";
let passp = "1234";

function login(){
    let password = document.getElementById("pass");
    let user = document.getElementById("usuario");
    if(user.value == userp && password.value == passp){
        console.log("correcto");
        document.getElementById("centrar").style="display: none";
        document.getElementById("rellenar").style="display: flex";

    }else{
        console.log("error");
    }
}
let contador2 = 0;
function estudios_guardar(){
    let curso = document.getElementById("cursosf").value;
    let centro = document.getElementById("centrof").value;

    if(curso == "" || centro == ""){
        alert("Ambos campos de estudios tienen que estar rellenados")
        console.log("No aumenta contador2:", contador2)
    }else{
        document.getElementById("mostrar").innerHTML += "<p>" + curso + " - " + centro + "</p>";
        contador2++;
        console.log("aumenta contador2:", contador2);
    }
}

let contador1 = 0;

function idiomas_guardar() {
    let idioma = document.getElementById("idomaf").value;
    let nivel = document.querySelector('input[name="nivel"]:checked');

    if (idioma === "" || !nivel) {
        alert("Rellena los campos");
        console.log("contador1:", contador1);
    } else {
        document.getElementById("mostrar1").innerHTML += "<p>" + idioma + " - " + nivel.value + "</p>";
        document.getElementById("idomaf").value = "";
        nivel.checked = false;
        contador1++;
        console.log("contador1:", contador1);
    }
}

function finalizarCV() {
    let nombre = document.getElementById("nombref").value;
    let apellidos = document.getElementById("apellidosf").value;
    let edad = document.getElementById("edadf").value;
    let telefono = document.getElementById("numerof").value;
    let pais = document.getElementById("paisf").value;

    if(contador1 == 0 || contador2 == 0 || nombre == "" || apellidos == "" || edad == "" || telefono == "" || pais == ""){
        alert("Faltan campos por rellenar");
    }else{
        document.getElementById("rellenar").style.display = "none";
        document.getElementById("crerf").style.display = "block";

        let foto = document.getElementById("fotof").value;
        if (foto !== "") {
            document.getElementById("fotoC").innerHTML = "<img src='" + foto + "'>";
        }

        document.getElementById("datosC").innerHTML =
            "<p><strong>Nombre: </strong> " + nombre + " " + apellidos + "</p>" +
            "<p><strong>Edad: </strong> " + edad + "</p>" +
            "<p><strong>Teléfono: </strong> " + telefono + "</p>" +
            "<p><strong>País: </strong> " + pais + "</p>";
        document.getElementById("estudiosC").innerHTML = document.getElementById("mostrar").innerHTML;
        document.getElementById("idiomasC").innerHTML = document.getElementById("mostrar1").innerHTML;
    }
}
