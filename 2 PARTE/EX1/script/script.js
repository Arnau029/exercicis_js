const usuaris = ["anna", "pol", "montserrat", "joan", "carlos"];

//alumnos de >5
let filtrados = usuaris.filter(function (nom) {
    // if(nom.length > 5){
    //     return nom;
    // }
    return nom.length > 5;
});
console.log(filtrados);

let majusculas = filtrados.map(function (nom) {
    return nom.toUpperCase();
});

console.log(majusculas);

//LO MISMO PERO DE MANERA MAS CORTA 
let finales = usuaris
.filter(nom=>nom.length > 5)
.map(nom=>nom.toUpperCase())
.sort();

console.log("RESUMIDO .....")
console.log(finales);
console.log("COMPLETADO")

//EX2 

class Vehicle{
    constructor(marca,any){
        this.marca = marca;
        this.any = any;
    }
    info(){
        let info = "Marca: " + this.marca + " Any " + this.any;
        return info;
    }

}
class Cotxe extends Vehicle{
    constructor(marca, any, portes){
        super(marca,any);
        this.portes = portes;
    }
    info(){
        let info = super.info() + " Portes: " + this.portes;
        return info;
    }
}

let c1 = new Cotxe("Seat", 2020, 5);
console.log(c1.info());