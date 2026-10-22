let numerot = 1;

document.getElementById("ticket-num").textContent = "Tickets " + numerot;

function guardar() {
    let concepto = document.getElementById("Concepto").value;
    let precio = document.getElementById("precio").value;

    document.getElementById("Mostrador").innerHTML += "<p>" + numerot + " - " + concepto + " - " + precio + "€</p>";

    guardarlocal(concepto, precio, numerot);

    numerot++;
    
    document.getElementById("ticket-num").textContent = "Tickets " + numerot;
}

function guardarlocal(concepto, precio, numerot) {

    // localStorage.setItem("contador",numerot);
    // localStorage.setItem("concepto",concepto);
    // localStorage.setItem("precio",precio);
    // let ticket = numerot + " - " + concepto +  " - " + precio;
    // let ticketc = "ticket" + numerot;
    // localStorage.setItem(ticketc,ticket);
    let tickets = JSON.parse(localStorage.getItem("mistickets")) || [];

    let nTicket = {
        numero: numerot,
        texto: concepto,
        precio: precio
    };

    tickets.push(nTicket);

    localStorage.setItem("mistickets", JSON.stringify(tickets));

    console.log(tickets);
}

function mostrarTickets(){
    let tickets = JSON.parse(localStorage.getItem("mistickets")) || [];
    if(tickets.lenght == 0){
        console.log("no hay tickets");
    }else{
        for(let i=0;i<Mostrador.lenght;i++){
            // console.log(tickets[i].numero);
            // console.log(tickets[i].texto);
            // console.log(tickets[i].precio);
            let divtickets = document.getElementById("Mostrador");
            divtickets.innerHTML += "<p>" + tickets[i].numero + " - " + tickets[i].texto + " - "
            + tickets[i].precio + "$";
        }
    }
}
mostrarTickets();