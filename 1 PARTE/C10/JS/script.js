let user = "admin"
let pass = 1234;

let ticket = JSON.parse(localStorage.getItem("ticket")) || [];

function login(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if(user == name && pass == password){
        document.getElementById("contain").style.display="none";
        document.getElementById("contain2").style.display="block";
        console.log("pass");
        mostrarhardwer(ticket);
        mostrarsoftware(ticket);
    }else{
        alert("Error");
    }
}

function guardar(){
    let pr = document.getElementById("pr").value;
    let ct = document.getElementById("ct").value;
    let estad = document.getElementById("selecionar").value;
    let tipo = document.getElementById("tipos").value;
    let id = 1;

    if(ticket.length > 0){
        id = ticket[ticket.length - 1].id + 1;
    }

    ticket.push({
        id: id,
        titulo: pr,
        cotexto: ct,
        tipo: tipo,
        estado: estad
    });

    localStorage.setItem("ticket",JSON.stringify(ticket));
    mostrarhardwer(ticket);
    mostrarsoftware(ticket);
}

function mostrarhardwer(ticket){
    let hard = document.getElementById("hardware");
    hard.innerHTML = "";

    ticket.forEach(function(ware){
        if(ware.tipo == "hardware"){
        hard.innerHTML += "<div id='cajas'>" + "<p>" + ware.id + 
            "<br>" + ware.titulo +"<br>" + 
            ware.cotexto + "<br>" +
            ware.tipo + "<br>" +
            ware.estado + "<br>" + 
            "</p>" + "<button onclick='finalizar("+ ware.id+")'>" + "Finalizar" + "</button>" + "</div>";
        }
    });
}

function mostrarsoftware(ticket){
    let soft = document.getElementById("software");
    soft.innerHTML = "";

    ticket.forEach(function(ware){
       if(ware.tipo == "software"){
            soft.innerHTML += "<div id='cajas'>" + "<p>" + ware.id + 
            "<br>" + ware.titulo +"<br>" + 
            ware.cotexto + "<br>" +
            ware.tipo + "<br>" +
            ware.estado + "</br>" + 
            "</p>" + "<button onclick='finalizar("+ ware.id+")'>" + "Finalizar" + "</button>" + "</div>";
        }
    });
}

function finalizar(id) {
    ticket.forEach(function(ware) {
        if (ware.id == id) {
            ware.estado = "cerrado";
        }
    });

    localStorage.setItem("ticket", JSON.stringify(ticket));

    mostrarhardwer(ticket);
    mostrarsoftware(ticket);
}

