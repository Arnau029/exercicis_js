function validar(){
    let n = document.getElementById("nombre");
    let m = document.getElementById("mensaje");
    
    m.innerHTML = "<h3>Bienvenido " + n.value + "</h3>";
    document.getElementById("login").style="display:none"

    localStorage.setItem("nombre",n.value);

}

//comprueba so hay un valor en el localstorage
let user = localStorage.getItem("nombre");
if(user){
    let m = document.getElementById("mensaje");
    m.innerHTML = "<h3>Bienvenido " + user + "</h3>";
    document.getElementById("login").style="display:none;";
}

//eliminar variable lovalstorege
//localStorage.removeItem("nombre")