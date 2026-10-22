const { createElement } = require("react");

function guardarProducto(){
    let prod = document.getElementById("producto");
    let lista = document.getElementById("lista");
    lista.innerHTML+= "<li>" + prod.value + "</li>";

    let elemento = document.createElement("li");
    elemento.textContent = prod.value;
    elemento.classList.add("importante");
    lista.appendChild(elemento);
    
}