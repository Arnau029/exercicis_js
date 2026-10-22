//Estruras de control
// IF/ELSE

//     if(edad>=18){
//         console.log("Mayor de edad")
//     }else{
//         console.log("Menor de edad")
//     }

    //Switch
//     let dia = 2;

//     switch(dia){
//         case 1:
//             console.log("lunes");
//             break;
//         case 2:
//             console.log("martes");
//             break;
//         case 3:
//             console.log("miercoles");
//             break;
//         case 4:
//             console.log("jueves");
//             break;
//         case 5:
//             console.log("viernes");
//             break;
//         default:
//             console.log("Fin de semana");
//             break;
//     }

 //Bucles
 //FOR
//     for(let i=0;i<5;i++){
//         console.log("Vuelta"+ i);
//     }
 //while puede no ejecutarse

// let c = 0;

// while(c<5){
//     console.log("contador: " + c)
//     c++
// }
  //do while - minimo 1 vez
// let n = 1;

// do{
//     console.log("valor de n" + n);
//     n++;
// }while(n<3);

 //funciones

// function saludar(nom) {
//     console.log("Hola, " + nom);
    
// }

// saludar("Marcos");

// function sumar(a,b){
//     return a+b;
// }

// let total = sumar(2+3);
// console.log(total);

 //funciones anonimas

// const suma = function(a,b){
//     return a + b;
// }
// let resultat = suma(2,3);

    //funciones de flecha
// const resta = (a,b) => a - b;
// let ResultarResta = resta(3,2);

     //const saludo = (nom) => ("Hola, " + nom); 
// const sal = ()=>{console.log("Hola");};
// sal();

// pedir dos valores al usuario y realizar la suma
// de los numeros internos
// 5 i 9 --> 5+6+7+8+9=35

// let a = prompt("Introduce el primer valor inicial") * 1;

// let b = prompt("Introduce el segundo valor inicial") * 1;

// let total = 0;

// let mensaje = "";

// for (let i = a; i <= b; i++) {

//     total += i;

//     if (i != b) {
//         mensaje += i + " + ";
//     } else {
//         mensaje += i + " = ";
//     }

// }

//console.log(mensaje + total);

//pedir al programa nueros hasta que presione
//una letra
//mostrar cuantos pares i impares hay
//ejemplo:
//numers introducidos : 3 - 5 -6 -7 - 8
//2 pares 
//3 pares 

// let pares = 0;
// let impares = 0;
// let a = 0;
// let mensaje = "";
// do {
//     a = prompt("Introduce un número") * 1;
//     if (!isNaN(a)) {
//         mensaje+= a + " - ";
//         if (a % 2 == 0) {
//             pares++;
//         } else {
//             impares++;
//         }
//     }

// } while (!isNaN(a));
// console.log(mensaje+= a + " - ");
// console.log("Pares: " + pares);
// console.log("Impares: " + impares);
// let resultado = document.getElementById("resultado");
//resultado.textContent = "Hola";
// resultado.innerHTML = " hola, <strong> marcos </strong>";
// resultado.innerHTML += "<p>" + pares + " pares</p>";
// resultado.innerHTML += "<p>" + imp + " impares</p>";
// document.write("<h3>" + mensaje)
// document.write(pares)
// document.write(impares)

function suma(a,b){
    return a + b;
}
function calcular(){
    console.log("Funcionaaa");
    let a = document.getElementById("a");
    console.log(a.value);
    let b = document.getElementById("b");
    console.log(b.value);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = suma(a.value*1,b.value*1);
}