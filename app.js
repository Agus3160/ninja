class Ninja{
    constructor(nombre, salud, velocidad=3, fuerza=3){
        this.name = nombre;
        this.health = salud;
        this.speed = velocidad;
        this.strength = fuerza;
    }

    sayName(){
        console.log(`Mi nombre es ${this.name}`);
    }

    showStats(){
        console.log(`Nombre: ${this.name}, Salud: ${this.health}, Velocidad: ${this.speed}, Fuerza: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(nombre, salud=200, velocidad=10, fuerza=10, sabiduria=10){
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Master Splinter");
sensei1.speakWisdom();
sensei1.showStats();
