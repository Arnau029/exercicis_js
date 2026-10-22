let user = "admin";
let pass = 1234;
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function iniciar(){
    let usuario = document.getElementById("name").value;
    let contra = document.getElementById("pass").value;

    if(user == usuario && pass == contra){
        document.getElementById("container").style.display="none";
        document.getElementById("app").style.display="block";
        document.getElementById("tickets").style.display="block";
    }
    mostrarestudio(tareas);
    mostrartrabajo(tareas);
}

function guardar(){
    let tl = document.getElementById("titulo").value;
    let ct = document.getElementById("contexto").value;
    let cat = document.getElementById("categoria").value;
    let est = document.getElementById("estdao").value;
    let id = 1;

    if (tareas.length > 0) {
        id = tareas[tareas.length - 1].id + 1;
    }

    tareas.push({
        id: id,
        titulo: tl,
        descripcion: ct,
        categoria: cat,
        estado: est
    });
    
    localStorage.setItem("tareas",JSON.stringify(tareas));
    mostrarestudio(tareas);
    mostrartrabajo(tareas);
}

function mostrartrabajo(tareas){
    let tt = document.getElementById("trabajo");
    tt.innerHTML = "";

    tareas.forEach(function(tts){
        if(tts.categoria == "Trabajo"){
        tt.innerHTML += "<p>" + tts.id + "<br>" + tts.titulo + "<br>" +
        tts.descripcion + "<br>" + tts.categoria + "<br>" + tts.estado + "<br>" +
         "<button onclick='finalizar("+ tts.id +")'>" + "Cerrar" + "</button>" +"</p>";
        }
    });
}

function mostrarestudio(tareas){
    let ts = document.getElementById("estudios");
    ts.innerHTML = "";

    tareas.forEach(function(tts){
        if(tts.categoria == "Estudios"){
            ts.innerHTML += "<p>" + tts.id + "<br>" + tts.titulo + "<br>" +
        tts.descripcion + "<br>" + tts.categoria + "<br>" + tts.estado + 
        "<br>" + "<button onclick='finalizar("+ tts.id +")'>" + "Cerrar" + "</button>" + "</p>";
        }
    });
}

function finalizar(id){
    tareas.forEach(function(tts){
        if(tts.id = id){
            tts.estado = "cerrado";
        }
    })
    localStorage.setItem("tareas",JSON.stringify(tareas));
     mostrarestudio(tareas);
    mostrartrabajo(tareas);
}

function cerrar(){
    document.getElementById("app").style.display="none";
    document.getElementById("tickets").style.display="none";
    document.getElementById("container").style.display="block";

    tareas = [];
}
