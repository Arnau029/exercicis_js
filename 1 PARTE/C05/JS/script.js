function creartaula() {
    let fila = document.getElementById("fila").value;
    let columna = document.getElementById("columna").value;
    let resultado = document.getElementById("resultado");

    let table = "<table>";
    let contador = 1;

    for (let i = 0; i < fila; i++) {
        table += "<tr>";
        for (let j = 0; j < columna; j++) {
            table += "<td>" + contador + "</td>";
            contador++;
        }
        table += "</tr>";
    }
    table += "</table>";
    resultado.innerHTML = table;
}