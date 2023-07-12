// Clase abstracta Animal
class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    // Método abstracto que debe ser implementado por las clases hijas
    hablar(){
        throw new Error ('El método hablar debe ser implementado');
    }
}

// Clase perro que hereda de Animal - Primera clase hija
class Perro extends Animal {
    hablar(){
        return '¡Guau! ¡Guau!';
    }
}

// Segunda clase hija
class Gato extends Animal {
    hablar(){
        return '¡Miau! ¡Miau!';
    }
}

// Tercera clase hija
class Vaca extends Animal {
    hablar(){
        return '¡Muuuu!';
    }
}

// Crear una función que recibe un animal y muestra su nombre y su sonido:
function hacerSonidoAnimal(animal){
    const resultadoOutput = document.getElementById('resultado');
    resultadoOutput.textContent = `Nombre: ${animal.nombre} - Sonido: ${animal.hablar()}`;
}

// Crear instancias de las clases Perro, Gato, Vaca (nuestros objetos):
const perro = new Perro('Tobby');
const gato = new Gato('Lucas');
const vaca = new Vaca('Camila');
const perro2 = new Perro('Hércules');
