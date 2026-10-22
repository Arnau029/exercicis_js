//credenciales
let user = "admin";
let password = 1234;
//crear la array con json para que parse el texto y si no hay nada vacio
let cesta = JSON.parse(localStorage.getItem("cesta")) || [];
let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

//login 
function login(){
    let usuario = document.getElementById("contra");
    let pass = document.getElementById("pass");
    //check de los valores de usuario y pass
    if(usuario.value == user && pass.value == password){
        //ocultamos el login
        document.getElementById("container").style.display = "none";
        //mostramos la tienda
        document.getElementById("tiendas").style.display = "block";
        //cargamos la cesta y pedidos
        mostrarCesta();
        mostrarPedidos();
        console.log("Pass");
    }else{
        console.log("fail");
    }
}
//agregar los productos
function anadirCesta() {
    //se recorren los 3 tipos de regalices por eso 3
    for (let i = 1; i <= 3; i++) {
        let cantidad = Number(document.getElementById("regaliz" + i).value);
        let nombre = document.getElementById("r" + i).textContent;
        //agregamos el contenido si es mayor a 0 
        if (cantidad > 0) {
            cesta.push({
                nombre: nombre,
                cantidad: cantidad
            });
        }
    }
    //lo mismo de arriba pero con caramelos
    for (let i = 1; i <= 4; i++) {
        let cantidad = Number(document.getElementById("caramelo" + i).value);
        let nombre = document.getElementById("c" + i).textContent;
        if (cantidad > 0) {
            cesta.push({
                nombre: nombre,
                cantidad: cantidad
            });
        }
    }
    //la array cesta la pasamos a texto json y la gurdamos local
    localStorage.setItem("cesta", JSON.stringify(cesta));
    //actualizamos
    mostrarCesta();
}

function mostrarCesta() {
    //variable para localizar la parte de la cesta
    let lista = document.getElementById("listaCesta");
    //limpiamos la cesta porque si no se queda todo cuando le das al boton
    lista.innerHTML = "";
    //cesta vacia
    if (cesta.length == 0) {
        lista.textContent = "Esta vacia tu cesta";
    }
    //recorremos los productos de la cesta y los agregamos con un inner 
    cesta.forEach(function(producto) {
        lista.innerHTML += "<p>" + producto.nombre + " | Cantidad: " + producto.cantidad + "</p>";
    });
}

function comprar() {
    // let regaliz = Number(document.getElementById("regaliz" + i).value);
    // let caramel = Number(document.getElementById("caramelo" + i).value)
    // let rn = document.getElementById("r" + i).textContent;
    // let cn = document.getElementById("c" + i).textContent;
    
    //check de la si hay algo si no no hace nada la funcion
    if (cesta.length == 0) {
        console.log("Esta vacio no se agrega nada");
        return;
    }

    //TENER EN CUENTA SE VE QUE SI PONES SOLO CESTA CREA COMO OTRO ARRAY DESPUES TE DARA ERROR PONER ...
    //PARA METER EN EL MISMO
    pedidos.push({
        productos: [...cesta]
    });

    //guardamos la lista en texto json y local
    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    //vaciamos la cesta para limpiarlo
    cesta = [];

    localStorage.setItem("cesta", JSON.stringify(cesta));

    //para actualizar cesta y pedidos
    mostrarCesta();
    mostrarPedidos();
}

function mostrarPedidos() {
    //variable para saber el id de la parte de historial
    let historial = document.getElementById("historial");
    //vaciamos todo lo anterior 
    historial.innerHTML = "";

    //check para que no este vacio
    if (pedidos.length == 0) {
        return;
    }

    //for each para los pedidos con variable i para el numero del pedido
    pedidos.forEach(function(pedido, i) {
        //abrimos el div para box del pedido
        let contenido = "<div class='pedido'>";
        //titulo pedido con variable i para el numero
        contenido += "<h3>Pedido " + (i + 1) + "</h3>";
        //agregamos el contenido reccoriendo productos
        pedido.productos.forEach(function(producto) {
            contenido += "<p>" + producto.nombre + " | Cantidad: " + producto.cantidad + "</p>";
        });
        //cerramos el div
        contenido += "</div>";
        //agregamos al historial el pedido
        historial.innerHTML += contenido;
    });
}

function cerrar_sesion() {
    //borramos el localstorage
    localStorage.removeItem("cesta");
    localStorage.removeItem("pedidos");
    //vaciamos arrays
    cesta = [];
    pedidos = [];
    //ocultamos la tienda
    document.getElementById("tiendas").style.display = "none";
    //mostramos el login
    document.getElementById("container").style.display = "block";
    //reseteamos la pass y el user
    document.getElementById("contra").value = "";
    document.getElementById("pass").value = "";
}