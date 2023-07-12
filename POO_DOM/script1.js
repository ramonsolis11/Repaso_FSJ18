//Clase base animal
class Animal{

    //Creo mi constructor y defino sus atributos
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
        this.color = this.color;
    }

    //Voy a crear mi primer metodo - para luego poder aplicar polimorfismo
    hablar(){
        throw new Error('El metodo hablar debe ser implementado');
    }
    saltar(){
        console.log("Estoy saltando amiguito!!!");
    }
}

//Empezare a aplicar Herencia - porque voy a crear clases hijas

//Primer clase Hija #1
class Perro extends Animal{

    hablar(){
        // Es aqui donde ya aplico mi primer polimorfismo
        return 'GUAU GUAU!';
    }
}

//Creare mi 2da clase hija #2
class Gato extends Animal{

    //Utilizo el metodo general hablar - pero aplico polimorfismo por segunda vez
    hablar(){
        return 'Miau Miau!';
    }
}

class Vaca extends Animal{

    //Utilizo el metodo general hablar - pero aplico polimorfismo por segunda vez
    hablar(){
        return 'Muuu Muuu!';
    }
}

// Crear instancias -- crear mis objetos
const perrito1 = new Perro("perro", "shih tzu", "cafe");
const perrito2 = new Perro("perro", "Pit-Bull", "cafe");
const perrito3 = new Perro("perro", "Pastor-Aleman", "cafe");

hablar().perrito1