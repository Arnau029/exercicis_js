let userc = "hola";
let pass = "hola";
function login(){
    let user = document.getElementById("user");
    let Password = document.getElementById("Password");
    if(user.value == userc){
        document.getElementById("MailMensaje").innerHTML="";
    }else{
        document.getElementById("MailMensaje").innerHTML="Email Incorrecto";
    }
    if(Password.value == pass){
        document.getElementById("PaswordMensaje").innerHTML="";
    }else{
        document.getElementById("PaswordMensaje").innerHTML="Password Incorrecto";
    }
    if(user.value == userc && Password.value == pass){
        document.getElementById("correcto").innerHTML="Login Correcto";
        document.getElementById("resultado").style="display: block";
    }else{
        document.getElementById("correcto").innerHTML="Login Incorrecto";
        document.getElementById("resultado").style="display: none";
    }
    // if(user== userc && Password== pass){
    //      window.location.href = "pass.html";
    // }else{  
    //     document.write("ERROR - LOGIN INCORRECTO");
    //     console.log("password incorrecta o nombre incorrecto")
    // }
}