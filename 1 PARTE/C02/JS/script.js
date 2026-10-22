//comentarios 

//alert("Hola desde dentro del script")

/*
    Tipos de datos
        NUMEROS: 3 3.5
        STRINGS: "Hola" , 'hola'
        Boleanos: TRUE AND FALSE
        OBJETOS: ESTRUCTURA DE DATOS
        ARRAYS: COLECIONES DE ELEMENTOS ORDENADOS

    DECLARACION DE VARIABLES:
        var (global)
        VAR NOMBRE = "MARCOS";
        NOMBRE = "joan"
        var Nombre ="Pep"

        -let (de bloc)
        let edad = 15;
        
        -const (constante)
        cont nombre = "pep";

    Operadores:
        Arigmeticos
        +
        -
        %
        /
        ++
        --

    Assignacion:
        =
        +=
        -=
        *=
        /=
        %=
    
    Comparacion
        ==
        ===
        
        >=
        <=

    Logicos 
        && and
        || or
    

    Cocatenar
        +

    Ternaris
        ?

*/

var nom= "Joan";
if(true){
    var nom ="Maria"

}
//alert(nom); //Muestra maria
console.log(nom)

//Ejemplo de let
let edad = 30;
let mensaje;
if(edad >= 18){
    let mensaje = "Eres mayor de edad";

}
//alert(mensaje) //ERROR

// Ejemplo de const

const PI = 3.1416;
//alert(PI);
//PI = 3.14; //Error

//Operdador aritmetico
let a = 2;
let b = 3;
let total = a + b;
//console.log(total);
//console.log("La suma total de " + a + " y " + b + " Es de " + total);


//operdadores asignacion

let c = 3;
c+=2;
console.log(c);

3=="3"; //true
3=== "3"; // false
3!="3"; //false
3!=="3" //true

let n = "Marcos";
console.log("Bienvenido" + n);

//ternari
let edads = 20;

const majorEdad = edad>=18 ? "Si":"No";

console.log("Es mayor de edad? " + majorEdad);

//interactivo
//let n2 = prompt("Introduce un valor");
//console.log("Valor introducido " + n2);


/*Pedir dos numeros al usuario y una operacion y dar el total
    5 
    2
    +
    total 7
    La 5 + 2 es 7
*/
// let n1 = prompt("Introduce el primer valor")*1;
// let n2 = prompt("Introduce el segundo valor")*1;
// let ope = prompt("Introduce el valor de operacion");
// let totals = "Error";

// if( ope=="+"){totals = n1 + n2;}
// if( ope=="-"){totals = n1 - n2;}
// if( ope=="*"){totals = n1 * n2;}
// if( ope=="/"){totals = n1 / n2;}

// console.log(n1 + " " + ope + " " + n2 + " = " + totals);


/**
 Pedir tres numeros al usuario mas grande y mas pequeno 

    Ejemplo :
    8  3  6
    El mas grande es : 8
    El mas peque es : 3
 */

// let n1 = prompt("Primer Numero")*1;
// let n2 = prompt("Segundo Numero")*1;
// let n3 = prompt("Tercer Numero")*1;

// let max = n1;
// let min = n1;

// if(n2 > max){max = n2};
// if(n3 > max){max = n3};
// if(n2 < min){min = n2};
// if(n3 < min){min = n3}; 
// console.log(n1 + n2 + n3);
// console.log("El mas grande es " + max + " y el mas peque es " + min);


// un valor de 0 a 10 
// introduce una nota : 4
//Nota INS(4)
let k = prompt("Dame tu nota y te digo que mal te va en la vida")*1;
let fnota;
switch (k){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        fnota = "INS";
        break;
    case 5:
    case 6:
    case 7:
        fnota = "Bien";
        break;
    case 8:
    case 9:
        fnota = "casi perf";
        break;
    case 10:
        fnota = "perf";
    default:
        break;    
}
console.log("La nota es " + k + " osea que tu calificacion es " + fnota);