let usuario = "admin";
let pass = 1234;
let form = JSON.parse(localStorage.getItem("form")) || [];

function login(){
    let user = document.getElementById("user").value;
    let contra = document.getElementById("pass").value;
    if(usuario == user && pass == contra){
        document.getElementById("form").style.display="block";
        document.getElementById("container").style.display="none";
        document.getElementById("tickets").style.display="block";

        mostrarhard(form);
        mostrarsoft(form);
    }
}

function guardar(){
    let tt = document.getElementById("titulo").value;
    let dc = document.getElementById("contexto").value;
    let ct = document.getElementById("categoria").value;
    let st = document.getElementById("estado").value;
    let id = 1;

    if(form.length > 0){
        id = form[form.length - 1].ID + 1;
    }

    form.push({
        ID:  id,
        Titulo: tt,
        Contexto: dc,
        Categoria: ct,
        Estado: st
    });
    localStorage.setItem("form",JSON.stringify(form));
    mostrarhard(form);
    mostrarsoft(form);
}

function mostrarhard(form){
    let ticket = document.getElementById("hardwar");
    ticket.innerHTML = "";
    form.forEach(function(forms){
        if(forms.Categoria == "Hardware"){
            forms.innerHTML += "<div id='cajas'>" + "<p>" + forms.ID + 
            "<br>" + forms.Titulo +"<br>" + 
            forms.Contexto + "<br>" +
            forms.Categoria + "<br>" +
            forms.Estado + "<br>" + 
            "</p>" + "<button onclick='finalizar("+ forms.ID+")'>" + "Finalizar" + "</button>" + "</div>";
        }
    });
}

function mostrarsoft(form){
    let ticket = document.getElementById("softwar");
    ticket.innerHTML = "";
    form.forEach(function(forms){
        if(forms.Categoria == "Software"){
            forms.innerHTML += "<div id='cajas'>" + "<p>" + forms.ID + 
            "<br>" + forms.Titulo +"<br>" + 
            forms.Contexto + "<br>" +
            forms.Categoria + "<br>" +
            forms.Estado + "<br>" + 
            "</p>" + "<button onclick='finalizar("+ forms.ID+")'>" + "Finalizar" + "</button>" + "</div>";
        }
    })
}


function finalizar(ID){
    form.forEach(function(forms){
        if(forms.ID == ID){
            forms.Estado = "Cerrado";
        }
    })
    localStorage.setItem("form",JSON.stringify(ticket));
    mostrarhard(ticket);
    mostrarsoft(ticket);
}
